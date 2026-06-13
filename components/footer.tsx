import { Hexagon } from "lucide-react"

const columns = [
  {
    title: "Product",
    links: ["Room Allocation", "Complaints", "Leave Requests", "Gate Passes", "Fee Tracking"],
  },
  {
    title: "Platform",
    links: ["Student Portal", "Admin Portal", "AI Features", "Analytics", "Integrations"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Blog", "Security", "Contact"],
  },
]

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-secondary/40 px-4 py-14">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[1.5fr_repeat(3,1fr)]">
          <div>
            <a href="#" className="flex items-center gap-2">
              <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Hexagon className="size-5" />
              </span>
              <span className="text-base font-semibold tracking-tight text-foreground">
                HostelOS <span className="text-primary">AI</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              The intelligent platform powering hostel operations for colleges and universities worldwide.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-foreground">{col.title}</h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} HostelOS AI. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="transition-colors hover:text-foreground">Privacy</a>
            <a href="#" className="transition-colors hover:text-foreground">Terms</a>
            <a href="#" className="transition-colors hover:text-foreground">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
