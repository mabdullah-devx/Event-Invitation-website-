'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

export default function WelcomeSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const line1Ref = useRef<HTMLDivElement>(null)
  const line2Ref = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headlineRef.current) {
        gsap.fromTo(
          headlineRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1, y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: headlineRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }

      if (textRef.current) {
        gsap.fromTo(
          textRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1, y: 0,
            duration: 0.8,
            delay: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: textRef.current,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="welcome"
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0B0B0B 0%, #0F0C08 100%)' }}
    >
      {/* Background decorative text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-playfair text-[18vw] font-bold opacity-[0.025] text-warm-beige whitespace-nowrap"
        >
          Family
        </span>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Ornament */}
        <div ref={line1Ref} className="ornament mb-8 opacity-0">
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="w-full h-px"
            style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }}
          />
          <span className="text-gold font-cormorant italic tracking-[0.4em] text-sm whitespace-nowrap">
            A Warm Welcome
          </span>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="w-full h-px"
            style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }}
          />
        </div>

        {/* Main headline */}
        <h2
          ref={headlineRef}
          className="font-playfair text-4xl md:text-6xl lg:text-7xl text-cream-white leading-tight mb-8 opacity-0"
        >
          Every gathering becomes{' '}
          <em className="text-gold-gradient not-italic">special</em>
          <br />
          when shared with family.
        </h2>

        {/* Gold accent line */}
        <div ref={line2Ref} className="flex items-center gap-4 mb-8">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="h-px flex-shrink-0 w-20"
            style={{ background: 'linear-gradient(90deg, #D4AF37, transparent)', transformOrigin: 'left' }}
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{ background: '#D4AF37' }}
          />
        </div>

        {/* Body text */}
        <p
          ref={textRef}
          className="font-cormorant text-xl md:text-2xl text-warm-beige/80 leading-relaxed max-w-2xl opacity-0"
          style={{ fontStyle: 'italic', letterSpacing: '0.02em' }}
        >
          Join us for a night filled with laughter, meaningful
          conversations, delicious food, and unforgettable memories that will
          warm our hearts for years to come.
        </p>

        {/* Side decorative element */}
        <div className="mt-16 flex items-start gap-8">
          <div className="hidden md:block flex-shrink-0">
            <motion.svg
              initial={{ opacity: 0, rotate: -20 }}
              whileInView={{ opacity: 0.6, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              viewBox="0 0 80 80"
              className="w-20 h-20"
              fill="none"
            >
              {/* Decorative flourish */}
              <circle cx="40" cy="40" r="38" stroke="#D4AF37" strokeWidth="0.5" opacity="0.4" />
              <circle cx="40" cy="40" r="28" stroke="#D4AF37" strokeWidth="0.5" opacity="0.3" />
              <path d="M40 10 C50 25 55 35 40 40 C25 45 30 55 40 70" stroke="#D4AF37" strokeWidth="1" fill="none" opacity="0.5" />
              <path d="M40 10 C30 25 25 35 40 40 C55 45 50 55 40 70" stroke="#D4AF37" strokeWidth="1" fill="none" opacity="0.5" />
              <circle cx="40" cy="40" r="3" fill="#D4AF37" opacity="0.6" />
            </motion.svg>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { num: '18', label: 'July' },
              { num: '7', label: 'PM Onwards' },
              { num: '∞', label: 'Memories' },
            ].map(({ num, label }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <div className="font-playfair text-4xl text-gold-gradient font-bold">{num}</div>
                <div className="font-poppins text-xs tracking-[0.2em] uppercase text-warm-beige/50 mt-1">{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
