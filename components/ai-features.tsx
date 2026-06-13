import { Brain, Bot, BarChart3, ScanEye } from "lucide-react"

const aiFeatures = [
  {
    icon: Brain,
    title: "AI Complaint Classification",
    desc: "Incoming complaints are automatically categorized, prioritized, and routed to the right team in seconds.",
    tag: "Automation",
  },
  {
    icon: Bot,
    title: "AI Hostel Assistant",
    desc: "A 24/7 conversational assistant answers student questions on rules, fees, leave status, and more.",
    tag: "Chat",
  },
  {
    icon: BarChart3,
    title: "Occupancy Analytics",
    desc: "Predictive insights forecast room demand and highlight underused blocks across every campus.",
    tag: "Insights",
  },
  {
    icon: ScanEye,
    title: "Crowd Detection Alerts",
    desc: "Computer vision flags unusual crowding at gates and common areas with instant safety alerts.",
    tag: "Safety",
  },
]

export function AIFeatures() {
  return (
    <section id="ai-features" className="relative overflow-hidden px-4 py-20 md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-secondary/40 via-background to-background"
      />
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
            Intelligence built in
          </span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            AI that does the heavy lifting
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Smart automation works quietly in the background so your staff can focus on students, not paperwork.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {aiFeatures.map((f) => (
            <div
              key={f.title}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/70 p-7 backdrop-blur-md transition-all hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="flex items-start justify-between">
                <span className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg shadow-primary/20">
                  <f.icon className="size-6" />
                </span>
                <span className="rounded-full border border-border/60 bg-background/60 px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
                  {f.tag}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
