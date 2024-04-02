import { View, Text, Image } from "react-native";
import React from "react";

type AvatarProp = {
  height: number;
  width: number;
};

const uri =
  "https://images.pexels.com/photos/8993561/pexels-photo-8993561.jpeg?auto=compress&cs=tinysrgb&w=400";

const Avatar = ({ height = 100, width = 100 }: AvatarProp) => {
  return (
    <View
      className="bg-gray-300 rounded-full overflow-hidden shadow-md "
      style={{ height: height, width: width }}
    >
      <Image source={{ uri: uri }} className="h-full w-full" />
    </View>
  );
};

export default Avatar;
