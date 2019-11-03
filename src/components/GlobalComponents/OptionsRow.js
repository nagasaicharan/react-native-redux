import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
const OptionsRow = props => {
  const {title} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>{title}</Text>
      <MIcon name="chevron-right" color="black" size={20} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    elevation: 5,
    borderRadius: 8,
    backgroundColor: 'white',
    marginVertical: 5,
  },
  textTitle: {
    color: 'black',
    textAlign: 'left',
    width: '95%',
  },
});

export default OptionsRow;
