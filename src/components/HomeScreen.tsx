import { useState } from "react";
import { MapPin, ChevronDown, SlidersHorizontal, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { InterviewCard } from "@/components/ui/InterviewCard";

interface HomeScreenProps {
  onInterviewClick: (id: string) => void;
}

const mockInterviews = [
  {
    id: "1",
    company: "TCS Digital",
    role: "Software Developer",
    time: "10:00 AM - 2:00 PM",
    distance: "5.2 km",
    tags: ["Fresher Friendly", "Walk-in"],
    verified: true,
    updatedAgo: "2 hours ago",
  },
  {
    id: "2",
    company: "Infosys BPM",
    role: "Customer Support Executive",
    time: "9:00 AM - 12:00 PM",
    distance: "8.1 km",
    tags: ["Immediate Joiner"],
    verified: true,
    updatedAgo: "4 hours ago",
  },
  {
    id: "3",
    company: "Wipro Technologies",
    role: "Data Analyst",
    time: "11:00 AM - 4:00 PM",
    distance: "12.3 km",
    tags: ["Fresher Friendly", "Weekend"],
    verified: true,
    updatedAgo: "6 hours ago",
  },
  {
    id: "4",
    company: "HCL Tech",
    role: "Technical Support",
    time: "9:30 AM - 1:00 PM",
    distance: "3.8 km",
    tags: ["Walk-in", "Immediate Joiner"],
    verified: true,
    updatedAgo: "1 day ago",
  },
  {
    id: "5",
    company: "Accenture",
    role: "Associate Software Engineer",
    time: "10:00 AM - 3:00 PM",
    distance: "15.6 km",
    tags: ["Fresher Friendly"],
    verified: true,
    updatedAgo: "5 hours ago",
  },
];

const today = new Date().toLocaleDateString("en-US", {
  weekday: "short",
  month: "short",
  day: "numeric",
});

export function HomeScreen({ onInterviewClick }: HomeScreenProps) {
  const [city] = useState("Bangalore");

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border z-30">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <button className="flex items-center gap-1.5 text-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="font-medium">{city}</span>
              <ChevronDown className="w-4 h-4 text-muted-foreground" />
            </button>
            <button className="w-9 h-9 flex items-center justify-center rounded-lg bg-secondary">
              <SlidersHorizontal className="w-4 h-4 text-secondary-foreground" />
            </button>
          </div>
        </div>
      </header>

      {/* Date Bar */}
      <div className="px-4 py-3 flex items-center gap-2 text-sm">
        <Calendar className="w-4 h-4 text-primary" />
        <span className="font-medium text-foreground">Today</span>
        <span className="text-muted-foreground">{today}</span>
        <span className="ml-auto text-muted-foreground">
          {mockInterviews.length} interviews
        </span>
      </div>

      {/* Interview List */}
      <div className="px-4 space-y-3">
        {mockInterviews.map((interview, index) => (
          <motion.div
            key={interview.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <InterviewCard
              {...interview}
              onClick={() => onInterviewClick(interview.id)}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
