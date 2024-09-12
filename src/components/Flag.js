import React from "react"
import { SafeAreaView, StyleSheet } from "react-native"

export default props => {
    return (
        <SafeAreaView style={styles.container} >
            <SafeAreaView style={[styles.flagPole, props.bigger ? styles.biggerFlagPole : null]} />
            <SafeAreaView style={[styles.flag, props.bigger ? styles.biggerFlag : null]} />
            <SafeAreaView style={[styles.base1, props.bigger ? styles.base1 : null]} />
            <SafeAreaView style={[styles.base2, props.bigger ? styles.base2 : null]} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 2
    },
    flagPole: {
        position: 'absolute',
        height: 14,
        width: 2,
        marginLeft: 9,
        backgroundColor: '#222'
    },
    flag: {
        position: 'absolute',
        height: 5,
        width: 6,
        marginLeft: 3,
        backgroundColor: '#F22'
    },
    base1: {
        position: 'absolute',
        height: 2,
        width: 6,
        marginLeft: 7,
        backgroundColor: '#222',
        marginTop: 10,
    },
    base2: {
        position: 'absolute',
        height: 2,
        width: 10,
        marginLeft: 5,
        backgroundColor: '#222',
        marginTop: 12
    },
    biggerFlagPole: {
        height: 28,
        width: 4,
        marginLeft: 16,
    },
    biggerFlag: {
        height: 10,
        width: 14,
        marginLeft: 3,
    },
    biggerBase1: {
        height: 4,
        width: 12,
        marginLeft: 12,
        marginTop: 20,
    },
    biggerBase2: {
        height: 4,
        width: 20,
        marginLeft: 8,
        marginTop: 24
    }
})