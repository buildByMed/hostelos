import { TrendingUp, TrendingDown, BedDouble, Wallet, MessageSquareWarning, Users } from "lucide-react"

const stats = [
  { icon: BedDouble, label: "Total Occupancy", value: "1,842", delta: "+4.2%", up: true },
  { icon: Wallet, label: "Fees Collected", value: "$284k", delta: "+12%", up: true },
  { icon: MessageSquareWarning, label: "Open Complaints", value: "27", delta: "-18%", up: false },
  { icon: Users, label: "Visitors Today", value: "146", delta: "+6%", up: true },
]

const occupancy = [62, 78, 70, 88, 74, 95, 82, 90, 68, 84, 92, 79]
const blocks = [
  { name: "Block A", pct: 94 },
  { name: "Block B", pct: 81 },
  { name: "Block C", pct: 67 },
  { name: "Block D", pct: 88 },
]

export function DashboardPreview() {
  return (
    <section id="dashboard" className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold text-primary">Admin Portal</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            A dashboard wardens actually enjoy
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Real-time analytics, occupancy trends, and operational health, all at a glance.
          </p>
        </div>

        <div className="mt-14 rounded-3xl border border-border/60 bg-card/70 p-4 shadow-xl shadow-primary/5 backdrop-blur-md sm:p-6">
          {/* stat row */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-border/60 bg-background p-4">
                <div className="flex items-center justify-between">
                  <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <s.icon className="size-4.5" />
                  </span>
                  <span
                    className={`inline-flex items-center gap-1 text-xs font-medium ${
                      s.up ? "text-primary" : "text-accent"
                    }`}
                  >
                    {s.up ? <TrendingUp className="size-3" /> : <TrendingDown className="size-3" />}
                    {s.delta}
                  </span>
                </div>
                <p className="mt-3 text-2xl font-semibold text-foreground">{s.value}</p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-3">
            {/* big chart */}
            <div className="rounded-2xl border border-border/60 bg-background p-5 lg:col-span-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-foreground">Monthly Occupancy</p>
                  <p className="text-xs text-muted-foreground">Last 12 months</p>
                </div>
                <span className="rounded-lg bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
                  2024
                </span>
              </div>
              <div className="mt-6 flex h-44 items-end gap-2">
                {occupancy.map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-md bg-gradient-to-t from-primary/20 to-primary transition-opacity hover:opacity-80"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>

            {/* block occupancy */}
            <div className="rounded-2xl border border-border/60 bg-background p-5">
              <p className="text-sm font-semibold text-foreground">Occupancy by Block</p>
              <div className="mt-5 space-y-4">
                {blocks.map((b) => (
                  <div key={b.name}>
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-medium text-foreground">{b.name}</span>
                      <span className="text-muted-foreground">{b.pct}%</span>
                    </div>
                    <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-secondary">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-accent to-primary"
                        style={{ width: `${b.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
