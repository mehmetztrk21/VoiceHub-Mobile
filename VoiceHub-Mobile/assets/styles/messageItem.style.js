import { StyleSheet } from "react-native";
import colors from "../colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: colors.white,
    marginVertical: 10,
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems:"center"
  },
  messageText: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  username: {
    fontWeight: "bold",
    fontSize: 15,
    marginLeft: "5%",
  },
  voiceLenght: {
    marginLeft: "5%",
  },
  time: {
    justifyContent: 'flex-end',
  },
});