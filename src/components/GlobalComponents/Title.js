import React from "react";
import { StyleSheet, Text } from "react-native";
const Title = props => {
  return <Text style={styles.textTitle}>{props.title}</Text>;
};

const styles = StyleSheet.create({
  textTitle: {
    fontWeight: "bold",
    fontSize: 20,
    color: "black"
  }
});

export default Title;
