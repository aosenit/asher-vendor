import { View, Text, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { ExoMedium } from "./StyledText";
import { useRouter } from "expo-router";

type IProp = {
  notifications: number;
};

const Notification = ({ notifications = 12 }: IProp) => {
  const router = useRouter();
  return (
    <Pressable
      className="absolute right-[20px] top-5"
      onPress={() => router.push("/(home)/notification/")}
    >
      <View className="bg-black h-[17px] w-[17px] rounded-full absolute right-0 items-center justify-center z-50">
        <ExoMedium className="text-white text-[10px] text-center">
          {notifications}
        </ExoMedium>
      </View>
      <View className="mt-1">
        <Ionicons name="notifications-outline" size={28} color={"black"} />
      </View>
    </Pressable>
  );
};

export default Notification;
