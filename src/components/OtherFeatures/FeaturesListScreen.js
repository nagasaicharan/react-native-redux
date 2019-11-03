import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Title from '../GlobalComponents/Title';
import OptionsRow from '../GlobalComponents/OptionsRow';
const FeaturesItems = require('../OtherFeatures/Utils/FeaturesItems.json');
class FeaturesListScreen extends Component {
  render() {
    return (
      <View style={styles.viewContainer}>
        <Title title="Features" style={{marginBottom: 8}} />
        {FeaturesItems.map(item => {
          return (
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate(item.route);
              }}
              key={item.route}>
              <OptionsRow title={item.name} />
            </TouchableOpacity>
          );
        })}
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
export default FeaturesListScreen;
