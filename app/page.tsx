import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { AIFeatures } from "@/components/ai-features"
import { DashboardPreview } from "@/components/dashboard-preview"
import { StudentPortal } from "@/components/student-portal"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Features />
      <AIFeatures />
      <DashboardPreview />
      <StudentPortal />
      <Footer />
    </main>
  )
}
