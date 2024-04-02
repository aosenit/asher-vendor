import { View, Text } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { ExoMedium } from "./StyledText";

const Rating = ({ rating = 4.2 }: { rating: number }) => {
  return (
    <View className="bg-white shadow-md px-2 py-1 rounded-sm flex-row my-2 gap-x-1 items-center max-w-[60px]">
      <FontAwesome name="star" size={14} color={Colors.light.primary} />
      <ExoMedium className="text-primary-base text-[14px]">{rating}</ExoMedium>
    </View>
  );
};

export default Rating;
