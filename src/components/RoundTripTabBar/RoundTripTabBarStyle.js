import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, Fonts, Metrics } from '../../theme';

export default StyleSheet.create({
    ...ApplicationStyles.screen,
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 10,
        flexDirection: 'column'
    },
    tabs: {
        height: 40,
        flexDirection: 'row',
        paddingTop: 5,
        borderWidth: 0,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        backgroundColor: Colors.BaseColor
    },
    tabTextStyle: {
        fontSize: Fonts.size.small,
        fontFamily: Fonts.lato.base,
        fontWeight: '600'
    },
});