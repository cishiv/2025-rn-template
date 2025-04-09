export type Step = {
  label: string;
  type: "text" | "input" | "select" | "checkbox" | "radio" | "switch";
  value: string;
  defaultValue: string;
  options?: string[]; // For select, radio, etc.
  placeholder?: string;
  required?: boolean;
};

export type StepperPage = {
  title: string;
  copy: string;
  steps: Step[];
};

export type StepperProps = {
  pages: StepperPage[];
  onComplete?: (values: Record<string, any>) => void;
  initialPage?: number;
  onPageChange?: (pageIndex: number) => void;
};

import React, { useState, useEffect } from "react";
import { View, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { Text } from "./ui/text";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Checkbox } from "./ui/checkbox";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./ui/select";
import { Switch } from "./ui/switch";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { cn } from "../lib/utils";

const Stepper: React.FC<StepperProps> = ({
  pages,
  onComplete,
  initialPage = 0,
  onPageChange,
}) => {
  const [currentPageIndex, setCurrentPageIndex] = useState(initialPage);
  const [values, setValues] = useState<Record<string, any>>({});
  const [isValid, setIsValid] = useState(true);

  const currentPage = pages[currentPageIndex];

  // Initialize default values on first render
  useEffect(() => {
    const initialValues = pages.reduce((acc, page) => {
      page.steps.forEach((step) => {
        acc[step.label] = step.defaultValue;
      });
      return acc;
    }, {} as Record<string, any>);

    setValues(initialValues);
  }, [pages]);

  // Validate current page
  useEffect(() => {
    if (!currentPage) return;

    const allRequiredFilled = currentPage.steps.every((step) => {
      if (step.required) {
        return (
          values[step.label] && values[step.label].toString().trim() !== ""
        );
      }
      return true;
    });

    setIsValid(allRequiredFilled);
  }, [currentPage, values]);

  // Call onPageChange when currentPageIndex changes
  useEffect(() => {
    onPageChange?.(currentPageIndex);
  }, [currentPageIndex, onPageChange]);

  const handleInputChange = (step: Step, value: any) => {
    setValues((prev) => ({
      ...prev,
      [step.label]: value,
    }));
  };

  const handleNext = () => {
    if (currentPageIndex < pages.length - 1) {
      setCurrentPageIndex(currentPageIndex + 1);
    } else {
      onComplete?.(values);
    }
  };

  const handlePrevious = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex(currentPageIndex - 1);
    }
  };

  const renderInput = (step: Step) => {
    switch (step.type) {
      case "text":
      case "input":
        return (
          <Input
            value={values[step.label] || ""}
            onChangeText={(text) => handleInputChange(step, text)}
            placeholder={step.placeholder}
          />
        );

      case "select":
        return (
          <Select
            value={values[step.label] || ""}
            onValueChange={(value) => handleInputChange(step, value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              {step.options?.map((option) => (
                <SelectItem key={option} value={option} label={""}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );

      case "checkbox":
        return (
          <View className="flex-row items-center gap-2">
            <Checkbox
              checked={values[step.label] === "true"}
              onCheckedChange={(checked) =>
                handleInputChange(step, checked ? "true" : "false")
              }
              id={`checkbox-${step.label}`}
            />
            <Label htmlFor={`checkbox-${step.label}`}>{step.label}</Label>
          </View>
        );

      case "radio":
        if (!step.options || step.options.length === 0) {
          return null;
        }

        return (
          <RadioGroup
            value={values[step.label] || ""}
            onValueChange={(value) => handleInputChange(step, value)}
          >
            <View className="flex-col space-y-3">
              {step.options.map((option) => (
                <View key={option} className="flex-row items-center space-x-2">
                  <RadioGroupItem
                    value={option}
                    id={`radio-${step.label}-${option}`}
                  />
                  <Label htmlFor={`radio-${step.label}-${option}`}>
                    {option}
                  </Label>
                </View>
              ))}
            </View>
          </RadioGroup>
        );

      case "switch":
        return (
          <View className="flex-row items-center justify-between">
            <Label htmlFor={`switch-${step.label}`}>{step.label}</Label>
            <Switch
              id={`switch-${step.label}`}
              checked={values[step.label] === "true"}
              onCheckedChange={(checked) =>
                handleInputChange(step, checked ? "true" : "false")
              }
            />
          </View>
        );

      default:
        return null;
    }
  };

  if (!currentPage) {
    return <Text>No pages available</Text>;
  }

  // Render progress steps
  const renderProgressSteps = () => {
    return (
      <View className="flex-row items-center justify-between mb-6">
        {pages.map((_, index) => (
          <React.Fragment key={index}>
            <View className="flex items-center justify-center">
              <View
                className={cn(
                  "h-8 w-8 rounded-full flex items-center justify-center",
                  index === currentPageIndex
                    ? "bg-primary"
                    : index < currentPageIndex
                    ? "bg-green-500"
                    : "bg-gray-200"
                )}
              >
                <Text
                  className={cn(
                    "text-center text-sm font-medium",
                    index === currentPageIndex || index < currentPageIndex
                      ? "text-white"
                      : "text-gray-700"
                  )}
                >
                  {index + 1}
                </Text>
              </View>
            </View>
            {index < pages.length - 1 && (
              <View
                className={cn(
                  "flex-1 h-1",
                  index < currentPageIndex ? "bg-green-500" : "bg-gray-200"
                )}
              />
            )}
          </React.Fragment>
        ))}
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      className="flex-1"
    >
      <ScrollView className="flex-1 px-4">
        <Card className="mb-6 mt-2 rounded-2xl">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-foreground">
              {currentPage.title}
            </CardTitle>
            <CardDescription className="text-base text-muted-foreground">
              {currentPage.copy}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {renderProgressSteps()}

            {currentPage.steps.map((step, index) => (
              <View key={index} className="space-y-2">
                <Label
                  className={cn(
                    "text-base font-medium",
                    step.required
                      ? "after:text-red-500 after:content-['*']"
                      : ""
                  )}
                >
                  {step.label}
                </Label>
                {renderInput(step)}
              </View>
            ))}
          </CardContent>
          <CardFooter className="flex-row justify-between py-6">
            <Button
              variant="outline"
              onPress={handlePrevious}
              disabled={currentPageIndex === 0}
            >
              <Text>Back</Text>
            </Button>
            <Button variant="default" onPress={handleNext} disabled={!isValid}>
              <Text>
                {currentPageIndex === pages.length - 1 ? "Complete" : "Next"}
              </Text>
            </Button>
          </CardFooter>
        </Card>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Stepper;
