import { View, Text } from "react-native";
import React from "react";
import { ExoLight, ExoMedium } from "../StyledText";

type IProps = {
  title: string;
  time: string;
};

const HomeBottomCard = ({ title, time }: IProps) => {
  return (
    <View className="bg-primary-base rounded-[5px] py-1 w-full px-3">
      <ExoMedium className="text-white text-[12px]">{title}</ExoMedium>
      <ExoLight className="text-white text-[8px]">{time}</ExoLight>
    </View>
  );
};

export default HomeBottomCard;
