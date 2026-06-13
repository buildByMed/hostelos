"use client"

import { useState } from "react"
import { Hexagon, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const links = [
  { label: "Features", href: "#features" },
  { label: "Student Portal", href: "#student-portal" },
  { label: "Admin Portal", href: "#dashboard" },
  { label: "AI Features", href: "#ai-features" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-border/60 bg-background/70 px-4 py-3 shadow-sm backdrop-blur-xl md:px-6">
        <a href="#" className="flex items-center gap-2">
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Hexagon className="size-5" />
          </span>
          <span className="text-base font-semibold tracking-tight text-foreground">
            HostelOS <span className="text-primary">AI</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-foreground"
            render={<a href="#student-portal" />}
          >
            Sign in
          </Button>
          <Button size="sm" className="rounded-lg" render={<a href="/dashboard" />}>
            Get started
          </Button>
        </div>

        <button
          className="flex size-9 items-center justify-center rounded-lg text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-border/60 bg-background/90 p-3 shadow-sm backdrop-blur-xl md:hidden">
          <div className="flex flex-col">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <Button size="sm" className="mt-2 rounded-lg" render={<a href="/dashboard" />}>
              Get started
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
