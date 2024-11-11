import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: "5%",
  },
  continentTitle: {
    fontSize: 24,
    fontWeight: "bold",
    paddingLeft: 15,
    paddingTop: 20,
    paddingBottom: 30,
  },
  flashListContainer: {
    width:  width / 1.07,
    height: height> 900? height/1.3: height / 1.6,
    paddingBottom: 40
  }
});
