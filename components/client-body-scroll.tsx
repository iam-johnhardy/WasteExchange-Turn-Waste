'use client'

import { useEffect } from 'react'

export function ClientBodyScroll() {
  useEffect(() => {
    const onScroll = () => {
      document.body.style.setProperty('--scroll-y', `${window.scrollY}`)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return null
}
