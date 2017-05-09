/**
 * Header Component
 * The header component consist of the header wrapper
 */
import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';
import styles from './style';

export default class extends Component {

  render() {
    return (
      <View style = { styles.header }>
      {this.props.children}
      </View>
    );
  }
}