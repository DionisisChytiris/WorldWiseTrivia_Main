import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  Alert,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Button,
  FlatList,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, MaterialIcons, Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AppNavigatorTypeList } from "../../../../Types/AppNavigatorTypeList";
import { Colors } from "react-native-paper";
import { useTheme } from "../../../../utils/ThemeMode/ThemeProvider";
import { ActivityIndicator } from "react-native";
import { useTranslation } from "react-i18next";
// import { RootStackParamList } from "../../Types/RootStackParamList"; // Adjust the path as needed
// import { RootStackParamList } from "../../Types/RootStackParamList";
// import MessagesScreen from "./MessagesScreen";
// import MessagesWrapper from "./MessagesWrapper";

type ContactProp = StackNavigationProp<AppNavigatorTypeList, "Contact">;

const Contact = () => {
  const navigation = useNavigation<ContactProp>();
  const { colors } = useTheme();
  const { t } = useTranslation();
  const [content, setContent] = useState("");
  const [messages, setMessages] = useState<any>([]);
  const [loadingMessages, setLoadingMessages] = useState(true);
  const [sendingMessage, setSendingMessage] = useState(false);

  // useEffect(() => {
  //   const fetchUserMessages = async () => {
  //     const userId = await AsyncStorage.getItem("user_id");
  //     if (!userId) return;

  //     try {
  //       const res = await fetch(`https://worldwisetriviaquizbackend.onrender.com/messages/${userId}`);
  //       // const res = await fetch(`http://192.168.1.234:3000/messages/${userId}`);
  //       const data = await res.json();
  //       // setMessages(data);
  //       setMessages(Array.isArray(data) ? data : []);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };

  //   fetchUserMessages();
  // }, []);

  useEffect(() => {
    const fetchUserMessages = async () => {
      const userId = await AsyncStorage.getItem("user_id");
      if (!userId) {
        setLoadingMessages(false);
        return;
      }
      try {
        setLoadingMessages(true);
        const res = await fetch(
          `https://worldwisetriviaquizbackend.onrender.com/messages/${userId}`
        );
        const data = await res.json();
        setMessages(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoadingMessages(false);
      }
    };

    fetchUserMessages();
  }, []);

  // useEffect(() => {
  //   fetch("http://192.168.1.234:3000/messages") // use your actual IP
  //   .then((res) => res.json())
  //   .then((data) => setMessages(data))
  //   .catch((err) => console.error(err));
  // }, []);

  const sendMessage = async () => {
    if (!content.trim()) {
      Alert.alert("Please enter a message");
      return;
    }

    try {
      setSendingMessage(true);
      const userId = await AsyncStorage.getItem("user_id");
      console.log("Sending message from user:", userId);
      const response = await fetch(
        "https://worldwisetriviaquizbackend.onrender.com/messages",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ content, userId }),
        }
      );

      if (response.ok) {
        const newMessage = await response.json(); // get the created message from backend
        // Add new message to messages state
        setMessages((prevMessages) => [newMessage, ...prevMessages]);
        Alert.alert("Message sent!");
        setContent("");
      } else {
        Alert.alert("Failed to send message");
      }
    } catch (error) {
      Alert.alert("Error:", error.message);
    } finally {
      setSendingMessage(false);
    }
  };

  const deleteMessage = async (message) => {
    const id = message.id;
    try {
      const response = await fetch(
        `https://worldwisetriviaquizbackend.onrender.com/messages/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // Update state immediately to remove the deleted message
      setMessages((prevMessages) =>
        prevMessages.filter((msg) => msg.id !== id)
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Failed to delete message");
      }

      // Optionally update frontend state here
      // setMessages(messages => messages.filter(m => m.id !== id));

      Alert.alert("Deleted", "Message successfully deleted");
    } catch (err) {
      Alert.alert("Error", err.message);
    }
  };

  return (
    <View
      style={[styles.container, { backgroundColor: colors.backgroundDrawer }]}
    >
      {/* <ScrollView style={styles.scrollView}> */}
      {/* Hero Section */}

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoid}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <LinearGradient
            colors={["#1e3a8a", "#3b82f6"]}
            style={styles.heroContainer}
          >
            <Image
              source={
                require("../../../../assets/NaturalMnt/Africa/CapeofGoodHope.webp")
                // uri: "https://api.a0.dev/assets/image?text=ancient%20greek%20parthenon%20temple%20at%20sunset%20minimalist%20illustration&aspect=16:9",
              }
              style={styles.heroImage}
            />
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Home");
              }}
              style={styles.homeButton}
            >
              <Ionicons name="home" size={24} color="#dddbdb" />
              {/* <Home size={24} color="#dddbdb" /> */}
            </TouchableOpacity>
            {/* <View style={styles.heroContent}>
              <Text style={styles.heroTitle}>Γεωγραφία της Ελλάδας</Text>
              <Text style={styles.heroSubtitle}>
                Εξερευνήστε την ομορφιά της Ελλάδας
              </Text>
            </View> */}
          </LinearGradient>
          <View style={styles.header}>
            <MaterialIcons name="feedback" size={32} color="#007AFF" />
            <Text style={[styles.title, { color: colors.textDrawer }]}>
               {t("contactTitle")}
            </Text>
          </View>

          <View style={[styles.card, { backgroundColor: colors.bgFlagsCnt }]}>
            <View
              style={{ flexDirection: "row", gap: 12, alignItems: "center" }}
            >
              <Text style={[styles.label, { color: colors.textDrawer }]}>
                {t("contactMsg")}
              </Text>
            </View>
            <TextInput
              value={content}
              onChangeText={setContent}
              placeholder={t("contactPlaceholder")}
              style={[styles.input, { backgroundColor: colors.borderColor }]}
            />
            <Button
              title={sendingMessage ? t("contactSending") : t("contactSend")}
              onPress={sendMessage}
              disabled={sendingMessage}
            />
          </View>
          <View
            style={[
              styles.card,
              { backgroundColor: colors.bgFlagsCnt, marginVertical: 40 },
            ]}
          >
            <Text
              style={[
                styles.label,
                { color: colors.textDrawer, marginBottom: 20 },
              ]}
            >
              {t("contactMsgHis")}
            </Text>
            {loadingMessages ? (
              <ActivityIndicator size="large" color={colors.textDrawer} />
            ) : (
              messages.map((msg) => {
                return (
                  <View
                    key={msg.id}
                    style={{
                      marginBottom: 20,
                    }}
                  >
                    {/* USER MESSAGE */}
                    <View
                      style={{
                        flexDirection: "row",
                        gap: 12,
                        alignItems: "center",
                      }}
                    >
                      <View style={styles.bubbleUser}>
                        <Text style={{ color: "#f5f5f5" }}>{msg.content}</Text>
                        <Text
                          style={{
                            color: "#dbd9d9",
                            fontSize: 10,
                            paddingTop: 5,
                          }}
                        >
                          {new Date(msg.sentAt).toLocaleString()}
                        </Text>
                      </View>
                      <Pressable
                        onPress={() => deleteMessage(msg)}
                        style={{ padding: 20 }}
                      >
                        <Feather name="trash-2" size={24} color="red" />
                        {/* <Trash2 color="red" size={24} /> */}
                      </Pressable>
                    </View>

                    {/* ADMIN REPLIES */}
                    {msg.replies?.map((reply, idx) => (
                      <View key={idx} style={styles.bubbleAdmin}>
                        <Text style={{ color: "#222" }}>{reply.reply}</Text>
                        <Text
                          style={{ color: "#555", fontSize: 10, marginTop: 5 }}
                        >
                          {new Date(reply.createdAt).toLocaleString()}
                        </Text>
                      </View>
                    ))}
                  </View>
                );
              })
            )}

            {/* {messages.map((msg) => {
              // console.log("sentAt:", msg.sentAt); // 👈 Check format
              return (
                <View
                  key={msg.id}
                  style={{
                    marginBottom: 20,
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                  }}
                >
                  <View style={styles.bubbleUser}>
                    <Text style={{ color: "#f5f5f5" }}>{msg.content}</Text>
                    <Text
                      style={{ color: "#dbd9d9", fontSize: 10, paddingTop: 5 }}
                    >
                      {" "}
                      {new Date(msg.sentAt).toLocaleString()}
                    </Text>
                  </View>
                  <Pressable
                    onPress={() => deleteMessage(msg)}
                    style={{ padding: 20 }}
                  >
                    <Trash2 color="red" size={24} />
                  </Pressable>
                </View>
              );
            })} */}
          </View>

          <View
            style={[
              styles.card,
              { backgroundColor: colors.bgFlagsCnt, marginBottom: 100 },
            ]}
          >
            <Text style={[styles.label, { color: colors.textDrawer }]}>
              {t("contactSug")}
            </Text>
            <Text
              style={[
                styles.label,
                { marginTop: 10, fontWeight: "300", color: colors.textDrawer },
              ]}
            >
               {t("contactText")}
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      {/* </ScrollView> */}
    </View>
  );
};

export default Contact;

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  scrollView: {
    flex: 1,
  },
  homeButton: {
    position: "absolute",
    top: 10,
    left: 0,
    paddingVertical: 40,
    paddingLeft: 20,
    paddingRight: 50,
    // backgroundColor: 'yellow'
  },
  heroContainer: {
    height: 200,
    position: "relative",
  },
  heroImage: {
    width: "100%",
    height: "100%",
    opacity: 0.7,
  },
  heroContent: {
    position: "absolute",
    bottom: 40,
    left: 20,
    right: 20,
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  heroSubtitle: {
    fontSize: 18,
    color: "white",
    marginTop: 8,
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  categoriesContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1e293b",
    marginBottom: 20,
  },
  categoriesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  categoryCard: {
    width: (width - 60) / 2,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#334155",
    marginTop: 12,
  },
  categoryCount: {
    fontSize: 14,
    color: "#64748b",
    marginTop: 4,
  },
  startButton: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  gradientButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    borderRadius: 12,
  },
  startButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    marginRight: 8,
  },
  footer: {
    padding: 20,
    alignItems: "center",
  },
  footerText: {
    color: "#64748b",
    fontSize: 14,
  },
  keyboardAvoid: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    padding: 0,
  },
  header: {
    alignItems: "center",
    marginVertical: 24,
    flexDirection: "row",
    justifyContent: "center",
    gap: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#f8f8f8",
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  messageInput: {
    height: 120,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "#007AFF",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
    marginTop: 8,
  },
  buttonDisabled: {
    backgroundColor: "#99c9ff",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  // userMessageContainer: {
  //   width: "90%",
  //   // height: 200,
  //   paddingTop: 20,
  //   paddingHorizontal: 20,
  //   paddingBottom: 50,
  //   margin: 20,
  //   backgroundColor: "yellow",
  // },
  // historyItem: {
  //   fontSize: 14,
  //   color: "#333",
  //   marginBottom: 8,
  // },
  // adminReply: {
  //   backgroundColor: "#e0f7fa",
  //   padding: 10,
  //   borderRadius: 8,
  //   marginBottom: 8,
  //   color: "#00796b",
  // },
  // userReply: {
  //   backgroundColor: "#fce4ec",
  //   padding: 10,
  //   borderRadius: 8,
  //   marginBottom: 8,
  //   color: "#880e4f",
  // },
  bubbleUser: {
    backgroundColor: "#007AFF",
    width: "80%",
    padding: 10,
    paddingBottom: 15,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginVertical: 7,
  },
  bubbleAdmin: {
    backgroundColor: "#f0f0f0",
    width: "80%",
    marginLeft: "20%",
    padding: 10,
    paddingBottom: 15,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginVertical: 7,
  },
  // timeUser: {
  //   fontSize: 12,
  //   color: "#dbd9d9",
  //   position: "absolute",
  //   bottom: 5,
  //   right: 20,
  // },
  // timeAdmin: {
  //   fontSize: 12,
  //   color: "#888",
  //   position: "absolute",
  //   bottom: 5,
  //   left: 20,
  // },
});
