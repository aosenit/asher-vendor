import { View, Text } from "react-native";
import React, { useState } from "react";
import { Stack, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import DividerComponent from "../components/Divider";
import ButtonComponent from "../components/Button";
import ProgressTab from "../components/ProgressTab";
import SelectComponent from "../components/Select";

const optionsData = [
  { title: "Plumbing" },
  { title: "Carpentry" },
  { title: "Decorating" },
  { title: "Roofing" },
  { title: "Engineer" },
];

const SkillScreen = () => {
  const [skills, setSkills] = useState("");
  const router = useRouter();
  return (
    <>
      <SafeAreaView className="px-[30px]  flex-1  bg-white ">
        <View className="h-[90%]">
          <ProgressTab progressLength={8} activeTo={0} />

          <View className="justify-between  h-full pb-[20px] flex-9 mt-6">
            <View>
              <Text className="text-[30px]  text-center font-exoMedium">
                Skills
              </Text>
              <DividerComponent height={20} />
              <View className="items-center">
                <Text className="text-[16px] opacity-80 w-[95%] text-center font-exoLight">
                  Please choose what best describes the skills you have.
                </Text>
              </View>

              <DividerComponent height={30} />
              <View className="">
                <SelectComponent
                  options={optionsData}
                  selectedOption={skills}
                  setSelectedOption={setSkills}
                  placeholder={"Choose skill"}
                />
              </View>
            </View>

            <View className="gap-y-2">
              <ButtonComponent
                text="NEXT"
                onPress={() => router.push("/registration/rates")}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default SkillScreen;
