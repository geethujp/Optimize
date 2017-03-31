/**
 * Header Component
 * The header component consist of two Text objects, v3.4 and T000v34-DFW1
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
      <Text style = { styles.header_item }>v3.4</Text>
      <Text style = { styles.header_item }>T000v34-DFW1</Text>
      </View>
    );
  }
}