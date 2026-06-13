"use client"

import { useState } from "react"
import { Bell, Search } from "lucide-react"
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar"
import { StatCards } from "@/components/dashboard/stat-cards"
import { ActivityFeed } from "@/components/dashboard/activity-feed"
import { MessMenu } from "@/components/dashboard/mess-menu"
import { QuickActions } from "@/components/dashboard/quick-actions"
import { GatePass } from "@/components/dashboard/gate-pass"

export function DashboardShell() {
  const [active, setActive] = useState("Dashboard")

  return (
    <div className="flex min-h-screen flex-col bg-background lg:flex-row">
      <DashboardSidebar active={active} onSelect={setActive} />

      <main className="flex-1">
        <header className="sticky top-0 z-20 flex items-center justify-between gap-4 border-b border-border bg-background/80 px-4 py-3 backdrop-blur-md sm:px-6">
          <div>
            <h1 className="text-lg font-semibold tracking-tight">Good morning, Arjun</h1>
            <p className="text-xs text-muted-foreground">Here&apos;s what&apos;s happening in your hostel today</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 sm:flex">
              <Search className="size-4 text-muted-foreground" />
              <input
                placeholder="Search..."
                className="w-36 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
            </div>
            <button
              className="relative flex size-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Notifications"
            >
              <Bell className="size-4" />
              <span className="absolute right-2 top-2 size-1.5 rounded-full bg-accent" />
            </button>
          </div>
        </header>

        <div className="mx-auto max-w-6xl space-y-6 p-4 sm:p-6">
          <StatCards />

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="space-y-6 lg:col-span-2">
              <ActivityFeed />
              <MessMenu />
            </div>
            <div className="space-y-6">
              <QuickActions />
              <GatePass />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
