import { ToastAndroid } from "react-native";
module.exports = {
  showToast: function(message) {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  }
};
