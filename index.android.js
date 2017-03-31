/**
 * Optimize App
 * https://github.com/geethujp/Optimize
 * author: Geethu Jose
 */

import React, { Component } from 'react';
import {
    AppRegistry,
} from 'react-native';
import Login from './containers/login/index';
export default class Optimize extends Component {
    render() {
        return (
            <Login/>
        );
    }
}

AppRegistry.registerComponent('Optimize', () => Optimize);
