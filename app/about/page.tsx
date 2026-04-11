import Link from "next/link"
import { ArrowRight, Leaf, RefreshCcw, TrendingUp, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

const visionPoints = [
  {
    icon: Leaf,
    text: "Reduce environmental pollution by diverting waste from landfills and waterways.",
  },
  {
    icon: RefreshCcw,
    text: "Build a circular economy where every material gets a second life.",
  },
  {
    icon: TrendingUp,
    text: "Empower communities through economic opportunities in the waste value chain.",
  },
  {
    icon: Heart,
    text: "Create healthier living environments across Nigerian cities and towns.",
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Mission */}
      <section className="text-center relative lg:w-full h-[57em] lg:h-[97vh] bg-[url('/images/background.png')] bg-cover bg-center bg-no-repeat">
       <main className="absolute inset-0 bg-[#0a3d14] opacity-80 lg:px-30 py-40" aria-hidden="true">
         <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
          Our Mission
        </span>
        <h1 className="mt-4 text-balance text-7xl font-bold text-white md:text-5xl">
          Formalizing the Waste <br />Economy in Nigeria
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-background/70">
          Waste Exchange was created to bridge the gap between waste generators
          and recyclers. In Nigeria, millions of tonnes of recyclable materials
          end up in landfills every year simply because sellers and buyers
          can&apos;t find each other. Our platform changes that by providing a
          trusted, transparent marketplace that benefits people and the planet.
        </p>
       </main>
      </section>

      {/* Vision */}
      <div className="mx-auto max-w-4xl px-4 py-16 lg:px-8">
      <section className="mt-20">
        <h2 className="text-center text-2xl font-bold text-foreground md:text-3xl">
          Our Vision
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {visionPoints.map((point) => (
            <div
              key={point.text}
              className="flex gap-4 rounded-xl border border-border bg-card p-5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <point.icon className="h-5 w-5" />
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {point.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-20 flex flex-col items-center rounded-2xl bg-secondary p-10 text-center md:p-14">
        <h2 className="text-balance text-2xl font-bold text-secondary-foreground md:text-3xl">
          Join the Movement
        </h2>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          Whether you&apos;re a waste seller, recycler, or simply passionate
          about sustainability, there&apos;s a place for you on Waste Exchange.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button size="lg" asChild>
            <Link href="/sell">
              Start Selling
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/marketplace">Browse Marketplace</Link>
          </Button>
        </div>
      </section>
    </div>
    </>
  )
}
