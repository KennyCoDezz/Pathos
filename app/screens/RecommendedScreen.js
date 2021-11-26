import React, {useState} from 'react';
import { StyleSheet, TextInput, View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import {Ionicons, MaterialIcons, Octicons, FontAwesome } from '@expo/vector-icons';
import{ useFonts, OpenSans_800ExtraBold} from '@expo-google-fonts/open-sans';
import{Roboto_400Regular} from '@expo-google-fonts/roboto';
import colors from '../config/colors'
import AppLoading from 'expo-app-loading';


const RecommendedScreen=({navigation})=> {
    let [fontsLoaded, error] = useFonts({
        SectionTitle: OpenSans_800ExtraBold,
        LinkandPlaceholder: Roboto_400Regular,
        "Kollektif": require('../fonts/Kollektif.ttf'),
        "Kollektif-Bold": require('../fonts/Kollektif-Bold.ttf'),
    });
    if(!fontsLoaded){
        return <AppLoading />
    }

    return (
        <View style={styles.background}> 
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={()=>navigation.goBack()}>
                    <Ionicons name="chevron-back" size={28} color="white" style={{marginLeft: 20}}></Ionicons>
                    <Text style={{color:colors.white, fontSize: 19, fontFamily: 'Kollektif'}}>Back</Text>
                </TouchableOpacity>
                <View style={styles.headerTextContainer}>
                    <Text style={{fontFamily: 'SectionTitle', fontSize: 27, color: colors.white}}>Recommended Books</Text>
                </View>
            </View>
            <ScrollView style={styles.scrollView} contentContainerStyle={{alignItems:'center'}}>
                <View style={styles.scrollViewContent}>
                    <TouchableOpacity style={styles.scrollViewElementContainer}>
                        <Image source={require('../assets/elementoffire.jpg')} style={styles.imageElement}></Image>
                    </TouchableOpacity>
                    <View style={styles.scrollViewTextContainer}>
                        <Text style={styles.bookTitleStyle}>Element of Fire</Text>
                        <Text style={styles.authorNameStyle}>Martha Wells</Text>
                        <View style={styles.iconStyle}>
                            <Octicons name="book" size={24} color="#adadad" />
                            <Text style={styles.icon_textStyle}>1,111</Text>
                            <FontAwesome name="download" size={24} color="#adadad" style={{marginLeft: 15}} />
                            <Text style={styles.icon_textStyle}>1,111</Text>
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center', marginLeft: 15, marginTop: 15, height: 25, backgroundColor: colors.Fantasy}}>
                            <Text style={styles.genreTextStyle}>Fantasy</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.scrollViewContent}>
                    <TouchableOpacity style={styles.scrollViewElementContainer}>
                        <Image source={require('../assets/nightandday.jpg')} style={styles.imageElement}></Image>
                    </TouchableOpacity>
                    <View style={styles.scrollViewTextContainer}>
                        <Text style={styles.bookTitleStyle}>Night and Day</Text>
                        <Text style={styles.authorNameStyle}>Virginia Woolf</Text>
                        <View style={styles.iconStyle}>
                            <Octicons name="book" size={24} color="#adadad" />
                            <Text style={styles.icon_textStyle}>1,111</Text>
                            <FontAwesome name="download" size={24} color="#adadad" style={{marginLeft: 15}} />
                            <Text style={styles.icon_textStyle}>1,111</Text>
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center', marginLeft: 15, marginTop: 15, height: 25, backgroundColor: colors.Romance}}>
                            <Text style={styles.genreTextStyle}>Romance</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.scrollViewContent}>
                    <TouchableOpacity style={styles.scrollViewElementContainer}>
                        <Image source={require('../assets/madem.png')} style={styles.imageElement}></Image>
                    </TouchableOpacity>
                    <View style={styles.scrollViewTextContainer}>
                        <Text style={styles.bookTitleStyle}>Mademoiselle at Arms</Text>
                        <Text style={styles.authorNameStyle}>Elizabeth Bailey</Text>
                        <View style={styles.iconStyle}>
                            <Octicons name="book" size={24} color="#adadad" />
                            <Text style={styles.icon_textStyle}>1,111</Text>
                            <FontAwesome name="download" size={24} color="#adadad" style={{marginLeft: 15}} />
                            <Text style={styles.icon_textStyle}>1,111</Text>
                        </View>
                        <View style={{justifyContent: 'center', alignItems:'center', marginLeft: 15, marginTop: 15, height: 25, backgroundColor: colors.Fantasy}}>
                            <Text style={styles.genreTextStyle}>Fantasy</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.scrollViewContent}>
                    <TouchableOpacity style={styles.scrollViewElementContainer}>
                        <Image source={require('../assets/elementoffire.jpg')} style={styles.imageElement}></Image>
                    </TouchableOpacity>
                    <View style={styles.scrollViewTextContainer}>
                        <Text style={styles.bookTitleStyle}>Element of Fire</Text>
                        <Text style={styles.authorNameStyle}>Martha Wells</Text>
                        <View style={styles.iconStyle}>
                            <Octicons name="book" size={24} color="#adadad" /> 
                            <Text style={styles.icon_textStyle}>1,111</Text>
                            <FontAwesome name="download" size={24} color="#adadad" style={{marginLeft: 15}} />
                            <Text style={styles.icon_textStyle}>1,111</Text>
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center', marginLeft: 15, marginTop: 15, height: 25, backgroundColor: colors.Fantasy}}>
                            <Text style={styles.genreTextStyle}>Fantasy</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.navigationBar}>
                    <View style={styles.background1}>
                        <TouchableOpacity onPress={()=>navigation.navigate('HomepageScreen')}>
                            <MaterialIcons name="home" size={35} style={styles.iconNavBar}>
                            </MaterialIcons>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>navigation.navigate('GenreScreen')}>
                            <MaterialIcons name="category" size={35} style={styles.iconNavBar} >
                            </MaterialIcons>
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={()=>navigation.navigate('')}>
                            <MaterialIcons name="bookmarks" size={35} style={styles.iconNavBar} >
                            </MaterialIcons>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>navigation.navigate('Prof')}>
                            <MaterialIcons name="account-circle" size={35} style={styles.iconNavBar} >
                            </MaterialIcons>
                        </TouchableOpacity>
                    </View>
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex:1,
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: colors.backgroundColor,
    },
    header: {
        backgroundColor: colors.red,
        height: 120,
        width: '100%',
    },
    backButton: {
        flexDirection:'row', 
        alignItems: 'center', 
        height: 60,
    },
    headerTextContainer: {
        alignItems: 'center', 
        justifyContent: 'center', 
        height: 35,
    },
    scrollView: {
        flexDirection: 'column', 
        width: '100%', 
        marginBottom: 47,
    },
    scrollViewContent: {
        width: '90%', 
        height: 170,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollViewElementContainer: {
        width: 110,
        height: '100%',
    },
    scrollViewTextContainer: {
        width: '65%',
    },
    imageElement: {
        width:'100%', 
        height: '100%',
    },
    bookTitleStyle: {
        fontFamily: 'Kollektif-Bold', 
        fontSize: 23, 
        marginLeft: 15,
        color: colors.white,
    },
    authorNameStyle: {
        fontFamily: 'Kollektif', 
        fontSize: 18, 
        marginLeft: 15,
        color: colors.iconTextColor,
    },
    iconStyle: {
        flexDirection: 'row',
        marginLeft: 15, 
        marginTop: 10, 
        alignItems: 'center'
    },
    icon_textStyle: {
        marginLeft: 5,
        color: colors.iconTextColor, 
        fontFamily: 'Kollektif',
    },
    genreTextStyle: {
        color: colors.white, 
        fontFamily: 'Kollektif',
    },
    navigationBar: {
        width: "100%",
        position: 'absolute',
        bottom: 0,
        borderTopWidth: 1,
        borderColor: colors.navBarBackgroundColor,
    },
    background1: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: colors.navBarBackgroundColor,
    },
    iconNavBar: {
        color: colors.iconColor,
        margin: 5,
    },
})

export default RecommendedScreen;