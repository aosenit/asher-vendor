import { View, Text, Pressable } from "react-native";
import React from "react";
import ProgressCircle from "react-native-progress-circle";
import { ExoBold, ExoMedium } from "../StyledText";
import Colors from "../../constants/Colors";

type IProp = {
  progress: number;
};

const WeeklyProgressCard = ({ progress = 72 }: IProp) => {
  return (
    <Pressable className="bg-white py-3 px-5 rounded-[10px] w-full flex-row  items-center shadow-md h-[35%]">
      <ProgressCircle
        percent={progress}
        radius={35}
        borderWidth={6}
        color={Colors.light.primary}
        shadowColor="#ededed"
        bgColor="#fff"
      >
        <ExoBold
          style={{ fontSize: 18, color: Colors.light.primary }}
        >{`${progress}%`}</ExoBold>
      </ProgressCircle>

      <View className="ml-8 gap-y-2">
        <ExoBold className="text-[18px]">Weekly Progress</ExoBold>
        <View className="flex-row items-center gap-x-2">
          <ExoMedium>17/22</ExoMedium>
          <ExoMedium className="text-gray-500">tasks completed</ExoMedium>
        </View>
      </View>
    </Pressable>
  );
};

export default WeeklyProgressCard;
