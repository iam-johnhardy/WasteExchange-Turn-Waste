'use client'

import { useEffect, useRef } from 'react'

export function ClientBodyScroll() {
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateScrollState = () => {
      const scrollY = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0

      document.body.style.setProperty('--scroll-y', `${scrollY}px`)
      document.body.style.setProperty('--scroll-progress', `${progress}`)

      if (progressRef.current) {
        progressRef.current.style.width = `${progress}%`
      }
    }

    updateScrollState()
    window.addEventListener('scroll', updateScrollState, { passive: true })
    return () => window.removeEventListener('scroll', updateScrollState)
  }, [])

  return (
    <div className="scroll-progress-track" aria-hidden="true">
      <div ref={progressRef} className="scroll-progress-bar" />
    </div>
  )
}

interface RevealOnScrollProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function RevealOnScroll({
  children,
  className = '',
  delay = 0,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('visible')
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  )
}
