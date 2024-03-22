import { View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

export default function OrderLoading() {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 1500);
  }, []);
  return (
    <View className="flex-1 justify-center items-center">
      <Image
        className="scale-75 "
        source={require("../assets/images/delivery.gif")}
      />
    </View>
  );
}
