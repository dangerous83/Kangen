import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { WHATSAPP_LINK, CONSULTANT } from '../data/site'
import { getAnswer, SUGGESTIONS, WHATSAPP_DISPLAY } from '../data/knowledge'
import { WhatsApp, Chat, Close, ArrowRight } from './icons'

// ============================================================
// Floating bottom-right widget: a WhatsApp quick-contact button
// plus an AI assistant that analyses visitor questions using the
// full-site knowledge base (see src/data/knowledge.js) and always
// routes people to Glen on WhatsApp.
// ============================================================

const GREETING = {
  role: 'bot',
  text:
    `Hi! 👋 I'm ${CONSULTANT.name}'s virtual assistant. Ask me anything about Kangen Water, the Enagic machines, ` +
    'the 5 water types, pricing, or booking a free consultation.',
  showWhatsApp: false,
}

// A small WhatsApp call-to-action rendered under assistant answers.
function WhatsAppCta({ compact }) {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-2 inline-flex items-center gap-2 rounded-full bg-wellness px-4 py-2 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-wellness-dark"
    >
      <WhatsApp className="h-4 w-4" />
      {compact ? 'Chat with Glen' : `Chat with Glen · ${WHATSAPP_DISPLAY}`}
    </a>
  )
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([GREETING])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const scrollRef = useRef(null)
  const inputRef = useRef(null)

  // Keep the conversation scrolled to the latest message.
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, typing, open])

  // Focus the input whenever the panel opens.
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 250)
  }, [open])

  const send = (raw) => {
    const text = (raw ?? input).trim()
    if (!text || typing) return

    setMessages((m) => [...m, { role: 'user', text }])
    setInput('')
    setTyping(true)

    // Small delay so it reads like a real assistant "thinking".
    const answer = getAnswer(text)
    window.setTimeout(() => {
      setMessages((m) => [
        ...m,
        { role: 'bot', text: answer.text, showWhatsApp: answer.showWhatsApp },
      ])
      setTyping(false)
    }, 500)
  }

  const onKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send()
    }
  }

  const onlyGreeting = messages.length === 1

  return (
    // Sits above the mobile sticky CTA bar (bottom-24) and in the
    // corner on desktop (lg:bottom-6).
    <div className="fixed bottom-24 right-4 z-50 flex flex-col items-end gap-3 sm:right-6 lg:bottom-6">
      {/* -------------------- Chat panel -------------------- */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            className="flex h-[70vh] max-h-[560px] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_24px_60px_-15px_rgba(2,79,158,0.4)]"
            role="dialog"
            aria-label="Chat with Glen's assistant"
          >
            {/* Header */}
            <div className="flex items-center gap-3 bg-brand-600 px-4 py-3.5 text-white">
              <span className="relative flex h-10 w-10 flex-none items-center justify-center rounded-full bg-white/15">
                <Chat className="h-5 w-5" />
                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-brand-600 bg-wellness-light" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-bold leading-tight">Glen's Assistant</p>
                <p className="truncate text-[11px] text-brand-100">Typically replies instantly</p>
              </div>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-wellness text-white transition-colors hover:bg-wellness-dark"
                aria-label="Message Glen on WhatsApp"
                title="Message Glen on WhatsApp"
              >
                <WhatsApp className="h-5 w-5" />
              </a>
              <button
                onClick={() => setOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full text-white/90 transition-colors hover:bg-white/15"
                aria-label="Close chat"
              >
                <Close className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-slate-50/70 px-4 py-4">
              {messages.map((m, i) => (
                <div key={i} className={m.role === 'user' ? 'flex justify-end' : 'flex justify-start'}>
                  <div className={m.role === 'user' ? 'max-w-[85%]' : 'max-w-[90%]'}>
                    <div
                      className={
                        m.role === 'user'
                          ? 'rounded-2xl rounded-br-md bg-brand-600 px-3.5 py-2.5 text-sm text-white shadow-sm'
                          : 'whitespace-pre-line rounded-2xl rounded-bl-md border border-slate-100 bg-white px-3.5 py-2.5 text-sm leading-relaxed text-slate-700 shadow-sm'
                      }
                    >
                      {m.text}
                    </div>
                    {m.role === 'bot' && m.showWhatsApp && <WhatsAppCta />}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {typing && (
                <div className="flex justify-start">
                  <div className="flex gap-1 rounded-2xl rounded-bl-md border border-slate-100 bg-white px-4 py-3 shadow-sm">
                    {[0, 1, 2].map((d) => (
                      <motion.span
                        key={d}
                        className="h-1.5 w-1.5 rounded-full bg-brand-300"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1, repeat: Infinity, delay: d * 0.2 }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Suggested questions (only before the first user message) */}
              {onlyGreeting && !typing && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => send(s)}
                      className="rounded-full border border-brand-200 bg-white px-3 py-1.5 text-left text-xs font-medium text-brand-700 transition-colors hover:border-brand-400 hover:bg-brand-50"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input */}
            <div className="border-t border-slate-100 bg-white p-3">
              <div className="flex items-end gap-2">
                <textarea
                  ref={inputRef}
                  rows={1}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={onKeyDown}
                  placeholder="Ask about machines, water types, pricing…"
                  className="max-h-24 flex-1 resize-none rounded-2xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-700 outline-none transition-colors placeholder:text-slate-400 focus:border-brand-400 focus:bg-white"
                />
                <button
                  onClick={() => send()}
                  disabled={!input.trim() || typing}
                  className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-brand-600 text-white transition-all hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-40"
                  aria-label="Send message"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
              <p className="mt-2 text-center text-[10px] text-slate-400">
                Automated assistant · For personal advice, message Glen on WhatsApp
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* -------------------- Floating buttons -------------------- */}
      {/* WhatsApp quick-contact (hidden while the chat panel is open to reduce clutter) */}
      <AnimatePresence>
        {!open && (
          <motion.a
            key="wa-fab"
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-wellness text-white shadow-[0_10px_30px_-6px_rgba(103,182,34,0.7)] transition-transform hover:scale-105"
            aria-label={`Message Glen on WhatsApp at ${WHATSAPP_DISPLAY}`}
            title="Message Glen on WhatsApp"
          >
            <WhatsApp className="h-7 w-7" />
          </motion.a>
        )}
      </AnimatePresence>

      {/* AI assistant launcher / close toggle */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 text-white shadow-[0_10px_30px_-6px_rgba(2,79,158,0.7)] transition-transform hover:scale-105"
        aria-label={open ? 'Close chat assistant' : 'Open chat assistant'}
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <Close className="h-7 w-7" />
            </motion.span>
          ) : (
            <motion.span key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <Chat className="h-7 w-7" />
            </motion.span>
          )}
        </AnimatePresence>
        {/* Attention pulse when closed */}
        {!open && (
          <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
            <span className="relative inline-flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[9px] font-bold text-white">
              AI
            </span>
          </span>
        )}
      </button>
    </div>
  )
}
