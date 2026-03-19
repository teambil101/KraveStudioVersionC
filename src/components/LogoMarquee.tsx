const logos = [
  'EastLaw', 'GEN', 'Goldweathers', 'Papyrus', 'StaySquire',
  'AUVYN', 'UpStar', 'CrimsonDevs',
]

export default function LogoMarquee() {
  return (
    <div className="bg-neutral-50/50 border-b border-neutral-200/60 overflow-hidden py-6">
      <div className="animate-marquee flex gap-16 items-center w-max">
        {[...logos, ...logos].map((name, i) => (
          <span
            key={i}
            className="text-base font-bold tracking-wide text-neutral-300 hover:text-neutral-400 transition-colors whitespace-nowrap select-none"
            style={{ fontVariant: 'small-caps' }}
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  )
}
