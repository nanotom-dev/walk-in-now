import { motion } from "framer-motion";
import {
  ArrowLeft,
  BadgeCheck,
  Calendar,
  Clock,
  MapPin,
  Navigation,
  Bookmark,
  Bell,
  CheckCircle2,
  FileText,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface InterviewDetailsProps {
  interviewId: string;
  onBack: () => void;
}

const mockDetails = {
  company: "TCS Digital",
  role: "Software Developer",
  verified: true,
  date: "Wednesday, January 8, 2026",
  time: "10:00 AM - 2:00 PM",
  location: "TCS Manyata Tech Park, Outer Ring Road, Bangalore",
  distance: "5.2 km",
  eligibility: [
    "BE/B.Tech in CS, IT, or related field",
    "0-2 years of experience",
    "Good communication skills",
    "Knowledge of Java, Python, or JavaScript",
  ],
  documents: [
    "Updated Resume (2 copies)",
    "Passport size photos (2)",
    "All educational certificates",
    "ID Proof (Aadhar/PAN)",
  ],
  source: "TCS Careers Portal",
  sourceUrl: "https://careers.tcs.com",
};

const aiActions = [
  { icon: Sparkles, label: "Match Score", value: "87%" },
  { icon: CheckCircle2, label: "Am I Eligible?" },
  { icon: FileText, label: "Prepare Me" },
  { icon: FileText, label: "What to Carry?" },
];

export function InterviewDetails({ onBack }: InterviewDetailsProps) {
  return (
    <div className="min-h-screen bg-background pb-32">
      {/* Header */}
      <header className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border z-30">
        <div className="px-4 py-3 flex items-center gap-3">
          <button
            onClick={onBack}
            className="w-9 h-9 flex items-center justify-center rounded-lg bg-secondary"
          >
            <ArrowLeft className="w-5 h-5 text-secondary-foreground" />
          </button>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h1 className="font-semibold text-foreground">{mockDetails.company}</h1>
              {mockDetails.verified && (
                <BadgeCheck className="w-4 h-4 text-primary" />
              )}
            </div>
            <p className="text-sm text-muted-foreground">{mockDetails.role}</p>
          </div>
        </div>
      </header>

      <div className="px-4 py-4 space-y-4">
        {/* Date & Time */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card rounded-xl border border-border p-4"
        >
          <h2 className="text-sm font-medium text-muted-foreground mb-3">Date & Time</h2>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-primary" />
              <span className="text-foreground">{mockDetails.date}</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-foreground">{mockDetails.time}</span>
            </div>
          </div>
        </motion.section>

        {/* Location */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="bg-card rounded-xl border border-border p-4"
        >
          <h2 className="text-sm font-medium text-muted-foreground mb-3">Location</h2>
          <div className="flex items-start gap-3 mb-3">
            <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-foreground">{mockDetails.location}</p>
              <p className="text-sm text-muted-foreground mt-1">{mockDetails.distance} from you</p>
            </div>
          </div>
          <div className="h-32 bg-muted rounded-lg flex items-center justify-center">
            <MapPin className="w-8 h-8 text-muted-foreground/50" />
          </div>
        </motion.section>

        {/* Eligibility */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-card rounded-xl border border-border p-4"
        >
          <h2 className="text-sm font-medium text-muted-foreground mb-3">Eligibility</h2>
          <ul className="space-y-2">
            {mockDetails.eligibility.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Documents */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="bg-card rounded-xl border border-border p-4"
        >
          <h2 className="text-sm font-medium text-muted-foreground mb-3">Documents Required</h2>
          <ul className="space-y-2">
            {mockDetails.documents.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                <FileText className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Source */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card rounded-xl border border-border p-4"
        >
          <h2 className="text-sm font-medium text-muted-foreground mb-2">Source</h2>
          <a
            href={mockDetails.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary text-sm font-medium"
          >
            {mockDetails.source}
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.section>

        {/* AI Actions */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          <h2 className="text-sm font-medium text-muted-foreground mb-3">AI Assistance</h2>
          <div className="grid grid-cols-2 gap-2">
            {aiActions.map((action, i) => (
              <button
                key={i}
                className="bg-card border border-border rounded-xl p-3 flex items-center gap-2 text-left hover:bg-accent transition-colors"
              >
                <action.icon className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground">{action.label}</span>
                {action.value && (
                  <span className="ml-auto text-sm font-semibold text-primary">{action.value}</span>
                )}
              </button>
            ))}
          </div>
        </motion.section>
      </div>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4 safe-bottom z-40">
        <div className="flex gap-3 max-w-lg mx-auto">
          <Button variant="outline" size="lg" className="flex-1">
            <Bookmark className="w-4 h-4 mr-2" />
            Save
          </Button>
          <Button variant="outline" size="lg" className="flex-1">
            <Bell className="w-4 h-4 mr-2" />
            Remind
          </Button>
          <Button size="lg" className="flex-1">
            <Navigation className="w-4 h-4 mr-2" />
            Navigate
          </Button>
        </div>
      </div>
    </div>
  );
}
