import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion, AnimatePresence } from 'framer-motion'
import { productOptions } from '../data/products'
import { CONSULTANT } from '../data/site'
import { Close, Check, WhatsApp } from './icons'

const contactMethods = ['WhatsApp', 'Phone Call', 'Email']

export default function LeadFormModal({ isOpen, onClose, defaultProduct }) {
  const [submitted, setSubmitted] = useState(false)
  const firstFieldRef = useRef(null)
  const dialogRef = useRef(null)

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      location: '',
      product: 'Not sure yet',
      message: '',
      contactMethod: 'WhatsApp',
    },
  })

  // Pre-select product when opened from a specific product card
  useEffect(() => {
    if (isOpen && defaultProduct) {
      const match = productOptions.includes(defaultProduct) ? defaultProduct : 'Not sure yet'
      setValue('product', match)
    }
  }, [isOpen, defaultProduct, setValue])

  // Close on ESC + lock body scroll while open
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => e.key === 'Escape' && handleClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    // Focus first field for keyboard/screen-reader users
    const t = setTimeout(() => firstFieldRef.current?.focus(), 120)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      clearTimeout(t)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  const handleClose = () => {
    onClose()
    // Reset after the close animation completes
    setTimeout(() => {
      setSubmitted(false)
      reset()
    }, 300)
  }

  const onSubmit = async (data) => {
    const payload = { ...data, consultant: CONSULTANT.name, submittedAt: new Date().toISOString() }

    // ===================================================================
    // FRONT-END SUBMISSION FLOW
    // Replace the simulated delay below with a real integration, e.g.:
    //
    //   // Formspree:
    //   await fetch('https://formspree.io/f/XXXXXXX', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    //     body: JSON.stringify(payload),
    //   })
    //
    //   // Supabase:
    //   await supabase.from('leads').insert(payload)
    //
    //   // Firebase:
    //   await addDoc(collection(db, 'leads'), payload)
    //
    //   // Custom API:
    //   await fetch('/api/leads', { method: 'POST', body: JSON.stringify(payload) })
    // ===================================================================
    console.log('📩 New lead for Glen Apostol:', payload)
    await new Promise((r) => setTimeout(r, 1100)) // simulated network call

    setSubmitted(true)
  }

  // Basic focus trap: keep Tab within the dialog
  const onKeyDownTrap = (e) => {
    if (e.key !== 'Tab') return
    const focusable = dialogRef.current?.querySelectorAll(
      'button, input, select, textarea, a[href]',
    )
    if (!focusable?.length) return
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault()
      last.focus()
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault()
      first.focus()
    }
  }

  const fieldClass = (hasError) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-600/30 ${
      hasError ? 'border-red-400' : 'border-slate-200 focus:border-brand-500'
    }`

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-end justify-center p-0 sm:items-center sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-brand-900/60 backdrop-blur-sm"
            onClick={handleClose}
            aria-hidden
          />

          {/* Dialog */}
          <motion.div
            ref={dialogRef}
            onKeyDown={onKeyDownTrap}
            role="dialog"
            aria-modal="true"
            aria-labelledby="lead-modal-title"
            initial={{ y: 60, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 280, damping: 28 }}
            className="relative z-10 max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-t-3xl border-2 border-gold/30 bg-white shadow-[0_30px_80px_-20px_rgba(2,79,158,0.5)] sm:rounded-3xl"
          >
            {/* Close */}
            <button
              onClick={handleClose}
              className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-colors hover:bg-slate-200 hover:text-slate-700"
              aria-label="Close form"
            >
              <Close className="h-5 w-5" />
            </button>

            {submitted ? (
              /* ---------- Success state ---------- */
              <div className="px-7 py-14 text-center sm:px-10">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.1 }}
                  className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-wellness/15 text-wellness"
                >
                  <Check className="h-10 w-10" />
                </motion.div>
                <h3 id="lead-modal-title" className="mt-6 text-2xl font-bold text-brand-700">
                  Thank you.
                </h3>
                <p className="mt-2 text-base text-slate-600">
                  {CONSULTANT.name} will contact you shortly.
                </p>
                <button onClick={handleClose} className="btn-primary mt-8">
                  Done
                </button>
              </div>
            ) : (
              /* ---------- Form state ---------- */
              <div className="px-6 py-8 sm:px-9">
                <div className="pr-8">
                  <span className="eyebrow">★ Free Consultation</span>
                  <h3 id="lead-modal-title" className="mt-4 text-2xl font-bold text-brand-700">
                    Book Your Free Water Consultation
                  </h3>
                  <p className="mt-2 text-sm text-slate-500">
                    Share a few details and {CONSULTANT.name} will get back to you with personal
                    guidance.
                  </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4" noValidate>
                  {/* Full name */}
                  <div>
                    <label htmlFor="fullName" className="mb-1.5 block text-sm font-semibold text-slate-700">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    {(() => {
                      // Merge RHF's ref with our own ref so we can autofocus the first field
                      const { ref: rhfRef, ...rest } = register('fullName', {
                        required: 'Please enter your name',
                      })
                      return (
                        <input
                          id="fullName"
                          type="text"
                          placeholder="Your full name"
                          className={fieldClass(errors.fullName)}
                          aria-invalid={!!errors.fullName}
                          {...rest}
                          ref={(e) => {
                            rhfRef(e)
                            firstFieldRef.current = e
                          }}
                        />
                      )
                    })()}
                    {errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName.message}</p>}
                  </div>

                  {/* Phone + Email */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-slate-700">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="+971 ..."
                        className={fieldClass(errors.phone)}
                        aria-invalid={!!errors.phone}
                        {...register('phone', {
                          required: 'Please enter your phone number',
                          minLength: { value: 7, message: 'Enter a valid phone number' },
                        })}
                      />
                      {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-slate-700">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="you@email.com"
                        className={fieldClass(errors.email)}
                        aria-invalid={!!errors.email}
                        {...register('email', {
                          required: 'Please enter your email',
                          pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email' },
                        })}
                      />
                      {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
                    </div>
                  </div>

                  {/* Location + Product */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="location" className="mb-1.5 block text-sm font-semibold text-slate-700">
                        Location / City <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="location"
                        type="text"
                        placeholder="e.g. Dubai"
                        className={fieldClass(errors.location)}
                        aria-invalid={!!errors.location}
                        {...register('location', { required: 'Please enter your city' })}
                      />
                      {errors.location && <p className="mt-1 text-xs text-red-500">{errors.location.message}</p>}
                    </div>
                    <div>
                      <label htmlFor="product" className="mb-1.5 block text-sm font-semibold text-slate-700">
                        Interested Product
                      </label>
                      <select id="product" className={fieldClass(false)} {...register('product')}>
                        {productOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-slate-700">
                      Message / Inquiry
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      placeholder="Tell Glen a little about what you’re looking for…"
                      className={fieldClass(false)}
                      {...register('message')}
                    />
                  </div>

                  {/* Preferred contact method */}
                  <div>
                    <span className="mb-2 block text-sm font-semibold text-slate-700">
                      Preferred Contact Method
                    </span>
                    <div className="grid grid-cols-3 gap-2">
                      {contactMethods.map((method) => (
                        <label
                          key={method}
                          className="flex cursor-pointer items-center justify-center rounded-xl border border-slate-200 px-2 py-2.5 text-xs font-semibold text-slate-600 transition-colors has-[:checked]:border-brand-500 has-[:checked]:bg-brand-50 has-[:checked]:text-brand-700"
                        >
                          <input type="radio" value={method} className="sr-only" {...register('contactMethod')} />
                          {method}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary mt-2 w-full text-base disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <WhatsApp className="h-5 w-5" />
                        Send My Inquiry to Glen
                      </>
                    )}
                  </button>

                  {/* Privacy note */}
                  <p className="text-center text-xs leading-relaxed text-slate-400">
                    Your information will only be used by {CONSULTANT.name} to respond to your
                    inquiry.
                  </p>
                </form>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
