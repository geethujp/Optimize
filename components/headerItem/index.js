/**
 * Header Item Component
 * The header item component consist of the Text objects, inside the header component
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
      <Text style = { styles.header_item }>{this.props.label}</Text>
    );
  }
}