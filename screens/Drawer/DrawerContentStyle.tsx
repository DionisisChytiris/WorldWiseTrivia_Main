 import { StyleSheet } from "react-native";
 import { Dimensions } from "react-native";
 
 const width = Dimensions.get("window").width;
 const height = Dimensions.get("window").height;
 
 export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgrey",
    paddingLeft: 10,
  },
  userTitle: {
    marginTop: 60,
    marginLeft: 10,
    flexDirection: "row",
    gap: 50,
    alignItems: "center",
  },
  userText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  settingText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  theme_lngText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  // Change Theme Button
  changeTheme: {
    width: 180,
    height: 40,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginLeft: 10,
  },
  // Change Language Button
  lngBtn: {
    flexDirection: "row",
    gap: 10,
    width: 60,
    height: 30,
    // width: 180,
    // height: 40,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginLeft: 10,
    backgroundColor: "#e8e8e8",
  },
  flowDirectionRow: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 5,
    alignItems: "center",
  },
  // Change sound-vibrarion Button
  soundVibration: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 50,
    marginLeft: 0,
    marginRight: 20,
  },
});
