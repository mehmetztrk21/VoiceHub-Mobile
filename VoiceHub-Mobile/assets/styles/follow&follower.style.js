import { StyleSheet } from "react-native";
import colors from "../colors"
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  searchBarHolder: {
    top: 50,
    left: 0,
    width: "100%",
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  searchBar: {
    backgroundColor: "lightgray",
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 12.5,
    width: "90%",
  },
  scroll: {
    paddingHorizontal: "7.5%",
    marginTop: "5%",
  },
  item: {
    paddingBottom: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  seeProfile: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: "2%",
  },
  username: {
    marginLeft: "2%",
    fontSize: 16,
    fontWeight: "600"
  },

})