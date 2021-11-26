import {MaterialIcons} from '@expo/vector-icons';
import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, Dimensions} from 'react-native';
import AppLoading from 'expo-app-loading';
import{ useFonts, OpenSans_800ExtraBold} from '@expo-google-fonts/open-sans';
import colors from '../config/colors'

const BookmarkScreen =({navigation})=> {
  


  let [fontsLoaded, error] = useFonts({
    "OpenSans_ExtraBold": require("../fonts/OpenSans-ExtraBold.ttf"),
    "Kollektif": require("../fonts/Kollektif.ttf"),
  });
  if(!fontsLoaded){
      return <AppLoading />
  }


  return (
  
     <View style={styles.container}>

      <View style = {styles.bookmarks}>
       
            <View style = {styles.buttonView}>
                <TouchableOpacity style = {styles.backBtn} activeOpacity = {0.1}>
                  <Image source = {require('../assets/back-icon.png')} style = {styles.buttonImageIconStyle}/>
                </TouchableOpacity>
                <Text style = {styles.backText}>Back</Text>
            </View>
            
            <Text style = {styles.textBookmark}>Bookmarks</Text>
      </View>

      <ScrollView contentContainerStyle = {{flexGrow: 1, alignItems: 'center', flexDirection: 'column', height: Dimensions.get('screen').height}}>
          
          <View style = {styles.book}>

            <View style = {styles.bookCover}>
                <Image source = {require('../assets/whitefang.jpg')} style = {styles.bookImageCover}/>
            </View>

            <View style = {styles.bookInfo}>
                <Text style = {styles.titleLabel}>White Fang</Text>
                <Text style = {styles.authorLabel}>Jack London</Text>
                
                
                <View style = {styles.iconContainer}>
                    <Image source = {require('../assets/book-icon.png')} style = {{bottom: 2.5}}/>
                    <Text style = {styles.readCountLabel}>176</Text>

                    <Image source = {require('../assets/download-icon.png')} style = {{resizeMode: 'stretch', height: 21, width: 20, marginLeft: 10, bottom: 1}}/>
                    <Text style = {styles.downloadCountLabel}>36.8k</Text>
                </View>

                <TouchableOpacity style = {styles.genreLabelContainer}>
                    <View>
                        <Text style = {styles.genreLabel}>Action and Adventure</Text>
                    </View>
                </TouchableOpacity>
            </View>

          </View>

          
          <View style = {styles.book}>
            <View style = {styles.bookCover}>
                <Image source = {require('../assets/elementoffire.jpg')} style = {styles.bookImageCover}/>
            </View>

            <View style = {styles.bookInfo}>
                <Text style = {styles.titleLabel}>Element of Fire</Text>
                <Text style = {styles.authorLabel}>Martha Wells</Text>
                
                
                <View style = {styles.iconContainer}>
                    <Image source = {require('../assets/book-icon.png')} style = {{bottom: 2.5}}/>
                    <Text style = {styles.readCountLabel}>78</Text>

                    <Image source = {require('../assets/download-icon.png')} style = {{resizeMode: 'stretch', height: 21, width: 20, marginLeft: 10, bottom: 1}}/>
                    <Text style = {styles.downloadCountLabel}>76.5k</Text>
                </View>

                <TouchableOpacity style = {[styles.genreLabelContainer, {backgroundColor: "#773E82"}]}>
                    <View>
                        <Text style = {styles.genreLabel}>Fantasy</Text>
                    </View>
                </TouchableOpacity>
            </View>

          </View>


          <View style = {styles.book}>
            <View style = {styles.bookCover}>
                <Image source = {require('../assets/Image/after-the-cure.jpg')} style = {styles.bookImageCover}/>
            </View>

            <View style = {styles.bookInfo}>
                <Text style = {styles.titleLabel}>After the Cure</Text>
                <Text style = {styles.authorLabel}>Deirde Gould</Text>
                
                
                <View style = {styles.iconContainer}>
                    <Image source = {require('../assets/book-icon.png')} style = {{bottom: 2.5}}/>
                    <Text style = {styles.readCountLabel}>150</Text>

                    <Image source = {require('../assets/download-icon.png')} style = {{resizeMode: 'stretch', height: 21, width: 20, marginLeft: 10, bottom: 1}}/>
                    <Text style = {styles.downloadCountLabel}>24.2k</Text>
                </View>

                <TouchableOpacity style = {[styles.genreLabelContainer, {backgroundColor: "#078890"}]}>
                    <View>
                        <Text style = {styles.genreLabel}>Science Fiction</Text>
                    </View>
                </TouchableOpacity>
            </View>

          </View>

          <View style = {styles.book}>
            <View style = {styles.bookCover}>
                <Image source = {require('../assets/Image/night-and-day.jpg')} style = {styles.bookImageCover}/>
            </View>

            <View style = {styles.bookInfo}>
                <Text style = {styles.titleLabel}>Night and Day</Text>
                <Text style = {styles.authorLabel}>Virginia Woolf</Text>
                
                
                <View style = {styles.iconContainer}>
                    <Image source = {require('../assets/book-icon.png')} style = {{bottom: 2.5}}/>
                    <Text style = {styles.readCountLabel}>397</Text>

                    <Image source = {require('../assets/download-icon.png')} style = {{resizeMode: 'stretch', height: 21, width: 20, marginLeft: 10, bottom: 1}}/>
                    <Text style = {styles.downloadCountLabel}>40k</Text>
                </View>

                <TouchableOpacity style = {[styles.genreLabelContainer, {backgroundColor: "#D04E6A"}]}>
                    <View>
                        <Text style = {styles.genreLabel}>Romance</Text>
                    </View>
                </TouchableOpacity>
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
    container: {
      flex: 1,
      backgroundColor: '#1C1E27'
    },
  
    buttonView: {
      backgroundColor: '#E7526F',
      width: '100%',
      height: '50%'
    },
  
    bookmarks: {
      
      backgroundColor: '#E7526F',
      height: '20%',
      width: '100%',
      marginBottom: 20
    },
  
    textBookmark: {
      color: 'white',
      fontSize: 40,
      marginTop: 10,
      textAlign: 'center',
      fontFamily: 'OpenSans_ExtraBold'
    },
  
    backText: {
      fontFamily: 'Kollektif',
      fontSize: 20,
      color: 'white',
      marginLeft: 50,
      marginTop: 28
    },
  
    backBtn: {
      height: 20,
      width: 20,
      marginLeft: 20,
      top: 40
    },
  
    book: {
      flexDirection: 'row',
      backgroundColor: '#212C3E',
      height: 150,
      width: '75%',
      borderRadius: 14,
      marginBottom: 20,
  
    },
  
    buttonImageIconStyle: {
      padding: 10,
      marginLeft: 5,
      height: 30,
      width: 25,
      resizeMode: 'cover'
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
  
    bookCover: {
      height: '100%',
      width: '35%',
      backgroundColor: 'red'
    },
  
    bookImageCover: {
      height: '100%',
      width: '100%',
      resizeMode: 'stretch'
    },
  
    bookInfo: {
      height: '100%', 
      width: '60%', 
      flexDirection: 'column'
    },
  
    titleLabel: {
      color: 'white', 
      fontFamily: 'Kollektif', 
      fontSize: 27, 
      marginLeft: 20, 
      marginTop: 10
    },
  
    authorLabel: {
      color: '#A8ACB4', 
      fontFamily: 'Kollektif', 
      fontSize: 17, 
      marginLeft: 20
    },
  
    iconContainer: {
      height: 20, 
      width: 120, 
      marginLeft: 20, 
      marginTop: 25, 
      flexDirection: 'row', 
      alignItems: 'center',
      /* borderWidth: 1, 
      borderColor: 'red' */
    },
  
    readCountLabel: {
      color: '#A8ACB4', 
      fontFamily: 'Kollektif', 
      marginLeft: 3
    },
  
    downloadCountLabel: {
      color: '#A8ACB4', 
      fontFamily: 'Kollektif', 
      marginLeft: 3
    },
  
    genreLabelContainer: {
      height: '14%', 
      width: '70%', 
      bottom: 50, 
      backgroundColor: '#D3675D', 
      marginLeft: 20, 
      alignItems: 'center', 
      justifyContent: 'center', 
      top: 12
    },
  
    genreLabel: {
      color: 'white', 
      fontFamily: 'Kollektif', 
      fontSize: 12
    },
  
    //Ito yung css ng overview screen
  
    container: {
      flex: 1,
      backgroundColor: '#1C1E27'
    },
  
    overviewContainer: {
      backgroundColor: '#0C6267',
      height: '60%',
      width: '100%',
      //borderWidth: 1,
      //borderColor: 'red',
    },
  
    descriptionContainer: {
      height: '33.5%',
      width: '100%',
      //borderWidth: 1,
      //borderColor: 'blue'
    },
  
    overviewText: {
      color: 'white',
      fontSize: 40,
      marginTop: 10,
      textAlign: 'center',
      fontFamily: 'OpenSans_ExtraBold'
    },
  
    bookContainerOverview: {
      height: '35%',
      width: '100%',
      //borderWidth: 1,
      //borderColor: 'yellow',
      alignItems: 'center',
      marginTop: 10
    },
  
    bookImageOverview: {
      height: '100%',
      width: '100%',
      alignItems: 'center'
    },
  
    bookDetails: {
      height: '100%',
      width: '100%',
      //borderWidth: 1,
     // borderColor: 'yellow',
      alignItems: 'center'
    },
  
    bookTitleOverviewLabel: {
      color: 'white', 
      fontFamily: 'Kollektif', 
      fontSize: 23, 
      marginTop: 10
    },
  
     bookAuthorOverviewLabel: {
      color: 'white', 
      fontFamily: 'Kollektif', 
      fontSize: 12, 
      marginTop: 5
    },
  
    bookDetailsContent: {
      height: '40%',
      width: '70%',
      backgroundColor: '#1E4256',
      marginTop: 18,
      flexDirection: 'row'
    },
  
  
    ratingContainer: {
      alignItems: 'center',
      justifyContent: 'center', 
      width: '33.1%',
      flexDirection: 'column',
      
    },
  
    bookRating: {
      fontFamily: 'Kollektif',
      color: 'white',
      fontSize: 22
    },
  
    pagesCountContainer: {
      alignItems: 'center',
      justifyContent: 'center', 
      width: '33.1%',
      flexDirection: 'column',
      borderLeftWidth: 1,
      borderRightWidth: 1,
      borderColor: 'white'
  
      
    },
  
    downloadsContainer: {
      alignItems: 'center',
      justifyContent: 'center', 
      width: '33.1%',
      flexDirection: 'column',
      
    },
  
    descriptionText: {
      height: '50%',
      width: '100%',
      flexDirection: 'column',
      alignItems: 'center',
     // borderWidth: 1,
     // borderColor: 'yellow',
    },
  
    textDescriptionBox: {
      height: '50%',
      width: '100%',
      
      //borderWidth: 1,
      //borderColor: 'yellow',
    }, 
  
    descriptionLabel: {
      height: '30%',
      width: '100%',
      justifyContent: 'center',
      //borderWidth: 1,
      //borderColor: 'yellow',
    },
  
    description: {
      height: '70%',
      width: '70%',
      justifyContent: 'center',
      //borderWidth: 1,
      //borderColor: 'yellow',
    },
  
    downloadBoxContainer: {
      height: '50%',
      width: '100%',
      alignItems: 'center',
      flexDirection: 'row',
      //borderWidth: 1,
      //borderColor: 'orange',
    },
  
    bookmarkBox: {
      marginLeft: 40,
      backgroundColor: '#0C676E',
      height: '70%',
      width: '15%'
    },
  
    bookmarkIcon: {
      resizeMode: 'stretch',
      height: '100%',
      width: '100%'
    },
  
    downloadButton: {
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 15,
      height: '70%',
      width: '60%',
      backgroundColor: '#FF834D',
      borderRadius: 16
    }
  
  
  })

  export default BookmarkScreen;
