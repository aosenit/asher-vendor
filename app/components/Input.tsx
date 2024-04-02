import { View, Text, TextInput, KeyboardTypeOptions } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import DividerComponent from "./Divider";
import Colors from "../../constants/Colors";
import { Stack } from "expo-router";

interface ITextInput {
  value?: string | number;
  onChangeValue?: (value: string | number) => void;
  type?: KeyboardTypeOptions;
  placeholder?: string;
  isPassword?: boolean;
  title?: string;
}

const InputComponent = ({
  value,
  onChangeValue,
  type = "default",
  placeholder,
  isPassword,
  title,
}: ITextInput) => {
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "",
          headerShadowVisible: false,
        }}
      />
      <View className="">
        {title && (
          <View>
            <Text className="text-[16px] font-exoMedium">{title}</Text>
            <DividerComponent height={5} />
          </View>
        )}
        <View className="flex-row  items-center justify-between border-[2px] border-primary-base py-[10px] rounded-[10px] px-3">
          {!title && (
            <View>
              {isPassword ? (
                <Feather name="lock" size={16} color={Colors.light.primary} />
              ) : (
                <Feather name="mail" size={16} color={Colors.light.primary} />
              )}
            </View>
          )}
          <TextInput
            keyboardType={isPassword ? "default" : type}
            className="w-[90%] "
            placeholder={placeholder}
            style={{ fontFamily: "exoMedium" }}
            // placeholderTextColor={}
          />
        </View>
      </View>
    </>
  );
};

export default InputComponent;
