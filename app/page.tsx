'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// ── Static imports ──────────────────────────────────────────────────
import Preloader from '@/components/scenes/Preloader'
import EnvelopeScene from '@/components/scenes/EnvelopeScene'
import InvitationLetter from '@/components/scenes/InvitationLetter'
import CourtyardHero from '@/components/scenes/CourtyardHero'

// ── Scroll sections ────────────────────────────────────────────────
import CountdownSection from '@/components/sections/Countdown'
import VenueSection from '@/components/sections/VenueSection'
import GallerySection from '@/components/sections/GallerySection'
import RSVPSection from '@/components/sections/RSVPSection'
import ClosingSection from '@/components/sections/ClosingSection'
import Footer from '@/components/layout/Footer'

gsap.registerPlugin(ScrollTrigger)

// Scene state machine
type Scene =
  | 'preloader'
  | 'envelope'
  | 'letter'
  | 'transition'
  | 'main'

export default function Home() {
  const [scene, setScene] = useState<Scene>('preloader')
  const [letterVisible, setLetterVisible] = useState(false)
  const [heroStarted, setHeroStarted] = useState(false)
  const overlayRef = useRef<HTMLDivElement>(null)
  const mainRef = useRef<HTMLDivElement>(null)

  // Init Lenis smooth scroll
  useEffect(() => {
    let lenis: import('lenis').default | null = null

    async function initLenis() {
      const LenisModule = await import('lenis')
      const Lenis = LenisModule.default

      lenis = new Lenis({
        duration: 1.4,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        touchMultiplier: 2,
      })

      function raf(time: number) {
        lenis?.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)

      // Connect GSAP ScrollTrigger with Lenis
      lenis.on('scroll', ScrollTrigger.update)

      gsap.ticker.add((time) => {
        lenis?.raf(time * 1000)
      })

      gsap.ticker.lagSmoothing(0)
    }

    if (scene === 'main') {
      initLenis()
    }

    return () => {
      lenis?.destroy()
    }
  }, [scene])

  // Handler: preloader done → show envelope
  const handlePreloaderComplete = () => {
    setScene('envelope')
  }

  // Handler: envelope opened → show letter
  const handleLetterReady = () => {
    setLetterVisible(true)
    setScene('letter')
  }

  // Handler: "Open Invitation" button clicked → cinematic transition
  const handleOpenInvitation = () => {
    setScene('transition')
    setLetterVisible(false)

    // Cinematic transition: white flash → fade to hero
    const overlay = overlayRef.current
    if (overlay) {
      gsap.timeline()
        .set(overlay, { opacity: 0, display: 'block' })
        .to(overlay, { opacity: 1, duration: 0.6, ease: 'power2.in' })
        .to(overlay, {
          opacity: 0,
          duration: 1.2,
          delay: 0.3,
          ease: 'power2.out',
          onStart: () => {
            setScene('main')
          },
          onComplete: () => {
            gsap.set(overlay, { display: 'none' })
            setTimeout(() => setHeroStarted(true), 200)
          },
        })
    }
  }

  return (
    <>
      {/* ── Cinematic transition overlay ── */}
      <div
        ref={overlayRef}
        className="scene-overlay pointer-events-none"
        style={{ display: 'none', background: '#F8F4E8' }}
        aria-hidden="true"
      />

      {/* ── Preloader ── */}
      <AnimatePresence>
        {scene === 'preloader' && (
          <Preloader onComplete={handlePreloaderComplete} />
        )}
      </AnimatePresence>

      {/* ── Envelope Scene ── */}
      <AnimatePresence>
        {(scene === 'envelope' || scene === 'letter') && (
          <motion.div
            key="envelope"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <EnvelopeScene onLetterReady={handleLetterReady} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Invitation Letter overlay ── */}
      <AnimatePresence>
        {scene === 'letter' && (
          <InvitationLetter
            visible={letterVisible}
            onOpenInvitation={handleOpenInvitation}
          />
        )}
      </AnimatePresence>

      {/* ── Main Site (hero + sections) ── */}
      <AnimatePresence>
        {(scene === 'main' || scene === 'transition') && (
          <motion.div
            ref={mainRef}
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* 3D Hero */}
            <CourtyardHero started={heroStarted} />

            {/* Scroll sections */}
            <main id="main-content">
              <CountdownSection />
              <VenueSection />
              <GallerySection />
              <RSVPSection />
              <ClosingSection />
            </main>

            <Footer />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Skip to main content (accessibility) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[300] focus:px-4 focus:py-2 focus:bg-gold focus:text-black focus:rounded focus:font-poppins focus:text-sm"
      >
        Skip to main content
      </a>
    </>
  )
}
