import { View, Text, Button, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonComponent from "./components/Button";
import { useRouter } from "expo-router";

const HomeScreen = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-white justify-end">
      <View className="h-[50%] gap-10">
        <Text className="text-[50px] font-exoBold text-center">
          ASHER VENDOR
        </Text>
        <View className="px-[20px] gap-y-7">
          <View>
            <ButtonComponent
              text="LOG IN"
              onPress={() => router.push("/(auth)/login")}
            />
          </View>
          <View>
            <ButtonComponent
              text="SIGN UP"
              isOutLine
              onPress={() => router.push("/(auth)/signup")}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
