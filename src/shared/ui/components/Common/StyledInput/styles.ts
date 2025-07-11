import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";
import theme from "~/shared/theme";

export default StyleSheet.create({
  input: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme?.colors?.disabled,
    backgroundColor: theme?.colors?.white,
    height: moderateScale(44),
    paddingHorizontal: theme.margins.small,
    color: theme?.colors?.text_main,
    width: "100%",
    fontSize: theme?.fontSizes?.extraSmall,
  },
  label: {
    color: theme?.colors?.text_main,
    fontSize: theme?.fontSizes?.mini,
    marginBottom: theme?.margins?.mini,
  },
  error: {
    borderColor: theme?.colors?.error,
    borderRadius: 8,
    borderWidth: 2,
  },
  errorText: {
    color: theme?.colors?.error,
    fontSize: theme?.fontSizes?.mini,
  },
  success: {
    borderColor: theme?.colors?.success,
    borderRadius: 8,
    borderWidth: 2,
  },
  successText: {
    color: theme?.colors?.success,
    fontSize: theme?.fontSizes?.mini,
  },
  disable: {
    backgroundColor: theme?.colors?.bg_additional,
    color: theme?.colors?.text_additional,
    borderWidth: 1,
    borderColor: theme?.colors?.border,
  },
  focus: {
    borderWidth: 2,
    borderColor: theme?.colors?.primary,
  },
  focusContainer: {
    borderWidth: 3,
    borderColor: theme?.colors?.inputShadow,
  },
  container: {
    backgroundColor: theme?.colors?.white,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
});
