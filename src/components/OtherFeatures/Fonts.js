import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Title from '../GlobalComponents/Title';

class Fonts extends Component {
  render() {
    return (
      <View style={styles.viewContainer}>
        <Title title="Fonts" style={{marginBottom: 8}} />
        <View style={styles.viewCard}>
          <Title title="Font General" />
          <Text style={[{fontFamily: 'OpenSans-Italic'}, styles.textStyle]}>
            OpenSans-Italic
          </Text>
          <Text style={[{fontFamily: 'OpenSans-Bold'}, styles.textStyle]}>
            OpenSans-Bold
          </Text>
          <Text style={[{fontFamily: 'OpenSans-Light'}, styles.textStyle]}>
            OpenSans-Light
          </Text>
          <Text style={[{fontFamily: 'OpenSans-Regular'}, styles.textStyle]}>
            OpenSans-Regular
          </Text>
          <Text style={[{fontFamily: 'OpenSans-Semibold'}, styles.textStyle]}>
            OpenSans-Semibold
          </Text>
          <Text
            style={[{fontFamily: 'OpenSans-SemiboldItalic'}, styles.textStyle]}>
            OpenSans-Semibold
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    padding: 15,
  },
  viewCard: {
    elevation: 5,
    margin: 5,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  textStyle: {color: 'black', marginHorizontal: 10, marginVertical: 5},
});
export default Fonts;
