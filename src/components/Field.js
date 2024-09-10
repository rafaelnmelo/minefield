import React from "react"
import { SafeAreaView, StyleSheet } from "react-native"
import params from "../params"

export default props => {
    const styleField = [styles.field]

    if (styleField.lenght === 1) styleField.push(styles.regular)

    return (
        <SafeAreaView style={styleField} >

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    field: {
        height: params.blockSize,
        width: params.blockSize,
        borderWidth: params.borderSize
    },
    regular: {
        backgroundColor: '#999',
        borderLeftColor: '#CCC',
        borderTopColor: '#CCC',
        borderRightolor: '#333',
        borderBottomColor: '#333'
    }
})