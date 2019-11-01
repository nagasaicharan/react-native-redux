import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Util from '../Utils/Util';
import GLOBAL from '../Utils/Globals';
import ReduxButton from '../GlobalComponents/ReduxButton';
export default class login extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      emailId: '',
      password: '',
    };
  }
  componentDidMount() {
    this.checkLogggedIn();
  }
  checkLogggedIn = () => {
    AsyncStorage.getItem(GLOBAL.LOGIN_KEY).then(key => {
      if (key) {
        this.navigateToCatlog();
      }
    });
  };
  navigateToCatlog = () => {
    this.props.navigation.navigate(GLOBAL.PAGE.CATLOG);
  };

  onPressLogin = () => {
    const {emailId, password} = this.state;
    const EMAIL_CONSTANT = 'example@example.com',
      PASSWORD_CONSTANT = '123456';
    if (!emailId) {
      Util.showToast('Enter Email Id');
      return;
    }
    if (!password) {
      Util.showToast('Enter password');
      return;
    }
    if (emailId === EMAIL_CONSTANT && password === PASSWORD_CONSTANT) {
      Util.showToast('Login Sucessfull');
      AsyncStorage.setItem(GLOBAL.LOGIN_KEY, 'sucess')
        .then(() => {
          this.navigateToCatlog();
        })
        .catch(error => {
          Util.showToast(error.toString());
        });
    } else {
      Util.showToast('Wrong Id and Password');
      return;
    }
  };

  render() {
    return (
      <View style={styles.viewContainer}>
        <Text style={styles.textLogin}>Login</Text>
        <View style={styles.containerTextInput}>
          <TextInput
            onChangeText={emailId => {
              this.setState({emailId});
            }}
            placeholder="Enter Email"
            // autoFocus={true}
          />
        </View>
        <View style={[styles.containerTextInput, {marginVertical: 8}]}>
          <TextInput
            onChangeText={password => {
              this.setState({password});
            }}
            placeholder="Enter Password"
            secureTextEntry={true}
          />
        </View>
        <ReduxButton
          title="Login"
          onPress={() => {
            this.onPressLogin();
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  containerTextInput: {
    borderRadius: 5,
    borderColor: 'black',
    width: '100%',
    padding: 5,
    borderWidth: 0.5,
  },
  textLogin: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 8,
  },
});
