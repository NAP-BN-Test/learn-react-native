import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const FormField = ({
  handleChange,
  handleBlur,
  values,
  label,
  title,
  touched,
  errors,
}) => {
  return (
    <View style={styles.input}>
      <Text style={styles.title_input}>{{ title }}</Text>
      <TextInput
        style={styles.textinput}
        onChangeText={handleChange(label)}
        onBlur={handleBlur(label)}
        value={values[label]}
      ></TextInput>
      {touched[label] && errors[label] ? (
        <Text style={styles.textYup}>{errors[label]}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
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
  textYup: {
    color: "red",
  },
});

export default FormField;
