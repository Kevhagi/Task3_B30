import React from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";

import Row from "../components/Calculator-2/Row";
import Button from "../components/Calculator-2/Button";
import calculator, { initialState } from "../components/Calculator-2/calculator";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFA0A0",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  container2: {
    width: "80%",
    marginTop: 20
  },
  labelValue: {
    paddingStart: 20,
    marginVertical: 10,
    fontSize: 24,
    fontWeight: "700",
    color: "white"
  },
  value: {
    fontSize: 40,
    height : 110,
    borderRadius : 10,
    textAlign: "right",
    paddingRight: 20,
    marginBottom: 10,
    backgroundColor: "#ECECEC"
  }
});

export default class Calculator2 extends React.Component {
  state = initialState;

  handleTap = (type, value) => {
    this.setState(state => calculator(type, value, state));
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.container2}>
          <Text style={styles.labelValue}>Display</Text>
          <Text style={styles.value}>
            {parseFloat(this.state.currentValue).toLocaleString()}
          </Text>
          <Row>
            <Button text="1" onPress={() => this.handleTap("number", 1)} />
            <Button text="2" onPress={() => this.handleTap("number", 2)} />
            <Button
              text="-"
              size="45"
              theme="accent"
              onPress={() => this.handleTap("operator", "-")}
            />
            <Button
              text="+"
              size="45"
              theme="accent"
              onPress={() => this.handleTap("operator", "+")}
            />
          </Row>
          <Row>
            <Button text="3" onPress={() => this.handleTap("number", 3)} />
            <Button text="4" onPress={() => this.handleTap("number", 4)} />
            <Button
              text="/"
              size="45"
              theme="accent"
              onPress={() => this.handleTap("operator", "/")}
            />
            <Button
              text="*"
              size="65"
              theme="accent"
              onPress={() => this.handleTap("operator", "*")}
            />
          </Row>
          <Row>
            <Button text="5" onPress={() => this.handleTap("number", 5)} />
            <Button text="6" onPress={() => this.handleTap("number", 6)} />
            <Button
              text="%"
              size="45"
              theme="accent"
              onPress={() => this.handleTap("percentage")}
            />
            <Button
              text="="
              size="45"
              theme="accent"
              onPress={() => this.handleTap("equal")}
            />
          </Row>
          <Row>
            <Button text="7" onPress={() => this.handleTap("number", 7)} />
            <Button text="8" onPress={() => this.handleTap("number", 8)} />
            <Button text="9" onPress={() => this.handleTap("number", 9)} />
            <Button
              text="0"
              onPress={() => this.handleTap("number", 0)}
            />
          </Row>
          <Row>
            <Button
              text="CLEAR"
              size="45"
              theme="accent"
              onPress={() => this.handleTap("clear")}
            />
          </Row>
        </SafeAreaView>
      </View>
    );
  }
}