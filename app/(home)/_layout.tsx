import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import Colors from "../../constants/Colors";

const HomeLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          height: 90,
          // position: "absolute",

          bottom: 0,

          // left: 0,
          elevation: 100,
          backgroundColor: "#FCFCFC",
        },

        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="home-outline"
              size={28}
              color={focused ? Colors.light.primary : "black"}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="contact"
        options={{
          title: "Contact",
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="clipboard-text-outline"
              size={28}
              color={focused ? Colors.light.primary : "black"}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="transaction"
        options={{
          title: "Transaction",
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="monetization-on"
              size={28}
              color={focused ? Colors.light.primary : "black"}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="user"
              size={28}
              color={focused ? Colors.light.primary : "black"}
            />
          ),
        }}
      />
      <Tabs.Screen name="notification" options={{ href: null }} />
    </Tabs>
  );
};

export default HomeLayout;
