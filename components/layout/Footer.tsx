'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer
      className="py-10 px-6 text-center relative"
      style={{ borderTop: '1px solid rgba(212,175,55,0.1)', background: '#0B0B0B' }}
    >
      {/* Top flourish */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="h-px w-32 mx-auto mb-8"
        style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }}
      />

      <div className="flex flex-col items-center gap-4">
        {/* Logo / Initials */}

        {/* Tagline */}
        <p className="font-cormorant text-warm-beige/50 italic text-base">
          Made with <span className="text-red-400">❤️</span> by M Abdullah
        </p>
      </div>
    </footer>
  )
}
