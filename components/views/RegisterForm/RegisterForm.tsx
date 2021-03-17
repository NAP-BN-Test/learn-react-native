import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Constants from "expo-constants";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// Tính chiều dài, chiều rộng của thiết bị
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const RegisterForm = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light"></StatusBar>

      <View style={styles.header}>
        <Text style={styles.text_header}>Register</Text>
      </View>
      {/* Thêm cái này để tự động kéo view khi hiện bàn phím */}
      <KeyboardAwareScrollView
        extraScrollHeight={100}
        enableOnAndroid={true}
        style={styles.body}
      >
        <View style={styles.body}>
          <View style={styles.input}>
            <Text style={styles.title_input}>First Name</Text>
            <TextInput style={styles.textinput}></TextInput>
          </View>
          <View style={styles.input}>
            <Text style={styles.title_input}>Last Name</Text>
            <TextInput style={styles.textinput}></TextInput>
          </View>
          <View style={styles.input}>
            <Text style={styles.title_input}>Email Address</Text>
            <TextInput style={styles.textinput}></TextInput>
          </View>
          <View style={styles.input}>
            <Text style={styles.title_input}>Password</Text>
            <TextInput style={styles.textinput}></TextInput>
          </View>
          <View style={styles.input}>
            <Text style={styles.title_input}>Confirm Password</Text>
            <TextInput style={styles.textinput}></TextInput>
          </View>
          <View style={{ paddingTop: 20 }}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.text_button}>SUBMIT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding top bằng chiều cao của thanh status bar
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#3498DB",
  },
  content: {
    flex: 1,
  },
  header: {
    height: windowHeight / 10,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 15,
  },
  text_header: {
    color: "#fff",
    fontSize: 22,
  },
  body: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  input: {
    paddingBottom: 15,
  },
  title_input: {
    paddingBottom: 5,
  },
  textinput: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    height: 40,
  },
  button: {
    backgroundColor: "#3498DB",
    height: 40,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  text_button: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default RegisterForm;
