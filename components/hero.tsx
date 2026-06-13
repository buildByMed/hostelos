import { ArrowRight, Sparkles, TrendingUp, BedDouble, Bell, QrCode } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-36 md:pt-44">
      {/* subtle gradient backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[600px] bg-gradient-to-b from-primary/5 via-accent/5 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-24 -z-10 size-[480px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col items-start text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
            <Sparkles className="size-3.5 text-primary" />
            AI-powered hostel management
          </span>

          <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            One Platform for Every Hostel Operation
          </h1>

          <p className="mt-6 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Manage rooms, complaints, leave requests, visitors, fees, and gate passes from a single
            intelligent platform built for colleges and universities.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="rounded-xl"
              render={<a href="#student-portal" />}
            >
              View Student Portal
              <ArrowRight className="size-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-xl border-border bg-background/60"
              render={<a href="#dashboard" />}
            >
              Explore Dashboard
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
            <div>
              <p className="text-xl font-semibold text-foreground">120+</p>
              <p>Campuses</p>
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <p className="text-xl font-semibold text-foreground">45k</p>
              <p>Students managed</p>
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <p className="text-xl font-semibold text-foreground">99.9%</p>
              <p>Uptime</p>
            </div>
          </div>
        </div>

        <HeroMockup />
      </div>
    </section>
  )
}

function HeroMockup() {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 -top-6 -z-10 size-40 rounded-full bg-accent/15 blur-2xl"
      />
      <div className="rounded-3xl border border-border/60 bg-card/80 p-2 shadow-2xl shadow-primary/10 backdrop-blur-xl">
        <div className="rounded-2xl border border-border/60 bg-background">
          {/* window bar */}
          <div className="flex items-center gap-1.5 border-b border-border/60 px-4 py-3">
            <span className="size-2.5 rounded-full bg-destructive/40" />
            <span className="size-2.5 rounded-full bg-accent/40" />
            <span className="size-2.5 rounded-full bg-primary/40" />
            <span className="ml-3 text-xs font-medium text-muted-foreground">HostelOS — Admin Dashboard</span>
          </div>

          <div className="space-y-4 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-foreground">Good morning, Warden</p>
                <p className="text-xs text-muted-foreground">Block A · 320 residents</p>
              </div>
              <span className="rounded-lg bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">Live</span>
            </div>

            {/* stat cards */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: BedDouble, label: "Occupancy", value: "94%", tint: "text-primary" },
                { icon: Bell, label: "Open tickets", value: "12", tint: "text-accent" },
                { icon: QrCode, label: "Gate passes", value: "38", tint: "text-primary" },
              ].map((s) => (
                <div key={s.label} className="rounded-xl border border-border/60 bg-card p-3">
                  <s.icon className={`size-4 ${s.tint}`} />
                  <p className="mt-2 text-lg font-semibold text-foreground">{s.value}</p>
                  <p className="text-[11px] text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>

            {/* chart */}
            <div className="rounded-xl border border-border/60 bg-card p-4">
              <div className="flex items-center justify-between">
                <p className="text-xs font-medium text-foreground">Weekly check-ins</p>
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-primary">
                  <TrendingUp className="size-3" /> +18%
                </span>
              </div>
              <div className="mt-4 flex h-24 items-end gap-2">
                {[40, 65, 50, 80, 60, 95, 72].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t-md bg-gradient-to-t from-primary/30 to-primary" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
