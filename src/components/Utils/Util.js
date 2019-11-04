import {ToastAndroid} from 'react-native';
import GLOBAL from './Globals';
module.exports = {
  showToast: function(message) {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  },
  processRouteData: (navigationData, propw) => {
    var route = navigationData.route;
    if (route) {
      propw.navigation.push(route, navigationData);
    } else {
      propw.navigation.navigate(GLOBAL.PAGE.CATLOG);
    }
  },
  //getting Query params as JSON object
  getNavigationObjectFromUrlParams: url => {
    var params = url.split('?')[1];
    return (
      '{"' +
      decodeURI(params)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"') +
      '"}'
    );
  },
};
