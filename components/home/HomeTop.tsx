import { View, Text } from "react-native";
import React from "react";
import Notification from "../Notification";
import Avatar from "../Avatar";
import Rating from "../Rating";
import { ExoBold, ExoMedium } from "../StyledText";

const name = "Josiah";

const HomeTop = () => {
  return (
    <View className="h-[38%] bg-white relative items-center  py-2 gap-y-4 ">
      <Notification notifications={12} />
      <View className="items-center">
        <Avatar height={100} width={100} />
        <Rating rating={4.2} />
      </View>
      <ExoBold className="text-[30px]">Hi, {name}! </ExoBold>
      <ExoMedium className="text-[16px] text-gray-500">
        You currently have 6 pending tasks
      </ExoMedium>
    </View>
  );
};

export default HomeTop;
