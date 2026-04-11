"use client"

import { useState } from "react"
import { Upload, ImageIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const wasteTypes = [
  "Plastic",
  "Metal",
  "Paper",
  "Glass",
  "E-Waste",
  "Rubber",
  "Textile",
  "Organic",
  "Other",
]

export default function SellPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="mx-auto flex max-w-lg flex-col items-center px-4 py-24 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <Upload className="h-7 w-7 text-primary" />
        </div>
        <h2 className="mt-5 text-2xl font-bold text-foreground">
          Listing Submitted!
        </h2>
        <p className="mt-2 text-muted-foreground">
          Your waste listing has been posted. Verified buyers will be able to see
          it on the marketplace shortly.
        </p>
        <Button className="mt-6" onClick={() => setSubmitted(false)}>
          Post Another Listing
        </Button>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 lg:px-8">
      {/* Page heading */}
      <div className="mb-10 text-center">
        <h1 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
          Sell Your Waste
        </h1>
        <p className="mt-3 text-muted-foreground">
          Fill in the details below to list your waste on the marketplace.
        </p>
      </div>

      {/* Form card */}
      <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Waste Type */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="waste-type">Waste Type</Label>
            <Select required>
              <SelectTrigger id="waste-type">
                <SelectValue placeholder="Select waste type" />
              </SelectTrigger>
              <SelectContent>
                {wasteTypes.map((type) => (
                  <SelectItem key={type} value={type.toLowerCase()}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Quantity & Price row */}
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="quantity">Quantity (kg)</Label>
              <Input
                id="quantity"
                type="number"
                placeholder="e.g. 500"
                required
                min={1}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="price">Price (NGN)</Label>
              <Input
                id="price"
                type="number"
                placeholder="e.g. 75000"
                required
                min={0}
              />
            </div>
          </div>

          {/* Location */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              placeholder="e.g. Lagos, Nigeria"
              required
            />
          </div>

          {/* Image upload */}
          <div className="flex flex-col gap-2">
            <Label>Image</Label>
            <label
              htmlFor="image-upload"
              className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-border bg-muted/40 py-10 text-muted-foreground transition-colors hover:border-primary/40 hover:bg-muted"
            >
              <ImageIcon className="h-8 w-8" />
              <span className="text-sm font-medium">
                Click to upload an image
              </span>
              <span className="text-xs">PNG, JPG up to 5 MB</span>
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                className="sr-only"
              />
            </label>
          </div>

          {/* Description */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Describe the condition and any additional details about the waste..."
              rows={4}
            />
          </div>

          {/* Submit */}
          <Button type="submit" size="lg" className="mt-2">
            Post Listing
          </Button>
        </form>
      </div>
    </div>
  )
}
