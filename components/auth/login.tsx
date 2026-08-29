// "use client"

// import Link from 'next/link'
// import { Input } from '../input/input'
// import { Button } from '@/components/ui/button'
// import { FaRegEye } from "react-icons/fa6";
// import { AiTwotoneLock } from "react-icons/ai";
// import { MdOutlineRecycling } from "react-icons/md";
// import { HiGlobeEuropeAfrica } from "react-icons/hi2";
// import { GoShieldCheck } from "react-icons/go";
// import { IoIosTrendingUp } from "react-icons/io";

// export const Login = () => {
//     return (
//         <div className="min-h-screen bg-slate-50 py-16">
//             <div className="mx-auto flex w-full max-w-6xl flex-col overflow-hidden rounded-4xl bg-white shadow-2xl sm:flex-row">

//                 <div className="relative flex-1 overflow-hidden sm:block">
//                     <img
//                         src="/images/login-image.png"
//                         alt="Login image"
//                         className="h-full w-full object-cover"
//                     />
//                     <div className="absolute inset-0 px-8 pt-7">
//                         <div className="flex items-center gap-2 pb-7">
//                             <img
//                                 src="/recycle-tree.webp"
//                                 alt="Logo"
//                                 className="h-full w-10 object-cover"
//                             />
//                             <div className="">
//                                 <h3 className='text-xl font-extrabold text-green-500'>waste Exchange</h3>
//                                 <h6 className='text-sm font-extrabold'>Management System</h6>
//                             </div>
//                         </div>
//                         <h3 className=" text-3xl font-bold text-green-500">
//                             Exchange Waste,
//                         </h3>
//                         <h3 className=" text-3xl font-bold uppercase text-slate-900">
//                             Create Value.
//                         </h3>
//                         <p className="mt-1 pr-40 text-sm font-bold text-slate-900">
//                             Sign in to manage your listings, track offers, and keep your waste trade moving.
//                         </p>

//                         <div className="bg-white rounded-sm flex items-center gap-2 p-3 text-center mt-45">
//                             <div className="text-center">
//                                 <MdOutlineRecycling  className='w-7 h-7 text-green-500 ml-7'/>
//                                 <h6 className='font-extrabold text-sm'>Waste Exchange</h6>
//                                 <p className=' text-[10px] text-slate-600'>Exchange Waste with other</p>
//                             </div>
//                             <div className="text-center p-2">
//                                 <GoShieldCheck  className='w-7 h-7 text-green-500 ml-8'/>
//                                 <h6 className='font-bold text-sm'>Secure & Reliable</h6>
//                                 <p className='text-slate-600 text-[10px]'>Save and Trusted Transactions</p>
//                             </div>
//                             <div className="">
//                                 <HiGlobeEuropeAfrica  className='w-7 h-7 text-green-500 ml-8'/>
//                                 <h6 className='font-bold text-sm'>Trace & Manage</h6>
//                                 <p className='text-slate-600 text-[10px]'>Trace your waste exchange</p>
//                             </div>
//                                                         <div className="">
//                                 <IoIosTrendingUp  className='w-7 h-7 text-green-500 ml-8'/>
//                                 <h6 className='font-extrabold'>Sustainable Future</h6>
//                                 <p className='text-slate-600 text-[10px]'>Together for a cleaner tomorrow</p>
//                             </div>
                            
//                             </div>
//                     </div>
                    

//                 </div>

//                 <div className="w-full flex-1 p-10 sm:p-14">
//                     <div className="max-w-md mx-auto">
//                         <h1 className="text-3xl font-bold text-slate-900">Sign In</h1>
//                         <p className="mt-2 text-sm text-slate-600">
//                             Enter your email and password to access your Waste Exchange account.
//                         </p>

//                         <form className="mt-8 space-y-5">
//                             <Input
//                                 label="Email"
//                                 type="email"
//                                 id="email"
//                                 placeholder="you@example.com"
//                                 className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
//                             />

//                             <AiTwotoneLock className='absolute centre-'/>
//                             <Input
//                                 label="Password"
//                                 type="password"
//                                 id="password"
//                                 placeholder="••••••••"
//                                 className="relative mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                                
//                             />
//                             <FaRegEye />
//                             <div className="flex items-center justify-between">
//                                 <div className="flex gap-2">
//                                     <input type="checkbox" name="" id="" />
//                                     <label htmlFor="input">Remember me</label>
//                                 </div>
//                                 <span className='text-green-500'>Forgot Password?</span>

//                             </div>

//                             <Button type="submit" className="w-full">Sign In</Button>
//                         </form>

//                         <p className="mt-6 text-center text-sm text-slate-600">
//                             New here?{' '}
//                             <Link href="/sign-up" className="font-medium text-primary hover:underline">
//                                 Create an account
//                             </Link>
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }


"use client"

import { useState, FormEvent } from 'react'
import Link from 'next/link'
import { Input } from '../input/input'
import { Button } from '@/components/ui/button'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { AiTwotoneLock } from "react-icons/ai";
import { MdOutlineRecycling } from "react-icons/md";
import { HiGlobeEuropeAfrica } from "react-icons/hi2";
import { GoShieldCheck } from "react-icons/go";
import { IoIosTrendingUp } from "react-icons/io";
import { MdOutlinePerson2 } from "react-icons/md";

