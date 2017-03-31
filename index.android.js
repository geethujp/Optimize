/**
 * Optimize App
 * https://github.com/geethujp/Optimize
 * author: Geethu Jose
 */

import React, { Component } from 'react';
import {
    AppRegistry,
} from 'react-native';
import App from './containers/app/index';
export default class Optimize extends Component {
    render() {
        return (
            <App/>
        );
    }
}

AppRegistry.registerComponent('Optimize', () => Optimize);
