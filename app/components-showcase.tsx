import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { Stack } from "expo-router";

import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import { Checkbox } from "~/components/ui/checkbox";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "~/components/ui/select";
import { Switch } from "~/components/ui/switch";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export default function ComponentsShowcase() {
  const [switchValue, setSwitchValue] = useState(false);
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [radioValue, setRadioValue] = useState("option1");
  const [selectValue, setSelectValue] = useState<{
    value: string;
    label: string;
  } | null>(null);

  return (
    <ScrollView className="flex-1">
      <Stack.Screen options={{ title: "Components" }} />

      <View className="p-4 space-y-6">
        {/* Buttons */}
        <Card>
          <CardHeader>
            <CardTitle>Buttons</CardTitle>
            <CardDescription>
              Various button styles and variants
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button>
              <Text>Default Button</Text>
            </Button>

            <Button variant="secondary">
              <Text>Secondary Button</Text>
            </Button>

            <Button variant="destructive">
              <Text>Destructive Button</Text>
            </Button>

            <Button variant="outline">
              <Text>Outline Button</Text>
            </Button>

            <Button variant="ghost">
              <Text>Ghost Button</Text>
            </Button>

            <Button variant="link">
              <Text>Link Button</Text>
            </Button>
          </CardContent>
        </Card>

        {/* Form Controls */}
        <Card>
          <CardHeader>
            <CardTitle>Form Controls</CardTitle>
            <CardDescription>Input elements and form controls</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <View className="space-y-2">
              <Label>Text Input</Label>
              <Input placeholder="Enter some text..." />
            </View>

            <View className="space-y-2">
              <Label>Select</Label>
              <Select
                value={
                  selectValue
                    ? selectValue
                    : {
                        value: "",
                        label: "",
                      }
                }
                onValueChange={(value) =>
                  setSelectValue({
                    value: value ? value.value : "",
                    label: value ? value.label : "",
                  })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1" label={""}>
                    Option 1
                  </SelectItem>
                  <SelectItem value="option2" label={""}>
                    Option 2
                  </SelectItem>
                  <SelectItem value="option3" label={""}>
                    Option 3
                  </SelectItem>
                </SelectContent>
              </Select>
            </View>

            <View className="space-y-2">
              <Label>Radio Group</Label>
              <RadioGroup value={radioValue} onValueChange={setRadioValue}>
                <View className="space-y-2">
                  <View className="flex-row items-center space-x-2">
                    <RadioGroupItem value="option1" id="option1" />
                    <Label htmlFor="option1">Option 1</Label>
                  </View>
                  <View className="flex-row items-center space-x-2">
                    <RadioGroupItem value="option2" id="option2" />
                    <Label htmlFor="option2">Option 2</Label>
                  </View>
                </View>
              </RadioGroup>
            </View>

            <View className="flex-row items-center space-x-2">
              <Checkbox
                id="checkbox"
                checked={checkboxValue}
                onCheckedChange={setCheckboxValue}
              />
              <Label htmlFor="checkbox">Checkbox</Label>
            </View>

            <View className="flex-row items-center justify-between">
              <Label htmlFor="switch">Switch</Label>
              <Switch
                id="switch"
                checked={switchValue}
                onCheckedChange={setSwitchValue}
              />
            </View>
          </CardContent>
        </Card>

        {/* Typography */}
        <Card>
          <CardHeader>
            <CardTitle>Typography</CardTitle>
            <CardDescription>Text styles and components</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Text className="text-4xl font-bold">Heading 1</Text>
            <Text className="text-3xl font-bold">Heading 2</Text>
            <Text className="text-2xl font-bold">Heading 3</Text>
            <Text className="text-xl font-semibold">Subheading</Text>
            <Text className="text-base">Regular body text</Text>
            <Text className="text-sm text-muted-foreground">Small text</Text>
          </CardContent>
        </Card>
      </View>
    </ScrollView>
  );
}
