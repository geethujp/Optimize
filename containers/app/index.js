/**
 * App container
 * App container contains basic components like Header and Login container
 * ScrollView is used to wrap the container.
 */
import React, { Component } from 'react';
import {
    ScrollView
} from 'react-native';
import styles from './style';
import Header from '../../components/header/index';
import Login from '../../containers/login/index';

export default class extends Component {

  render() {
    return (
      <ScrollView contentContainerStyle = { styles.info_container }>
      <Header/>
      <Login/>
      </ScrollView>
    );
  }
}