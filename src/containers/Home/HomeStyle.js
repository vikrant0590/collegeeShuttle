import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, Fonts, Metrics } from '../../theme';

export default StyleSheet.create({
    ...ApplicationStyles.screen,

    homeContainer: {
        flex: 1,
    },
    commonConatiner: {
        height: Metrics.screenHeight/2.8,
    },

    header:{
        height: 28,
        flexDirection: 'row',
        marginTop: 30,
    },

    notification: {
        flex: 0.2,
        alignItems: 'center',
        justifyContent: 'center'
    },

    notificationIcon:{
        marginRight: 10
    },

    segmentButton:{
        flex: 1,
        flexDirection: 'row',
        borderColor: Colors.white,
        borderRadius: 16,
        borderWidth: 1.8,
        marginLeft: 80,
        marginRight: 40,
    },

    activeSegmentText: {
        textAlign: 'center',
        backgroundColor: Colors.transparent,
        color: Colors.black,
        fontSize: Fonts.size.medium,
        fontFamily: Fonts.lato.base
    },

    deactiveSegmentText: {
        textAlign: 'center',
        backgroundColor: Colors.transparent,
        color: Colors.white,
        fontSize: Fonts.size.medium,
        fontFamily: Fonts.lato.base
    },

    activeLeftSegmentButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        backgroundColor: Colors.white,
    },

    deactiveLeftSegmentButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },

    deactiveRightSegmentButton:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },

    activeRightSegmentButton:{
        flex: 1.2,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        backgroundColor: Colors.white,
    },

    textBackgroundView:{
        marginTop: 40,
        marginLeft: 60,
        marginRight: 60,
        backgroundColor: 'white',
        borderRadius: 2.5
    },

    textSeprateLine:{
        height: 1.2,
        flexDirection: 'row'
    },

    textSepratorIcon:{
        right: -190,
        top: -12,
        justifyContent: 'center'
    },

    textIcon:{
        margin: 5,
        justifyContent: 'center'
    },

    titleHeaderText: {
        fontSize: Fonts.size.regular,
        fontFamily: Fonts.lato.base,
        color: Colors.settingHeadingTextColor
    },

    dayText: {
        fontSize: Fonts.size.h1,
        fontFamily: Fonts.lato.base,
        color: Colors.black,
        paddingLeft: 30,
        paddingBottom: 10,
        paddingTop: 10
    },

    monthText: {
        fontSize: Fonts.size.regular,
        fontFamily: Fonts.lato.base,
        color: Colors.black
    },

    timeText: {
        fontSize: Fonts.size.regular,
        fontFamily: Fonts.lato.base,
        color: Colors.settingHeadingTextColor,
        paddingTop: 5,
        paddingBottom: 5
    },

    busText:{
        fontSize: Fonts.size.regular,
        fontFamily: Fonts.lato.base,
        color: Colors.settingHeadingTextColor,
        paddingTop: 20
    },

    collegeText: {
        fontSize: Fonts.size.regular,
        fontFamily: Fonts.lato.base,
        color: Colors.black,
        paddingTop: 5,
        paddingBottom: 5
    },

    pickupText: {
        fontSize: Fonts.size.regular,
        fontFamily: Fonts.lato.base,
        color: Colors.settingHeadingTextColor
    },

    circleText: {
        fontSize: Fonts.size.regular,
        fontFamily: Fonts.lato.base,
        color: Colors.black,
        paddingTop: 5,
        paddingBottom: 5
    },

    dropText: {
        fontSize: Fonts.size.regular,
        fontFamily: Fonts.lato.base,
        color: Colors.settingHeadingTextColor
    },

    trackNowBtn: {
        flexDirection: 'row',
        height: 30
    },

    trackText:{
        paddingLeft: 5,
        fontSize: Fonts.size.regular,
        textAlign: 'center',
        alignSelf: 'center',
        color: Colors.roundTripColor
    },

    trackIcon: {
        justifyContent: 'center',
        alignSelf: 'center',
        resizeMode: 'contain',
        height: 20,
        width: 20
    },

    thinLine:{
        height: 105,
        width: 1,
        backgroundColor: Colors.thinLineColor,
        marginLeft: -25,
        marginRight: 15
    },

    busIcon:{
        marginLeft: -15,
        marginRight: 20,
        marginTop: 20
    },

    descriptionText: {
        fontSize: Fonts.size.h6,
        fontFamily: Fonts.lato.base
    },

});