import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Alert,
  TextInput,
  Button,
  ActivityIndicator,
} from "react-native";
import axios from "axios";
import { Keyboard } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { countWords, isValidQuestion } from "./components/TextValidation";
import { styles } from "./AiAgentStyles";
import { useTranslation } from "react-i18next";
import AiIntroMessage from "./components/AiIntroMessage";
import ModalAiAgentMsg from './ModalAiAgentMsg'
import HomeLogo from "./components/HomeLogo";
import AppLogo from "./components/AppLogo";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AiAgent = () => {
  // const [username, setUsername] = useState("");
  const { t } = useTranslation();
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(true)
  const WORD_LIMIT = 10;
  const DAILY_LIMIT = 10;
  const [remaining, setRemaining] = useState<number | null>(DAILY_LIMIT);
  const isLimitReached = remaining !== null && remaining <= 0;
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const loadUserId = async () => {
      const storedId = await AsyncStorage.getItem("user_id");
      if (storedId) setUserId(storedId);
      // console.log(storedId)
    };
    loadUserId();
  }, []);

  // 2. Handle typing *safely*
  // const handleUserNameChange = (text: string) => {
  //   // Reject invalid chars
  //   if (!isValidQuestion(text)) return;

  //   // Reject if over word limit
  //   if (countWords(text) > 2) return;

  //   setUsername(text);
  // };

  const handleQuestionChange = (text: string) => {
    // Reject invalid chars
    if (!isValidQuestion(text)) return;

    // Reject if over word limit
    if (countWords(text) > WORD_LIMIT) return;

    setQuestion(text); // Only reaches here when text is valid
  };

  const validateInputs = () => {
    const hasRequiredFields = question.trim() !== "";
    // const hasRequiredFields = username.trim() !== "" && question.trim() !== "";
    const isValidFormat = isValidQuestion(question);
    const wordCount = countWords(question);
    const isWithinLimit = wordCount <= WORD_LIMIT;

    return hasRequiredFields && isValidFormat && isWithinLimit;
  };

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(validateInputs());
    handleQuestionChange;
  }, [question]);

  const askQuestion = async () => {
    Keyboard.dismiss();
    if (!userId || !question) {
      Alert.alert("Missing Info", "User ID or question is missing.");
      return;
    }

    setLoading(true);
    try {
      // const response = await axios.post("http://192.168.1.234:8000/ask", {
      // const response = await axios.post(
      //   "https://geography-ai-agent.vercel.app/api/main",
      //   {
      //     userId,
      //     question,
      //   }
      // );
      const response = await axios.post(
        "https://geography-ai-agent.vercel.app/api/main",
        {
          userId,
          question,
        }
      );

      console.log(response.data.answer);
      setAnswer(response.data.answer);
      setRemaining(response.data.remaining);
    } catch (error) {
      if (error.response?.status === 429) {
        Alert.alert("Limit reached", error.response.data.detail);
      } else {
        Alert.alert("Error", "Something went wrong. Is the backend running?");
        console.error(error);
      }
    } finally {
      setLoading(false);
      setQuestion("");
    }
  };

  return (
    <View style={styles.container}>
      <HomeLogo />
      <AppLogo />

      <Text style={styles.header}>🌍 {t("aiAgent1")}</Text>
      {/* <TextInput
        style={styles.input}
        placeholder="Enter your username"
        value={username}
        onChangeText={handleUserNameChange}
        editable={!isLimitReached && !loading} // disable input when limit reached or loading
      /> */}

      <View style={{position: 'absolute', top: 0,flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <ModalAiAgentMsg visible={showModal} onClose={()=>setShowModal(false)}/>
      </View>

      <View
        style={{
          paddingHorizontal: 20,
          paddingBottom: 20,
          alignItems: "center",
        }}
      >
        <View>
          <Text style={{ color: "#0e6d2e", paddingVertical: 10 }}>
             {t("aiAgent2")}
          </Text>
        </View>
        <View>
          <Text style={{ textAlign: "center", fontSize: 12 }}>
             {t("aiAgent3")}
          </Text>
        </View>
      </View>
      <TextInput
        style={styles.input}
        placeholder={t('aiAgent8')}
        value={question}
        onChangeText={handleQuestionChange}
        multiline
        editable={!isLimitReached && !loading} // disable input when limit reached or loading
      />
      {question.length > 0 && !isValidQuestion(question) && (
        <Text style={{ color: "red", marginBottom: 8 }}>
          {t("aiAgent4")}
        </Text>
      )}

      {countWords(question) > WORD_LIMIT && (
        <Text style={{ color: "red", marginBottom: 8 }}>
          Max {WORD_LIMIT} words allowed (you used {countWords(question)})
        </Text>
      )}

      <Button
        title="Ask"
        // title={
        //   isLimitReached
        //     ? "Daily Limit Reached"
        //     : "Ask"
        // }
        onPress={askQuestion}
        disabled={isLimitReached || loading}
      />

      {/* {isLimitReached && (
        <Text style={{ color: "red", textAlign: "center", marginVertical: 10 }}>
          You’ve reached your daily request limit. Come back tomorrow!
        </Text>
      )} */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        {loading && (
          <ActivityIndicator size="large" style={{ marginTop: 20 }} />
        )}

        {answer ? (
          <View style={styles.response}>
            <Text style={styles.answerLabel}>AI {t('aiAgent5')}:</Text>
            <Text style={styles.answer}>{answer}</Text>
            <Text style={styles.remaining}>{t('aiAgent6')}: {remaining}</Text>
          </View>
        ) : (
          <View style={{flex:1, justifyContent: 'center', alignItems: 'center', paddingTop: 150}}>
            <Text style={{color: '#a82487', fontSize: 20}}>{t('aiAgent7')}</Text>
          </View>
          // <AiIntroMessage />
        )}
      </ScrollView>
    </View>
  );
};

export default AiAgent;
