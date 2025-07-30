import { View, Text, Modal, Pressable, StyleSheet } from "react-native";
import React from "react";
import AiIntroMessage from "./components/AiIntroMessage";
import { Feather } from '@expo/vector-icons';

const ModalAiAgentMsg = ({ visible, onClose }) => {
  return (
    <Modal visible={visible} transparent={true}>
      <View style={styles.centeredView}>
        {/* <Pressable onPress={onClose}>
          <View style={{position: 'absolute', top: -50, right: 30, zIndex: 99, backgroundColor: 'grey', padding: 20}}>
            <Feather name="x" size={24} color="white" />
          </View>
        </Pressable> */}
        <View style={styles.modalView}>
          <AiIntroMessage onClose1={onClose}/>
        </View>
      </View>
    </Modal>
  );
};

export default ModalAiAgentMsg;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
    backgroundColor: "rgba(0,0,0, 0.3)",
  },
  modalView: {
    width: "85%",
    height: "85%",
    backgroundColor: "rgba(15, 35, 53, 0.95)",
    paddingHorizontal: 20,
    zIndex: 1,
    // paddingVertical: 20,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    // elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  modalMessage: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 10,
  },
  currentQuestion: {
    fontSize: 14,
    color: "#777",
    textAlign: "center",
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: "#4A90E2",
    padding: 12,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});
