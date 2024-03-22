import { View, Text, Image, TouchableOpacity } from "react-native";
import MapView, { MapMarker } from "react-native-maps";
import { featured } from "../constants";
import { Theme } from "../theme";
import { Ionicons, Feather } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

export default function DeliveryScreen() {
  const res = featured.restaurants[0];
  const navigation = useNavigation();

  return (
    <View className="flex-1">
      <StatusBar style="dark" />
      <MapView
        initialRegion={{
          latitude: res.lat,
          longitude: res.lng,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        className="flex-1"
        mapType="standard"
      >
        <MapMarker
          coordinate={{ latitude: res.lat, longitude: res.lng }}
          title={res.name}
          description={res.description}
          pinColor={Theme.bgColor(1)}
        />
      </MapView>

      <View className="bg-white rounded-t-2xl p-4">
        <View className="flex-row justify-between p-4 shadow-2xl shadow-black items-center">
          <View>
            <Text className="font-semibold text-lg">Estimated Arrival</Text>
            <Text className="font-extrabold text-3xl" style={{ color: "#444" }}>
              20-30 Minutes
            </Text>
            <Text className="font-semibold text-md text-gray-500">
              Your order is on it's way!
            </Text>
          </View>
          <Image
            className="w-24 h-24"
            source={require("../assets/images/bikeGuy2.gif")}
          />
        </View>

        <View
          className="flex-row rounded-full items-center justify-between p-2"
          style={{ backgroundColor: Theme.bgColor(0.8) }}
        >
          <View className="flex-row items-center">
            <Image
              className="w-16 h-16 rounded-full mr-3"
              style={{ borderWidth: 3, borderColor: "#cccac4" }}
              source={require("../assets/images/deliveryGuy.png")}
            />
            <View>
              <Text className="text-white text-lg font-bold">Syed Norman</Text>
              <Text className="text-white text-sm">Your Rider</Text>
            </View>
          </View>
          <View className="flex-row">
            <TouchableOpacity>
              <View className="bg-white rounded-full p-2">
                <Ionicons name="call" size={28} color={Theme.bgColor(1)} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <View className="bg-white rounded-full p-2 ml-2">
                <Feather name="x" size={30} color="red" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
