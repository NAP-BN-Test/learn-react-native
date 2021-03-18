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
import { Formik } from "formik";
import ValidationForm from "../../../validation";
import FormField from "../../components/FormField.tsx/FormFieldComponent";

// Tính chiều dài, chiều rộng của thiết bị
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const RegisterForm = () => {
  function isFormValid(isValid, touched) {
    return isValid && Object.keys(touched).length !== 0;
  }

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
        keyboardShouldPersistTaps="handled"
      >
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          onSubmit={(values) => {
            console.log(values);
            if (values.firstName == "") {
              console.log("Không được để trống First Name");
            }
          }}
          validationSchema={ValidationForm}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            isValid,
          }) => (
            <View style={styles.body}>
              <FormField
                handleChange={handleChange}
                handleBlur={handleBlur}
                values={values}
                label="firstName"
                title="First name"
                touched={touched}
                errors={errors}
              />
              <View style={styles.input}>
                <Text style={styles.title_input}>Last Name</Text>
                <TextInput
                  style={styles.textinput}
                  onChangeText={handleChange("lastName")}
                  onBlur={handleBlur("lastName")}
                  value={values.lastName}
                ></TextInput>
              </View>
              <View style={styles.input}>
                <Text style={styles.title_input}>Email Address</Text>
                <TextInput
                  style={styles.textinput}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                ></TextInput>
                {touched.email && errors.email ? (
                  <Text style={styles.textYup}>{errors.email}</Text>
                ) : null}
              </View>
              <View style={styles.input}>
                <Text style={styles.title_input}>Password</Text>
                <TextInput
                  style={styles.textinput}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                ></TextInput>
                {touched.password && errors.password ? (
                  <Text style={styles.textYup}>{errors.password}</Text>
                ) : null}
              </View>
              <View style={styles.input}>
                <Text style={styles.title_input}>Confirm Password</Text>
                <TextInput
                  style={styles.textinput}
                  onChangeText={handleChange("confirmPassword")}
                  onBlur={handleBlur("confirmPassword")}
                  value={values.confirmPassword}
                ></TextInput>
                {touched.confirmPassword && errors.confirmPassword ? (
                  <Text style={styles.textYup}>{errors.confirmPassword}</Text>
                ) : null}
              </View>
              <View style={{ paddingTop: 20 }}>
                <TouchableOpacity
                  // style={styles.button}
                  onPress={handleSubmit}
                  disabled={!isFormValid(isValid, touched)}
                >
                  <View
                    style={[
                      styles.button,
                      {
                        opacity: isFormValid(isValid, touched) ? 1 : 0.5,
                      },
                    ]}
                  >
                    <Text style={styles.text_button}>SUBMIT</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
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
    paddingHorizontal: 10,
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
  textYup: {
    color: "red",
  },
});

export default RegisterForm;
