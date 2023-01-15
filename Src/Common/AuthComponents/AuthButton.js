import { StyleSheet, Animated, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, DimensionsSize, FONTS, SIZES } from '../Global'
import AntDesign from 'react-native-vector-icons/AntDesign' //Google witter

const AuthButton = ({
    lable,
    onPress
}) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.7}>
            <Animated.View style={styles.flex}>
                <Animated.Text style={styles.lable}>{lable}</Animated.Text>
                <AntDesign name='arrowright' color={COLORS.white} size={18} style={styles.icon} />
            </Animated.View>
        </TouchableOpacity>
    )
}

export default AuthButton

const styles = StyleSheet.create({
    button: {
        width: DimensionsSize.width - 40,
        height: 50,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.tinBlack,
        justifyContent: 'center',
        alignSelf: 'center',
        // position: 'absolute',
        // bottom: 10
    },
    flex: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        alignContent: 'center'
    },
    lable: {
        ...FONTS.h3,
        color: COLORS.white,
        textAlign: 'center'
    },
    icon: {
        justifyContent: 'center',
        alignSelf: 'center',
        alignContent: 'center',
        marginLeft: 10
    }
})