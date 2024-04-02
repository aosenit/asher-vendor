import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import InputComponent from "../components/Input";
import ButtonComponent from "../components/Button";
import DividerComponent from "../components/Divider";
import { ExoBold } from "../../components/StyledText";
import { useRouter } from "expo-router";

const LoginScreen = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="px-[20px] justify-end flex-1 bg-white">
      <View className="h-[75%] gap-y-14">
        <ExoBold className="text-[40px]  text-center">LOG IN</ExoBold>
        <View className="">
          <InputComponent placeholder="Register email/Username" />
          <DividerComponent height={20} />
          <InputComponent isPassword placeholder="Password" />
        </View>
        <View className="gap-y-2">
          <ButtonComponent
            text="LOG IN"
            onPress={() => router.push("/(home)/")}
          />
          <Text className="text-center font-exoMedium text-[16px]">
            Forget your Password?
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
