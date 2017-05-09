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
import HeaderItem from '../../components/headerItem/index';
import Login from '../../containers/login/index';

export default class extends Component {

  render() {
    return (
      <ScrollView contentContainerStyle = { styles.info_container }>
      <Header>
      	<HeaderItem color="#fff" label="v3.4"/>
      	<HeaderItem label="T000v34-DFW1"/>
      </Header>
      <Login/>
      </ScrollView>
    );
  }
}