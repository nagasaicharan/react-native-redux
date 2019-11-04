import firebase from 'react-native-firebase';
import {Share} from 'react-native';
module.exports = {
  logError: function(name, error, URL, additional) {
    if (!error) {
      error = 'Empty Response';
    }
    firebase.crashlytics().recordCustomError(name, error.toString(), [
      {
        className: URL,
        functionName: 'test Function',
        additional: additional,
        fileName: 'TempFile.js',
      },
    ]);
  },
  analyticsLogScreen: function(screenName) {
    firebase.analytics().setCurrentScreen(screenName);
  },
  getFirebaseToken: function() {
    return new Promise((resolve, reject) => {
      getFirebaseMessagingPermissions().then(() => {
        firebase
          .messaging()
          .getToken()
          .then(token => {
            resolve(token);
          })
          .catch(error => {
            reject(error);
          });
      });
    });
  },
  getInitialNotification: () => {
    return new Promise((resolve, reject) => {
      firebase
        .notifications()
        .getInitialNotification()
        .then(notificationOpen => {
          if (notificationOpen) {
            //App in closed State
            // App was opened by a notification
            // Get information about the notification that was opened
            const notification = notificationOpen.notification;
            var data = notification._data;
            delete data['google.delivered_priority'];
            delete data['google.original_priority'];
            resolve(data);
          } else {
            reject(null);
          }
        })
        .catch(error => {
          console.log('error notification: ', error);
        });
    });
  },
  createDynamicLinkStatic: (activity, navigationParams, title, description) => {
    var constructedUrl =
      'https://reduxexperiment.in/' +
      activity +
      '?' +
      new URLSearchParams(navigationParams).toString();
    // construction of share message
    var message = 'Shared from *Charan*\n\n';
    if (title) {
      message = message + title + '\n\n';
    }
    if (description) {
      if (description.length > 200) {
        message = message + description.substring(0, 197) + '...' + '\n\n';
      } else {
        message = message + description + '\n\n';
      }
    }
    message = message + constructedUrl;
    Share.share({
      message: message,
    });
  },
  analyticsLogEvent: (event, params) => {
    firebase.analytics().logEvent(event, params);
  },
};

const getFirebaseMessagingPermissions = () => {
  return new Promise((resolve, reject) => {
    firebase
      .messaging()
      .hasPermission()
      .then(enabled => {
        if (enabled) {
          resolve();
          // user has permissions
        } else {
          firebase
            .messaging()
            .requestPermission()
            .then(() => {
              // User has authorised
              resolve();
            })
            .catch(error => {
              reject(error);
            });
        }
      });
  });
};
