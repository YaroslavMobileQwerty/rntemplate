import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MainStackParamList } from "~/app/navigation/Main";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type CreateQuizScreenNav = NativeStackNavigationProp<
  MainStackParamList,
  "Home"
>;

type Props = {
  navigation: CreateQuizScreenNav;
};

export function HomeScreen({ navigation }: Props) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome to the Home Screen!</Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate("Settings")}
      />
    </View>
  );
}
