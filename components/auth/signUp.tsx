"use client"

import { useState, type ChangeEvent } from 'react'
import Link from 'next/link'
import { Input } from '../input/input'
import { Button } from '@/components/ui/button'
import { CITIES } from '../../lib/data'

export const SignUp = () => {
  const [inputValue, setInputValue] = useState('')
  const [selected, setSelected] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const values = e.target.value
    setInputValue(values)
    setSelected(false)
  }

  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col overflow-hidden rounded-4xl bg-white shadow-2xl sm:flex-row">
        <div className="relative hidden flex-1 overflow-hidden bg-primary sm:block">
          <img
             src="/images/login-image.png"
                        alt="Waste Exchange platform preview"
                        className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/70" />
          <div className="absolute inset-0 flex items-center justify-center px-8">
            <div className="max-w-xs text-center text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-500">
                Waste Exchange
              </p>
              <h2 className="mt-6 text-3xl font-bold">Create Your Account</h2>
              <p className="mt-4 text-sm leading-6 text-white/80">
                Start selling waste, connect with verified buyers, and track your deliveries.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex-1 p-10 sm:p-14">
          <div className="max-w-md mx-auto">
            <h1 className="text-3xl font-bold text-slate-900">Sign Up</h1>
            <p className="mt-2 text-sm text-slate-600">
              Create an account to start listing waste materials and receiving offers.
            </p>

            <form className="mt-8 space-y-5">
              <Input
                label="Full Name"
                type="text"
                id="name"
                placeholder="Your full name"
                className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <Input
                label="Email"
                type="email"
                id="email"
                placeholder="you@example.com"
                className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <Input
                label="Password"
                type="password"
                id="password"
                placeholder="Create a password"
                className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <Input
                label="Confirm Password"
                type="password"
                id="confirm-password"
                placeholder="Confirm password"
                className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <Input
                label="Location"
                type="text"
                id="location"
                value={inputValue}
                onChange={handleChange}
                placeholder="Search for city..."
                className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <Button type="submit" className="w-full">Create Account</Button>
            </form>

            <p className="mt-6 text-center text-sm text-slate-600">
              Already have an account?{' '}
              <Link href="/login" className="font-medium text-primary hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
