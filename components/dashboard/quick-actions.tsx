import { MessageSquareWarning, CalendarPlus, QrCode, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const actions = [
  {
    label: "Raise Complaint",
    desc: "Report a maintenance or facility issue",
    icon: MessageSquareWarning,
    tone: "bg-amber-500/10 text-amber-600",
  },
  {
    label: "Apply Leave",
    desc: "Request hostel leave for approval",
    icon: CalendarPlus,
    tone: "bg-primary/10 text-primary",
  },
  {
    label: "Generate Gate Pass",
    desc: "Create a visitor or outing pass",
    icon: QrCode,
    tone: "bg-accent/10 text-accent",
  },
]

export function QuickActions() {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <h3 className="font-semibold">Quick Actions</h3>
      <div className="mt-4 flex flex-col gap-2">
        {actions.map((action) => {
          const Icon = action.icon
          return (
            <button
              key={action.label}
              className="group flex items-center gap-3 rounded-xl border border-border bg-secondary/30 p-3 text-left transition-colors hover:border-primary/30 hover:bg-primary/5"
            >
              <div className={cn("flex size-10 shrink-0 items-center justify-center rounded-lg", action.tone)}>
                <Icon className="size-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium">{action.label}</p>
                <p className="text-xs text-muted-foreground">{action.desc}</p>
              </div>
              <ChevronRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
            </button>
          )
        })}
      </div>
    </div>
  )
}
