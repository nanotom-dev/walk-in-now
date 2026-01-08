import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Briefcase, Bell, ChevronRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface OnboardingFlowProps {
  onComplete: () => void;
}

const jobRoles = [
  "Software Developer",
  "Data Analyst",
  "Customer Support",
  "Sales Executive",
  "Marketing",
  "HR Executive",
  "Accountant",
  "Content Writer",
  "Graphic Designer",
  "Operations",
];

const experienceRanges = [
  "Fresher",
  "0-1 years",
  "1-3 years",
  "3-5 years",
  "5+ years",
];

const distanceOptions = ["5 km", "10 km", "20 km", "50 km"];

export function OnboardingFlow({ onComplete }: OnboardingFlowProps) {
  const [step, setStep] = useState(1);
  const [city, setCity] = useState("Bangalore");
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [experience, setExperience] = useState("");
  const [distance, setDistance] = useState("10 km");

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      onComplete();
    }
  };

  const toggleRole = (role: string) => {
    setSelectedRoles((prev) =>
      prev.includes(role) ? prev.filter((r) => r !== role) : [...prev, role]
    );
  };

  return (
    <div className="fixed inset-0 bg-background flex flex-col z-40">
      {/* Progress */}
      <div className="px-6 pt-6">
        <div className="flex gap-2 mb-8">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`h-1 flex-1 rounded-full transition-colors ${
                s <= step ? "bg-primary" : "bg-muted"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 pb-32">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-foreground">Your Location</h2>
                  <p className="text-sm text-muted-foreground">We'll find interviews near you</p>
                </div>
              </div>

              <div className="bg-card rounded-xl border border-border p-4">
                <p className="text-sm text-muted-foreground mb-2">Detected city</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-medium text-foreground">{city}</span>
                  <button className="text-primary text-sm font-medium">Change</button>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-sm font-medium text-foreground">Preferred distance</p>
                <div className="grid grid-cols-2 gap-2">
                  {distanceOptions.map((d) => (
                    <button
                      key={d}
                      onClick={() => setDistance(d)}
                      className={`py-3 px-4 rounded-xl text-sm font-medium transition-colors ${
                        distance === d
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-foreground">Your Preferences</h2>
                  <p className="text-sm text-muted-foreground">What roles interest you?</p>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-sm font-medium text-foreground">Job roles (select multiple)</p>
                <div className="flex flex-wrap gap-2">
                  {jobRoles.map((role) => (
                    <button
                      key={role}
                      onClick={() => toggleRole(role)}
                      className={`py-2 px-4 rounded-full text-sm font-medium transition-colors flex items-center gap-1.5 ${
                        selectedRoles.includes(role)
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      {selectedRoles.includes(role) && <Check className="w-3.5 h-3.5" />}
                      {role}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-sm font-medium text-foreground">Experience level</p>
                <div className="flex flex-wrap gap-2">
                  {experienceRanges.map((exp) => (
                    <button
                      key={exp}
                      onClick={() => setExperience(exp)}
                      className={`py-2 px-4 rounded-full text-sm font-medium transition-colors ${
                        experience === exp
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      {exp}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                  <Bell className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-foreground">Stay Updated</h2>
                  <p className="text-sm text-muted-foreground">Never miss a walk-in opportunity</p>
                </div>
              </div>

              <div className="bg-card rounded-xl border border-border p-5 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Bell className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Smart Notifications</h3>
                    <p className="text-sm text-muted-foreground">
                      Get notified when new interviews match your preferences. No spam, only relevant opportunities.
                    </p>
                  </div>
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full h-12 text-sm font-medium"
              >
                Enable Notifications
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom CTA */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background via-background to-transparent">
        <Button
          onClick={handleNext}
          className="w-full h-12 text-sm font-medium"
        >
          {step < 3 ? (
            <>
              Continue
              <ChevronRight className="w-4 h-4 ml-1" />
            </>
          ) : (
            "Get Started"
          )}
        </Button>
        {step < 3 && (
          <button
            onClick={() => setStep(step + 1)}
            className="w-full mt-3 text-sm text-muted-foreground"
          >
            Skip for now
          </button>
        )}
      </div>
    </div>
  );
}
