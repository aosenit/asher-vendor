import { View, Text } from "react-native";
import React, { useState } from "react";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import Animated, {
  FadeIn,
  FadeInUp,
  FadeOut,
  FadeOutUp,
} from "react-native-reanimated";

const SelectComponent = ({
  options = [],
  selectedOption,
  setSelectedOption,
  placeholder,
}: any) => {
  const handleOptionPress = (option: any) => {
    setSelectedOption(option.title);
  };

  const [isOptions, setIsOptions] = useState(false);

  return (
    <View className="gap-y-2">
      <TouchableOpacity
        onPress={() => {
          if (options.length <= 0) return;
          setIsOptions((prev) => !prev);
        }}
        className=" h-[52px] justify-between rounded-[10px] flex-row items-center  border-[1px] border-primary-base px-4"
      >
        {selectedOption ? (
          <Text className="text-slate-500 font-exoMedium">
            {selectedOption}
          </Text>
        ) : (
          <Text className="text-slate-500 font-exoMedium">{placeholder}</Text>
        )}
        {/* use reanimated animation to animate the icon from up to down depending on if isOptions is true or false */}

        <FontAwesome
          name={isOptions ? "angle-down" : "angle-up"}
          size={22}
          color={Colors.light.icon}
        />
      </TouchableOpacity>
      {options.length > 1 && isOptions ? (
        <Animated.View
          entering={FadeIn.duration(200)}
          exiting={FadeOut.duration(400)}
          className="border-[1px] border-primary-base overflow-hidden rounded-[10px]"
        >
          {options.map((data: any, i: number) => {
            const isLastItem = i === options.length - 1;
            return (
              //   use reanimated animation to fade in each option in depending the index and maybe 300s
              <TouchableOpacity key={i} onPress={() => handleOptionPress(data)}>
                <Animated.View
                  entering={FadeInUp.duration(300 * i)}
                  exiting={FadeOutUp.duration(300 * i)}
                  className={`h-[50px] ${
                    !isLastItem ? "border-b-[1px] border-b-primary-base" : ""
                  }  px-4 justify-center`}
                >
                  <Text className="text-slate-500 text-[15px] font-exoMedium">
                    {data?.title}
                  </Text>
                </Animated.View>
              </TouchableOpacity>
            );
          })}
        </Animated.View>
      ) : undefined}
    </View>
  );
};

export default SelectComponent;
