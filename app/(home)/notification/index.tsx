import { View, Text, SafeAreaView, FlatList } from "react-native";
import React from "react";
import GeneralHeader from "../../../components/GeneralHeader";
import { useRouter } from "expo-router";
import CardNotificationScreen from "../../../components/notification/CardNotificationScreen";
import mockDataArray, {
  ICardNotification,
} from "../../../data/notification/CardNotification";

const NotificationScreen = () => {
  const router = useRouter();
  return (
    <SafeAreaView>
      <View className="px-[20px]">
        <GeneralHeader
          onpress={() => router.replace("/(home)/")}
          color="black"
          title="Notifications"
        />
        <FlatList
          data={mockDataArray}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{ gap: 10, marginTop: 10 }}
        />
      </View>
    </SafeAreaView>
  );
};

export default NotificationScreen;

const renderItem = ({
  item,
  index,
}: {
  item: ICardNotification;
  index: number;
}) => <CardNotificationScreen isIcon={item.isIcon} data={item.data} />;
