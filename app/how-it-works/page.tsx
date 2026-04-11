import { ClipboardList, Users, Truck, Banknote } from "lucide-react"

const steps = [
  {
    icon: ClipboardList,
    title: "List Your Waste",
    description:
      "Create a listing with details about the type, quantity, and condition of your waste. Add photos and set your price.",
  },
  {
    icon: Users,
    title: "Connect with Buyers",
    description:
      "Verified recyclers and buyers browse your listing and express interest. Review offers and choose the best match.",
  },
  {
    icon: Truck,
    title: "Schedule Pickup",
    description:
      "Coordinate a convenient pickup time with integrated logistics partners. We handle the heavy lifting for you.",
  },
  {
    icon: Banknote,
    title: "Get Paid",
    description:
      "Receive secure payment directly to your account once the waste has been collected and verified by the buyer.",
  },
]

export default function HowItWorksPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 lg:px-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
          How It Works
        </h1>
        <p className="mt-3 text-muted-foreground">
          Selling your waste is simple. Follow these four steps to get started.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative mt-14">
        {/* Connector line */}
        <div className="absolute left-6 top-0 hidden h-full w-px bg-border md:left-8 md:block" />

        <div className="flex flex-col gap-10">
          {steps.map((step, i) => (
            <div key={step.title} className="relative flex gap-5 md:gap-7">
              {/* Step circle */}
              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-card md:h-16 md:w-16">
                <step.icon className="h-5 w-5 text-primary md:h-6 md:w-6" />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-1 pt-2 md:pt-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  Step {i + 1}
                </span>
                <h3 className="text-lg font-bold text-foreground md:text-xl">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
