import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { connect } from "react-redux";
import { actionTypes } from "../Utils/Redux/Reducers/CreditsReducer";
import { bindActionCreators } from "redux";
import Title from "../GlobalComponents/Title";
import GLOBAL from "../Utils/Globals";

class Credits extends Component {
  render() {
    return (
      <View style={styles.viewContainer}>
        <View
          style={{
            elevation: 5,
            margin: 5,
            padding: 10,
            backgroundColor: "white",
            borderRadius: 8
          }}
        >
          <Title title="Credits" />
          <Text style={{ fontWeight: "bold", fontSize: 20, marginTop: 8 }}>
            {GLOBAL.RUPPEE_SYMBOL + " " + this.props.credits.credits}
          </Text>
        </View>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  credits: state.credits
});
const ActionCreators = Object.assign({}, actionTypes.ADD_CREDITS);
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch)
});
const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    padding: 15
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Credits);
