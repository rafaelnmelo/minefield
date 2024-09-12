import React from "react"
import { SafeAreaView, StyleSheet } from "react-native"

export default props => {
    return (
        <SafeAreaView style={styles.container} >
            <SafeAreaView style={styles.flagPole} />
            <SafeAreaView style={styles.flag} />
            <SafeAreaView style={styles.base1} />
            <SafeAreaView style={styles.base2} />
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
    }
})