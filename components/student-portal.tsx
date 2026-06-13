import { BedDouble, CalendarCheck, MessageSquareWarning, QrCode, CheckCircle2, Clock } from "lucide-react"

export function StudentPortal() {
  return (
    <section id="student-portal" className="relative overflow-hidden px-4 py-20 md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-background via-secondary/30 to-background"
      />
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold text-primary">Student Portal</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Everything a student needs, in their pocket
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Room details, leave requests, complaints, and gate passes, all from one friendly portal.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {/* Room info */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <BedDouble className="size-5" />
              </span>
              <div>
                <h3 className="font-semibold text-foreground">Room Information</h3>
                <p className="text-xs text-muted-foreground">Your current allocation</p>
              </div>
            </div>
            <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
              {[
                ["Block", "A — 3rd Floor"],
                ["Room No.", "A-308"],
                ["Bed", "Window · #2"],
                ["Roommate", "J. Patel"],
              ].map(([k, v]) => (
                <div key={k} className="rounded-xl border border-border bg-background p-3">
                  <dt className="text-xs text-muted-foreground">{k}</dt>
                  <dd className="mt-0.5 font-medium text-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Leave requests */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <CalendarCheck className="size-5" />
              </span>
              <div>
                <h3 className="font-semibold text-foreground">Leave Requests</h3>
                <p className="text-xs text-muted-foreground">Recent applications</p>
              </div>
            </div>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                { reason: "Home visit — Diwali", date: "Nov 1–5", status: "Approved", ok: true },
                { reason: "Medical leave", date: "Oct 18", status: "Approved", ok: true },
                { reason: "Weekend outing", date: "Dec 2", status: "Pending", ok: false },
              ].map((l) => (
                <li key={l.reason} className="flex items-center justify-between rounded-xl border border-border bg-background p-3">
                  <div>
                    <p className="font-medium text-foreground">{l.reason}</p>
                    <p className="text-xs text-muted-foreground">{l.date}</p>
                  </div>
                  <span
                    className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium ${
                      l.ok ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"
                    }`}
                  >
                    {l.ok ? <CheckCircle2 className="size-3" /> : <Clock className="size-3" />}
                    {l.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Complaints */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <MessageSquareWarning className="size-5" />
              </span>
              <div>
                <h3 className="font-semibold text-foreground">Complaints</h3>
                <p className="text-xs text-muted-foreground">Tracked in real time</p>
              </div>
            </div>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                { title: "Leaking tap in bathroom", cat: "Plumbing", status: "In progress" },
                { title: "Wi-Fi not working", cat: "Network", status: "Resolved" },
              ].map((c) => (
                <li key={c.title} className="rounded-xl border border-border bg-background p-3">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-foreground">{c.title}</p>
                    <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
                      {c.status}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">Category · {c.cat}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* QR Gate pass */}
          <div className="flex flex-col rounded-2xl border border-transparent bg-gradient-to-br from-primary to-accent p-6 text-primary-foreground shadow-md shadow-primary/20">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-xl bg-primary-foreground/15">
                <QrCode className="size-5" />
              </span>
              <div>
                <h3 className="font-semibold">QR Gate Pass</h3>
                <p className="text-xs text-primary-foreground/80">Valid until 9:00 PM today</p>
              </div>
            </div>
            <div className="mt-5 flex flex-1 items-center justify-center">
              <div className="rounded-2xl bg-background p-4">
                <QrPlaceholder />
              </div>
            </div>
            <p className="mt-4 text-center text-xs text-primary-foreground/80">
              Pass #GP-4821 · Scan at the main gate
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function QrPlaceholder() {
  // simple decorative QR grid
  const cells = Array.from({ length: 49 })
  return (
    <div className="grid size-28 grid-cols-7 gap-0.5">
      {cells.map((_, i) => (
        <div
          key={i}
          className={`rounded-[2px] ${(i * 7 + (i % 5) + (i % 3)) % 3 === 0 ? "bg-foreground" : "bg-transparent"}`}
        />
      ))}
    </div>
  )
}
