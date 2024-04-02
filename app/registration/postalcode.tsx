import { View, Text, Modal } from "react-native";
import React, { useEffect, useState } from "react";
import { Stack, useRouter } from "expo-router";
import ButtonComponent from "../components/Button";
import DividerComponent from "../components/Divider";
import { SafeAreaView } from "react-native-safe-area-context";
import InputComponent from "../components/Input";

const PostalCodecreen = () => {
  const router = useRouter();
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <SafeAreaView className="px-[30px]  flex-1 bg-white ">
        <View className="justify-between  h-full pb-[20px]">
          <View>
            <Text className="text-[30px]  text-center font-exoMedium">
              Location
            </Text>
            <DividerComponent height={20} />
            <View className="items-center">
              <Text className="text-[16px] opacity-80 w-[95%] text-center font-exoLight">
                Tell us where you are based. You can start by typing in a valid
                postal code below.
              </Text>
            </View>

            <DividerComponent height={30} />
            <View className="">
              <InputComponent placeholder="Postal Code" title="Postal Code" />
            </View>
          </View>

          <View className="gap-y-2">
            <ButtonComponent
              text="NEXT"
              onPress={() => router.push("/registration/skills")}
            />
          </View>
        </View>

        <Modal animationType="slide" visible={false}>
          <SafeAreaView className="px-[30px]   bg-white ">
            <View className="justify-between  h-full pb-[20px] mt-10">
              <View>
                <Text className="text-[30px]  text-center font-exoMedium">
                  What’s your Postcode?
                </Text>
                <DividerComponent height={20} />
                <View className="items-center">
                  <Text className="text-[16px] opacity-80 w-[95%] text-center font-exoLight">
                    We’ll use this location to find you work in that area.
                  </Text>
                </View>

                <DividerComponent height={30} />
                <View className="">
                  <InputComponent placeholder="Search for postcode" title="." />
                </View>
              </View>
            </View>
          </SafeAreaView>
        </Modal>
      </SafeAreaView>
    </>
  );
};

export default PostalCodecreen;
