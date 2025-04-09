import * as React from "react";
import { useState } from "react";
import { useRouter } from "expo-router";
import OnboardingStepper from "~/components/onboarding/OnboardingStepper";
import WelcomeScreen from "~/components/onboarding/WelcomeScreen";

export default function Screen() {
  const [showWelcome, setShowWelcome] = useState(true);
  const router = useRouter();

  const handleStartOnboarding = () => {
    setShowWelcome(false);
  };

  const handleHelpClick = () => {
    // Navigate to help screen or show a modal
    console.log("Help requested");
  };

  const handleNotNowClick = () => {
    // Navigate to another part of the app or dismiss
    console.log("Not now clicked");
  };

  if (showWelcome) {
    return (
      <WelcomeScreen
        onStartClick={handleStartOnboarding}
        onHelpClick={handleHelpClick}
        onNotNowClick={handleNotNowClick}
      />
    );
  }

  return <OnboardingStepper />;
}
