import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c2c6ca",
    // backgroundColor: "#4696e6",
    paddingTop: 100,
    paddingHorizontal: 20,
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
  logo: {
    position: "absolute",
    top: 10,
    right: 0,
    paddingVertical: 40,
    paddingLeft: 20,
    paddingRight: 20,
    // backgroundColor: 'yellow'
  },
  header: {
    fontSize: 22,
    marginBottom: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 12,
  },
  response: {
    marginTop: 20,
    backgroundColor: "#eef6ff",
    padding: 16,
    borderRadius: 8,
  },
  answerLabel: {
    fontWeight: "bold",
    marginBottom: 6,
  },
  answer: {
    fontSize: 16,
    marginBottom: 10,
  },
  remaining: {
    fontStyle: "italic",
    color: "#333",
  },
  introMsg:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 5,
    borderRadius: 8,
  },
  introText1: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20
  },
  introText2: {
    fontSize: 15,
    color: 'lightgray',
    textAlign: 'center',
    marginBottom: 40
  },
  introText3: {
    fontSize: 15,
    color: 'magenta',
    textAlign: 'center',
    marginBottom: 20
  }
});
