import { View, Text } from "react-native";
import React from "react";

const Rule = ({ color }: { color?: string }) => {
  return (
    <View
      className="border-[1px] w-full border-gray-200"
      style={{ borderColor: color }}
    />
  );
};

export default Rule;
