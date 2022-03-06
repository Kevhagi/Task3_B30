import React from "react";
import { TouchableOpacity, StyleSheet, Text, Dimensions } from "react-native";

const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 50,
    fontWeight: "700",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text65: {
    fontSize: 65
  },
  text45: {
    fontSize: 45
  },
  button: {
    backgroundColor: "#96daff",
    flex: 1,
    height: Math.floor(buttonWidth - 20),
    alignItems: "center",
    justifyContent: "flex-start",
    borderRadius: 10,
    margin: 5
  },
  buttonAccent: {
    backgroundColor: "#55BCF6"
  }
});

export default ({ onPress, text, size, theme }) => {
  const buttonStyles = [styles.button];
  const textStyles = [styles.text];

  if (size === "65") {
    textStyles.push(styles.text65);
  } else if (size === "45") {
    textStyles.push(styles.text45)
  }

  if (theme === "accent") {
    buttonStyles.push(styles.buttonAccent);
  }

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
};
