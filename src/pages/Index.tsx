import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { SplashScreen } from "@/components/SplashScreen";
import { OnboardingFlow } from "@/components/OnboardingFlow";
import { HomeScreen } from "@/components/HomeScreen";
import { InterviewDetails } from "@/components/InterviewDetails";
import { SavedScreen } from "@/components/SavedScreen";
import { SearchScreen } from "@/components/SearchScreen";
import { RemindersScreen } from "@/components/RemindersScreen";
import { ProgressScreen } from "@/components/ProgressScreen";
import { BottomNav } from "@/components/ui/BottomNav";

type AppScreen = "splash" | "onboarding" | "main";
type MainTab = "home" | "search" | "saved" | "reminders" | "progress";

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>("splash");
  const [activeTab, setActiveTab] = useState<MainTab>("home");
  const [selectedInterview, setSelectedInterview] = useState<string | null>(null);

  // Check if user has completed onboarding
  useEffect(() => {
    const hasOnboarded = localStorage.getItem("walkinjobs_onboarded");
    if (hasOnboarded) {
      setCurrentScreen("main");
    }
  }, []);

  const handleSplashComplete = () => {
    const hasOnboarded = localStorage.getItem("walkinjobs_onboarded");
    setCurrentScreen(hasOnboarded ? "main" : "onboarding");
  };

  const handleOnboardingComplete = () => {
    localStorage.setItem("walkinjobs_onboarded", "true");
    setCurrentScreen("main");
  };

  const handleInterviewClick = (id: string) => {
    setSelectedInterview(id);
  };

  const handleBackFromDetails = () => {
    setSelectedInterview(null);
  };

  // Render splash screen
  if (currentScreen === "splash") {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  // Render onboarding
  if (currentScreen === "onboarding") {
    return <OnboardingFlow onComplete={handleOnboardingComplete} />;
  }

  // Render interview details if selected
  if (selectedInterview) {
    return (
      <InterviewDetails
        interviewId={selectedInterview}
        onBack={handleBackFromDetails}
      />
    );
  }

  // Render main app with tabs
  return (
    <div className="min-h-screen bg-background">
      <AnimatePresence mode="wait">
        {activeTab === "home" && (
          <HomeScreen
            key="home"
            onInterviewClick={handleInterviewClick}
          />
        )}
        {activeTab === "search" && (
          <SearchScreen
            key="search"
            onInterviewClick={handleInterviewClick}
          />
        )}
        {activeTab === "saved" && (
          <SavedScreen
            key="saved"
            onInterviewClick={handleInterviewClick}
          />
        )}
        {activeTab === "reminders" && (
          <RemindersScreen key="reminders" />
        )}
        {activeTab === "progress" && (
          <ProgressScreen key="progress" />
        )}
      </AnimatePresence>

      <BottomNav
        activeTab={activeTab}
        onTabChange={(tab) => setActiveTab(tab as MainTab)}
      />
    </div>
  );
};

export default Index;
