import React from "react";
import { View } from "react-native";
import { Step } from "../Stepper";

interface ConditionalStepProps {
  step: Step;
  values: Record<string, any>;
  condition: (values: Record<string, any>) => boolean;
  renderStep: (step: Step) => React.ReactNode;
}

/**
 * A component that conditionally renders a step based on a condition function
 * This is useful for showing/hiding steps based on previous input values
 */
const ConditionalStep: React.FC<ConditionalStepProps> = ({
  step,
  values,
  condition,
  renderStep,
}) => {
  const shouldRender = condition(values);

  if (!shouldRender) {
    return null;
  }

  return <View>{renderStep(step)}</View>;
};

export default ConditionalStep;
