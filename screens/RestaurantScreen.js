import { View, Text, Image, TouchableOpacity } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { Theme } from "../theme";
import { MaterialIcons, EvilIcons } from "@expo/vector-icons";
import DishRow from "../components/DishRow";
import { ScrollView } from "react-native";
import CartIcon from "../components/CartIcon";
import { StatusBar } from "expo-status-bar";

export default function RestaurantScreen() {
  const navigation = useNavigation();
  const { params } = useRoute();
  let item = params;

  function getData({ info }) {
    console.log(info);
  }

  return (
    <>
      <ScrollView>
        <StatusBar style="light" />
        <View className="relative flex-1 bg-white">
          <Image source={item.image} className="w-full h-96" />
          <View className="absolute p-2 bg-white rounded-full top-16 left-4">
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign name="arrowleft" size={26} color={Theme.bgColor(1)} />
            </TouchableOpacity>
          </View>

          <View>
            <View className="p-3 rounded-3xl bg-white top-[-70px]">
              <Text className="text-3xl font-bold">{item.name}</Text>
              <View className="flex-row items-center my-2 gap-x-4">
                <View className="flex-row items-center">
                  <MaterialIcons name="star-rate" size={24} color="orange" />
                  <Text>
                    {item.stars} ({item.reviews})
                  </Text>
                  <Text className="font-bold"> &#183; {item.category}</Text>
                </View>
                <View className="flex-row items-center">
                  <EvilIcons name="location" size={30} color="green" />
                  <Text className="font-semibold">
                    Nearby &#183; {item.address}
                  </Text>
                </View>
              </View>
              <Text className="mb-4 text-gray-600">{item.description}</Text>

              <View>
                <Text className="text-3xl font-bold">Menu</Text>
                {item.dishes.map((dish, index) => {
                  return <DishRow key={index} dish={dish} getData={getData} />;
                })}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <CartIcon item={item} />
    </>
  );
}
