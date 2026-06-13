import { BedDouble, Receipt, MessageSquareWarning, CalendarClock } from "lucide-react"
import { cn } from "@/lib/utils"

const stats = [
  {
    label: "Room Number",
    value: "C-214",
    sub: "Block C • Floor 2",
    icon: BedDouble,
    tone: "primary" as const,
  },
  {
    label: "Fee Status",
    value: "Paid",
    sub: "Next due Aug 1",
    icon: Receipt,
    tone: "success" as const,
  },
  {
    label: "Active Complaints",
    value: "2",
    sub: "1 in progress",
    icon: MessageSquareWarning,
    tone: "warning" as const,
  },
  {
    label: "Leave Requests",
    value: "1",
    sub: "Pending approval",
    icon: CalendarClock,
    tone: "accent" as const,
  },
]

const toneStyles: Record<string, string> = {
  primary: "bg-primary/10 text-primary",
  success: "bg-emerald-500/10 text-emerald-600",
  warning: "bg-amber-500/10 text-amber-600",
  accent: "bg-accent/10 text-accent",
}

export function StatCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <div
            key={stat.label}
            className="rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-sm"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">{stat.label}</span>
              <div className={cn("flex size-9 items-center justify-center rounded-lg", toneStyles[stat.tone])}>
                <Icon className="size-4" />
              </div>
            </div>
            <p className="mt-3 text-2xl font-semibold tracking-tight">{stat.value}</p>
            <p className="mt-1 text-xs text-muted-foreground">{stat.sub}</p>
          </div>
        )
      })}
    </div>
  )
}
