import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { featured } from "../constants";
import { Theme } from "../theme";
import RestaurantCard from "./RestaurantCard";
export default function Featured() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {[featured, featured, featured].map((feature, index) => {
        return (
          <View key={index} className="overflow-visible">
            <View className="flex-row items-center justify-between">
              <View>
                <Text className="text-xl font-bold">{feature.title}</Text>
                <Text className="text-gray-600 text-md">
                  {feature.description}
                </Text>
              </View>
              <TouchableOpacity>
                <Text style={{ color: Theme.text }} className="text-[18px] ">
                  See All
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                className="overflow-visible"
              >
                {featured.restaurants.map((res, index) => {
                  return <RestaurantCard key={index} res={res} />;
                })}
              </ScrollView>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
}
