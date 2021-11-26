import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {useState} from 'react';
import colors from '../config/colors'
import{useFonts, OpenSans_800ExtraBold} from '@expo-google-fonts/open-sans';
import{Roboto_400Regular} from '@expo-google-fonts/roboto';
import { StyleSheet, TextInput, View, Text, TouchableOpacity, Image, } from 'react-native';
import {Ionicons,MaterialIcons} from '@expo/vector-icons'
import AppLoading from 'expo-app-loading';

const GenreScreen=({navigation})=>  {
  const [text, setText] = useState('');
    
  let [fontsLoaded, error] = useFonts({
    SectionTitle: OpenSans_800ExtraBold,
    LinkandPlaceholder: Roboto_400Regular
});
if(!fontsLoaded){
    return <AppLoading />
}

  return (
  
        <View style={styles.background}>

            <View style={ styles. upperNav} > 
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Image source={require('../assets/back.png')} 
                    style={{width: 15, 
                            height: 15, 
                            marginLeft: "5%", 
                            marginTop: "6%", }}>
                </Image>
                </TouchableOpacity>
                    <Text style={styles.backDesign}> Back </Text>

                <View style={styles.searchBar}>
                    <TextInput style={styles.inputSearchBar}
                    placeholder="Find books by title, authors or keyword"
                    placeholderTextColor='#8a8a8a'
                    onChangeText={(text)=>setText(text)}
                    defaultValue={text}
                    keyboardType="default"
                    >
                    </TextInput>
                    <Ionicons name="ios-search" size={28} style={{
                        position:'absolute',
                        left:"13%",
                        color: colors.iconColor,
                        }} />
                 </View>  
                      <Text style={styles.textDesign}>Genres</Text>
            </View>  
                
                 <View style={styles.viewBackground} contentContainerStyle={{alignItems:'center'}}>
                        <View style={styles.contentBoxWrapper} horizontal={true}>
                            <View style={styles.contentBox}>
                            <TouchableOpacity onPress={()=>navigation.navigate('Action_AdventureScreen')}>
                                 <Image source={require('../assets/actad.png')} 
                                    style={{width: '100%', height: '100%',}}>
                                </Image>
                            </TouchableOpacity>
                            </View>
                            <View style={styles.contentBox}>
                            <TouchableOpacity onPress={()=>navigation.navigate('RomanceScreen')}>
                                 <Image source={require('../assets/romance.png')} 
                                    style={{width: '100%', height: '100%',}}>
                                </Image>
                            </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.contentBoxWrapper} horizontal={true}>
                            <View style={styles.contentBox}>
                            <TouchableOpacity onPress={()=>navigation.navigate('FantasyScreen')}>
                                 <Image source={require('../assets/mystery.png')} 
                                    style={{width: '100%', height: '100%',}}>
                                </Image>
                            </TouchableOpacity>
                            </View>
                            <View style={styles.contentBox}>
                            <TouchableOpacity onPress={()=>navigation.navigate('HorrorScreen')}>
                                 <Image source={require('../assets/horror.png')} 
                                    style={{width: '100%', height: '100%',}}>
                                </Image>
                            </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.contentBoxWrapper} horizontal={true}>
                            <View style={styles.contentBox}>
                            <TouchableOpacity onPress={()=>navigation.navigate('ScienceFictionScreen')}>
                                 <Image source={require('../assets/scifi.png')} 
                                    style={{width: '100%', height: '100%',}}>
                                </Image>
                            </TouchableOpacity>
                            </View>
                            
                        </View>
                </View>


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
    background: {
        flex:1,
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: colors.backgroundColor,
       
    },
    upperNav: {
        width: "100%",
        backgroundColor:colors.upperNavColor,
        marginBottom: "13%",
    },
    searchBar: {
        alignItems:'center',
        justifyContent: 'center',
        width: "100%",
        padding: 0,
        marginTop: 15,
        marginBottom: 5,
    },
    inputSearchBar: {
        borderWidth:3,
        borderColor: colors.searchBarColor,
        color: colors.white,
        backgroundColor: colors.searchBarColor,
        width: "80%",
        paddingLeft: "15%",
        paddingRight:"5%",
        height: 45,
        borderRadius: 10,
        fontFamily: 'LinkandPlaceholder',
    },
    viewBackground: {
        flexDirection: 'column', 
        marginBottom: 45,
        width: "100%",
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft: "10%",
        marginRight: "5%",
        marginBottom: "8%",
        width: "90%",
    },
    textDesign: {
        color: colors.categoryTitleColor,
        fontSize: 40,
        fontFamily: 'SectionTitle',
        marginLeft: "10%",
        marginBottom: "2%",
    },
    backDesign: {
        color: colors.categoryTitleColor,
        fontSize: 20,
        marginLeft: "10%",
        marginTop: "5%",
        position: 'absolute',
        fontFamily: 'LinkandPlaceholder',
    },
    touchableContainer: {
        position: 'absolute',
        alignSelf: 'center',
        right: 0,
    },
   
    contentBoxWrapper: {
        flexDirection: 'row',
        alignSelf: "flex-start",
        marginLeft: "12%",
    },
    contentBox: {
        position: 'relative',
        width: 115,
        height: 118,
        backgroundColor: colors.bookBoxColor,
        marginRight: 35,
        marginBottom: 25,
    },
  
    navigationBar: {
        width: "100%",
        position: 'absolute',
        bottom: 0,
        borderTopWidth: 1,
        borderColor: "#454545",
        backgroundColor: colors.navColor,
      
    },
    background1: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    iconNavBar: {
        color: colors.iconColor,
        margin: 5,
    }
})

export default GenreScreen;