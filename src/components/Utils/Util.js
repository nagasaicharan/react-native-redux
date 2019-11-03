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
};
