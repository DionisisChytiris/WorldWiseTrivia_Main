import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: "5%",
    // marginLeft: "auto",
    // marginRight: "auto"
  },
  continentTitle: {
    fontSize: 24,
    fontWeight: "bold",
    paddingLeft: 30,
    paddingTop: 20,
    paddingBottom: 30,
  },
  flashListContainer: {
    width: width ,
    height: height> 900 ? height / 1.4 : height/1.6,
    paddingBottom: 10
  },
  flagContainer: {
    // marginBottom: 300,
    // alignItems: "center",
    // width: "95%",
    // height: "57%",
  },
});
