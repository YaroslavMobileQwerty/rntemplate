import * as React from "react";
import { Pressable, ViewStyle, View, TextStyle } from "react-native";
import StyledText from "~/shared/ui/components/Common/StyledText";
import styles from "./styles";

type ButtonProps = {
  children: string;
  style?: ViewStyle;
  onPress: () => void;
  disabled?: boolean;
  textStyle?: TextStyle;
  mainStyle?: ViewStyle;
};

const StyledButton = ({
  children,
  onPress,
  disabled = false,
  style,
  textStyle,
  mainStyle,
}: ButtonProps) => {
  return (
    <View style={[styles.container, disabled && styles.disabled, mainStyle]}>
      <Pressable
        onPress={onPress}
        disabled={disabled}
        style={[styles.wrapper, style]}
      >
        <StyledText extraSmall style={[styles.text, textStyle]}>
          {children}
        </StyledText>
      </Pressable>
    </View>
  );
};

export default StyledButton;
