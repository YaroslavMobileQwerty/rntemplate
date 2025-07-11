import { StyleSheet } from "react-native";
import theme from "~/shared/theme";

export default StyleSheet.create({
  wrapper: {
    fontSize: theme?.fontSizes?.small,
    fontFamily: "TimesNewRoman",
    color: theme?.colors?.text_main,
    fontWeight: "400",
  },
  title: {
    fontSize: theme?.fontSizes?.extraLarge,
    fontWeight: "700",
  },
  additional: {
    color: theme?.colors?.text_additional,
  },
  medium: {
    fontSize: theme?.fontSizes?.medium,
  },
  extraSmall: {
    fontSize: theme?.fontSizes?.extraSmall,
  },
  semibold: {
    fontWeight: "600",
    fontFamily: "TimesNewRomanBold",
  },
});
