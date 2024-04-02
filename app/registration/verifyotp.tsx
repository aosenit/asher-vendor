import { View, Text } from "react-native";
import React from "react";
import { Stack, useRouter } from "expo-router";
import ButtonComponent from "../components/Button";
import DividerComponent from "../components/Divider";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

const OTPScreen = () => {
  const router = useRouter();
  return (
    <>
      <SafeAreaView className="px-[30px]  flex-1 bg-white ">
        <View className="justify-between  h-full pb-[20px]">
          <View>
            <Text className="text-[30px]  text-center font-exoMedium">
              Welcome Josiah!
            </Text>
            <DividerComponent height={20} />
            <View className="items-center">
              <Text className="text-[16px] opacity-80 w-[95%] text-center font-exoLight">
                We have sent a One Time Passcode to **************4503. Please
                enter the code to verify your account
              </Text>
            </View>
            <View className="flex gap-2 flex-row justify-center items-center my-5">
              {[1, 2, 3, 4].map((_, i) => {
                return (
                  <View
                    key={i}
                    className="h-[80px] w-[65px] border-[2px] border-primary-base rounded-md"
                  ></View>
                );
              })}
            </View>
            <Text className="text-[16px]  w-[95%] text-center font-exoMedium">
              Didnt receive a code ?.{" "}
              <Link href={".."} className="text-primary-base">
                Resend
              </Link>
            </Text>
          </View>

          <View className="gap-y-2">
            <ButtonComponent
              text="VERIFY"
              onPress={() => router.push("/registration/postalcode")}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default OTPScreen;
