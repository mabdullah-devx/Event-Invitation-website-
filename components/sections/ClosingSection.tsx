'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'

export default function ClosingSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.closing-bg-text',
        { opacity: 0, scale: 0.8 },
        {
          opacity: 0.03,
          scale: 1,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="closing"
      className="relative overflow-hidden"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #0D0B07 0%, #180E04 50%, #0B0B0B 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Background text */}
      <div
        className="closing-bg-text absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span className="font-playfair text-[22vw] font-bold text-warm-beige whitespace-nowrap opacity-0">
          Together
        </span>
      </div>

      {/* Sunset radial gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 80%, rgba(167,123,74,0.2) 0%, rgba(212,175,55,0.08) 40%, transparent 70%)',
        }}
      />

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: '#D4AF37',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.4 + 0.1,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-6 py-24 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="ornament mb-8">Until We Meet</div>

          <h2 className="font-playfair text-6xl md:text-8xl text-gold-gradient mb-8 leading-none">
            Thank You
          </h2>

          <div
            className="h-px w-32 mx-auto mb-10"
            style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }}
          />

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-cormorant text-2xl md:text-3xl text-warm-beige/90 italic leading-relaxed mb-6 max-w-xl mx-auto"
          >
            We look forward to celebrating this special day with you.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-cormorant text-xl text-warm-beige/60 italic"
          >
            Your presence will make our gathering even more memorable.
          </motion.p>

          {/* Signature */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-14 inline-flex flex-col items-center gap-3"
          >
            <div
              className="h-px w-24"
              style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }}
            />
            <p className="font-playfair text-2xl text-gold-gradient tracking-wider">
              Abida & Naveeda
            </p>
            <p className="font-cormorant text-sm italic text-warm-beige/50 tracking-[0.2em]">
              With love and warmth
            </p>
          </motion.div>

          {/* Decorative stars */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 1 }}
            className="mt-10 flex items-center justify-center gap-3"
          >
            {['✦', '✧', '✦', '✧', '✦'].map((star, i) => (
              <motion.span
                key={i}
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                className="text-gold text-sm"
              >
                {star}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
