import { View, Text } from "react-native";
import React from "react";
import { Stack, useRouter } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { ExoBold } from "../../../components/StyledText";

const _layout = () => {
  const router = useRouter();
  return (
    <Stack
      screenOptions={{
        headerLeft: (props) => (
          <AntDesign
            name={"left"}
            size={24}
            color="black"
            onPress={() => router.back()}
          />
        ),
        title: "Earnings",
        animation: "slide_from_left",
        headerTitleStyle: {
          fontFamily: "exoBold",
          fontSize: 24,
        },
      }}
    />
  );
};

export default _layout;
