/**
 * Logo Component
 * Includes the optimize app logo
 */
import React, { Component } from 'react';
import {
    Image
} from 'react-native';
import styles from './style';

export default class extends Component {

    render() {
        return (
          <Image style = { styles.logo } source = {require('../../images/Optimize-logo.png')}/>
        );
    }
}
