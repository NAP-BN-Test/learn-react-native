import { StyleSheet } from "react-native";
import Constants from "expo-constants";

type Style = {
  container;
  content;
  intro;
  text_intro;
  user_name;
  user_phone;
  password;
  icon;
  password_input;
  button_login;
  text_login;
  fuction;
  text_func;
  func_forgot;
};

const TEXT = {
  color: "#fff",
  textAlign: "center",
};

export default StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: "#b0006d",
    // padding top bằng chiều cao của thanh status bar
    paddingTop: Constants.statusBarHeight,
  },
  content: {
    paddingHorizontal: 30,
  },
  intro: {
    marginTop: 60,
    marginBottom: 30,
  },

  text_intro: {
    ...TEXT,
    fontSize: 20,
    lineHeight: 50,
    fontWeight: "bold",
  },

  user_name: {
    ...TEXT,
    fontSize: 16,
    lineHeight: 30,
  },

  user_phone: {
    ...TEXT,
    fontSize: 18,
    lineHeight: 30,
  },

  password: {
    paddingTop: 40,
  },

  icon: {
    color: "#929292",
    position: "absolute",
    fontSize: 16,
    top: 60,
    left: 30,
    zIndex: 10,
  },

  password_input: {
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 35,

    paddingHorizontal: 30,
    fontSize: 20,
    color: "#929292",
    textAlign: "center",
    textAlignVertical: "center",
  },

  button_login: {
    marginTop: 20,
    height: 60,
    backgroundColor: "#960058",
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
  },

  text_login: {
    ...TEXT,
  },

  fuction: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  func_forgot: {},

  text_func: {
    ...TEXT,
    fontSize: 16,
  },
});
