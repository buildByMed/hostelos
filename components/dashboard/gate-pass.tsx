"use client"

import { QRCodeSVG } from "qrcode.react"
import { ShieldCheck } from "lucide-react"

export function GatePass() {
  const passData = JSON.stringify({
    id: "GP-2026-04821",
    student: "Arjun Kumar",
    room: "C-214",
    valid: "2026-07-12",
  })

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card">
      <div className="flex items-center justify-between bg-primary px-5 py-4 text-primary-foreground">
        <div className="flex items-center gap-2">
          <ShieldCheck className="size-5" />
          <span className="font-semibold">QR Gate Pass</span>
        </div>
        <span className="rounded-full bg-primary-foreground/15 px-2.5 py-1 text-xs font-medium">Active</span>
      </div>

      <div className="flex flex-col items-center gap-4 p-6">
        <div className="rounded-2xl border border-border bg-background p-4">
          <QRCodeSVG value={passData} size={148} fgColor="#312e81" bgColor="transparent" level="M" />
        </div>

        <div className="w-full space-y-2 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Pass ID</span>
            <span className="font-medium">GP-2026-04821</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Student</span>
            <span className="font-medium">Arjun Kumar</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Valid Until</span>
            <span className="font-medium">Jul 12, 2026 • 10:00 PM</span>
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground">
          Show this code at the gate for quick verification by security.
        </p>
      </div>
    </div>
  )
}
