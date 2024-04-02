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

const PhoneNumberScreen = () => {
  const router = useRouter();

  const [isChecked, setChecked] = useState(false);
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);

  useEffect(() => {
    setIsBtnDisabled(true);

    if (isChecked) {
      setIsBtnDisabled(false);
    }
  }, [isChecked]);

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "",
          headerShadowVisible: false,
          animation: "slide_from_left",
        }}
      />

      <SafeAreaView className="px-[30px] justify-start flex-1 bg-white">
        <View className="">
          <Text className="text-[30px]  text-center font-exoMedium">
            Welcome Josiah
          </Text>
          <DividerComponent height={20} />
          <View className="items-center">
            <Text className="text-[16px] opacity-80 w-[85%] text-center font-exoLight">
              Please enter a valid phone number below, A One Time Passcode will
              be sent to this number to verify your account
            </Text>
          </View>

          <DividerComponent height={30} />
          <View className="">
            <InputComponent
              placeholder="Phone number"
              title="Phone number"
              type="numeric"
            />
          </View>
          <DividerComponent height={20} />
          <View className="">
            <CheckBoxComponent
              checked={isChecked}
              setChecked={setChecked}
              text="I do not want to receive promotional communications from Asher Vendor"
            />
          </View>

          <DividerComponent height={40} />
          <View className="gap-y-2">
            <ButtonComponent
              text="SIGN UP"
              isDisabled={isBtnDisabled}
              onPress={() => router.push("/registration/verifyotp")}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default PhoneNumberScreen;
