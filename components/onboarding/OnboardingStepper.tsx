import React, { useState } from "react";
import { View, SafeAreaView } from "react-native";
import Stepper from "../Stepper";
import PhaseIndicator from "./PhaseIndicator";
import {
  OnboardingPhase,
  getFlattenedPages,
  getPhaseForPageIndex,
} from "./onboardingConfig";
import { Card, CardContent } from "~/components/ui/card";

interface OnboardingStepperProps {
  onComplete?: (values: Record<string, any>) => void;
  initialPage?: number;
}

const OnboardingStepper: React.FC<OnboardingStepperProps> = ({
  onComplete,
  initialPage = 0,
}) => {
  const [currentPhase, setCurrentPhase] = useState<OnboardingPhase>(
    getPhaseForPageIndex(initialPage)
  );
  const [currentPageIndex, setCurrentPageIndex] = useState(initialPage);

  // All pages for the Stepper component
  const pages = getFlattenedPages();

  // Update the current phase when the page changes
  const handlePageChange = (pageIndex: number) => {
    setCurrentPageIndex(pageIndex);
    const phase = getPhaseForPageIndex(pageIndex);
    setCurrentPhase(phase);
  };

  // Handle the completion of the onboarding process
  const handleComplete = (values: Record<string, any>) => {
    // Process or transform the data if needed
    const processedData = {
      ...values,
      completedAt: new Date().toISOString(),
    };

    // Call the provided onComplete callback
    onComplete?.(processedData);
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <Card className="mb-4 mx-4 mt-4 shadow-sm">
        <CardContent className="pt-6">
          <PhaseIndicator currentPhase={currentPhase} />
        </CardContent>
      </Card>

      <Stepper
        pages={pages}
        initialPage={initialPage}
        onComplete={handleComplete}
        onPageChange={handlePageChange}
      />
    </SafeAreaView>
  );
};

export default OnboardingStepper;
