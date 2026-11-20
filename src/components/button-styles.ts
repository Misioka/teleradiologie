export function buttonClass(variant: 'primary' | 'ghost' = 'primary', large = false) {
  const base =
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring [&_svg]:size-4 [&_svg]:shrink-0'
  const color =
    variant === 'primary'
      ? 'bg-primary text-primary-foreground shadow hover:bg-primary/90'
      : 'hover:bg-accent hover:text-accent-foreground'
  return `${base} ${color} ${large ? 'h-10 px-8' : 'h-9 px-4 py-2'}`
}
