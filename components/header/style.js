/**
 * Header Style sheet
 */
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'stretch',
        backgroundColor: '#293334',
        borderBottomColor: '#46575a',
        borderBottomWidth: 1,
        height: 45.6,
        paddingRight: 5,
        paddingLeft: 5,
    },
    header_item: {
        fontSize: 12,
        color: '#e8e9e9'
    },
});
