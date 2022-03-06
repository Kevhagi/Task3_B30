import React from "react";
import { TouchableOpacity, StyleSheet, Text, Dimensions } from "react-native";

const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 65,
    flex : 1,
    justifyContent : "center",
    alignItems : "center"
  },
  textSecondary: {
    color: "#060606"
  },
  button: {
    backgroundColor: "#55BCF6",
    flex: 1,
    height: Math.floor(buttonWidth - 10),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    margin: 5
  },
  buttonEqual: {
    backgroundColor: "#930707"
  },
  buttonAccent: {
    backgroundColor: "#f09a36"
  }
});

export default ({ onPress, text }) => {
  const buttonStyles = [styles.button];
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
