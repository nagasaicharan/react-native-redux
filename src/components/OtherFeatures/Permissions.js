import React, {Component} from 'react';
import {StyleSheet, View, PermissionsAndroid} from 'react-native';
import Title from '../GlobalComponents/Title';
import Util from '../Utils/Util';
import ReduxButton from '../GlobalComponents/ReduxButton';
class Permissions extends Component {
  getPermissions = permission => {
    PermissionsAndroid.request(permission).then(response => {
      if (response === PermissionsAndroid.RESULTS.GRANTED) {
        Util.showToast('Granted');
      } else {
        Util.showToast('Permission Denied');
      }
    });
  };

  render() {
    return (
      <View style={styles.viewContainer}>
        <Title title="Permissions" style={{marginBottom: 8}} />
        <ReduxButton
          title={'Get Storage Permission'}
          style={{marginBottom: 8}}
          onPress={() => {
            this.getPermissions(
              PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            );
          }}
        />
        <ReduxButton
          title={'Get Cameras Permission'}
          style={{marginBottom: 8}}
          onPress={() => {
            this.getPermissions(PermissionsAndroid.PERMISSIONS.CAMERA);
          }}
        />
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
export default Permissions;
