/**
 * components/ui/Tag.jsx — Section label badge (e.g. "Why Postpartum Matters")
 */
import { cn } from '@lib/utils'

export default function Tag({ children, className }) {
  return (
    <span className={cn(
      'inline-block text-xs font-medium tracking-widest uppercase',
      'text-terracotta bg-terracotta/10 px-4 py-1.5 rounded-full',
      className
    )}>
      {children}
    </span>
  )
}
