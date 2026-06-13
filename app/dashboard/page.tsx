import { DashboardShell } from "@/components/dashboard/dashboard-shell"

export const metadata = {
  title: "Student Dashboard — HostelOS AI",
  description: "Manage your room, complaints, leave, fees, mess menu, and gate passes.",
}

export default function DashboardPage() {
  return <DashboardShell />
}
