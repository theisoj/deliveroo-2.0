import { SafeAreaView } from "react-native-safe-area-context";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

const PreparingOrderScreen = () => {
  const navigation = useNavigation()

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Toimitus")
    }, 4000)
  }, [])

  return (
    <SafeAreaView className="bg-[#00CCBB] flex-1 items-center justify-center">
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-[128px] text-center"
      >
        🤔
      </Animatable.Text>
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-lg my-10 mx-4 text-white font-bold text-center"
      >
        Odotetaan, että ravintola hyväksyy tilauksesi
      </Animatable.Text>

      <Progress.Circle size={60} indeterminate={true} color="white" />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
