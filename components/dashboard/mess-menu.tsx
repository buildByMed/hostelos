import { cn } from "@/lib/utils"

const menu = [
  {
    day: "Today",
    highlight: true,
    breakfast: "Aloo Paratha, Curd",
    lunch: "Rajma, Rice, Salad",
    dinner: "Paneer Butter Masala, Roti",
  },
  {
    day: "Tomorrow",
    highlight: false,
    breakfast: "Idli, Sambar",
    lunch: "Chole, Jeera Rice",
    dinner: "Veg Biryani, Raita",
  },
  {
    day: "Wednesday",
    highlight: false,
    breakfast: "Poha, Tea",
    lunch: "Dal Tadka, Rice",
    dinner: "Mix Veg, Roti, Kheer",
  },
]

export function MessMenu() {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">Upcoming Mess Menu</h3>
        <span className="text-xs text-muted-foreground">This week</span>
      </div>
      <div className="mt-4 flex flex-col gap-3">
        {menu.map((d) => (
          <div
            key={d.day}
            className={cn(
              "rounded-xl border p-4",
              d.highlight ? "border-primary/30 bg-primary/5" : "border-border bg-secondary/30",
            )}
          >
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">{d.day}</span>
              {d.highlight && (
                <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-medium text-primary">
                  Live
                </span>
              )}
            </div>
            <dl className="mt-2 grid grid-cols-1 gap-1.5 text-sm sm:grid-cols-3">
              <div>
                <dt className="text-xs text-muted-foreground">Breakfast</dt>
                <dd className="text-foreground">{d.breakfast}</dd>
              </div>
              <div>
                <dt className="text-xs text-muted-foreground">Lunch</dt>
                <dd className="text-foreground">{d.lunch}</dd>
              </div>
              <div>
                <dt className="text-xs text-muted-foreground">Dinner</dt>
                <dd className="text-foreground">{d.dinner}</dd>
              </div>
            </dl>
          </div>
        ))}
      </div>
    </div>
  )
}
