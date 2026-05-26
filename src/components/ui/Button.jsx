/**
 * components/ui/Button.jsx — Reusable Button component
 *
 * Props:
 *   variant  — 'primary' | 'ghost' | 'outline'  (default: 'primary')
 *   size     — 'sm' | 'md' | 'lg'               (default: 'md')
 *   as       — render as 'button' or 'a' link    (default: 'button')
 *   href     — URL if using as='a'
 *   children — button label / content
 *   ...rest  — any other HTML button attributes (onClick, disabled, type, etc.)
 */

import { cn } from '@lib/utils'

const VARIANTS = {
  primary: 'bg-terracotta text-white hover:bg-terracotta-dark shadow-[0_4px_20px_rgba(184,107,90,0.3)] hover:shadow-[0_8px_30px_rgba(184,107,90,0.4)]',
  ghost:   'text-ink-soft border-b border-blush-deep hover:text-terracotta hover:border-terracotta',
  outline: 'border border-terracotta text-terracotta hover:bg-terracotta hover:text-white',
}

const SIZES = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

export default function Button({
  variant  = 'primary',
  size     = 'md',
  as       = 'button',
  href,
  children,
  className,
  ...rest
}) {
  const base = 'inline-flex items-center gap-2 font-medium rounded-full transition-all duration-200 cursor-pointer'
  const classes = cn(base, VARIANTS[variant], SIZES[size], className)

  if (as === 'a' || href) {
    return <a href={href} className={classes} {...rest}>{children}</a>
  }

  return <button className={classes} {...rest}>{children}</button>
}
