import React, { useState } from "react";
import { Image, SafeAreaView, StyleSheet, Switch, View } from "react-native";
import bulbOn from "../../../assets/img/bulbOn.jpg";
import bulbOff from "../../../assets/img/bulbOff.jpg.jpg";
import { StatusBar } from "expo-status-bar";
import { Dimensions } from "react-native";

// Tính chiều dài, chiều rộng của thiết bị
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Lamp = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  //Diễn giải-----
  //exp: const [count, setCount] = useState(0);
  // const countState = useState(0);
  // const count = countState[0];
  // const setCount = countState[1];
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  // Hàm setIsEnabled để thay đổi giá trị của isEnabled
  // Viết dài:
  // const toggleSwitch = () => {
  //   const newState = !isEnabled;
  //   setIsEnabled(newState);
  // }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light"></StatusBar>
      <Image source={isEnabled ? bulbOn : bulbOff} style={styles.img} />
      <View style={{ transform: [{ scale: 2 }] }}>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={{ alignSelf: "center" }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    backgroundColor: "#000",
  },
  img: {
    // maxWidth: "100%",
    // maxHeight: windowHeight,
    // aspectRatio: 631 / 925,
    // resizeMode: "contain",
    width: windowWidth,
    height: (windowWidth * 925) / 613,
  },
});

export default Lamp;
