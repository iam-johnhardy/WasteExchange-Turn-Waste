import Link from "next/link"
import { LuMessagesSquare } from "react-icons/lu";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { RevealOnScroll } from "./client-body-scroll";

const footerLinks = {
  Platform: [
    { href: "/marketplace", label: "Marketplace" },
    { href: "/sell", label: "Sell Waste" },
    { href: "/how-it-works", label: "How It Works" },
  ],
  Company: [
    { href: "/about", label: "About" },
    { href: "/careers", label: "Careers" },
    { href: "/blog", label: "Blog" },
  ],
}

export function Footer() {
  return (
    <RevealOnScroll >
      <footer className=" relative lg:w-full h-[57em] lg:h-[60vh] bg-[url('/images/image.png')] bg-cover bg-center bg-no-repeat">
        <div className=" px-4 py-15 lg:px-8 absolute inset-0 bg-[#0a3d14] opacity-85">
          <div className="grid md:grid-cols-5 max-w-5xl mx-auto">
            {/* Brand */}
            <div className="md:col-span-2 mr-0">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg ">
                <img src="/recycle-tree.webp" alt="" className="size-9"/>
              </div>
              <span className="text-lg font-bold text-card">
                Waste<span className="text-primary">Exchange</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-card">
              Connecting waste sellers with verified recyclers and buyers across
              Nigeria. Building a sustainable circular economy, one transaction
              at a time.
            </p>
            {/* Social icons */}
            <div className="mt-5 flex gap-3">
              {["X", "In", "Fb"].map((icon) => (
                <span
                  key={icon}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  {icon}
                </span>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className="ml-0">
              <h4 className="text-sm font-semibold text-card">{heading}</h4>
              <ul className="mt-2 flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-card transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className='text-start lg:text-left mt-10 md:mt-0 w-full lg:w-[30em]'>
            <h5 className='mb-3 text-lg font-bold text-white'>Contact</h5>
            <div className="flex items-center gap-2 mb-2">
              <LuMessagesSquare className='w-5 h-5 text-white' />
              <p className="text-white">hello@wastexchange.com</p>
            </div>

            <div className="flex items-center gap-2 mb-2">
              <FiPhone className='w-5 h-5 text-white' />
              <p className="text-white">+1 (345) 456-7890</p>
            </div>

            <div className="block lg:flex items-center gap-2 mb-2">
              <IoLocationOutline className='w-5 h-5 text-white' />
              <p className="text-white">VGC, Lagos</p>
            </div>

            <h5 className="text-sm md:text-xl text-white font-bold mb-2">Join Us in Building a Sustainable Future</h5>
            <p className="text-sm text-white w-55 mb-2">Connect with us to turn your waste into revenue and contribute to a greener planet.</p>
            <div className="flex items-center gap-2 mb-4 lg:mb-0">
              <input type="text" placeholder='Enter your email..' required className='bg-white w-55 py-2 lg:py-3 lg:px-5 rounded-md' />
              <button className='flex text-[14px] items-center bg-white hover:bg-green-600 text-gray-800 hover:text-white font-bold py-3 px-2 rounded-md transition-colors duration-300'>
                Get Started
              </button>
            </div>
          </div>
        </div>



        <div className="block lg:flex items-center justify-between lg:mt-5 border-t border-gray-200/50 pt-5">
          <div className="flex items-center lg:gap-10 text-white">
            <Link href="/privacy-policy"><p className="text-sm lg:text-md">Privacy Policy</p></Link>
            <Link href="/terms-of-service"><p className="text-sm lg:text-md">Term of Service</p></Link>
            <Link href="/cookie-policy"><p className="text-sm lg:text-md">Cookie Policy</p></Link>
            <Link href="/support"><p className="text-sm lg:text-md">Support</p></Link>
          </div>
          <div className="text-center text-white pt-5 lg:pt-0">
            <p className="text-sm">&copy; {new Date().getFullYear()} WasteExchange. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
    </RevealOnScroll>
  )
}
