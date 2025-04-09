import React from "react";
import { View } from "react-native";
import { Text } from "../ui/text";
import { OnboardingPhase } from "./onboardingConfig";
import { cn } from "~/lib/utils";

type PhaseIndicatorProps = {
  currentPhase: OnboardingPhase;
};

const PhaseIndicator: React.FC<PhaseIndicatorProps> = ({ currentPhase }) => {
  const phases: { id: OnboardingPhase; label: string }[] = [
    { id: "context", label: "Context" },
    { id: "health", label: "Health & Habits" },
    { id: "goals", label: "Goals & Preferences" },
  ];

  // Find the index of the current phase
  const currentPhaseIndex = phases.findIndex((p) => p.id === currentPhase);

  return (
    <View className="mb-6 px-2">
      <View className="flex flex-row justify-between items-center w-full">
        {phases.map((phase, index) => (
          <React.Fragment key={phase.id}>
            <View className="flex flex-col items-center">
              <View
                className={cn(
                  "flex items-center justify-center w-10 h-10 rounded-full mb-2",
                  index === currentPhaseIndex
                    ? "bg-primary"
                    : index < currentPhaseIndex
                    ? "bg-green-500"
                    : "bg-gray-200"
                )}
              >
                <Text
                  className={cn(
                    "text-center font-medium",
                    index === currentPhaseIndex || index < currentPhaseIndex
                      ? "text-white"
                      : "text-gray-700"
                  )}
                >
                  {index + 1}
                </Text>
              </View>
              <Text
                className={cn(
                  "text-xs font-medium text-center",
                  index === currentPhaseIndex ? "text-primary" : "text-gray-500"
                )}
              >
                {phase.label}
              </Text>
            </View>

            {index < phases.length - 1 && (
              <View
                className={cn(
                  "flex-1 h-1 mx-2",
                  index < currentPhaseIndex ? "bg-green-500" : "bg-gray-200"
                )}
              />
            )}
          </React.Fragment>
        ))}
      </View>
    </View>
  );
};

export default PhaseIndicator;
