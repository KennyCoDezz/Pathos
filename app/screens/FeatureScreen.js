import React from 'react';
import {useState} from 'react';
import colors from '../config/colors'
import{useFonts, OpenSans_800ExtraBold} from '@expo-google-fonts/open-sans';
import{Roboto_400Regular} from '@expo-google-fonts/roboto';
import { StyleSheet, TextInput, View, Text, TouchableOpacity, Image, ScrollView, Button, } from 'react-native';
import {Ionicons,MaterialIcons} from '@expo/vector-icons'
import AppLoading from 'expo-app-loading';

const FeatureScreen=({navigation})=> {
  const [text, setText] = useState('');
    
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

            <View style={ styles. upperNav} > 
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Image source={require('../assets/back.png')} 
                    style={{width: 15, 
                            height: 15, 
                            marginLeft: "5%", 
                            marginTop: "6%", }}>
                </Image>
                </TouchableOpacity>
                    <Text style={styles.backDesign} onPress={()=>navigation.goBack()} > Back </Text>

               
                      <Text style={styles.textDesign}>Featured Books</Text>
            </View>  
                
                 <ScrollView style={styles.viewBackground} contentContainerStyle={{alignItems:'center'}}>
                        <View style={styles.contentBoxWrapper} horizontal={true}>
                            <View style={styles.contentBox}>
                            <TouchableOpacity>
                                 <Image source={require('../assets/whitefang.jpg')} 
                                    style={{width: 90, 
                                            height: 108, 
                                            position: 'absolute', 
                                            marginBottom: "10%", }}>
                                </Image>
                            </TouchableOpacity>

                            <Text style={styles.titleDesign}>White Fang</Text>
                            <Text style={styles.authorDesign}>Jack London</Text>

                            <Image source={require('../assets/pages.png')} 
                                    style={{width: 15, 
                                            height: 15,  
                                           marginTop:"5%",
                                            marginLeft: "50%",}}>
                                </Image>
                                <Image source={require('../assets/downloads.png')} 
                                    style={{width: 15, 
                                            height: 15, 
                                            marginTop:"-6.5%",
                                            marginLeft: "70%",
                                            marginRight:"2%", }}>
                                </Image>

                                <Text style={styles.pagesDesign}>176</Text>
                                <Text style={styles.downloadsDesign}>36.8k</Text>

                                    <View style={styles.btn}>
                                        <TouchableOpacity>
                                        <Button
                                                color='#86418e'
                                                title="Adventure"
                                                onPress={() => console.log("Button tapped")}
                                        />
                                          </TouchableOpacity>
                                    </View>

                            </View>
                        </View>
                    <View style={styles.contentBoxWrapper} horizontal={true}>
                            <View style={styles.contentBox}>
                            <TouchableOpacity>
                                 <Image source={require('../assets/elementoffire.jpg')} 
                                    style={{width: 90, 
                                            height: 108, 
                                            position: 'absolute', 
                                            marginBottom: "10%", }}>
                                </Image>
                            </TouchableOpacity>

                            <Text style={styles.titleDesign}>Element of Fire</Text>
                            <Text style={styles.authorDesign}>Martha Wells</Text>

                            <Image source={require('../assets/pages.png')} 
                                    style={{width: 15, 
                                            height: 15,  
                                           marginTop:"5%",
                                            marginLeft: "50%",}}>
                                </Image>
                                <Image source={require('../assets/downloads.png')} 
                                    style={{width: 15, 
                                            height: 15, 
                                            marginTop:"-6.5%",
                                            marginLeft: "70%",
                                            marginRight:"2%", }}>
                                </Image>

                                <Text style={styles.pagesDesign}>78</Text>
                                <Text style={styles.downloadsDesign}>76.5k</Text>

                                <View style={styles.btn}>
                                        <TouchableOpacity>
                                        <Button
                                                color='#f17163'
                                                title="Fantasy"
                                                onPress={() => console.log("Button tapped")}
                                        />
                                          </TouchableOpacity>
                                    </View>

                            </View>
                        </View>
                        <View style={styles.contentBoxWrapper} horizontal={true}>
                            <View style={styles.contentBox}>
                            <TouchableOpacity>
                                 <Image source={require('../assets/afterthecure.jpg')} 
                                    style={{width: 90, 
                                            height: 108, 
                                            position: 'absolute', 
                                            marginBottom: "10%", }}>
                                </Image>
                            </TouchableOpacity>

                            <Text style={styles.titleDesign}>After the Cure</Text>
                            <Text style={styles.authorDesign}>Deirde Gould</Text>

                            <Image source={require('../assets/pages.png')} 
                                    style={{width: 15, 
                                            height: 15,  
                                           marginTop:"5%",
                                            marginLeft: "50%",}}>
                                </Image>
                                <Image source={require('../assets/downloads.png')} 
                                    style={{width: 15, 
                                            height: 15, 
                                            marginTop:"-6.5%",
                                            marginLeft: "70%",
                                            marginRight:"2%", }}>
                                </Image>

                                <Text style={styles.pagesDesign}>326</Text>
                                <Text style={styles.downloadsDesign}>26.5k</Text>

                                <View style={styles.btn}>
                                        <TouchableOpacity>
                                        <Button
                                                color='#08e8de'
                                                title="SciFi"
                                                onPress={() => console.log("Button tapped")}
                                        />
                                          </TouchableOpacity>
                                    </View>

                            </View>
                        </View>
                        <View style={styles.contentBoxWrapper} horizontal={true}>
                            <View style={styles.contentBox}>
                            <TouchableOpacity>
                                 <Image source={require('../assets/nightandday.jpg')} 
                                    style={{width: 90, 
                                            height: 108, 
                                            position: 'absolute', 
                                            marginBottom: "10%", }}>
                                </Image>
                            </TouchableOpacity>

                            <Text style={styles.titleDesign}>Night and Day</Text>
                            <Text style={styles.authorDesign}>Virginia Woolf</Text>

                            <Image source={require('../assets/pages.png')} 
                                    style={{width: 15, 
                                            height: 15,  
                                           marginTop:"5%",
                                            marginLeft: "50%",}}>
                                </Image>
                                <Image source={require('../assets/downloads.png')} 
                                    style={{width: 15, 
                                            height: 15, 
                                            marginTop:"-6.5%",
                                            marginLeft: "70%",
                                            marginRight:"2%", }}>
                                </Image>

                                <Text style={styles.pagesDesign}>397</Text>
                                <Text style={styles.downloadsDesign}>40k</Text>

                                <View style={styles.btn}>
                                        <TouchableOpacity>
                                        <Button
                                                color='#ed5472'
                                                title="Romance"
                                                onPress={() => console.log("Button tapped")}
                                        />
                                          </TouchableOpacity>
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
    upperNav: {
        width: "100%",
        height: "17%",
        backgroundColor:colors.featUpperNav,
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
        fontSize: 35,
        fontFamily: 'SectionTitle',
        marginLeft: "18%",
        marginBottom: "2%",
        marginTop:"5%",
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
        width: 250,
        height: 125,
        backgroundColor: colors.featBookBoxcolor,
        marginRight: 35,
        marginBottom: 25,
        borderRadius:10,
    },
    titleDesign: {
        color: colors.categoryTitleColor,
        fontSize: 20,
        fontFamily: 'Section Title', fontFamily: 'Kollektif-Bold',
        marginLeft: "50%",
        marginTop:"5%",
    },

    authorDesign: {
        color: colors.categoryTitleColor,
        fontSize: 13,
        fontFamily: 'Section Title', fontFamily: 'Kollektif',
        marginLeft: "50%",
        
    },
    downloadsDesign: {
        color: colors.categoryTitleColor,
        fontSize: 7,
        fontFamily: 'Section Title', fontFamily: 'Kollektif',
        marginLeft: "78%",
        marginTop: "25%",
        position: 'absolute',
    },

    pagesDesign: {
        color: colors.categoryTitleColor,
        fontSize: 7,
        fontFamily: 'Section Title', fontFamily: 'Kollektif',
        marginLeft: "58%",
        marginTop: "25%",
        position: 'absolute',
        
    },
    btn:{
            position: 'absolute',
            paddingVertical: 2,
            width:"45%",
            marginLeft: 115,
            marginTop: "32%",
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

export default FeatureScreen;