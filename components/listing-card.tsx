import Image from "next/image"
import Link from "next/link"
import { MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RevealOnScroll } from "./client-body-scroll"

export interface Listing {
  id: string
  title: string
  wasteType: string
  quantity: string
  location: string
  price: string
  image: string
}

export function ListingCard({ listing }: { listing: Listing }) {
  return (
    <RevealOnScroll >
      <div className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={listing.image}
            alt={listing.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <span className="absolute left-3 top-3 rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-primary-foreground backdrop-blur-sm">
          {listing.wasteType}
        </span>
      </div>
      <div className="flex flex-col gap-3 p-4">
        <h3 className="text-base font-semibold text-card-foreground leading-snug">
          {listing.title}
        </h3>
        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="h-3.5 w-3.5 shrink-0" />
          <span>{listing.location}</span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-lg font-bold text-primary">{listing.price}</p>
            <p className="text-xs text-muted-foreground">{listing.quantity}</p>
          </div>
          <Button variant="outline" size="sm" asChild>
            <Link href={`/marketplace`}>View Details</Link>
          </Button>
        </div>
      </div>
    </div>
    </RevealOnScroll>
  )
}
