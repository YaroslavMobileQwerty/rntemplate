import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";
import theme from "~/shared/theme";

export default StyleSheet.create({
  modalContainer: {
    borderRadius: 8,
    padding: theme?.margins?.mini,
    backgroundColor: theme?.colors?.white,
    paddingHorizontal: theme?.margins?.medium,
    paddingVertical: theme?.margins?.semiLarge,
    justifyContent: "space-between",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  crossImage: {
    width: moderateScale(20),
    height: moderateScale(20),
  },
  crossBlock: {
    borderRadius: 8,
    padding: theme?.margins?.mini,
    borderWidth: 1,
    borderColor: theme?.colors?.text_additional,
  },
  text: {
    maxWidth: moderateScale(240),
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme?.margins?.large,
  },
  buttonBlock: {
    flex: 1,
  },
  closseButtonBlock: {
    flex: 1,
    marginRight: theme?.margins?.medium,
  },
});
