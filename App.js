/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import InitialNav from './src/Route';
import {Provider} from 'react-redux';
import store, {persistor} from './src/components/Utils/Redux/Store';
import {PersistGate} from 'redux-persist/integration/react';
import Firebase from './src/components/Utils/js/Firebase';

export default class App extends Component {
  getActiveRouteName(navigationState) {
    if (!navigationState) {
      return null;
    }
    const route = navigationState.routes[navigationState.index];
    // Dive into nested navigators
    if (route.routes) {
      return this.getActiveRouteName(route);
    }
    return route.routeName;
  }
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <InitialNav
            onNavigationStateChange={(prevState, currentState) => {
              const currentScreen = this.getActiveRouteName(currentState);
              const prevScreen = this.getActiveRouteName(prevState);
              if (prevScreen !== currentScreen) {
                Firebase.analyticsLogScreen(currentScreen);
              }
            }}
          />
        </PersistGate>
      </Provider>
    );
  }
}
