import { useState } from "react";
import { motion } from "framer-motion";
import { Bookmark } from "lucide-react";
import { InterviewCard } from "@/components/ui/InterviewCard";

interface SavedScreenProps {
  onInterviewClick: (id: string) => void;
}

const tabs = ["Today", "Upcoming", "Past"];

const mockSavedInterviews = {
  Today: [
    {
      id: "1",
      company: "TCS Digital",
      role: "Software Developer",
      time: "10:00 AM - 2:00 PM",
      distance: "5.2 km",
      tags: ["Fresher Friendly"],
      verified: true,
      updatedAgo: "2 hours ago",
    },
  ],
  Upcoming: [
    {
      id: "2",
      company: "Cognizant",
      role: "Associate Developer",
      time: "11:00 AM - 3:00 PM",
      distance: "8.4 km",
      tags: ["Walk-in"],
      verified: true,
      updatedAgo: "1 day ago",
    },
    {
      id: "3",
      company: "Tech Mahindra",
      role: "Support Engineer",
      time: "9:00 AM - 1:00 PM",
      distance: "12.1 km",
      tags: ["Immediate Joiner"],
      verified: true,
      updatedAgo: "2 days ago",
    },
  ],
  Past: [
    {
      id: "4",
      company: "Infosys",
      role: "Systems Engineer",
      time: "10:00 AM - 2:00 PM",
      distance: "6.7 km",
      tags: ["Fresher Friendly"],
      verified: true,
      updatedAgo: "5 days ago",
    },
  ],
};

export function SavedScreen({ onInterviewClick }: SavedScreenProps) {
  const [activeTab, setActiveTab] = useState("Today");
  const interviews = mockSavedInterviews[activeTab as keyof typeof mockSavedInterviews];

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border z-30">
        <div className="px-4 py-4">
          <h1 className="text-xl font-semibold text-foreground">Saved Interviews</h1>
        </div>
        
        {/* Tabs */}
        <div className="px-4 pb-3 flex gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === tab
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </header>

      {/* Content */}
      <div className="px-4 py-4 space-y-3">
        {interviews.length > 0 ? (
          interviews.map((interview, index) => (
            <motion.div
              key={interview.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <InterviewCard
                {...interview}
                onClick={() => onInterviewClick(interview.id)}
              />
            </motion.div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mb-4">
              <Bookmark className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="font-medium text-foreground mb-1">No saved interviews</h3>
            <p className="text-sm text-muted-foreground">
              Save interviews to access them quickly later
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
