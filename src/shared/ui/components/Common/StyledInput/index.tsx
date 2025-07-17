import React, { useState } from "react";
import {
  TextInputProps,
  TextInput,
  View,
  Text,
  ViewStyle,
  TextStyle,
} from "react-native";
import theme from "~/shared/theme";
import StyledText from "~/shared/ui/components/Common/StyledText";
import styles from "./styles";

type PropTypes = {
  label?: string;
  labelStyle?: any;
  error?: string;
  errorStyle?: ViewStyle;
  successText?: string;
  defaultValue?: string;
  placeholder?: string;
  editable?: boolean;
  value?: string | any;
  onChangeValue?: (value: string | any) => void;
  style?: TextStyle | TextStyle[];
  successStyle?: TextStyle;
};

const StyledInput = React.forwardRef<TextInput, PropTypes & TextInputProps>(
  (
    {
      label = "",
      labelStyle,
      error,
      errorStyle,
      placeholder = "",
      defaultValue = "",
      successText,
      editable = true,
      value = null,
      onChangeValue,
      successStyle,
      style,
      ...props
    }: PropTypes & TextInputProps,
    ref: React.ForwardedRef<TextInput>
  ) => {
    const [isFocus, setIsFocus] = useState(false);
    return (
      <View>
        {!!label && (
          <StyledText style={[styles.label, labelStyle]}>{label}</StyledText>
        )}

        <View style={[styles.container, isFocus && styles.focusContainer]}>
          <TextInput
            placeholder={placeholder}
            placeholderTextColor={theme?.colors?.text_additional}
            ref={ref}
            editable={editable}
            defaultValue={defaultValue}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            value={value}
            onChangeText={onChangeValue}
            {...props}
            style={[
              styles.input,
              style,
              isFocus && styles.focus,
              !!error && styles.error,
              !!successText && styles.success,
              !editable && styles.disable,
            ]}
          />
        </View>

        {!!error && <Text style={[styles.errorText, errorStyle]}>{error}</Text>}
        {!!successText && (
          <Text style={[styles.successText, successStyle]}>{successText}</Text>
        )}
      </View>
    );
  }
);

export default StyledInput;
