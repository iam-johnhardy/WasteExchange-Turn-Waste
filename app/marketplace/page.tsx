"use client"

import { useEffect, useState, useMemo } from "react"
import { Search, SlidersHorizontal, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ListingCard, Listing } from "@/components/listing-card"
import { sampleListings } from "@/lib/data"
import { getListings } from "@/service/api"



const wasteTypes = [
  "All",
  "Plastic",
  "Metal",
  "Paper",
  "Glass",
  "E-Waste",
  "Rubber",
  "Textile",
]

const locations = [
  "All",
  "Lagos",
  "Abuja",
  "Port Harcourt",
  "Kano",
  "Ibadan",
  "Enugu",
  "Onitsha",
  "Benin City",

]

export default function MarketplacePage() {
  const [typeFilter, setTypeFilter] = useState("All")
  const [locationFilter, setLocationFilter] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [listings, setListings] = useState<Listing[]>(sampleListings)
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  useEffect(() => {
    const loadListings = async () => {
      try {
        const data = await getListings("Waste")
        console.log("BACKEND DATA:", data)
        const mappedListings: Listing[] = data.map((item: any) => ({
          id: String(item.id ?? item.owner_id ?? Math.random()),
          title: item.name ?? item.description ?? "Waste Listing",
          wasteType: item.category ?? "Other",
          quantity: item.quantity != null ? String(item.quantity) : "N/A",
          location: item.location ?? "Unknown",
          price:
            item.price != null && item.price !== ""
              ? `₦${item.price}`
              : "Contact seller",
          image:
            item.image_url && item.image_url !== ""
              ? item.image_url
              : "/images/plastic-waste.jpg",
              
        }))

        setListings(mappedListings)
        setErrorMessage(null)
      } catch (error) {
        console.error(error)
        setErrorMessage("Unable to load marketplace listings. Showing sample data.")
      } finally {
        setIsLoading(false)
      }
    }

    loadListings()
  }, [])

  const filteredListings = useMemo(() => {
    return listings.filter((listing) => {
      const matchesType =
        typeFilter === "All" || listing.wasteType === typeFilter
      const matchesLocation =
        locationFilter === "All" ||
        listing.location.toLowerCase().includes(locationFilter.toLowerCase())
      const matchesSearch =
        !searchQuery ||
        listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        listing.wasteType.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesType && matchesLocation && matchesSearch
    })
  }, [listings, typeFilter, locationFilter, searchQuery])

  const activeFilters =
    (typeFilter !== "All" ? 1 : 0) + (locationFilter !== "All" ? 1 : 0)

  function clearFilters() {
    setTypeFilter("All")
    setLocationFilter("All")
    setSearchQuery("")
  }

  const FilterPanel = () => (
    <div className="flex flex-col gap-5">
      <h3 className="text-sm font-semibold text-foreground">Filters</h3>

      <div className="flex flex-col gap-2">
        <Label className="text-xs text-muted-foreground">Waste Type</Label>
        <Select value={typeFilter} onValueChange={setTypeFilter}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {wasteTypes.map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-2">
        <Label className="text-xs text-muted-foreground">Location</Label>
        <Select value={locationFilter} onValueChange={setLocationFilter}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {locations.map((loc) => (
              <SelectItem key={loc} value={loc}>
                {loc}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {activeFilters > 0 && (
        <Button variant="ghost" size="sm" onClick={clearFilters}>
          Clear filters
        </Button>
      )}
    </div>
  )

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
          Marketplace
        </h1>
        <p className="mt-2 text-muted-foreground">
          Browse waste listings from sellers across Nigeria.
        </p>
      </div>

      {/* Search bar + mobile filter toggle */}
      <div className="mb-6 flex gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search listings..."
            className="pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button
          variant="outline"
          className="flex items-center gap-2 lg:hidden"
          onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
        >
          <SlidersHorizontal className="h-4 w-4" />
          Filters
          {activeFilters > 0 && (
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
              {activeFilters}
            </span>
          )}
        </Button>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="mb-6 rounded-xl border border-border bg-card p-5 lg:hidden">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-semibold text-foreground">Filters</h3>
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="rounded-lg p-1 text-muted-foreground hover:text-foreground"
              aria-label="Close filters"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <FilterPanel />
        </div>
      )}

      <div className="flex gap-8">
        {/* Desktop sidebar */}
        <aside className="hidden w-56 shrink-0 lg:block">
          <div className="sticky top-24 rounded-xl border border-border bg-card p-5">
            <FilterPanel />
          </div>
        </aside>

        {/* Listing grid */}
        <div className="flex-1">
          {isLoading ? (
            <div className="flex flex-col items-center py-20 text-center">
              <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary/20 border-t-primary" />
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                Loading marketplace listings...
              </h3>
            </div>
          ) : (
            <> 
              {errorMessage && (
                <div className="mb-4 rounded-xl border border-yellow-200 bg-yellow-50 p-4 text-sm text-yellow-900">
                  {errorMessage}
                </div>
              )}

              {filteredListings.length > 0 ? (
                <>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {filteredListings.length} listing
                    {filteredListings.length !== 1 ? "s" : ""} found
                  </p>
                  <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                    {filteredListings.map((listing) => (
                      <ListingCard key={listing.id} listing={listing} />
                    ))}
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center py-20 text-center">
                  <Search className="h-10 w-10 text-muted-foreground/50" />
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    No listings found
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Try adjusting your filters or search query.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-4"
                    onClick={clearFilters}
                  >
                    Clear all filters
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
