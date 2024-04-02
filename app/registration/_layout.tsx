import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const RegistrationLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerTitle: "",
        headerShadowVisible: false,
        animation: "slide_from_right",
      }}
    />
  );
};

export default RegistrationLayout;
