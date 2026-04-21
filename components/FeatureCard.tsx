'use client'

interface FeatureCardProps {
  icon: string
  title: string
  description: string
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div
      className="p-8 rounded-2xl text-center transition-all duration-300 cursor-default"
      style={{ border: '1px solid #d0dade', backgroundColor: 'white' }}
      onMouseEnter={e => {
        ;(e.currentTarget as HTMLDivElement).style.backgroundColor = '#F1E7D6'
        ;(e.currentTarget as HTMLDivElement).style.borderColor = '#1EB39F'
      }}
      onMouseLeave={e => {
        ;(e.currentTarget as HTMLDivElement).style.backgroundColor = 'white'
        ;(e.currentTarget as HTMLDivElement).style.borderColor = '#d0dade'
      }}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="font-bold mb-2 text-sm" style={{ color: '#466D7A' }}>{title}</h3>
      <p className="text-xs leading-relaxed" style={{ color: '#5e7a87' }}>{description}</p>
    </div>
  )
}
