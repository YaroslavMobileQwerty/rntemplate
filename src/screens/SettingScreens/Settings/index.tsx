import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MainStackParamList } from "~/app/navigation/Main";

type CreateQuizScreenNav = NativeStackNavigationProp<
  MainStackParamList,
  "Settings"
>;

type Props = {
  navigation: CreateQuizScreenNav;
};

export function SettingsScreen({ navigation }: Props) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings Screen</Text>
      <Button
        title="Back to Home"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}
