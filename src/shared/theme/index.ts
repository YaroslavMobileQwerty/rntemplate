import { moderateScale } from "react-native-size-matters";

const theme = {
  colors: {
    primary: "#005EF7",
    success: "#32AD86",
    error: "#DD6666",
    notification: "#DDAD66",
    white: "#fff",
    black: "#000",
    text_main: "#172059",
    text_additional: "#6B7280",
    bg_main: "#ECEEEE",
    bg_additional: "#F8F8F8",
    disabled: "#C1C7D9",
    inputShadow: "#c6daf7",
    divider: "#DFDFDF",
    border: "#DFDFDF",
  },
  fontSizes: {
    mini: moderateScale(12),
    extraSmall: moderateScale(14),
    small: moderateScale(16),
    medium: moderateScale(18),
    large: moderateScale(20),
    extraLarge: moderateScale(24),
    gigantic: moderateScale(32),
  },
  margins: {
    extraMini: moderateScale(4),
    mini: moderateScale(5),
    extraSmall: moderateScale(8),
    small: moderateScale(10),
    semiSmall: moderateScale(12),
    medium: moderateScale(16),
    semiLarge: moderateScale(20),
    large: moderateScale(24),
    extraLarge: moderateScale(32),
    gigantic: moderateScale(50),
  },
} as const;

export default theme;
