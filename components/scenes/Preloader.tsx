'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface PreloaderProps {
  onComplete: () => void
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const duration = 1800 // total preloader time in ms
    const start = Date.now()

    const tick = () => {
      const elapsed = Date.now() - start
      const pct = Math.min(100, (elapsed / duration) * 100)
      setProgress(pct)
      if (pct < 100) {
        requestAnimationFrame(tick)
      }
    }
    requestAnimationFrame(tick)

    const timer = setTimeout(onComplete, duration)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center"
      style={{ background: '#0B0B0B' }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      {/* Subtle static glow, no animation loop needed */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 500,
          height: 500,
          background: 'radial-gradient(ellipse at center, rgba(212,175,55,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-7">
        {/* Monogram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex items-center justify-center"
          style={{
            width: 72,
            height: 72,
            borderRadius: '999px',
            border: '1px solid rgba(212,175,55,0.4)',
            boxShadow: '0 0 24px rgba(212,175,55,0.15)',
          }}
        >
          <span
            className="font-playfair"
            style={{ fontSize: 22, letterSpacing: '0.05em', color: '#D4AF37' }}
          >
            HI
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          className="font-playfair text-cream-white"
          style={{ fontSize: 18, letterSpacing: '0.25em', textTransform: 'uppercase' }}
        >
          Loading Invitation...
        </motion.h1>

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          style={{
            width: 160,
            height: 2,
            borderRadius: 999,
            background: 'rgba(212,175,55,0.15)',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              height: '100%',
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #D4AF37, #F0D060)',
              borderRadius: 999,
              transition: 'width 0.1s linear',
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}