import * as React from "react";
import { Text } from "react-native";
import styles from "./styles";

type PropTypes = {
  children: string;
  numberOfLines?: number;
  style?: any;
  title?: boolean;
  additional?: boolean;
  medium?: boolean;
  extraSmall?: boolean;
  semibold?: boolean;
  allowFontScaling?: boolean;
  onTextLayout?: (e: any) => void;
};

const StyledText = ({
  children,
  numberOfLines = 1,
  title = false,
  additional = false,
  medium = false,
  extraSmall = false,
  semibold = false,
  style,
  allowFontScaling = true,
  onTextLayout = () => {},
}: PropTypes) => {
  return (
    <Text
      style={[
        styles.wrapper,
        additional && styles.additional,
        title && styles.title,
        medium && styles.medium,
        extraSmall && styles.extraSmall,
        semibold && styles.semibold,
        style,
      ]}
      allowFontScaling={allowFontScaling}
      numberOfLines={numberOfLines}
      onTextLayout={onTextLayout}
    >
      {children}
    </Text>
  );
};

export default StyledText;
