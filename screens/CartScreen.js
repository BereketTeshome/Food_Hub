import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Theme } from "../theme";
import { AntDesign, Entypo } from "@expo/vector-icons";

export default function CartScreen() {
  const navigation = useNavigation();
  const { params } = useRoute();
  let item = params;

  return (
    <View className="relative flex-1 p-2 bg-white top-12">
      <View className="flex-col items-center justify-center text-center">
        <TouchableOpacity
          className="absolute z-50 left-1"
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="leftcircle" size={32} color={Theme.bgColor(1)} />
        </TouchableOpacity>
        <Text className="text-2xl font-bold">Your Cart</Text>
        <Text className="text-gray-700">{item.name}</Text>
      </View>
      <View
        style={{ backgroundColor: Theme.bgColor(0.3) }}
        className="flex-row items-center justify-around mt-4"
      >
        <Image
          className="w-24 h-24"
          source={require("../assets/images/bikeGuy.png")}
        />
        <Text className="font-semibold text-[15px]">
          Deliver in 20-30 minutes
        </Text>
        <Text className="font-bold text-[17px]" style={{ color: Theme.text }}>
          Change
        </Text>
      </View>

      <ScrollView>
        <View className="pb-3">
          {item.dishes.map((dish) => {
            return (
              <View
                key={dish.id}
                className="flex-row items-center justify-between px-4 py-1 mt-6 bg-white rounded-full shadow-md shadow-black"
              >
                <View className="flex-row items-center gap-4">
                  <Text className="font-bold" style={{ color: Theme.text }}>
                    2x
                  </Text>
                  <Image
                    className="w-16 h-16 rounded-full"
                    source={dish.image}
                  />
                  <Text className="text-[16px] font-semibold">{dish.name}</Text>
                </View>

                <View className="flex-row items-center gap-2">
                  <Text className="text-lg font-bold">${dish.price}</Text>
                  <Entypo
                    name="circle-with-minus"
                    size={32}
                    color={Theme.bgColor(1)}
                  />
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>

      <View
        className="z-50 w-full p-8 mt-5 bottom-4 rounded-t-3xl"
        style={{ backgroundColor: Theme.bgColor(0.2) }}
      >
        <View className="flex-row justify-between">
          <View className="gap-2">
            <Text>Subtotal</Text>
            <Text>Delivery Fee</Text>
            <Text className="text-lg font-bold">Order Total</Text>
          </View>

          <View className="gap-2">
            <Text>$30</Text>
            <Text>$6</Text>
            <Text className="text-lg font-bold">$36</Text>
          </View>
        </View>

        <View
          className="p-3 mt-4 rounded-full"
          style={{ backgroundColor: Theme.bgColor(0.8) }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Loading")}>
            <Text className="text-xl font-bold text-center text-white">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
