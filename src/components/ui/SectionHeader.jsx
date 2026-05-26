/**
 * components/ui/SectionHeader.jsx — Reusable section heading block
 *
 * Usage:
 *   <SectionHeader
 *     tag="Why It Matters"
 *     title={<>The fourth trimester is <em>invisible</em></>}
 *     description="Many mothers go home within 24–48 hours..."
 *   />
 */
import Tag from './Tag'
import { cn } from '@lib/utils'

export default function SectionHeader({ tag, title, description, align = 'center', className }) {
  const alignClass = { center: 'text-center items-center', left: 'text-left items-start' }[align]

  return (
    <div className={cn('flex flex-col gap-4 mb-16', alignClass, className)}>
      {tag && <Tag>{tag}</Tag>}
      {title && (
        <h2 className="font-display text-4xl md:text-5xl font-light text-ink leading-tight
                       [&_em]:italic [&_em]:text-terracotta [&_em]:not-italic">
          {title}
        </h2>
      )}
      {description && (
        <p className="text-ink-soft font-light text-lg leading-relaxed max-w-xl">
          {description}
        </p>
      )}
    </div>
  )
}
