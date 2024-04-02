import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import InputComponent from "../components/Input";
import DividerComponent from "../components/Divider";
import ButtonComponent from "../components/Button";
import Checkbox from "expo-checkbox";
import { Stack } from "expo-router/stack";
import CheckBoxComponent from "../components/CheckBox";
import { useRouter } from "expo-router";

const SignUpScreen = () => {
  const router = useRouter();

  const [isChecked, setChecked] = useState(false);
  const [isSoleTrader, setIsSoleTrader] = useState(false);
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);

  useEffect(() => {
    setIsBtnDisabled(true);

    if (isChecked && isSoleTrader) {
      setIsBtnDisabled(false);
    }
  }, [isChecked, isSoleTrader]);

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "",
          headerShadowVisible: false,
        }}
      />

      <SafeAreaView className="px-[30px] justify-start flex-1 bg-white">
        <View className="">
          <Text className="text-[40px]  text-center font-exoBold">SIGN UP</Text>
          <View className="items-center">
            <Text className="text-[16px] opacity-80 w-[70%] text-center font-exoLight">
              Enter your name as it appears on your government-issued ID
            </Text>
          </View>

          <DividerComponent height={30} />
          <View className="">
            <InputComponent
              placeholder="Register email/Username"
              title="First Name"
            />
            <DividerComponent height={20} />
            <InputComponent isPassword placeholder="Password" title="Surname" />
            <DividerComponent height={20} />
            <InputComponent
              isPassword
              placeholder="Password"
              title="Password"
            />
            <DividerComponent height={20} />
            <InputComponent
              isPassword
              placeholder="Password"
              title="Confirm Password"
            />
          </View>
          <DividerComponent height={20} />
          <View className="">
            <CheckBoxComponent
              checked={isChecked}
              setChecked={setChecked}
              text="I agree to the Terms of Services"
            />

            <DividerComponent height={10} />
            <CheckBoxComponent
              checked={isSoleTrader}
              setChecked={setIsSoleTrader}
              text="I am a sole trader or other business entity"
            />
          </View>

          <DividerComponent height={40} />
          <View className="gap-y-2">
            <ButtonComponent
              text="SIGN UP"
              isDisabled={isBtnDisabled}
              onPress={() => router.push("/registration/phonenumber")}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default SignUpScreen;
