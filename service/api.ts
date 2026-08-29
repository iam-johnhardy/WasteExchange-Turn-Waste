const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://127.0.0.1:8000/"

type ApiResource = "Waste" | "Exchange"

export interface ApiListing {
  id: number
  name: string
  description: string
  quantity: number
  price: number
  category: string
  location: string
  image_url: string
  status: string
  created_at: string
  owner_id: number
  [key: string]: any
}

export interface ApiExchangeRequest {
  id: number
  waste_id: number
  requester_id: number
  status: string
  message: string
  created_at: string
  [key: string]: any
}

const normalizeResource = (resource: string): string => {
  const normalized = resource.trim().toLowerCase()

  if (normalized === "waste") return "waste"
  if (normalized === "exchange") return "exchange"

  throw new Error(`Unsupported API resource: ${resource}`)
}

const fetchCollection = async (endpoint: string) => {
  const normalizedBase = BASE_URL.replace(/\/+$/, "")
  const normalizedEndpoint = endpoint.replace(/^\/+/, "").replace(/\/+$/, "")
  const url = `${normalizedBase}/${normalizedEndpoint}`

  const response = await fetch(url, {
    cache: "no-store",
  })

  if (!response.ok) {
    throw new Error(`Failed to fetch ${normalizedEndpoint}: ${response.status}`)
  }

  const data = await response.json()
  return Array.isArray(data) ? data : [data]
}

export const getListings = async (resource: ApiResource) => {
  const endpoint = normalizeResource(resource)
  return fetchCollection(endpoint)
}

export const getWasteListings = async () => getListings("Waste")
export const getExchangeRequests = async (): Promise<ApiExchangeRequest[]> => fetchCollection("Exchange")
export const getExchangeListings = async (): Promise<ApiExchangeRequest[]> => getExchangeRequests()