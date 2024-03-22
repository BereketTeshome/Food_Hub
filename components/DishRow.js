import { View, Text, Image, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { Theme } from "../theme";

export default function DishRow({ dish }) {
  const [count, setCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(parseInt(dish.price));
  const handleAdd = () => {
    setCount(count + 1);
    setTotalPrice(totalPrice + dish.price);
  };
  const handleMinus = () => {
    setCount(count - 1);
    setTotalPrice(totalPrice - dish.price);
  };
  return (
    <View>
      <View className="flex-row p-2 mt-6 bg-white shadow-xl shadow-gray-600 rounded-xl">
        <Image source={dish.image} className="w-28 h-28 rounded-3xl" />
        <View className="p-4">
          <Text className="text-2xl font-bold">{dish.name}</Text>
          <Text className="text-gray-500">{dish.description}</Text>

          <View className="flex-row items-center justify-between w-64">
            <Text className="text-lg font-bold">${dish.price}</Text>
            <View className="flex-row items-center">
              <TouchableOpacity
                disabled={!count > 0}
                onPress={() => handleMinus()}
              >
                <Entypo
                  name="circle-with-minus"
                  size={32}
                  color={Theme.bgColor(1)}
                />
              </TouchableOpacity>
              <Text className="text-lg"> {count} </Text>
              <TouchableOpacity onPress={() => handleAdd()}>
                <Entypo
                  name="circle-with-plus"
                  size={32}
                  color={Theme.bgColor(1)}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
