/**
 * Login container
 * Login container contains basic components like  Logo and LoginForm
 * View is used to wrap the container.
 */
import React, { Component,Text } from 'react';
import {
    View
} from 'react-native';
import styles from './style';
import Logo from '../../components/logo/index';
import LoginForm from '../../containers/loginForm/index';
export default class extends Component {

  render() {
    return (
      <View style = { styles.login_container }>
        <Logo/>
        <LoginForm/>
      </View>
    );
  }
}