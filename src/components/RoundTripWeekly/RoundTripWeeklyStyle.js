import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, Fonts, Metrics } from '../../theme';

export default StyleSheet.create({
    ...ApplicationStyles.screen,

    RoundTripWeeklyContainer:{

    },

    dateWeekText: {
        fontSize: Fonts.size.h1,
        fontFamily: Fonts.lato.base,
        color: Colors.black,
        padding: 5,
        alignSelf: 'center'
    },

    dayWeekText: {
        fontSize: Fonts.size.medium,
        fontFamily: Fonts.lato.base,
        color: Colors.settingHeadingTextColor,
        padding: 5,
    },

    monthWeekText: {
        fontSize: Fonts.size.medium,
        fontFamily: Fonts.lato.base,
        color: Colors.black,
        padding: 5,
    },

    timeWeekText:{
        fontSize: Fonts.size.regular,
        fontFamily: Fonts.lato.regular,
        color: Colors.timeColor,
    },

    passengersNumberButton:{
        height: 30,
        width: 25,
    }

});