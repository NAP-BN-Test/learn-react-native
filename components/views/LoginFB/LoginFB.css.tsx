import { StyleSheet } from "react-native";
import Constants from "expo-constants";

type Style = {
  container;
  input;
  login;
  login_button;
  login_text;
  create;
  create_button;
  create_text;
  horizontal;
  or;
  text_or;
  img;
  text_button;
  text_text;
};

const WIDTH_CENTER = {
  borderRadius: 5,
  height: 40,
  justifyContent: "center",
};

export default StyleSheet.create<Style>({
  container: {
    flex: 1,
    // padding top bằng chiều cao của thanh status bar
    paddingTop: Constants.statusBarHeight,
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 10,
  },

  input: {
    ...WIDTH_CENTER,
    borderWidth: 1,
    padding: 10,
    borderColor: "#D4D5D8",
  },
  login: {
    ...WIDTH_CENTER,
    backgroundColor: "#0077F6",
    marginTop: 15,
  },
  login_button: {},
  login_text: {
    color: "#fff",
    textAlign: "center",
  },
  create: {
    ...WIDTH_CENTER,
    backgroundColor: "#E7F4FF",
  },
  create_button: {},
  create_text: {
    color: "#0077F6",
    textAlign: "center",
  },
  horizontal: {
    borderWidth: 1,
    flex: 1,
    borderColor: "#D4D5D8",
  },
  or: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    paddingHorizontal: 30,
  },
  text_or: {
    width: 50,
    textAlign: "center",
  },
  img: {
    width: "100%",
    height: null,
    aspectRatio: 750 / 460,
    resizeMode: "cover",
  },
  text_button: {
    paddingTop: 10,
    justifyContent: "center",
    alignItems: "center",
    height: 20,
  },
  text_text: {
    fontSize: 16,
    color: "#0077F6",
    fontWeight: "bold",
  },
});
