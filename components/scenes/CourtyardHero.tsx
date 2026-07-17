'use client'

import { motion } from 'framer-motion'

interface CourtyardHeroProps {
  started: boolean
}

export default function CourtyardHero({ started }: CourtyardHeroProps) {
  return (
    <section
      id="hero"
      className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center text-center px-6"
      style={{
        background: '#0B0B0B',
      }}
    >
      {/* Cinematic background image with dark elegant overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 ease-out"
        style={{
          backgroundImage: 'url("/gallery/sunset.png")',
          filter: 'brightness(0.28) contrast(1.05) saturate(0.85)',
          transform: started ? 'scale(1.02)' : 'scale(1.08)',
        }}
      />

      {/* Decorative dark vignettes to frame the content */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 30%, rgba(11, 11, 11, 0.8) 100%)',
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-48 z-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, #0B0B0B, transparent)',
        }}
      />

      {/* Hero Text Content (Simple & Clean) */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center justify-center">
        {/* Subtitle */}
        <p className="font-cormorant italic text-gold tracking-[0.35em] text-sm md:text-base uppercase mb-6 opacity-80">
          — A Gathering to Remember —
        </p>

        {/* Main Title */}
        <h1 className="font-playfair text-5xl md:text-8xl text-cream-white tracking-wide leading-tight mb-6">
          Family Lunch
          <br />
          <span className="font-light italic text-gold">Gathering</span>
        </h1>

        {/* Divider Flourish */}
        <div className="w-24 h-px my-2" style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }} />

        {/* Tagline */}
        <p className="font-cormorant text-lg md:text-2xl text-warm-beige/85 tracking-wide max-w-2xl mt-4 font-light leading-relaxed">
          Where Every Shared Meal Creates Lasting Memories
        </p>

        {/* Elegant Scroll Hint */}
        <div className="mt-16 flex flex-col items-center gap-3">

          <div className="w-px h-12 bg-gradient-to-b from-gold/50 to-transparent" />
        </div>
      </div>
    </section>
  )
}
