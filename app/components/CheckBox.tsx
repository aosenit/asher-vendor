import { View, Text, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

interface IProps {
  checked: boolean;
  setChecked?: any;
  text: string;
}

const CheckBoxComponent = ({ checked, setChecked, text }: IProps) => {
  const handleChecked = () => {
    setChecked(!checked);
    console.log("working");
  };
  return (
    <Pressable onPress={handleChecked}>
      <View className="flex-row gap-2 items-center ">
        <View className="h-[20px] w-[20px] rounded-[5px] border-[2px] justify-between items-center border-primary-base">
          {checked ? (
            <Ionicons
              name="checkmark-sharp"
              size={15}
              color={Colors.light.primary}
              className="font-bold"
            />
          ) : undefined}
        </View>
        <Text className="font-exoMedium">{text}</Text>
      </View>
    </Pressable>
  );
};

export default CheckBoxComponent;
