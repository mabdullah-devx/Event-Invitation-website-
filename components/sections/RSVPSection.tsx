'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Phone, CalendarPlus } from 'lucide-react'

function RSVPButton({
  children,
  icon,
  onClick,
  href,
  accent,
  ariaLabel,
}: {
  children: React.ReactNode
  icon: React.ReactNode
  onClick?: () => void
  href?: string
  accent: string
  ariaLabel?: string
}) {
  const Tag = href ? 'a' : 'button'

  return (
    <Tag
      href={href}
      target={href ? '_blank' : undefined}
      rel={href ? 'noopener noreferrer' : undefined}
      onClick={onClick}
      aria-label={ariaLabel}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        width: '100%',
        maxWidth: '440px',
        padding: '18px 24px',
        borderRadius: '18px',
        textDecoration: 'none',
        cursor: 'pointer',
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(26px) saturate(160%)',
        WebkitBackdropFilter: 'blur(26px) saturate(160%)',
        border: '1px solid rgba(255, 255, 255, 0.14)',
        boxShadow:
          'inset 0 1px 0 rgba(255,255,255,0.2), 0 10px 30px rgba(0,0,0,0.4)',
        position: 'relative',
        overflow: 'hidden',
        transition: 'transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease',
      }}
      className="group rsvp-glass-btn"
    >
      <span
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '44px',
          height: '44px',
          minWidth: '44px',
          borderRadius: '999px',
          background: `${accent}16`,
          border: `1px solid ${accent}45`,
          color: accent,
          boxShadow: `inset 0 1px 0 rgba(255,255,255,0.18), 0 0 22px ${accent}25`,
        }}
      >
        {icon}
      </span>

      <span
        style={{
          fontFamily: 'var(--font-poppins, sans-serif)',
          fontSize: '13px',
          fontWeight: 600,
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: '#E9DFC7',
        }}
      >
        {children}
      </span>

      {/* bottom accent line, reveals on hover */}
      <span
        className="rsvp-btn-glow"
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: '2px',
          background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
          opacity: 0,
          transition: 'opacity 0.4s ease',
        }}
      />
    </Tag>
  )
}

export default function RSVPSection() {
  const downloadICS = () => {
    const ics = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Family Lunch Gathering//EN
BEGIN:VEVENT
DTSTART:20260718T190000
DTEND:20260718T230000
SUMMARY:Family Lunch Gathering — Abida & Naveeda
DESCRIPTION:Join us for an afternoon of togetherness\\, delicious food\\, warm conversations\\, and beautiful memories.
LOCATION:Qasr Al Hamra Restaurant
END:VEVENT
END:VCALENDAR`
    const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'family-lunch-gathering.ics'
    link.click()
    URL.revokeObjectURL(url)
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  }

  return (
    <section
      id="rsvp"
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, #0B0B0B 0%, #0D0B07 100%)',
        padding: '110px 24px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '70vw',
          height: '70vw',
          background: 'radial-gradient(ellipse at center, rgba(212,175,55,0.07) 0%, transparent 65%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          maxWidth: '560px',
          margin: '0 auto',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '56px' }}
        >
          <div className="ornament" style={{ marginBottom: '24px' }}>RSVP</div>
          <h2 className="font-playfair text-cream-white" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', lineHeight: 1.1, marginBottom: '16px' }}>
            We&apos;d Love to{' '}
            <span className="text-gold-gradient italic">See You</span>
          </h2>
          <p className="font-cormorant text-warm-beige/70 italic" style={{ fontSize: '20px', maxWidth: '440px', margin: '0 auto' }}>
            Your presence will make our gathering even more meaningful.
            Please let us know if you&apos;ll be joining us.
          </p>
        </motion.div>

        {/* Buttons */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
            width: '100%',
            marginBottom: '56px',
          }}
        >
          <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <RSVPButton
              href="https://wa.me/+923292444106?text=Assalamu%20Alaikum%2C%20I%20would%20like%20to%20RSVP%20for%20the%20Family%20Lunch%20Gathering%20on%2018%20July%202026."
              ariaLabel="RSVP via WhatsApp"
              accent="#25D366"
              icon={<MessageCircle size={19} />}
            >
              WhatsApp RSVP
            </RSVPButton>
          </motion.div>

          <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.1 }} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <RSVPButton
              href="tel:+923010454249"
              ariaLabel="Call the host"
              accent="#D4AF37"
              icon={<Phone size={19} />}
            >
              Call Host
            </RSVPButton>
          </motion.div>

          <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <RSVPButton
              onClick={downloadICS}
              ariaLabel="Add event to calendar"
              accent="#E9DFC7"
              icon={<CalendarPlus size={19} />}
            >
              Add To Calendar
            </RSVPButton>
          </motion.div>
        </div>

        {/* Decorative card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            width: '100%',
            maxWidth: '440px',
            padding: '32px',
            borderRadius: '20px',
            background: 'rgba(255,255,255,0.04)',
            backdropFilter: 'blur(26px) saturate(160%)',
            WebkitBackdropFilter: 'blur(26px) saturate(160%)',
            border: '1px solid rgba(255,255,255,0.11)',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.16), 0 10px 30px rgba(0,0,0,0.35)',
          }}
        >
          <p className="font-cormorant italic text-warm-beige/80" style={{ fontSize: '19px', lineHeight: 1.6 }}>
            &ldquo;The fondest memories are made when gathered around the table.&rdquo;
          </p>
          <div
            style={{
              margin: '24px auto 0',
              height: '1px',
              width: '80px',
              background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)',
            }}
          />
        </motion.div>
      </div>

      <style jsx>{`
        .rsvp-glass-btn:hover {
          transform: translateY(-2px);
          border-color: rgba(255, 255, 255, 0.28);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 14px 36px rgba(0, 0, 0, 0.5);
        }
        .rsvp-glass-btn:hover .rsvp-btn-glow {
          opacity: 1;
        }
      `}</style>
    </section>
  )
}