import { View, Text, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, EvilIcons, Feather } from "@expo/vector-icons";
import { Theme } from "../theme";
import Categories from "../components/Categories";
import Featured from "../components/Featured";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 p-2">
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center justify-between w-5/6 p-3 border-2 border-gray-300 rounded-full">
          <View className="flex-row">
            <AntDesign name="search1" size={24} color="gray" />
            <TextInput placeholder="Restaurants" />
          </View>
          <View className="flex-row items-center border-l-2 border-gray-400">
            <EvilIcons name="location" size={30} color="gray" />
            <Text className="text-gray-500">New York, NYC</Text>
          </View>
        </View>
        <View
          className="p-3 rounded-full"
          style={{ backgroundColor: Theme.bgColor(1) }}
        >
          <Feather name="sliders" size={24} color="white" />
        </View>
      </View>
      <Categories />
      <Featured />
    </SafeAreaView>
  );
}
