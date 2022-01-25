import React from 'react';
import { StyleSheet, TextInput, View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';

const TestCom = ({item}) => {
    return (
        <Text style={styles.header_text}>{item.title}, {item.description}</Text>
    )
}

const styles = StyleSheet.create({
    header_text:{
        color: '#fff',
        fontFamily: 'SectionTitle',
        fontSize: 20,
    }
})
export default TestCom;