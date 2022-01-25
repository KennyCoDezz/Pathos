import React, {useEffect, useState} from 'react';
import { StyleSheet, TextInput, View, Text, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native';
//import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks';
import {Ionicons, MaterialIcons} from '@expo/vector-icons';
import{ useFonts, OpenSans_800ExtraBold} from '@expo-google-fonts/open-sans';
import{Roboto_400Regular} from '@expo-google-fonts/roboto';
import colors from '../config/colors'
import AppLoading from 'expo-app-loading';
import axios from './apis/TestApi';
import TestCom from './Components/TestCom';

const HomepageScreenTest=({navigation})=> {
    const [user, setUser] = useState([])
    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try{
            const response = await axios.get('/test');
            setUser(response.data.response);
            console.log(user);
        } catch (error){
            console.log(error);
        }
    }
    if(!user){
        return null
    }


    const [text, setText] = useState('');
    let [fontsLoaded, error] = useFonts({
        SectionTitle: OpenSans_800ExtraBold,
        LinkandPlaceholder: Roboto_400Regular,
    });
    if(!fontsLoaded){
        return <AppLoading />
    }

    return (
        <View style={styles.background}>
                <View style={styles.header}>
                    <View style={styles.headerTextContainer}>
                            <Text style={styles.header_text}>Discover New</Text>
                    </View>
                    <TouchableOpacity style={styles.profile_header}>
                        <Image source={require('../assets/profpic.jpg')} style={{width: '100%',height: '100%',borderRadius: 100 / 2,}}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.searchBar}>
                    <TextInput style={styles.inputSearchBar}
                    placeholder="Search Here..."
                    placeholderTextColor='#8a8a8a'
                    onChangeText={(text)=>setText(text)}
                    defaultValue={text}
                    keyboardType="default"
                    >
                    </TextInput>
                    <Ionicons name="ios-search" size={28} style={{
                        position:'absolute',
                        left:"7%",
                        color: colors.iconColor,
                        }} />
                </View>
                <FlatList data={user}
                    keyExtractor={(item, index)=>'key'+index}
                    renderItem={({ item }) => {
                        return <TestCom item = {item}/>
                    }}
                >

                </FlatList>
                <ScrollView style={styles.scrollviewBackground} contentContainerStyle={{alignItems:'center'}}>
                    <TouchableOpacity style={styles.welcomeBanner}>
                        <Image source={require('../assets/Image/welcome-banner.png')} style={{width:'100%', height: '100%'}}></Image>
                    </TouchableOpacity>
                    <View style={styles.content}>
                        <Text style={styles.textDesign}>Featured Books</Text>
                        <TouchableOpacity style={styles.touchableContainer} onPress={()=>navigation.navigate('FeatureScreen')}>
                            <Text style={styles.textLink_placeHolder}>See More</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.scrollviewWrapper}>
                        <ScrollView style={styles.contentBoxWrapper} horizontal={true}>
                            <TouchableOpacity style={styles.contentBox} onPress={()=>navigation.navigate('NorthandSouthOverview')}>
                                <Image source={require('../assets/northandsouth.jpg')} style={{width:'100%', height: '100%'}}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.contentBox}>
                                <Image source={require('../assets/afterthecure.jpg')} style={{width:'100%', height: '100%'}}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.contentBox}>
                                <Image source={require('../assets/canterville.jpg')} style={{width:'100%', height: '100%'}}></Image>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.textDesign}>Recommended for you</Text>
                        <TouchableOpacity style={styles.touchableContainer} onPress={()=>navigation.navigate('RecommendedScreen')}>
                            <Text style={styles.textLink_placeHolder}>See More</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.scrollviewWrapper}>
                        <ScrollView style={styles.contentBoxWrapper} horizontal={true}>
                            <TouchableOpacity style={styles.contentBox}>
                                <Image source={require('../assets/elementoffire.jpg')} style={{width:'100%', height: '100%'}}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.contentBox}>
                                <Image source={require('../assets/nightandday.jpg')} style={{width:'100%', height: '100%'}}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.contentBox}>
                                <Image source={require('../assets/madem.png')} style={{width:'100%', height: '100%'}}></Image>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                    
                </ScrollView>
                <View style={styles.navigationBar}>
                    <View style={styles.background1}>
                        <TouchableOpacity onPress={()=>navigation.navigate('HomepageScreen')}>
                            <MaterialIcons name="home" size={35} style={{color: colors.iconColor,margin: 5,}}>
                            </MaterialIcons>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>navigation.navigate('GenreScreen')}>
                            <MaterialIcons name="category" size={35} style={styles.iconNavBar} >
                            </MaterialIcons>
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={()=>navigation.navigate('BookmarkScreen')}>
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
    header: {
        width: '95%', 
        flexDirection: 'row', 
        alignItems:'center', 
        marginTop:10, 
        marginRight: '5%'
    },
    headerTextContainer: {
        width: 200,
        height: 40,
        backgroundColor:"red",  
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header_text: {
        color: colors.categoryTitleColor, 
        fontFamily: 'SectionTitle', 
        fontSize: 20,
    },
    profile_header:{
        width: 45,
        height: 45,
        borderRadius: 100 / 2,
        backgroundColor: "red",  
        position: 'absolute', 
        right:0,
    },
    background: {
        flex:1,
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: colors.backgroundColor,
    },
    searchBar: {
        alignItems:'center',
        justifyContent: 'center',
        width: "100%",
        padding: 0,
        marginTop: 8,
        marginBottom: 10,
    },
    inputSearchBar: {
        borderWidth:3,
        borderColor: colors.searchBarColor,
        color: colors.white,
        backgroundColor: colors.searchBarColor,
        width: "90%",
        paddingLeft: "15%",
        paddingRight:"5%",
        height: 40,
        borderRadius: 15,
        fontFamily: 'LinkandPlaceholder',
    },
    scrollviewBackground: {
        flexDirection: 'column', 
        marginBottom: 45,
        width: "100%",
    },
    welcomeBanner: {
        width: "90%",
        height: 150,
        backgroundColor: colors.bookBoxColor,
        borderRadius: 5,
        marginBottom: 20,
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft: "5%",
        marginRight: "5%",
        marginBottom:5,
        width: "90%",
    },
    textDesign: {
        color: colors.categoryTitleColor,
        fontSize: 19,
        fontFamily: 'SectionTitle',
    },
    touchableContainer: {
        position: 'absolute',
        alignSelf: 'center',
        right: 0,
    },
    textLink_placeHolder: {
        fontFamily: 'LinkandPlaceholder',
        color: colors.textLinks_placeholderColor,
        fontSize: 16,
    },
    contentBoxWrapper: {
        flexDirection: 'row',
        alignSelf: "flex-start",
        marginLeft: "5%",
    },
    contentBox: {
        width: 110,
        height: 160,
        backgroundColor: colors.bookBoxColor,
        borderRadius: 5,
        marginRight: 20,
        
    },
    scrollviewWrapper: {
        alignSelf:'flex-start',
        width: "100%",
        marginBottom: 20,
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
    }
})

export default HomepageScreenTest;