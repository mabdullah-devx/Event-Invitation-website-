'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { EVENT_DATE } from '@/lib/utils'

function pad(n: number) {
  return String(n).padStart(2, '0')
}

function getTimeLeft() {
  const now = Date.now()
  const diff = Math.max(0, Math.floor((EVENT_DATE.getTime() - now) / 1000))
  const days = Math.floor(diff / 86400)
  const hours = Math.floor((diff % 86400) / 3600)
  const minutes = Math.floor((diff % 3600) / 60)
  const seconds = diff % 60
  return { days, hours, minutes, seconds }
}

function CountdownUnit({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      {/* Glass digit box */}
      <div
        className="relative group"
        style={{
          width: 'clamp(70px, 18vw, 110px)',
          height: 'clamp(80px, 20vw, 120px)',
        }}
      >
        {/* Glow */}
        <div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"
          style={{ background: 'rgba(212,175,55,0.25)' }}
        />

        {/* Card */}
        <div
          className="w-full h-full flex items-center justify-center rounded-xl relative overflow-hidden"
          style={{
            background: 'linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(212,175,55,0.2)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)',
          }}
        >
          {/* Top reflection */}
          <div
            className="absolute top-0 left-0 right-0 h-1/3 rounded-t-xl pointer-events-none"
            style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, transparent 100%)' }}
          />

          {/* Number */}
          <AnimatePresence mode="popLayout">
            <motion.span
              key={value}
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="font-playfair text-4xl md:text-5xl font-bold text-gold-gradient select-none"
              style={{ lineHeight: 1 }}
            >
              {value}
            </motion.span>
          </AnimatePresence>

          {/* Center divider line */}
          <div
            className="absolute inset-x-0 top-1/2 h-px pointer-events-none opacity-20"
            style={{ background: 'rgba(212,175,55,0.5)' }}
          />
        </div>
      </div>

      {/* Label */}
      <span className="font-poppins text-[10px] tracking-[0.35em] uppercase text-warm-beige/50">
        {label}
      </span>
    </div>
  )
}

export default function CountdownSection() {
  const [time, setTime] = useState(getTimeLeft())
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const id = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  const isOver = mounted && EVENT_DATE.getTime() <= Date.now()

  return (
    <section
      id="countdown"
      className="section-padding relative overflow-hidden"
      style={{ background: '#0B0B0B' }}
    >
      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: '60vw',
          height: '60vw',
          background: 'radial-gradient(ellipse at center, rgba(212,175,55,0.06) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="ornament mb-6">Counting Down</div>
          <h2 className="font-playfair text-4xl md:text-5xl text-cream-white mb-4">
            The Moment Approaches
          </h2>
          <p className="font-cormorant text-xl text-warm-beige/70 italic">
            18 July 2026 · 7:00 PM · Qasr Al Hamra Restaurant
          </p>
        </motion.div>

        {/* Countdown display */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {isOver ? (
            <div className="font-playfair text-3xl text-gold text-center py-8">
              The celebration has begun! 🎉
            </div>
          ) : (
            <div className="flex items-start justify-center gap-4 md:gap-8 flex-wrap">
              <CountdownUnit value={mounted ? pad(time.days) : '--'} label="Days" />

              {/* Separator */}
              <div className="flex flex-col items-center justify-center pt-4 gap-4">
                <span className="text-gold text-2xl font-playfair opacity-60">:</span>
              </div>

              <CountdownUnit value={mounted ? pad(time.hours) : '--'} label="Hours" />

              <div className="flex flex-col items-center justify-center pt-4">
                <span className="text-gold text-2xl font-playfair opacity-60">:</span>
              </div>

              <CountdownUnit value={mounted ? pad(time.minutes) : '--'} label="Minutes" />

              <div className="flex flex-col items-center justify-center pt-4">
                <span className="text-gold text-2xl font-playfair opacity-60">:</span>
              </div>

              <CountdownUnit value={mounted ? pad(time.seconds) : '--'} label="Seconds" />
            </div>
          )}
        </motion.div>

        {/* Decorative dots */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 flex items-center justify-center gap-3"
        >
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="rounded-full"
              style={{
                width: i === 2 ? 6 : 4,
                height: i === 2 ? 6 : 4,
                background: '#D4AF37',
                opacity: i === 2 ? 0.8 : 0.3,
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
