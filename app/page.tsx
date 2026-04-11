import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Shield, UserCheck, Truck, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ListingCard } from "@/components/listing-card"
import { sampleListings } from "@/lib/data"
import { LiaUserShieldSolid } from "react-icons/lia";
import { GiReceiveMoney } from "react-icons/gi";
import { PiTractorFill } from "react-icons/pi";
import {  FaRecycle } from "react-icons/fa";


const features = [
  {
    icon: Shield,
    title: "Secure Transactions",
    description:
      "Every transaction is protected with our secure payment system, ensuring safety for both buyers and sellers.",
  },
  {
    icon: UserCheck,
    title: "Verified Buyers",
    description:
      "All buyers on the platform are verified recyclers and processors, so you can trade with confidence.",
  },
  {
    icon: Truck,
    title: "Scheduled Pickups",
    description:
      "Arrange convenient pickup times with logistics partners integrated directly into the platform.",
  },
  {
    icon: Leaf,
    title: "Impact Tracking",
    description:
      "Track your environmental contribution with real-time metrics on waste diverted from landfills.",
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-foreground">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt=""
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 py-24 text-center lg:px-8 lg:py-36">
          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium tracking-wide text-primary">
            Nigeria's Waste Marketplace
          </span>
          <h1 className="max-w-3xl text-balance text-4xl font-bold leading-tight tracking-tight text-background md:text-5xl lg:text-6xl">
            Turn Waste Into Value.
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-background/70 md:text-lg">
            Waste Exchange connects waste sellers with verified recyclers and
            buyers across Nigeria. Join the circular economy today.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" asChild>
              <Link href="/sell">
                Sell Waste
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-background/20 bg-transparent text-background hover:bg-background/10 hover:text-background"
              asChild
            >
              <Link href="/marketplace">Browse Marketplace</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-10">
            {[
              { icon:<PiTractorFill className='w-3 lg:w-6 h-3 lg:h-6 '/>, value: "2,500+", label: "Active Sellers" },
              { icon:<LiaUserShieldSolid className="text-[15px] "/>, value: "800+", label: "Verified Buyers" },
              { icon:<GiReceiveMoney className='w-3 lg:w-6 h-3 lg:h-6 '/>, value: "15K+", label: "Transactions" },
              { icon:<FaRecycle className='w-3 lg:w-6 h-3 lg:h-6  '/>, value: "4,200t", label: "Waste Recycled" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                
                  <div className="  flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#2DC04A] to-[#6cdb82] text-white mx-auto mb-3">
                    <p className="text-center font-bold ">
                  {stat.icon}
                  </p>

                            </div>
                
                <p className="text-2xl font-bold text-primary md:text-3xl">
                  {stat.value}
                </p>
                
                <p className="mt-1 text-xs text-background/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="text-center">
          <h2 className="text-balance text-2xl font-bold text-foreground md:text-3xl">
            Why Waste Exchange?
          </h2>
          <p className="mt-3 text-muted-foreground lg:w-2xl mx-auto text-sm leading-relaxed">
            Our platform provides comprehensive tools and features to make trading
            efficient, secure and profitable for all participants.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-card-foreground">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Marketplace Preview */}
      <section className="bg-muted/50 py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-balance text-2xl font-bold text-foreground md:text-3xl">
                Latest Listings
              </h2>
              <p className="mt-2 text-muted-foreground lg:w-2xl mx-auto text-sm leading-relaxed">
                Discover high-quality waste materials available for Purchase and recycling. Connect with waste generators and recyclers to
                find the right materials for your needs.
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/marketplace">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {sampleListings.slice(0, 4).map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="flex flex-col items-center rounded-2xl bg-primary p-10 text-center md:p-16">
          <h2 className="max-w-lg text-balance text-2xl font-bold text-primary-foreground md:text-3xl">
            Ready to turn your waste into revenue?
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-primary-foreground/80">
            Join thousands of sellers and recyclers on Nigeria&apos;s leading
            waste exchange platform.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button
              size="lg"
              variant="secondary"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              asChild
            >
              <Link href="/sell">Start Selling</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              asChild
            >
              <Link href="/how-it-works">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
