import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";
import theme from "~/shared/theme";

export default StyleSheet.create({
  wrapper: {
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    overflow: "hidden",
    flex: 1,
  },
  container: {
    backgroundColor: theme?.colors?.primary,
    borderRadius: 8,
    height: moderateScale(44),
  },
  disabled: {
    backgroundColor: theme?.colors?.disabled,
    borderWidth: 0,
  },
  text: {
    color: theme?.colors?.white,
    fontFamily: "TimesNewRoman",
    fontWeight: "700",
  },
});
