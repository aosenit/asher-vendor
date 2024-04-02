import { View, Text, Pressable, ScrollView } from "react-native";
import React from "react";
import MidBigCard from "./MidBigCard";
import { ExoBold, ExoMedium } from "../StyledText";
import HomeBottomCard from "./HomeBottomCard";

const HomeBottom = () => {
  return (
    <View className="w-full h-[22%] px-[20px] ">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="bg-white py-3  rounded-[10px] w-full flex-row  shadow-md h-[100%] p-5 justify-between">
          <View className=" ">
            <ExoBold className="text-[18px] text-primary-base">FRI</ExoBold>
            <ExoBold className="text-[32px]">17</ExoBold>
          </View>

          <View className="gap-y-3 w-[80%]">
            <View>
              <HomeBottomCard title="Wall re-plastering" time="6:am-2pm" />
            </View>
            <View>
              <HomeBottomCard title="Garden Fence" time="3:pm-12pm" />
            </View>
            <View>
              <HomeBottomCard title="Plumbing Job" time="12:am-2pm" />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeBottom;
