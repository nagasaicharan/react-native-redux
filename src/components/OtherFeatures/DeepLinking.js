import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Title from '../GlobalComponents/Title';
import Firebase from '../Utils/js/Firebase';
import ReduxButton from '../GlobalComponents/ReduxButton';
const routes = ['Stripe', 'Fonts', 'WebView', 'Network'];
class DeepLinking extends Component {
  render() {
    return (
      <View style={styles.viewContainer}>
        <Title title="Network" style={{marginBottom: 8}} />
        {routes.map(item => {
          return (
            <ReduxButton
              style={{marginVertical: 5}}
              title={item}
              onPress={() => {
                Firebase.analyticsLogEvent(`${item}_button`);
                Firebase.createDynamicLinkStatic(
                  'deeplink',
                  {route: item},
                  `Link goes to ${item}`,
                  'Sample Description',
                );
              }}
            />
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
export default DeepLinking;
