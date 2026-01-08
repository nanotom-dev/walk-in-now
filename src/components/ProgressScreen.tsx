import { BarChart3, TrendingUp, Calendar, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    label: "This Week",
    value: 3,
    icon: Calendar,
    color: "text-primary",
    bg: "bg-accent",
  },
  {
    label: "This Month",
    value: 12,
    icon: TrendingUp,
    color: "text-success",
    bg: "bg-success/10",
  },
  {
    label: "Total Attended",
    value: 28,
    icon: CheckCircle2,
    color: "text-warning",
    bg: "bg-warning/10",
  },
];

const recentActivity = [
  { company: "TCS Digital", date: "Jan 6, 2026", status: "Attended" },
  { company: "Infosys BPM", date: "Jan 3, 2026", status: "Attended" },
  { company: "Wipro", date: "Dec 28, 2025", status: "Attended" },
  { company: "HCL Tech", date: "Dec 22, 2025", status: "Attended" },
];

export function ProgressScreen() {
  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border z-30">
        <div className="px-4 py-4">
          <h1 className="text-xl font-semibold text-foreground">My Progress</h1>
        </div>
      </header>

      <div className="px-4 py-4 space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-card rounded-xl border border-border p-4 text-center"
            >
              <div className={`w-10 h-10 ${stat.bg} rounded-lg flex items-center justify-center mx-auto mb-2`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Recent Activity */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-sm font-medium text-muted-foreground mb-3">Recent Activity</h2>
          <div className="bg-card rounded-xl border border-border divide-y divide-border">
            {recentActivity.map((activity, index) => (
              <div key={index} className="p-4 flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">{activity.company}</p>
                  <p className="text-sm text-muted-foreground">{activity.date}</p>
                </div>
                <span className="text-xs font-medium text-success bg-success/10 px-2.5 py-1 rounded-full">
                  {activity.status}
                </span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Empty state for chart placeholder */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-card rounded-xl border border-border p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <BarChart3 className="w-5 h-5 text-primary" />
            <h2 className="font-medium text-foreground">Weekly Overview</h2>
          </div>
          <div className="flex items-end justify-between h-24 gap-2">
            {[40, 60, 30, 80, 50, 70, 45].map((height, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{ delay: 0.4 + i * 0.05, duration: 0.3 }}
                className="flex-1 bg-primary/20 rounded-t-sm"
              />
            ))}
          </div>
          <div className="flex justify-between mt-2 text-xs text-muted-foreground">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
