import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingHorizontal: "5%",
  },
  continentTitle: {
    fontSize: 24,
    fontWeight: "bold",
    paddingLeft: 15,
    paddingTop: 20,
    paddingBottom: 30,
  },
  flagContainer: {
    // marginBottom: 300,
    // alignItems: "center",
    // width: "95%",
    // height: "57%",
  },
});
