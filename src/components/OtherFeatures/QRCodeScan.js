import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, Linking} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
export default class QRCodeScan extends Component {
  onSuccess = e => {
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err),
    );
  };

  render() {
    return (
      <QRCodeScanner
        onRead={this.onSuccess}
        topContent={<Text style={styles.centerText}>QR code Scanner</Text>}
        bottomContent={
          <TouchableOpacity
            style={styles.buttonTouchable}
            onPress={() => {
              this.props.navigation.goBack();
            }}>
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});
