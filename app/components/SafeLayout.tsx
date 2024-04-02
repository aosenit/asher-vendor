import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const SafeLayout = ({ children }: any) => {
  return <SafeAreaView className="px-[20px]">{children}</SafeAreaView>;
};

export default SafeLayout;
