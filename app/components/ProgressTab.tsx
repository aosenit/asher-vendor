import { View, Text } from "react-native";
import React from "react";

const ProgressTab = ({ progressLength = 1, activeTo }: any) => {
  return (
    <View className="flex-row w-[90%] mx-auto ">
      {Array.from({ length: progressLength }, (_, i) => i + 1).map((_, i) => {
        return (
          <View key={i} className="flex-row items-center">
            <View className="h-[16px] w-[16px] rounded-full border-[1px] border-primary-base items-center justify-center">
              <Text className="text-sm text-center font-exoMedium text-primary-base">
                {i + 1}
              </Text>
            </View>
            {i !== progressLength - 1 && (
              <View
                className={`w-[25px] h-[2px] ${
                  i < activeTo ? "bg-primary-base" : "bg-slate-300"
                }`}
              ></View>
            )}
          </View>
        );
      })}
    </View>
  );
};

export default ProgressTab;
