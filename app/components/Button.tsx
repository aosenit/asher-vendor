import { View, Text, Pressable, ActivityIndicator } from "react-native";
import React from "react";
import { IButton } from "../utilities/Interface";

const ButtonComponent = ({
  isOutLine,
  isLoading,
  onPress,
  text,
  isDisabled,
}: IButton) => {
  return (
    <Pressable
      disabled={isDisabled}
      className={` ${
        isOutLine ? "bg-white" : "bg-primary-base"
      } py-[10px] justify-center rounded-[10px] flex-row gap-1 border-[1px] border-primary-base ${
        isDisabled ? "opacity-60" : "opacity-100"
      }`}
      onPress={onPress}
    >
      <Text
        className={`text-[20px] text-center font-exoMedium ${
          isOutLine ? "text-primary-base" : "text-white"
        }`}
      >
        {text}
      </Text>
      {isLoading && <ActivityIndicator color={isOutLine ? "red" : "white"} />}
    </Pressable>
  );
};

export default ButtonComponent;
