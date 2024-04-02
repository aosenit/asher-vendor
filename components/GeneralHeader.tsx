import { View, Text } from "react-native";
import React from "react";

import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { ExoBold } from "./StyledText";

type IProp = {
  onpress: () => void;
  color: string;
  title: string;
};

const GeneralHeader = ({ onpress, color, title }: IProp) => {
  return (
    <>
      <View className={` pt-2 pb-2 flex-row  items-center `}>
        <TouchableOpacity onPress={onpress}>
          <View className={`  flex-row gap-x-10 items-center`}>
            <AntDesign name={"left"} size={24} color="black" />
            <ExoBold
              className={`text-gray-500 text-[28px] opacity-90`}
              style={{ color: color }}
            >
              {title}
            </ExoBold>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default GeneralHeader;
