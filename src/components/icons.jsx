export const Pinwheel = ({ className = '', style }) => (
  <svg className={className} style={style} viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">
    {[0, 90, 180, 270].map((r) => (
      <g key={r} transform={`rotate(${r} 50 50)`}>
        <path d="M50 50 C 50 28, 54 8, 72 6 C 90 4, 96 22, 84 36 C 74 47, 62 50, 50 50 Z" />
      </g>
    ))}
    <circle cx="50" cy="50" r="9" fill="var(--pin-hole, #000)" opacity=".0" />
  </svg>
)

export const LogoMark = ({ className = '', style, variant = 'fokus', accent }) => {
  const dotColor = accent || (variant === 'digital' ? '#5B7CFF' : variant === 'automations' ? '#2EE59D' : '#FF6A2B')
  return (
    <svg className={className} style={style} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      {/* Four corner brackets - equal weight */}
      <path d="M24 9H9v15M40 9h15v15M9 40v15h15M55 40v15H40" stroke="currentColor" strokeWidth="6" strokeLinecap="square" />
      {variant === 'digital' ? (
        /* The Pixel: Sharp square in center */
        <rect x="25" y="25" width="14" height="14" fill={dotColor} />
      ) : variant === 'automations' ? (
        /* The Loop: Open loop with gap at upper left */
        <path d="M26 25 A 8 8 0 1 1 24 33" fill="none" stroke={dotColor} strokeWidth="5.5" strokeLinecap="square" />
      ) : (
        /* The Dot: Solid circle in center */
        <circle cx="32" cy="32" r="7.5" fill={dotColor} />
      )}
    </svg>
  )
}

export const BrandWordmark = ({ variant = 'fokus', className = '', descriptorClass = '' }) => {
  return (
    <span className={`brand-lockup ${className}`}>
      <span className="brand-fokus">fokus</span>
      {variant === 'digital' && <span className={`brand-descriptor digital-desc ${descriptorClass}`}>DIGITAL</span>}
      {variant === 'automations' && <span className={`brand-descriptor automations-desc ${descriptorClass}`}>AUTOMATIONS</span>}
    </span>
  )
}

export const Arrow = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)
export const Plus = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
    <path d="M12 4v16M4 12h16" />
  </svg>
)
export const Calendar = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3.5" y="5" width="17" height="15" rx="2" />
    <path d="M3.5 10h17M8 3v4M16 3v4" />
  </svg>
)
export const PinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
  </svg>
)
export const ClockIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
)
export const UserIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="10" r="3" />
    <path d="M6.5 18.5c1.5-3 9.5-3 11 0" />
  </svg>
)
export const Linkedin = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4.5 9h3.8v11H4.5V9Zm1.9-5.5a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM10.5 9h3.6v1.5c.6-1 1.9-1.8 3.7-1.8 3.5 0 4.2 2.3 4.2 5.3V20h-3.8v-5.3c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8V20h-3.9V9Z" />
  </svg>
)
export const Star = ({ empty }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill={empty ? 'none' : 'currentColor'} stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
    <path d="m12 2.8 2.8 5.9 6.4.8-4.7 4.4 1.2 6.4L12 17.2 6.3 20.3l1.2-6.4L2.8 9.5l6.4-.8L12 2.8Z" />
  </svg>
)
export const Chevron = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6" />
  </svg>
)

export const MailIcon = ({ size = 16, className = '' }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
)

export const PhoneIcon = ({ size = 16, className = '' }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

export const MessageSquareIcon = ({ size = 16, className = '' }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
)

export const CheckIcon = ({ size = 16, className = '' }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

export const MapPinIcon = ({ size = 16, className = '' }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)


const S = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.4, strokeLinecap: 'round', strokeLinejoin: 'round' }
export const SvcIcon = ({ name }) => {
  const p = { width: 30, height: 30, viewBox: '0 0 32 32', ...S }
  if (name === 'hand')
    return (
      <svg {...p}>
        <circle cx="19" cy="9" r="3" />
        <path d="M19 3.5v2M19 12.5v2M13.5 9h2M22.5 9h2M15 5l1.4 1.4M21.6 11.6 23 13M23 5l-1.4 1.4M16.4 11.6 15 13" />
        <path d="M3 20h5l5 2.5h5a2 2 0 0 1 0 4h-6M8 20v8M13 22.5l8.5-3c1.5-.5 3 .8 2.4 2.2L20 28l-8 1.5" />
      </svg>
    )
  if (name === 'award')
    return (
      <svg {...p}>
        <circle cx="16" cy="12" r="8" />
        <circle cx="16" cy="12" r="4.8" />
        <path d="m11.5 18.5-2 9 6.5-3 6.5 3-2-9" />
      </svg>
    )
  if (name === 'code')
    return (
      <svg {...p}>
        <path d="m10 9-7 7 7 7M22 9l7 7-7 7M18 6l-4 20" />
      </svg>
    )
  return (
    <svg {...p}>
      <circle cx="16" cy="16" r="3" />
      <circle cx="16" cy="5" r="2.2" />
      <circle cx="26" cy="12" r="2.2" />
      <circle cx="26" cy="22" r="2.2" />
      <circle cx="16" cy="27" r="2.2" />
      <circle cx="6" cy="22" r="2.2" />
      <circle cx="6" cy="12" r="2.2" />
      <path d="M16 13V7.2M18.6 14.5l5.5-1.6M18.6 17.5l5.5 3.2M16 19v5.8M13.4 17.5 7.9 20.7M13.4 14.5 7.9 12.9" />
    </svg>
  )
}
