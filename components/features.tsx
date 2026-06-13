import { BedDouble, MessageSquareWarning, CalendarCheck, Users, QrCode, Wallet } from "lucide-react"

const features = [
  {
    icon: BedDouble,
    title: "Room Allocation",
    desc: "Assign, swap, and track rooms with real-time occupancy maps and automated waitlists.",
  },
  {
    icon: MessageSquareWarning,
    title: "Complaint Management",
    desc: "Log, route, and resolve maintenance and service issues with full status tracking.",
  },
  {
    icon: CalendarCheck,
    title: "Leave Requests",
    desc: "Digital leave applications with parent and warden approvals in a single flow.",
  },
  {
    icon: Users,
    title: "Visitor Management",
    desc: "Pre-register guests, verify identity, and keep a secure, searchable visitor log.",
  },
  {
    icon: QrCode,
    title: "QR Gate Passes",
    desc: "Contactless entry and exit with time-bound QR passes scanned right at the gate.",
  },
  {
    icon: Wallet,
    title: "Fee Tracking",
    desc: "Automated invoices, payment reminders, and clear dues visibility for every student.",
  },
]

export function Features() {
  return (
    <section id="features" className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold text-primary">Everything in one place</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Run your entire hostel, end to end
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Six core modules designed for the daily reality of campus living, all connected through one clean interface.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-md hover:shadow-primary/10"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <f.icon className="size-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
