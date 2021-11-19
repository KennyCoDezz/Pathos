import React from 'react';
import { StyleSheet, 
  Text, View, 
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Stylesheet


} from 'react-native';

import colors from '../config/colors'
import bgImage from '../assets/bg.jpg'
import AppLoading from 'expo-app-loading';
import{useFonts, OpenSans_800ExtraBold} from '@expo-google-fonts/open-sans';
import {LinearGradient} from 'expo-linear-gradient';
import {MaterialIcons} from '@expo/vector-icons';

const {width: WIDTH } = Dimensions.get('window')

const Prof=({navigation})=>  {

  let [fontsLoaded, error] = useFonts({
      SectionTitle: OpenSans_800ExtraBold,
      "Kollektif": require('../fonts/Kollektif.ttf'),
      "Kollektif-Bold": require('../fonts/Kollektif-Bold.ttf'),
  });
  
  if(!fontsLoaded){
      return <AppLoading />
  }


      return (
        <ImageBackground source={bgImage} style={styles.backgroundContainer}>
            
            <SafeAreaView style={styles.container}>
              <ScrollView showsVerticalScrollIndicator={false}>

              
                      <View style ={styles.coverPhoto}>  
                        <Image source={require('../assets/coverphoto.png')} style={styles.image} resizeMode="center"></Image>
                      </View>

              
                  <View style = {styles.titleBar}>
                            <TouchableOpacity style = {styles.backBtn} activeOpacity = {0.1} onPress={()=>navigation.goBack()}>
                              <Image source = {require('../assets/backbtn.png')} style = {styles.buttonImageIconStyle}/>
                            </TouchableOpacity>
                            <Text style = {styles.backText}>Back</Text>
                            <TouchableOpacity style = {styles.backBtn} activeOpacity = {0.1}>
                              <Image source = {require('../assets/more.png')} style = {styles.morebuttonImageIconStyle}/>
                            </TouchableOpacity>
                              
                      

                  </View>

                  <View style={{alignSelf: "center"}}>
                      <View style={styles.profileImg}>
                      <Image source={require('../assets/profpic.jpg')} style={styles.image} resizeMode="center"></Image>
                        </View>
                  </View>
                  
                  <View style={styles.userInfo}>
                      <Text style={[styles.normText, { fontWeight: "200", fontSize: 40,  color: "white"}]}>Peter Parker </Text>
                      <Text style={[styles.normText, { fontWeight: "200", fontSize: 16, color: "#babbbe"}]}> @friendlyneighborhood </Text>
                  </View>

                  
                  
                  <View style={styles.statsInfo}>
                  
                      <View style={styles.statsCube}>
                          <Text style={[styles.normText, { fontSize: 18, color: "white" }]}> 3 </Text>
                          <Text style={[styles.normText, styles.subText]}>Books Currently</Text>
                          <Text style={[styles.normText, styles.subText]}>Reading</Text>
                      </View>
                      
                      <View style={[styles.statsCube, { borderColor: "#898a8e", borderLeftWidth: 1,}]}>
                          <Text style={[styles.normText, { fontSize: 18, color: "white" }]}>15</Text>
                          <Text style={[styles.normText, styles.subText]}>Bookmarks</Text>
                      </View>
                  
                  </View>

                  <View style={[styles.keepOn, { borderColor: "#898a8e", borderTopWidth: 1,}]}>
                      <Text style={[styles.keepText, { fontSize: 25, color: "white", fontFamily:'SectionTitle'}]}>Keep on Reading</Text>
                  </View>


                      <View style={{marginTop: 32}}>
                          <ScrollView horizontal={true} showsVerticalScrollIndicator={false}>
                              
                              <View style={styles.booksContainer}>
                                  <Image source={require("../assets/northandsouth.jpg")} style={styles.image} resizeMode="cover"></Image>
                              </View>

                              <View style={styles.booksContainer}>
                                  <Image source={require("../assets/afterthecure.jpg")} style={styles.image} resizeMode="cover"></Image>
                              </View>

                              <View style={styles.booksContainer}>
                                  <Image source={require("../assets/canterville.jpg")} style={styles.image} resizeMode="cover"></Image>
                              </View>
                              <View style={styles.booksContainer}>
                                  <Image source={require("../assets/huckle.jpg")} style={styles.image} resizeMode="cover"></Image>
                              </View>
                          
                          
                          </ScrollView>

                      </View>

            </ScrollView>
            </SafeAreaView>

            
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

          
        </ImageBackground>
      );
  }


const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,

  }, 

  backText: {
    fontSize: 26,
    color: 'white',
    position: 'absolute',
    marginTop: 2,
    marginLeft: 35,
    fontFamily: 'Kollektif'

  },

  normText: {
    fontFamily: 'Kollektif'
  },
  
  keepText: {
    fontFamily: 'SectionTitle'
  },

  subText: {
    marginTop: 2,
    fontSize: 14,
    color: "#babbbe",
    textTransform: "uppercase"

  },

  buttonImageIconStyle: {
    padding: 10,
    marginLeft: 5,
    height: 30,
    width: 25,
    resizeMode: 'cover'
  },
    morebuttonImageIconStyle: {
    padding: 10,
    marginRight: 5,
    height: 30,
    width: 25,
    resizeMode: 'cover'
  },

  image: {
    flex: 1,
    height: undefined,
    width: undefined
},

    titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 45,
    marginHorizontal: 16
   },

   coverPhoto: {
    position: 'absolute',
    width: '125%',
    height: 280,
    left: -50,
    opacity: 0.5,
    flexDirection:'row'
   },


   profileImg: {
    width: 200,
    height: 200,
    borderWidth: 10,
    borderColor: '#ed5472',
    borderRadius: 100,
    overflow: 'hidden',
      marginTop: 35
   },

   userInfo: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 16
   },

   statsInfo: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 25,
    marginHorizontal: 45
   },

   statsCube: {
    alignItems: "center",
    flex: 2
   },


   keepOn: {
    marginTop: 30,
    fontSize: 14,
    color: "#babbbe",
    textTransform: "uppercase"
   },

    keepText: {
    marginTop: 10,
    marginLeft: 25,
    marginBottom: -12
    },
    
   booksContainer: {
    width: 120,
    height: 190,
    overflow: 'hidden',
    marginHorizontal: 10

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
export default Prof;
