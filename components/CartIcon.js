import { View, Text, TouchableOpacity } from "react-native";
import { Theme } from "../theme";
import { useNavigation } from "@react-navigation/native";

export default function CartIcon({ item }) {
  const navigation = useNavigation();
  return (
    <View className="absolute z-50 flex-row justify-center w-full bottom-2">
      <TouchableOpacity
        onPress={() => navigation.navigate("Cart", { ...item })}
      >
        <View
          className="flex-row items-center justify-around py-3 rounded-full shadow-xl shadow-black w-96"
          style={{ backgroundColor: Theme.bgColor(1) }}
        >
          <Text
            className="px-4 py-2 text-xl font-bold text-white rounded-full"
            style={{ backgroundColor: "#ffffff59" }}
          >
            3
          </Text>
          <Text className="text-xl font-bold text-white">View Cart</Text>
          <Text className="text-lg font-bold text-white">$30</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
