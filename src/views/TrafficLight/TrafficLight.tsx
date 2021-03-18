import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Dimensions } from "react-native";
import trafficLightGreen from "../../../assets/img/traffic-light-green.png";
import trafficLightRed from "../../../assets/img/traffic-light-red.png";
import trafficLightYellow from "../../../assets/img/traffic-light-yellow.png";
import trafficLight from "../../../assets/img/traffic-light.png";
import Constants from "expo-constants";

// Tính chiều dài, chiều rộng của thiết bị
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const TrafficLight = () => {
  const [isTrafficLight, setIsTrafficLight] = useState(trafficLight);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light"></StatusBar>
      <Image source={isTrafficLight} style={styles.img} />
      <View style={styles.func}>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          style={[styles.button, { backgroundColor: "red" }]}
          onPress={() => setIsTrafficLight(trafficLightRed)}
        >
          <Text style={styles.text_button}>Red</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.button, { backgroundColor: "yellow" }]}
          onPress={() => setIsTrafficLight(trafficLightYellow)}
        >
          <Text style={styles.text_button}>Yellow</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.button, { backgroundColor: "green" }]}
          onPress={() => setIsTrafficLight(trafficLightGreen)}
        >
          <Text style={styles.text_button}>Green</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: Constants.statusBarHeight,
  },
  img: {
    width: windowWidth,
    height: (windowWidth * 1183) / 1080,
  },
  func: {
    paddingTop: 30,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    width: 60,
    height: 20,
  },
  text_button: {
    textAlign: "center",
  },
});

export default TrafficLight;
