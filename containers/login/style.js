/**
 * Login container Style sheet
 */
import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({

    login_container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#303b3d',
        alignSelf: 'stretch',
        height: Dimensions.get('window').height
    }
});
