import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Title from '../GlobalComponents/Title';
import NetInfo from '@react-native-community/netinfo';
class Network extends Component {
  constructor(props) {
    super(props);
    this.state = {
      netInfo: {},
    };
  }
  componentDidMount() {
    this.unsubscribe = NetInfo.addEventListener(state => {
      this.setState({
        netInfo: state,
      });
    });
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  returnNetInfoView = (state, removeDetails) => {
    var netInformationView = [];
    for (var key in state) {
      if (removeDetails) {
        if (key === 'details') {
          continue;
        }
      }
      netInformationView.push(
        <Text style={{color: 'black'}}>{key + ' : ' + state[key]}</Text>,
      );
    }
    return netInformationView;
  };

  render() {
    return (
      <View style={styles.viewContainer}>
        <Title title="Network" style={{marginBottom: 8}} />
        {this.returnNetInfoView(this.state.netInfo.details)}
        {this.returnNetInfoView(this.state.netInfo, true)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    padding: 15,
  },
});
export default Network;
