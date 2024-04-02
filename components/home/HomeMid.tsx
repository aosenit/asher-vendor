import { View } from "react-native";
import React from "react";
import WeeklyProgressCard from "./WeeklyProgressCard";
import MidBigCard from "./MidBigCard";
import { ExoBold, ExoMedium } from "../StyledText";
import { useRouter } from "expo-router";

const HomeMid = () => {
  const router = useRouter();
  return (
    <View className="h-[48%]   px-[20px] py-5 items-center w-full gap-y-4 mt-0 ">
      <WeeklyProgressCard progress={72} />
      <View className="flex-row gap-x-4 h-[55%] w-[100%] justify-center ">
        <View className=" w-[48%]">
          <MidBigCard>
            <View className="gap-y-3 items-center justify-center w-full ">
              <ExoBold className="text-[35px] text-primary-base">7</ExoBold>
              <ExoMedium className="max-w-[50%] text-center text-primary-base">
                Current Work Orders
              </ExoMedium>
            </View>
          </MidBigCard>
        </View>

        <View className="w-[48%]">
          <MidBigCard onPress={() => router.push("/(home)/transaction/")}>
            <View className="gap-y-3 items-center justify-center w-full ">
              <ExoBold className="text-[16px] text-primary-base">
                $1,320.76
              </ExoBold>
              <ExoMedium className="max-w-[50%] text-center text-primary-base">
                Total Earnings
              </ExoMedium>
            </View>
          </MidBigCard>
        </View>
      </View>
    </View>
  );
};

export default HomeMid;
