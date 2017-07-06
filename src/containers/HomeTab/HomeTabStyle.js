import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, Fonts, Metrics } from '../../theme';

export default StyleSheet.create({
    ...ApplicationStyles.screen,

    homeContainer: {
        flex: 1,
    },
    commonConatiner: {
        height: Metrics.screenHeight/3,
        backgroundColor: Colors.activeTab
    },

});