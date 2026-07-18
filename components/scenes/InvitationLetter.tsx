'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'

interface InvitationLetterProps {
  visible: boolean
  onOpenInvitation: () => void
}

export default function InvitationLetter({ visible, onOpenInvitation }: InvitationLetterProps) {
  const paperRef = useRef<HTMLDivElement>(null)
  const [btnHovered, setBtnHovered] = useState(false)
  const magnetRef = useRef<HTMLButtonElement>(null)

  // Magnetic button effect
  useEffect(() => {
    const btn = magnetRef.current
    if (!btn) return
    const handleMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = (e.clientX - cx) * 0.35
      const dy = (e.clientY - cy) * 0.35
      gsap.to(btn, { x: dx, y: dy, duration: 0.4, ease: 'power2.out' })
    }
    const handleLeave = () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' })
    }
    btn.addEventListener('mousemove', handleMove)
    btn.addEventListener('mouseleave', handleLeave)
    return () => {
      btn.removeEventListener('mousemove', handleMove)
      btn.removeEventListener('mouseleave', handleLeave)
    }
  }, [visible])

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 60 },
    visible: {
      opacity: 1, scale: 1, y: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
    exit: {
      opacity: 0, scale: 1.15,
      filter: 'blur(20px) brightness(3)',
      transition: { duration: 1.0 },
    },
  }

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1, y: 0,
      transition: { duration: 0.7, delay: i * 0.15, ease: 'easeOut' as const },
    }),
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[160] flex items-center justify-center p-4"
          style={{ background: 'rgba(11,11,11,0.75)', backdropFilter: 'blur(8px)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            ref={paperRef}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-full max-w-lg"
          >
            {/* Paper */}
            <div
              className="paper-texture relative rounded-sm shadow-2xl overflow-hidden"
              style={{
                padding: '3rem 2.5rem',
                boxShadow: '0 30px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(212,175,55,0.3), inset 0 0 60px rgba(212,175,55,0.04)',
              }}
            >
              {/* Ornamental border */}
              <div
                className="absolute inset-3 rounded-sm pointer-events-none"
                style={{ border: '1px solid rgba(212,175,55,0.4)' }}
              />
              <div
                className="absolute inset-5 rounded-sm pointer-events-none"
                style={{ border: '0.5px solid rgba(212,175,55,0.15)' }}
              />

              {/* Corner ornaments */}
              {[
                'top-3 left-3',
                'top-3 right-3 rotate-90',
                'bottom-3 right-3 rotate-180',
                'bottom-3 left-3 -rotate-90',
              ].map((pos, i) => (
                <svg
                  key={i}
                  className={`absolute ${pos} w-5 h-5`}
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path d="M0 0 L8 0 L8 1 L1 1 L1 8 L0 8 Z" fill="#D4AF37" opacity="0.6" />
                  <circle cx="2.5" cy="2.5" r="1" fill="#D4AF37" opacity="0.4" />
                </svg>
              ))}

              {/* Content */}
              <div className="relative z-10 text-center flex flex-col items-center gap-5">
                {/* Top flourish */}
                <motion.div custom={0} variants={textVariants} initial="hidden" animate="visible">
                  <div className="ornament text-xs" style={{ color: '#A77B4A' }}>
                    ✦ You Are Invited ✦
                  </div>
                </motion.div>

                {/* Welcome */}
                <motion.div custom={1} variants={textVariants} initial="hidden" animate="visible">
                  <h1
                    className="font-playfair text-4xl md:text-5xl tracking-wide"
                    style={{ color: '#1A1200', lineHeight: 1.15 }}
                  >
                    Welcome
                  </h1>
                </motion.div>

                {/* Gold divider */}
                <motion.div custom={2} variants={textVariants} initial="hidden" animate="visible"
                  className="w-16 h-px"
                  style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }}
                />

                {/* Sub headline */}
                <motion.p custom={3} variants={textVariants} initial="hidden" animate="visible"
                  className="font-cormorant text-lg italic tracking-wider"
                  style={{ color: '#5A4A20' }}
                >
                  You Are Cordially Invited
                </motion.p>

                {/* Event name */}
                <motion.h2 custom={4} variants={textVariants} initial="hidden" animate="visible"
                  className="font-playfair text-2xl md:text-3xl tracking-wider font-semibold"
                  style={{ color: '#2A1E00' }}
                >
                  Family Dinner Gathering
                </motion.h2>

                {/* Divider */}
                <motion.div custom={5} variants={textVariants} initial="hidden" animate="visible"
                  className="w-32 h-px"
                  style={{ background: 'linear-gradient(90deg, transparent, #A77B4A 30%, #D4AF37 50%, #A77B4A 70%, transparent)' }}
                />

                {/* Body text */}
                <motion.p custom={6} variants={textVariants} initial="hidden" animate="visible"
                  className="font-cormorant text-base leading-relaxed tracking-wide max-w-sm"
                  style={{ color: '#3A2E14', fontSize: '1.05rem' }}
                >
                  Join us for a night of togetherness, delicious food,
                  warm conversations, and beautiful memories shared with our
                  loved ones.
                </motion.p>

                {/* Details mini */}
                <motion.div custom={7} variants={textVariants} initial="hidden" animate="visible"
                  className="w-full grid grid-cols-2 gap-3 mt-1"
                >
                  {[
                    { label: 'Date', value: '18 July 2026' },
                    { label: 'Time', value: '7:00 PM' },
                    { label: 'Venue', value: 'Qasr Al Hamra' },
                    { label: 'Hosted By', value: 'Abida & Naveeda' },
                  ].map(({ label, value }) => (
                    <div key={label} className="text-center py-2 px-3 rounded-sm"
                      style={{ background: 'rgba(212,175,55,0.08)', border: '0.5px solid rgba(212,175,55,0.2)' }}
                    >
                      <p className="font-poppins text-[9px] tracking-[0.2em] uppercase" style={{ color: '#A77B4A' }}>{label}</p>
                      <p className="font-cormorant text-sm font-semibold mt-0.5" style={{ color: '#2A1E00' }}>{value}</p>
                    </div>
                  ))}
                </motion.div>

                {/* Bottom ornament */}
                <motion.div custom={8} variants={textVariants} initial="hidden" animate="visible">
                  <div className="ornament text-[10px]" style={{ color: '#A77B4A' }}>
                    ✦
                  </div>
                </motion.div>

                {/* CTA Button */}
                <motion.div custom={9} variants={textVariants} initial="hidden" animate="visible">
                  <button
                    ref={magnetRef}
                    onClick={onOpenInvitation}
                    onMouseEnter={() => setBtnHovered(true)}
                    onMouseLeave={() => setBtnHovered(false)}
                    className="relative group font-poppins text-xs tracking-[0.25em] uppercase px-10 py-4 transition-all duration-300"
                    style={{
                      background: btnHovered
                        ? 'linear-gradient(135deg, #F0D060, #D4AF37, #A88820)'
                        : 'linear-gradient(135deg, #D4AF37, #A88820)',
                      color: '#0B0B0B',
                      fontWeight: 600,
                      borderRadius: '2px',
                      boxShadow: btnHovered
                        ? '0 0 30px rgba(212,175,55,0.6), 0 8px 32px rgba(212,175,55,0.3)'
                        : '0 4px 20px rgba(212,175,55,0.25)',
                    }}
                    aria-label="Open the full invitation"
                  >
                    Click Here
                    <span
                      className="absolute inset-0 rounded-sm transition-opacity duration-300"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 60%)',
                        opacity: btnHovered ? 1 : 0,
                      }}
                    />
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
