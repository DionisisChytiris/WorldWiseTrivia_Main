import React, { useEffect, useState } from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTranslation } from "react-i18next";
import logger from "../../../../utils/logger";

const CustomAlert: React.FC = () => {
  const { t } = useTranslation();
  const [name, setName] = useState<string>("");

  useEffect(() => {
    getData();
  }, []);

  const getData = (): void => {
    try {
      AsyncStorage.getItem("UserName").then((value) => {
        if (value != null) {
          const user = JSON.parse(value);
          setName(user.Name);
        }
      });
    } catch (e) {
      logger.error("Error loading user name from AsyncStorage:", e);
    }
  };

  return (
    <View style={styles.container}>
      <Modal transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.alertText}>{t("AlertMessage1")}</Text>
            <Text style={styles.alertText}>
              {t("AlertMessage2")} {name}!
            </Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CustomAlert;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: 300,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  alertText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  closeButton: {
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

