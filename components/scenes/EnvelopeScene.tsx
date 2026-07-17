'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface EnvelopeSceneProps {
  onLetterReady: () => void
}

export default function EnvelopeScene({ onLetterReady }: EnvelopeSceneProps) {
  const [isOpening, setIsOpening] = useState(false)

  const handleOpen = () => {
    if (isOpening) return
    setIsOpening(true)
    // Clean delay to transition to the letter card
    setTimeout(() => {
      onLetterReady()
    }, 600)
  }

  return (
    <div
      className="fixed inset-0 z-[150] flex flex-col items-center justify-center p-6 select-none"
      style={{ background: '#0B0B0B' }}
    >
      {/* Background ambient lighting */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(212,175,55,0.06) 0%, transparent 60%)',
        }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: isOpening ? 0 : 1, scale: isOpening ? 0.92 : 1, y: isOpening ? -20 : 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        onClick={handleOpen}
        className="relative w-full max-w-lg aspect-[3/2] cursor-pointer group"
      >
        {/* Envelope Container (CSS paper texture + shadow) */}
        <div
          className="w-full h-full rounded-sm shadow-2xl relative overflow-hidden flex flex-col justify-between"
          style={{
            backgroundColor: '#F8F4E8',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(212,175,55,0.25)',
          }}
        >
          {/* Gold Outer Border */}
          <div
            className="absolute inset-3 rounded-sm pointer-events-none"
            style={{ border: '1px solid rgba(212,175,55,0.4)' }}
          />
          {/* Gold Inner Border */}
          <div
            className="absolute inset-4 rounded-sm pointer-events-none"
            style={{ border: '0.5px solid rgba(212,175,55,0.15)' }}
          />

          {/* Envelope Back Folds (SVG lines for luxury paper crease effect) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 480 320" fill="none">
            {/* Left fold */}
            <path d="M12 12 L240 160 L12 308" stroke="rgba(212,175,55,0.18)" strokeWidth="1.5" />
            {/* Right fold */}
            <path d="M468 12 L240 160 L468 308" stroke="rgba(212,175,55,0.18)" strokeWidth="1.5" />
            {/* Bottom fold */}
            <path d="M12 308 L240 160 L468 308" fill="rgba(248,244,232,0.6)" stroke="rgba(212,175,55,0.22)" strokeWidth="1.5" />
            {/* Top Flap fold */}
            <path d="M12 12 L240 160 L468 12" fill="rgba(243,237,224,0.8)" stroke="rgba(212,175,55,0.25)" strokeWidth="1.5" />
          </svg>

          {/* Wax Seal - Embossed Crimson / Gold Graphic */}
          <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex flex-col items-center justify-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative w-20 h-20 md:w-24 md:h-24 rounded-full shadow-lg flex items-center justify-center cursor-pointer transition-all duration-300"
              style={{
                background: 'radial-gradient(circle at 35% 35%, #B93737 0%, #801818 70%, #500808 100%)',
                boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.2), 0 8px 24px rgba(0,0,0,0.4)',
                border: '1px solid rgba(80,8,8,0.4)',
              }}
            >
              {/* Inner Gold Seal Ring */}
              <div
                className="absolute w-[80%] h-[80%] rounded-full opacity-60 flex items-center justify-center"
                style={{
                  border: '1.5px double #D4AF37',
                }}
              >
                {/* Initials */}
                <span
                  className="font-playfair text-gold text-lg md:text-xl font-bold tracking-wider"
                  style={{
                    textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                  }}
                >
                  A&N
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Helper text below */}
      <AnimatePresence>
        {!isOpening && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 font-cormorant text-sm tracking-[0.3em] uppercase text-warm-beige italic"
          >
            Click the seal to open
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}
