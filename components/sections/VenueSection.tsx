'use client'

import { motion } from 'framer-motion'
import { MapPin, Navigation, Car, Calendar, Clock, Users } from 'lucide-react'

export default function VenueSection() {
  const directionsUrl = 'https://www.google.com/maps/search/Qasr+Al+Hamra+Restaurant'

  const details = [
    { icon: Calendar, label: 'Date', value: 'Saturday, 18 July 2026' },
    { icon: Clock, label: 'Time', value: '7:00 PM Onwards' },
    { icon: Users, label: 'Hosted By', value: 'Abida & Naveeda' },
  ]

  return (
    <section
      id="venue"
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, #0B0B0B 0%, #0D0A06 100%)',
        padding: '110px 24px',
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: 'absolute',
          pointerEvents: 'none',
          top: '5%',
          left: '50%',
          width: 900,
          height: 500,
          transform: 'translateX(-50%)',
          background: 'radial-gradient(ellipse at center, rgba(212,175,55,0.06) 0%, transparent 65%)',
        }}
      />

      <div style={{ position: 'relative', zIndex: 10, maxWidth: 1152, margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <div className="ornament" style={{ marginBottom: '24px' }}>The Venue</div>
          <h2 className="font-playfair text-cream-white" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.25rem)', marginBottom: '14px' }}>
            Qasr Al Hamra Restaurant
          </h2>
          <p className="font-cormorant italic text-warm-beige/70" style={{ fontSize: '20px' }}>
            An exquisite setting for an unforgettable night
          </p>
        </motion.div>

        {/* Content grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '32px',
            alignItems: 'stretch',
          }}
          className="lg:grid-cols-2"
        >
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            style={{ position: 'relative', minHeight: 440 }}
          >
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                minHeight: 440,
                borderRadius: 20,
                padding: 1,
                background: 'linear-gradient(135deg, rgba(212,175,55,0.55), rgba(212,175,55,0.08) 45%, rgba(212,175,55,0.3))',
                boxShadow: '0 25px 70px rgba(0,0,0,0.55)',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  minHeight: 438,
                  overflow: 'hidden',
                  borderRadius: 19,
                  background: '#0B0B0B',
                }}
              >
                <iframe
                  title="Qasr Al Hamra Restaurant location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.5!2d46.6753!3d24.7136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zUWFzciBBbCBIYW1yYSBSZXN0YXVyYW50!5e0!3m2!1sen!2ssa!4v1600000000000!5m2!1sen!2ssa"
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    minHeight: 438,
                    filter: 'grayscale(0.85) brightness(0.65) contrast(1.15)',
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Soft gold vignette — additive glow, not multiply, so it can't muddy the map */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    pointerEvents: 'none',
                    background: 'linear-gradient(160deg, rgba(212,175,55,0.14) 0%, transparent 40%), linear-gradient(0deg, rgba(11,11,11,0.55), transparent 55%)',
                  }}
                />

                {/* Pulsing pin */}
                <div style={{ position: 'absolute', top: '46%', left: '48%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }}>
                  <motion.div
                    animate={{ scale: [1, 2.2], opacity: [0.5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
                    style={{ position: 'absolute', width: 40, height: 40, left: -20, top: -20, borderRadius: '999px', background: 'rgba(212,175,55,0.4)' }}
                  />
                  <div
                    style={{
                      position: 'relative',
                      width: 40,
                      height: 40,
                      borderRadius: '999px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: '#0B0B0B',
                      border: '1.5px solid #D4AF37',
                      boxShadow: '0 0 20px rgba(212,175,55,0.5)',
                    }}
                  >
                    <MapPin size={18} color="#D4AF37" fill="rgba(212,175,55,0.15)" />
                  </div>
                </div>

                {/* Label chip */}
                <div
                  style={{
                    position: 'absolute',
                    top: 16,
                    left: 16,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '8px 14px',
                    borderRadius: 8,
                    background: 'rgba(11,11,11,0.8)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(212,175,55,0.3)',
                  }}
                >
                  <span style={{ width: 6, height: 6, borderRadius: '999px', background: '#D4AF37' }} />
                  <span className="font-poppins" style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(233,223,199,0.8)' }}>
                    Jahanian, Pakistan
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
          >
            {/* Venue card — solid opaque surface, thin gold border, no wash */}
            <div
              style={{
                flex: 1,
                borderRadius: 20,
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '28px',
                background: '#141210',
                border: '1px solid rgba(212,175,55,0.28)',
                boxShadow: 'inset 0 1px 0 rgba(212,175,55,0.12), 0 20px 50px rgba(0,0,0,0.4)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    minWidth: 48,
                    borderRadius: '999px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'radial-gradient(circle, rgba(212,175,55,0.2), rgba(212,175,55,0.05))',
                    border: '1px solid rgba(212,175,55,0.4)',
                    boxShadow: '0 0 16px rgba(212,175,55,0.15)',
                  }}
                >
                  <MapPin size={20} color="#D4AF37" />
                </div>
                <div>
                  <h3 className="font-playfair text-cream-white" style={{ fontSize: 24, marginBottom: 4 }}>
                    Qasr Al Hamra Restaurant
                  </h3>
                  <p className="font-cormorant italic text-warm-beige/70" style={{ fontSize: 18 }}>
                    A premier dining destination
                  </p>
                </div>
              </div>

              <div style={{ height: 1, width: '100%', background: 'linear-gradient(90deg, rgba(212,175,55,0.35), transparent)' }} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {details.map(({ icon: Icon, label, value }) => (
                  <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        minWidth: 36,
                        borderRadius: '999px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'rgba(212,175,55,0.08)',
                        border: '1px solid rgba(212,175,55,0.25)',
                      }}
                    >
                      <Icon size={15} color="#D4AF37" />
                    </div>
                    <div>
                      <p className="font-poppins" style={{ fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(233,223,199,0.4)', marginBottom: 2 }}>
                        {label}
                      </p>
                      <p className="font-cormorant text-cream-white" style={{ fontSize: 18 }}>{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Parking note */}
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 16,
                padding: '20px',
                borderRadius: 14,
                background: '#141210',
                border: '1px solid rgba(212,175,55,0.15)',
                borderLeft: '2px solid rgba(212,175,55,0.5)',
              }}
            >
              <Car size={18} color="#D4AF37" style={{ flexShrink: 0, marginTop: 2 }} />
              <div>
                <p className="font-poppins" style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(233,223,199,0.5)', marginBottom: 4 }}>
                  Parking
                </p>
                <p className="font-cormorant italic text-warm-beige/80" style={{ fontSize: 16, lineHeight: 1.5 }}>
                  Ample parking is available at the venue. Valet service may be available — please inquire upon arrival.
                </p>
              </div>
            </div>

            {/* Directions button */}
            <motion.a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.015, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="font-poppins"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 12,
                padding: '18px 32px',
                fontSize: 13,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                fontWeight: 600,
                background: 'linear-gradient(135deg, #D4AF37 0%, #B8912C 100%)',
                color: '#0B0B0B',
                borderRadius: 10,
                boxShadow: '0 8px 30px rgba(212,175,55,0.35)',
                textDecoration: 'none',
              }}
              aria-label="Get directions to Qasr Al Hamra Restaurant"
            >
              <Navigation size={16} />
              Get Directions
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}