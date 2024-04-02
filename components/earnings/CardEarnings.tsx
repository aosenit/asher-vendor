import { View, Text, Pressable, PressableProps } from "react-native";
import React from "react";

interface MidBigCardProps extends PressableProps {
  children?: React.ReactNode;
}

const CardEarnings: React.FC<MidBigCardProps> = ({ children, ...props }) => {
  return (
    <Pressable
      className="bg-white p-5  rounded-[10px] w-full flex-row  shadow-md h-[100%] "
      {...props}
    >
      {children}
    </Pressable>
  );
};

export default CardEarnings;
