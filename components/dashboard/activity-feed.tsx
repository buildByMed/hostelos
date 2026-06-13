import { CheckCircle2, Clock, MessageSquareWarning, Receipt, QrCode } from "lucide-react"
import { cn } from "@/lib/utils"

const activity = [
  {
    icon: CheckCircle2,
    title: "Leave request approved",
    desc: "Weekend leave for Jul 12–14 approved by warden",
    time: "2h ago",
    tone: "text-emerald-600 bg-emerald-500/10",
  },
  {
    icon: MessageSquareWarning,
    title: "Complaint updated",
    desc: "Wi-Fi connectivity issue marked as in progress",
    time: "5h ago",
    tone: "text-amber-600 bg-amber-500/10",
  },
  {
    icon: QrCode,
    title: "Gate pass generated",
    desc: "Visitor pass created for Priya Sharma",
    time: "Yesterday",
    tone: "text-accent bg-accent/10",
  },
  {
    icon: Receipt,
    title: "Fee payment received",
    desc: "Hostel fee for July paid successfully",
    time: "3 days ago",
    tone: "text-primary bg-primary/10",
  },
  {
    icon: Clock,
    title: "Mess menu updated",
    desc: "This week's menu published by mess committee",
    time: "4 days ago",
    tone: "text-muted-foreground bg-secondary",
  },
]

export function ActivityFeed() {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <h3 className="font-semibold">Recent Activity</h3>
      <ol className="mt-4 flex flex-col gap-1">
        {activity.map((item, i) => {
          const Icon = item.icon
          return (
            <li key={i} className="flex items-start gap-3 rounded-lg px-2 py-2.5 transition-colors hover:bg-secondary/60">
              <div className={cn("mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg", item.tone)}>
                <Icon className="size-4" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium leading-snug">{item.title}</p>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
              <span className="shrink-0 text-xs text-muted-foreground">{item.time}</span>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
