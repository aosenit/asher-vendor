import { View, Text } from "react-native";
import React from "react";
import CardEarnings from "./CardEarnings";
import { ExoBold, ExoMedium } from "../StyledText";
import Rule from "../Rule";

const OverviewCard = () => {
  return (
    <View className="h-[33%] gap-y-2">
      <View className="flex-row items-center justify-between h-[40px] ">
        <ExoMedium className="text-[24px] text-gray-900">Overview</ExoMedium>
        <ExoMedium>LAST 6 MONTHS</ExoMedium>
      </View>

      <View className="h-[90%]">
        <CardEarnings>
          <View className="w-full justify-center gap-5">
            <View className="w-full my-1">
              <View className="w-full flex-row items-center justify-between  mb-2">
                <ExoMedium className="text-[18px] ">Total Earnings</ExoMedium>
                <ExoMedium className="text-[18px] ">$12,536.90</ExoMedium>
              </View>
              <Rule />
            </View>

            <View className="w-full my-1">
              <View className="w-full flex-row items-center justify-between  mb-2">
                <ExoMedium className="text-[18px] ">
                  Anticipated Earnings
                </ExoMedium>
                <ExoMedium className="text-[18px] ">$18,536.90</ExoMedium>
              </View>
              <Rule />
            </View>
          </View>
        </CardEarnings>
      </View>
    </View>
  );
};

export default OverviewCard;