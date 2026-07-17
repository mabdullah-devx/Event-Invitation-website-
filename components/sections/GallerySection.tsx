'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const images = [
  {
    src: '/gallery/dining-table.png',
    alt: 'Elegantly set family dining table with gold tableware and fresh flowers',
    aspect: 'tall',
  },
  {
    src: '/gallery/courtyard.png',
    alt: 'Luxury restaurant courtyard with golden lantern lighting',
    aspect: 'wide',
  },
  {
    src: '/gallery/food.png',
    alt: 'Exquisite Arabic cuisine spread with premium presentation',
    aspect: 'wide',
  },
  {
    src: '/gallery/flowers.png',
    alt: 'Elegant floral centerpiece with white roses and jasmine',
    aspect: 'tall',
  },
  {
    src: '/gallery/tea.png',
    alt: 'Premium Arabic tea service with gold porcelain set',
    aspect: 'wide',
  },
  {
    src: '/gallery/sunset.png',
    alt: 'Golden sunset over an elegant restaurant outdoor patio',
    aspect: 'wide',
  },
]

function GalleryItem({ src, alt, index }: { src: string; alt: string; index: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="relative rounded-2xl overflow-hidden group cursor-pointer aspect-[4/3] w-full"
      style={{ border: '1px solid rgba(212,175,55,0.12)' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />

      {/* Hover overlay */}
      <motion.div
        className="absolute inset-0 flex items-end p-5 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          background: 'linear-gradient(to top, rgba(11,11,11,0.9) 0%, rgba(11,11,11,0.2) 60%, transparent 100%)',
        }}
      >
        <div>
          <p className="font-cormorant text-cream-white/95 italic text-sm leading-relaxed">
            {alt}
          </p>
        </div>
      </motion.div>

      {/* Gold corner accent on hover */}
      <motion.div
        className="absolute top-3 right-3 w-6 h-6 z-10"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M0 0 L12 0 L12 2 L2 2 L2 12 L0 12 Z" fill="#D4AF37" opacity="0.8" />
        </svg>
      </motion.div>

      {/* Glass reflection shimmer */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-10"
        initial={{ x: '-100%', opacity: 0 }}
        animate={{ x: hovered ? '100%' : '-100%', opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08) 50%, transparent)',
        }}
      />
    </motion.div>
  )
}

export default function GallerySection() {
  return (
    <section
      id="gallery"
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0D0A06 0%, #0B0B0B 100%)' }}
    >
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="ornament mb-6">A Glimpse</div>
          <h2 className="font-playfair text-4xl md:text-5xl text-cream-white mb-4">
            The Atmosphere Awaits
          </h2>
          <p className="font-cormorant text-xl text-warm-beige/70 italic max-w-xl mx-auto">
            A taste of the warmth and elegance that will greet you
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <GalleryItem key={img.src} {...img} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
