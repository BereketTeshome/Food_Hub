import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import React from "react";
import { MaterialIcons, EvilIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Theme } from "../theme";

export default function RestaurantCard({ res }) {
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("Restaurant", { ...res })}
    >
      <View
        key={res.id}
        className={`flex-row mt-2 mb-10 mr-8 overflow-hidden bg-gray-100 shadow-xl rounded-3xl`}
        style={{ shadowColor: Theme.bgColor(1) }}
      >
        <View>
          <Image source={res.image} className="h-40 w-72" />
          <View className="p-3">
            <Text className="text-xl font-bold">{res.name}</Text>
            <View className="flex-row items-center my-2">
              <MaterialIcons name="star-rate" size={24} color="orange" />
              <Text>
                {res.stars} ({res.reviews})
              </Text>
              <Text className="font-bold"> &#183; {res.category}</Text>
            </View>
            <View className="flex-row items-center">
              <EvilIcons name="location" size={30} color="green" />
              <Text className="font-semibold">Nearby &#183; {res.address}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
