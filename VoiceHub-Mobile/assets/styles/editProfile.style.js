import { StyleSheet } from "react-native";
import colors from "../colors"
export default StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: colors.white,
  },
  searchBar: {
    backgroundColor: colors.lightgray,
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: "80%",
    marginHorizontal: "10%",
  },
  ppView: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 70,
    marginBottom: "2%",
    paddingBottom: "2%",
  },
  profilePhoto: {
    width: 140,
    height: 140,
    borderRadius: 70,
  },
  editPhotoText: {
    color: colors.green,
    fontSize: 16,
    fontWeight: "700",
  },
  saveButtonText: {
    color: colors.white,
    fontSize: 26,
    fontWeight: "700",
    width: "50%",
    padding: 5,
    marginLeft: "25%",
    borderRadius: 26,
    marginBottom: "20%",
    backgroundColor: colors.green,
    textAlign: "center",
  },
  TextView: {
    marginTop: "2%",
  },
  label: {
    marginTop: "3%",
    marginBottom: "1%",
    marginHorizontal: "10%",
    fontWeight:"500",
  }
});