import { View, Text } from "react-native";
import React from "react";

const DividerComponent = ({ height }: { height: number }) => {
  return <View style={{ height: height }}></View>;
};

export default DividerComponent;
