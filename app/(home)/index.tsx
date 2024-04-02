import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeTop from "../../components/home/HomeTop";
import HomeMid from "../../components/home/HomeMid";
import HomeBottom from "../../components/home/HomeBottom";

const Page = () => {
  return (
    <SafeAreaView>
      <View className=" h-full gap-y-4 py-3">
        <HomeTop />
        <HomeMid />
        <HomeBottom />
      </View>
    </SafeAreaView>
  );
};

export default Page;
