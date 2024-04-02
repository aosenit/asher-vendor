import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ProgressTab from "../components/ProgressTab";
import { useRouter } from "expo-router";
import DividerComponent from "../components/Divider";
import ButtonComponent from "../components/Button";
import { ScrollView } from "react-native-gesture-handler";

const FurtherinfoScreen = () => {
  const router = useRouter();

  const [description, setDescription] = useState("");
  const [education, setEducation] = useState("");
  const [qualification, setQualification] = useState("");
  const [experience, setExperience] = useState("");
  return (
    <>
      <SafeAreaView className="px-[30px]  flex-1  bg-white ">
        <View className="h-[90%]">
          <ProgressTab progressLength={8} activeTo={1} />
          <View className="justify-between  h-full pb-[20px] flex-9 mt-6">
            <ScrollView showsVerticalScrollIndicator={false} className="pb-10">
              <Text className="text-[30px]  text-center font-exoMedium">
                Further Info
              </Text>
              <DividerComponent height={20} />
              <View className="items-center">
                <Text className="text-[16px] opacity-80 w-[95%] text-center font-exoLight">
                  Answering these questions will allow clients to better
                  understand your area of expertise!
                </Text>
              </View>

              <TextAreaReg
                title="Description"
                desc=" Please write a brief description of the services that you offer, any
        experience or additional information you would like to include."
                value={description}
                setValue={setDescription}
              />

              <TextAreaReg
                title="Education"
                desc="Please input any education information below"
                value={education}
                setValue={setEducation}
              />

              <TextAreaReg
                title="Qualifications"
                desc="Please list any qualifications that you may have below"
                value={qualification}
                setValue={setQualification}
              />

              <TextAreaReg
                title="Experience"
                desc=" Please list pass experiences below."
                value={experience}
                setValue={setExperience}
              />
              <DividerComponent height={50} />
              <View className="gap-y-2">
                <ButtonComponent
                  text="NEXT"
                  onPress={() => router.push("/registration/furtherinfo")}
                />
              </View>
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default FurtherinfoScreen;

const TextAreaReg = ({ title, desc, value, setValue }: any) => {
  const handleChange = (val: string) => {
    setValue(val);
  };
  return (
    <View className="gap-2 ">
      <DividerComponent height={20} />
      <Text className="text-[16px] font-exoMedium">{title}</Text>
      <Text className="text-[16px] font-exoLight opacity-60">{desc}</Text>
      <View className="h-[120px] w-full bg-[#F0EFEF] rounded-[10px] px-5 justify-start">
        <TextInput
          className=" text-[16px]  w-full flex-1 "
          multiline
          value={value}
          onChangeText={(text) => handleChange(text)}
        />
      </View>
    </View>
  );
};
