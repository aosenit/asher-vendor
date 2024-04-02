import { View, Text, SafeAreaView, StatusBar } from "react-native";
import React from "react";
import GeneralHeader from "../../../components/GeneralHeader";
import { useRouter } from "expo-router";
import { ExoBold, ExoMedium } from "../../../components/StyledText";
import CardEarnings from "../../../components/earnings/CardEarnings";
import Rule from "../../../components/Rule";
import OverviewCard from "../../../components/earnings/OverviewCard";
import MonthlyCard from "../../../components/earnings/MonthlyCard";
import WeeklyCard from "../../../components/earnings/WeeklyCard";
import { ScrollView } from "react-native-gesture-handler";

const TransactionScreen = () => {
  const router = useRouter();
  return (
    <SafeAreaView>
      <ScrollView className="p-[20px] h-[100%] gap-y-4 ">
        <OverviewCard />
        <MonthlyCard />
        <WeeklyCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default TransactionScreen;
