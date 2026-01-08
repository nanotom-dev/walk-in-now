import { Bell, Calendar, FileText } from "lucide-react";
import { motion } from "framer-motion";

const mockReminders = [
  {
    id: "1",
    type: "interview",
    title: "TCS Digital Interview",
    description: "Software Developer position",
    time: "Tomorrow, 10:00 AM",
    icon: Calendar,
  },
  {
    id: "2",
    type: "document",
    title: "Prepare Documents",
    description: "Resume, ID proof, certificates for TCS",
    time: "Today, 6:00 PM",
    icon: FileText,
  },
  {
    id: "3",
    type: "interview",
    title: "Infosys Walk-in",
    description: "Customer Support Executive",
    time: "Friday, 9:00 AM",
    icon: Calendar,
  },
  {
    id: "4",
    type: "document",
    title: "Update Resume",
    description: "Add latest project details",
    time: "Thursday, 8:00 PM",
    icon: FileText,
  },
];

export function RemindersScreen() {
  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border z-30">
        <div className="px-4 py-4">
          <h1 className="text-xl font-semibold text-foreground">Reminders</h1>
        </div>
      </header>

      {/* Content */}
      <div className="px-4 py-4 space-y-3">
        {mockReminders.length > 0 ? (
          mockReminders.map((reminder, index) => (
            <motion.div
              key={reminder.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-card rounded-xl border border-border p-4"
            >
              <div className="flex items-start gap-3">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    reminder.type === "interview" ? "bg-accent" : "bg-warning/10"
                  }`}
                >
                  <reminder.icon
                    className={`w-5 h-5 ${
                      reminder.type === "interview" ? "text-primary" : "text-warning"
                    }`}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-foreground">{reminder.title}</h3>
                  <p className="text-sm text-muted-foreground">{reminder.description}</p>
                  <p className="text-xs text-primary font-medium mt-2">{reminder.time}</p>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mb-4">
              <Bell className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="font-medium text-foreground mb-1">No reminders</h3>
            <p className="text-sm text-muted-foreground">
              Set reminders for interviews to stay on track
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
