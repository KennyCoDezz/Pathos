import React, {useState} from 'react';
import { StyleSheet, TextInput, View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import {Ionicons, MaterialIcons, Octicons, FontAwesome } from '@expo/vector-icons';
import{ useFonts, OpenSans_800ExtraBold} from '@expo-google-fonts/open-sans';
import{Roboto_400Regular} from '@expo-google-fonts/roboto';
import colors from '../config/colors'
import AppLoading from 'expo-app-loading';


const Action_AdventureScreen=({navigation})=> {
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
                    <Text style={{fontFamily: 'SectionTitle', fontSize: 27, color: colors.white}}>Action & Adventure</Text>
                </View>
            </View>
            <ScrollView style={styles.scrollView} contentContainerStyle={{alignItems:'center'}}>
                <View style={styles.scrollViewBanner}>
                    <Image source={require('../assets/Image/action-adventure-banner.png')} style={styles.scrollViewBannerImage}></Image>
                </View>
                <View style={styles.popularSection}>
                    <View style={styles.sectionTitleContainer}>
                        <Text style={styles.sectionTitle}>Most Popular</Text>
                    </View>
                    <ScrollView style={styles.popularSectionScrollView} horizontal={true}>
                        <TouchableOpacity style={styles.imageContainer}>
                            <Image source={require('../assets/whitefang.jpg')} style={{width: '100%', height: '100%'}}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.imageContainer}>
                            <Image source={require('../assets/huckle.jpg')} style={{width: '100%', height: '100%'}}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.imageContainer}>
                            <Image source={require('../assets/Image/Element-of-fire.jpg')} style={{width: '100%', height: '100%'}}></Image>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
                <View style={styles.digInWrapper}>
                    <View style={{marginLeft: '5%', marginTop: 10, marginBottom: 10,flexDirection: 'row'}}>
                        <Text style={{color: colors.categoryTitleColor,fontSize: 19,fontFamily: 'SectionTitle',}}>Dig in Now</Text>
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
        backgroundColor: colors.actionAdventure_headerBackgroundColor,
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
    scrollViewBanner: {
        width: '90%', 
        height: 170, 
        marginTop: 10, 
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollViewBannerImage: {
        width: '100%', 
        height: '100%',
    },
    popularSection: {
        width: "100%",
        marginTop: 20, 
        height: 220, 
        borderTopWidth: 2, 
        borderColor: 'gray',
    },
    sectionTitleContainer: {
        marginLeft: '5%', 
        marginTop: 10, 
        marginBottom: 10,
        flexDirection: 'row',
    },
    sectionTitle: {
        color: colors.categoryTitleColor,
        fontSize: 19,
        fontFamily: 'SectionTitle',
    },
    popularSectionScrollView: {
        flexDirection: 'row',
        alignSelf: "flex-start", 
        marginLeft: "5%",
    },
    imageContainer: {
        width: 110,
        height: 160,
        backgroundColor: colors.bookBoxColor,
        borderRadius: 5,
        marginRight: 20,
    },
    digInWrapper: {
        width: "100%",
        marginTop: 20, 
        borderTopWidth: 2, 
        borderColor: 'gray',
    },
    scrollViewContent: {
        width: '90%', 
        height: 170,
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: '5%',
        backgroundColor: colors.bookBackgroundColor,
    },
    scrollViewElementContainer: {
        width: 110,
        height: '100%',
    },
    scrollViewTextContainer: {
        width: '55%',
        alignItems: 'center',
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
        textAlign: 'center',
    },
    authorNameStyle: {
        fontFamily: 'Kollektif', 
        fontSize: 18, 
        marginLeft: 15,
        color: colors.iconTextColor,
        textAlign: 'center',
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

export default Action_AdventureScreen;