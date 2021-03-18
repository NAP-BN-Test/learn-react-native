import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./LoginFB.css";
import facebookBanner from "../../../assets/img/fb-banner.jpg";

const LoginFB = () => {
  return (
    <>
      <Image source={facebookBanner} style={styles.img} />
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar style="dark"></StatusBar>

        <View style={styles.container}>
          <View>
            <View style={styles.input}>
              <TextInput placeholder="Số điện thoại hoặc Email"></TextInput>
            </View>
            <View style={styles.input}>
              <TextInput placeholder="Mật khẩu"></TextInput>
            </View>
            <View style={styles.login}>
              <TouchableOpacity style={styles.login_button}>
                <Text style={styles.login_text}>Đăng nhập</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.text_button}>
              <Text style={styles.text_text}>Quên mật khẩu?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.text_button}>
              <Text style={styles.text_text}>Quay lại</Text>
            </TouchableOpacity>
          </View>
          <View>
            <View style={styles.or}>
              <View style={styles.horizontal}></View>
              <Text style={styles.text_or}>HOẶC</Text>
              <View style={styles.horizontal}></View>
            </View>
            <View style={styles.create}>
              <TouchableOpacity style={styles.create_button}>
                <Text style={styles.create_text}>Tạo tài khoản mới</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default LoginFB;
