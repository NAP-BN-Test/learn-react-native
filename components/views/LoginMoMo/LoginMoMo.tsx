import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
// Đường dẫn cuối là loại Icon sử dụng
import Icon from "react-native-vector-icons/FontAwesome5";
import styles from "./LoginMoMo.css";

const LoginMoMo = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light"></StatusBar>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.content}>
            <View style={styles.intro}>
              <Text style={styles.text_intro}>Xin chào!</Text>
              <Text style={styles.user_name}>NGO GIA HUNG</Text>
              <Text style={styles.user_phone}>0123456789</Text>
            </View>
            <View style={styles.password}>
              <Icon name="lock" style={styles.icon} />
              <TextInput
                secureTextEntry
                keyboardType="numeric"
                maxLength={6}
                autoFocus
                style={styles.password_input}
                placeholder="Nhập mật khẩu"
              ></TextInput>
              <TouchableOpacity style={styles.button_login}>
                <Text style={styles.text_login}>ĐĂNG NHẬP</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.fuction}>
              <TouchableOpacity style={styles.func_forgot}>
                <Text style={styles.text_func}>QUÊN MẬT KHẨU</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.func_forgot}>
                <Text style={styles.text_func}>THOÁT TÀI KHOẢN</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginMoMo;
