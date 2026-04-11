'use client'

import { useEffect, useRef, useState } from 'react'

interface StatsCounterProps {
  end: number
  suffix?: string
  label: string
  icon: React.ReactNode
}

const formatNumber = (value: number) =>
  new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 0,
  }).format(value)

export function StatsCounter({ end, suffix = '', label, icon }: StatsCounterProps) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let frame = 0
    let started = false

    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true
          const startTime = performance.now()
          const duration = 1200

          const step = (timestamp: number) => {
            const progress = Math.min((timestamp - startTime) / duration, 1)
            setValue(Math.round(end * progress))
            if (progress < 1) {
              frame = requestAnimationFrame(step)
            }
          }

          frame = requestAnimationFrame(step)
        }
      },
      { threshold: 0.4 }
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [end])

  return (
    <div ref={ref} className="stats-counter text-center">
      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#2DC04A] to-[#6cdb82] text-white shadow-lg">
        {icon}
      </div>
      <p className="text-2xl font-bold text-primary md:text-3xl">
        {formatNumber(value)}{suffix}
      </p>
      <p className="mt-1 text-xs text-background/60">{label}</p>
    </div>
  )
}
