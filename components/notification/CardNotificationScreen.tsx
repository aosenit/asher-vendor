import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import { ExoBold, ExoMedium } from "../StyledText";
import Avatar from "../Avatar";
import { ICardNotification } from "../../data/notification/CardNotification";

const CardNotificationScreen = ({ isIcon, data }: ICardNotification) => {
  return (
    <View className="bg-white py-3  rounded-[10px] w-full flex-row  shadow-md min-h-[100px] p-5 justify-between items-center">
      {isIcon ? (
        <Ionicons
          name={
            data.title !== "Earnings"
              ? "chatbubble-ellipses-outline"
              : "wallet-outline"
          }
          size={35}
          color={Colors.light.primary}
        />
      ) : (
        <Avatar height={50} width={50} />
      )}

      <View className="w-[80%] gap-y-1">
        <View className="flex-row justify-between ">
          <ExoBold className="text-[18px]">{data.title}</ExoBold>
          <ExoMedium className="text-[16px] text-gray-500">
            {data.time}
          </ExoMedium>
        </View>
        <ExoMedium className="text-[15px] text-gray-500">
          {data.detail}
        </ExoMedium>
      </View>
    </View>
  );
};

export default CardNotificationScreen;
