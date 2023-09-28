import { StyleSheet } from "react-native";
import colors from "../colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: colors.white,
  },
  searchBar: {
    backgroundColor: colors.lightgray,
    borderRadius: 45,
    paddingVertical: "1.5%",
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
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  editPhotoText: {
    color: colors.green,
    fontSize: 16,
    fontWeight: "700",
  },
  saveButtonText: {
    color: colors.white,
    fontSize: 20,
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
    fontWeight: "500",
  },
  genderInput: {
    backgroundColor: colors.lightgray,
    borderRadius: 45,
    paddingHorizontal: "2.5%",
    marginHorizontal: "10%",
    width: "80%",
  },
  isDeleteVoice: {
    color: colors.red,
    fontWeight: "600",
    marginLeft: "10%",
    marginTop: "2%"
  },
  editButtonText: {
    color: colors.green,
    fontSize: 14,
    fontWeight: "700",
    paddingLeft: 10
  },
  dontHave: {
    color: colors.darkGray,
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    marginTop: "5%",
    marginBottom: "5%"
  },
  addVoiceHolder: {
    width: "50%",
    marginLeft: "25%",
    backgroundColor: colors.green,
    borderRadius: 50,
    padding: 5,
  },
  addVoiceHolderText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
  },

});