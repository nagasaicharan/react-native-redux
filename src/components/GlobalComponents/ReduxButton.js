import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
const ReduxButton = props => {
  const { title, onPress, disabled } = props;
  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
      }}
      disabled={disabled}
    >
      <View style={[styles.container, props.style]}>
        <Text style={styles.textTitle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
ReduxButton.defaultProps = {
  disabled: false
};
const styles = StyleSheet.create({
  container: {
    elevation: 5,
    margin: 5,
    borderRadius: 8,
    backgroundColor: "black",
    paddingHorizontal: 15,
    paddingVertical: 4
  },
  textTitle: {
    fontSize: 18,
    color: "white",
    fontWeight: "600",
    textAlign: "center"
  }
});

export default ReduxButton;
