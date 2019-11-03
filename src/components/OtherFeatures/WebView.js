import React, {Component} from 'react';
import {WebView} from 'react-native-webview';

class WebViewSample extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://www.google.com'}}
        style={{marginTop: 20}}
      />
    );
  }
}

export default WebViewSample;