const FEATURES = [
    {
        icon: MdOutlineRecycling,
        title: "Waste Exchange",
        description: "Exchange waste with others",
    },
    {
        icon: GoShieldCheck,
        title: "Secure & Reliable",
        description: "Safe and trusted transactions",
    },
    {
        icon: HiGlobeEuropeAfrica,
        title: "Trace & Manage",
        description: "Trace your waste exchange",
    },
    {
        icon: IoIosTrendingUp,
        title: "Sustainable Future",
        description: "Together for a cleaner tomorrow",
    },
]

export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [rememberMe, setRememberMe] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setError(null)
        setIsSubmitting(true)

        try {
            // TODO: replace with your real sign-in request (API call / auth provider)
            await new Promise((resolve) => setTimeout(resolve, 800))
        } catch (err) {
            setError('Something went wrong. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="min-h-screen bg-slate-50 py-16">
            <div className="mx-auto flex w-full max-w-6xl flex-col overflow-hidden rounded-4xl bg-white shadow-2xl sm:flex-row">

                {/* Left panel: marketing image + feature highlights */}
                <div className="relative flex-1 overflow-hidden sm:block">
                    <img
                        src="/images/login-image.png"
                        alt="Waste Exchange platform preview"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 flex h-full flex-col px-8 pt-7 pb-8">
                        <div className="flex items-center gap-2 pb-7">
                            <img
                                src="/recycle-tree.webp"
                                alt="Waste Exchange logo"
                                className="h-10 w-10 object-cover"
                            />
                            <div>
                                <h3 className="text-sm font-extrabold text-green-500">Waste Exchange</h3>
                                <h6 className="text-[10px]">Management System</h6>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-green-500">
                            Exchange Waste,
                        </h3>
                        <h3 className="text-2xl font-bold uppercase text-slate-900">
                            Create Value.
                        </h3>
                        <p className="mt-1 pr-30 text-[12px]  text-slate-900">
                            A smart platform to manage waste exchanfe efficiently and build a cleaner, greener future.
                        </p>

                        {/* mt-auto pins this to the bottom regardless of panel height,
                            replacing the old fixed mt-45 hack */}
                        <div className="mt-auto grid grid-cols-4 gap-2 rounded-sm bg-white p-3">
                            {FEATURES.map(({ icon: Icon, title, description }) => (
                                <div key={title} className="flex flex-col items-center text-center">
                                    <Icon className="h-7 w-7 text-green-500" aria-hidden="true" />
                                    <h6 className="text-[13px] font-bold">{title}</h6>
                                    <p className="text-[10px] text-slate-600">{description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right panel: sign-in form */}
                <div className="w-full flex-1 p-10 sm:p-14">
                    <div className="mx-auto max-w-md">
                        <h1 className="text-3xl font-bold text-slate-900">Sign In</h1>
                        <p className="mt-2 text-sm text-slate-600">
                            Enter your email and password to access your Waste Exchange account.
                        </p>

                        <form className="mt-8 space-y-5" onSubmit={handleSubmit} noValidate>
                           <div className="relative">
                             <MdOutlinePerson2  className='absolute left-3 top-13 -translate-y-1/2'/>
                            <Input
                                label="Email"
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e: any) => setEmail(e.target.value)}
                                required
                                className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 pl-10 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                            />
                           </div>

                            {/* Lock + eye icons are positioned absolutely inside this
                                relative wrapper. If your Input component renders its own
                                <label> above the <input>, you may need to nudge the
                                top offset below (or pass icons into Input as props,
                                if it supports that) so they line up with the field
                                itself rather than the label+field block. */}
                            <div className="relative">
                                <AiTwotoneLock
                                    className="pointer-events-none absolute left-3 top-13 -translate-y-1/2 text-slate-400"
                                    aria-hidden="true"
                                />
                                <Input
                                    label="Password"
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e: any) => setPassword(e.target.value)}
                                    required
                                    className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 pl-10 pr-10 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword((prev) => !prev)}
                                    className="absolute right-3 top-13 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                                >
                                    {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                                </button>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        id="remember-me"
                                        checked={rememberMe}
                                        onChange={(e) => setRememberMe(e.target.checked)}
                                        className="h-4 w-4 rounded border-slate-300"
                                    />
                                    <label htmlFor="remember-me" className="text-sm text-slate-700">
                                        Remember me
                                    </label>
                                </div>
                                <Link href="/forgot-password" className="text-sm text-green-500 hover:underline">
                                    Forgot Password?
                                </Link>
                            </div>

                            {error && (
                                <p role="alert" className="text-sm text-red-600">
                                    {error}
                                </p>
                            )}

                            <Button type="submit" className="w-full" disabled={isSubmitting}>
                                {isSubmitting ? 'Signing in...' : 'Sign In'}
                            </Button>
                        </form>

                        <p className="mt-6 text-center text-sm text-slate-600">
                            New here?{' '}
                            <Link href="/sign-up" className="font-medium text-primary hover:underline">
                                Create an account
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}