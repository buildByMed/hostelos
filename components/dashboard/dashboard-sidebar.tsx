"use client"

import { useState } from "react"
import {
  LayoutDashboard,
  BedDouble,
  MessageSquareWarning,
  CalendarClock,
  Receipt,
  UtensilsCrossed,
  QrCode,
  Sparkles,
  GraduationCap,
  Menu,
  X,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Room", icon: BedDouble },
  { label: "Complaints", icon: MessageSquareWarning },
  { label: "Leave Requests", icon: CalendarClock },
  { label: "Fees", icon: Receipt },
  { label: "Mess Menu", icon: UtensilsCrossed },
  { label: "Visitor Pass", icon: QrCode },
  { label: "AI Assistant", icon: Sparkles },
]

export function DashboardSidebar({
  active,
  onSelect,
}: {
  active: string
  onSelect: (label: string) => void
}) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <div className="flex items-center justify-between border-b border-border px-4 py-3 lg:hidden">
        <div className="flex items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <GraduationCap className="size-5" />
          </div>
          <span className="font-semibold">HostelOS AI</span>
        </div>
        <Button variant="ghost" size="icon" onClick={() => setMobileOpen((v) => !v)} aria-label="Toggle menu">
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </div>

      <aside
        className={cn(
          "z-30 w-full shrink-0 border-r border-border bg-card lg:block lg:w-64",
          mobileOpen ? "block" : "hidden",
        )}
      >
        <div className="hidden items-center gap-2 px-5 py-5 lg:flex">
          <div className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <GraduationCap className="size-5" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-semibold">HostelOS AI</span>
            <span className="text-xs text-muted-foreground">Student Portal</span>
          </div>
        </div>

        <nav className="flex flex-col gap-1 p-3">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = active === item.label
            return (
              <button
                key={item.label}
                onClick={() => {
                  onSelect(item.label)
                  setMobileOpen(false)
                }}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                )}
              >
                <Icon className="size-4" />
                {item.label}
              </button>
            )
          })}
        </nav>

        <div className="mt-auto p-3">
          <div className="flex items-center gap-3 rounded-xl border border-border bg-secondary/50 p-3">
            <div className="flex size-9 items-center justify-center rounded-full bg-accent/15 text-sm font-semibold text-accent">
              AK
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-medium">Arjun Kumar</span>
              <span className="text-xs text-muted-foreground">Block C • Room 214</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
