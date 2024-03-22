import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { categories } from "../constants";
import { useState } from "react";

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState(null);
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="flex-row"
      >
        {categories.map((cat) => {
          let isActive = cat.id == activeCategory;
          let btnClass = isActive ? "bg-gray-600" : "bg-gray-300";
          let textClass = isActive
            ? "font-semibold text-gray-800"
            : "text-gray-500";

          return (
            <TouchableOpacity
              key={cat.id}
              onPress={() => setActiveCategory(cat.id)}
            >
              <View className="flex-col items-center m-2 text-center scale-75">
                <View className={`p-1 rounded-full ${btnClass}`}>
                  <Image source={cat.image} className="w-16 h-16" />
                </View>
                <Text className={`text-lg ${textClass}`}>{cat.name}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
