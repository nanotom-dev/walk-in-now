import { MapPin, Clock, BadgeCheck, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface InterviewCardProps {
  company: string;
  role: string;
  time: string;
  distance: string;
  tags: string[];
  verified: boolean;
  updatedAgo: string;
  onClick?: () => void;
}

const tagStyles: Record<string, string> = {
  "Fresher Friendly": "bg-accent text-accent-foreground",
  "Immediate Joiner": "bg-warning/10 text-warning",
  "Weekend": "bg-primary/10 text-primary",
  "Walk-in": "bg-success/10 text-success",
};

export function InterviewCard({
  company,
  role,
  time,
  distance,
  tags,
  verified,
  updatedAgo,
  onClick,
}: InterviewCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="bg-card rounded-xl p-4 shadow-card border border-border cursor-pointer hover:shadow-elevated transition-shadow duration-200"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-foreground truncate">{company}</h3>
            {verified && (
              <BadgeCheck className="w-4 h-4 text-primary flex-shrink-0" />
            )}
          </div>
          <p className="text-sm text-muted-foreground mb-3">{role}</p>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>{time}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              <span>{distance}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                  tagStyles[tag] || "bg-secondary text-secondary-foreground"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-1" />
      </div>

      <div className="mt-3 pt-3 border-t border-border">
        <p className="text-xs text-muted-foreground">Updated {updatedAgo}</p>
      </div>
    </motion.div>
  );
}
