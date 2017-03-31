/**
 * Login container
 * Login container contains basic components like Header, Logo and LoginForm
 * ScrollView is used to wrap the container.
 */
import React, { Component } from 'react';
import {
    ScrollView
} from 'react-native';
import styles from './style';
import Header from '../../components/header/index';
import Logo from '../../components/logo/index';
import LoginForm from '../../components/loginForm/index';
export default class extends Component {

  render() {
    return (
      <ScrollView contentContainerStyle = { styles.info_container }>
      <Header/>
      <Logo/>
      <LoginForm/>
      </ScrollView>
    );
  }
}