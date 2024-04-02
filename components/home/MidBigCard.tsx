import { View, Text, Pressable, PressableProps } from "react-native";
import React from "react";

interface MidBigCardProps extends PressableProps {
  children?: React.ReactNode;
}

const MidBigCard: React.FC<MidBigCardProps> = ({ children, ...props }) => {
  return (
    <Pressable
      className="bg-white py-3  rounded-[10px] w-full flex-row  items-center shadow-md h-[100%]"
      {...props}
    >
      {children}
    </Pressable>
  );
};

export default MidBigCard;
