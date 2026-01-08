import { useState } from "react";
import { Search, X } from "lucide-react";
import { motion } from "framer-motion";
import { InterviewCard } from "@/components/ui/InterviewCard";

interface SearchScreenProps {
  onInterviewClick: (id: string) => void;
}

const recentSearches = ["Software Developer", "TCS", "Customer Support", "Fresher Jobs"];

const allInterviews = [
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
    tags: ["Fresher Friendly"],
    verified: true,
    updatedAgo: "6 hours ago",
  },
];

export function SearchScreen({ onInterviewClick }: SearchScreenProps) {
  const [query, setQuery] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const filteredInterviews = query
    ? allInterviews.filter(
        (i) =>
          i.company.toLowerCase().includes(query.toLowerCase()) ||
          i.role.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    setHasSearched(true);
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Search Header */}
      <header className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border z-30">
        <div className="px-4 py-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              value={query}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search roles, companies..."
              className="w-full h-12 pl-10 pr-10 bg-secondary rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {query && (
              <button
                onClick={() => {
                  setQuery("");
                  setHasSearched(false);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            )}
          </div>
        </div>
      </header>

      <div className="px-4 py-4">
        {!hasSearched && !query ? (
          <div className="space-y-4">
            <h2 className="text-sm font-medium text-muted-foreground">Recent Searches</h2>
            <div className="flex flex-wrap gap-2">
              {recentSearches.map((search) => (
                <button
                  key={search}
                  onClick={() => handleSearch(search)}
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                >
                  {search}
                </button>
              ))}
            </div>
          </div>
        ) : filteredInterviews.length > 0 ? (
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground mb-3">
              {filteredInterviews.length} result{filteredInterviews.length !== 1 ? "s" : ""} for "{query}"
            </p>
            {filteredInterviews.map((interview, index) => (
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
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mb-4">
              <Search className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="font-medium text-foreground mb-1">No results found</h3>
            <p className="text-sm text-muted-foreground">
              Try a different search term
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
