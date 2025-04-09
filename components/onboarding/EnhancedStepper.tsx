import React, { useState } from "react";
import { View } from "react-native";
import Stepper, { Step, StepperPage, StepperProps } from "../Stepper";
import ConditionalStep from "./ConditionalStep";

interface EnhancedStepperProps extends Omit<StepperProps, "pages"> {
  pages: (StepperPage | ((values: Record<string, any>) => StepperPage))[];
  stepVisibilityConditions?: Record<
    string,
    (values: Record<string, any>) => boolean
  >;
  transformValues?: (values: Record<string, any>) => Record<string, any>;
  validatePage?: (pageIndex: number, values: Record<string, any>) => boolean;
}

/**
 * An enhanced version of the Stepper component that supports:
 * - Conditional steps (showing/hiding based on previous values)
 * - Dynamic pages (generated based on previous values)
 * - Custom validation
 * - Value transformation before completion
 */
const EnhancedStepper: React.FC<EnhancedStepperProps> = ({
  pages,
  onComplete,
  initialPage = 0,
  onPageChange,
  stepVisibilityConditions = {},
  transformValues,
  validatePage,
}) => {
  const [formValues, setFormValues] = useState<Record<string, any>>({});

  // Process pages that are functions
  const processedPages: StepperPage[] = pages.map((page) => {
    if (typeof page === "function") {
      return page(formValues);
    }
    return page;
  });

  // Filter out steps that should be hidden based on conditions
  const processedPagesWithConditionalSteps = processedPages.map((page) => {
    const filteredSteps = page.steps.filter((step) => {
      const condition = stepVisibilityConditions[step.label];
      if (condition) {
        return condition(formValues);
      }
      return true;
    });

    return {
      ...page,
      steps: filteredSteps,
    };
  });

  // Handle form value changes from the Stepper
  const handleStepperComplete = (values: Record<string, any>) => {
    const finalValues = transformValues ? transformValues(values) : values;
    setFormValues(finalValues);
    onComplete?.(finalValues);
  };

  // Custom page changed handler to store values
  const handlePageChange = (pageIndex: number, values: Record<string, any>) => {
    setFormValues(values);
    onPageChange?.(pageIndex);
  };

  // Custom validation if needed
  const isPageValid = (pageIndex: number) => {
    if (validatePage) {
      return validatePage(pageIndex, formValues);
    }
    return true;
  };

  // Skip empty pages (no visible steps)
  const nonEmptyPages = processedPagesWithConditionalSteps.filter(
    (page) => page.steps.length > 0
  );

  return (
    <View>
      <Stepper
        pages={nonEmptyPages}
        initialPage={initialPage}
        onComplete={handleStepperComplete}
        onPageChange={(pageIndex) => handlePageChange(pageIndex, formValues)}
      />
    </View>
  );
};

export default EnhancedStepper;
