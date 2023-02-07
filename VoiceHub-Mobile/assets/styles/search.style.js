import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  sbarHolder: {
    top: 0,
    left: 0,
    width: "100%",
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },

  sbar: {
    backgroundColor: "whitesmoke",
    borderRadius: 15,
    width: "90%",
  },

  sContainer: {
    backgroundColor: "white",
    width: "92%",
  },

  Shead: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 5,
  },

  userHodler: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
  },
});
