import React from "react";
import { Pressable, View } from "react-native";
import { Image } from "expo-image";
import Modal from "react-native-modal";
import styles from "./styles";
import StyledButton from "~/shared/ui/components/Common/StyledButton";
import Cross from "~/shared/assets/icons/global/cross.png";
import StyledText from "~/shared/ui/components/Common/StyledText";

type ConfirmModalProps = {
  isVisible: boolean;
  text: string;
  onClose: () => void;
  onConfirm: () => void;
  isLoading?: boolean;
};

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  isVisible,
  text,
  isLoading,
  onClose,
  onConfirm,
}) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      backdropTransitionOutTiming={0}
    >
      <View style={styles.modalContainer}>
        <View style={styles.titleContainer}>
          <StyledText medium semibold style={styles.text} numberOfLines={0}>
            {text}
          </StyledText>
          <Pressable style={styles.crossBlock} onPress={onClose}>
            <Image source={Cross} style={styles.crossImage} />
          </Pressable>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.closseButtonBlock}>
            <StyledButton onPress={onClose}>Cancel</StyledButton>
          </View>
          <View style={styles.buttonBlock}>
            <StyledButton disabled={isLoading} onPress={onConfirm}>
              Confirm
            </StyledButton>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmModal;
