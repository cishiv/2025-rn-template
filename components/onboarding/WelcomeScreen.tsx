import React from "react";
import { View, SafeAreaView } from "react-native";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";

interface WelcomeScreenProps {
  onStartClick: () => void;
  onHelpClick: () => void;
  onNotNowClick: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  onStartClick,
  onHelpClick,
  onNotNowClick,
}) => {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 px-4 py-8 justify-center">
        <View className="mb-16 space-y-4">
          <Text className="text-4xl font-semibold text-foreground">
            Hey there 👋
          </Text>
          <Text className="text-xl text-foreground">
            I'm here to help you build a diet that actually fits your life, your
            health, and your taste.
          </Text>
        </View>

        <View className="space-y-4">
          <Button variant="default" onPress={onStartClick}>
            <Text>Sounds good, let's start</Text>
          </Button>

          <Button variant="outline" onPress={onHelpClick}>
            <Text>What can you help with?</Text>
          </Button>

          <Button variant="ghost" onPress={onNotNowClick}>
            <Text>Not now</Text>
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
