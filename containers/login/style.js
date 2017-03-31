/**
 * Login container Style sheet
 */
import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({

    login_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#303b3d',
        alignSelf: 'stretch',
        height: Dimensions.get('window').height,
    }
});
