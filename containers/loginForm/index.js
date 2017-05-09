/**
 * info Component
 * For mobile View show potrait view with 2 images per row.
 * For tablet View show landscape view with 4 images per row.
 */
import React, { Component } from 'react';
import {
    View
} from 'react-native';
import TextBox from '../../components/textBox/index';
import styles from './style';

export default class extends Component {

  render() {
    return (
		<View style = { styles.login_form_container }>
      		<TextBox placeholder="Username"/>
      		<TextBox placeholder="Password"/>
		</View>
    );
  }
}