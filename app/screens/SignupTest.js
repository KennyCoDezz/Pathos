import React from 'react';
import { StyleSheet, 
  Text, View, 
  ImageBackground,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,

} from 'react-native';

import bgImage from '../assets/chitty.jpg'
import logo from '../assets/logo.png'
import Icons from 'react-native-vector-icons/Ionicons'


const {width: WIDTH } = Dimensions.get('window');

const SignupTest =({navigation})=>  {
    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
          <View style={styles.logoContainer}>
              <Image source={logo} style={styles.logo}/>
          </View>

          <View style={styles.inputContainer}>
            <Icons name={'md-create'} size={28} color={'rgba(255,255,255,0.7)'} 
              style={styles.inputIcons} />
              <TextInput 
                  
                  style={styles.input}
                  placeholder={'Name'}
                  placeholderTextColor={'rgba(255,255,255,0.7)'}
                  underlineColorAndroid='transparent' 
                  
                  />
          </View>

          <View style={styles.inputContainer}>
            <Icons name={'md-person'} size={28} color={'rgba(255,255,255,0.7)'} 
              style={styles.inputIcons} />
              <TextInput 
                  
                  style={styles.input}
                  placeholder={'Username'}
                  placeholderTextColor={'rgba(255,255,255,0.7)'}
                  underlineColorAndroid='transparent' 
                  
                  />
          </View>
          
          <View style={styles.inputContainer}>
            <Icons name={'md-finger-print'} size={28} color={'rgba(255,255,255,0.7)'} 
              style={styles.inputIcons} />
              <TextInput 
                  
                  style={styles.input}
                  placeholder={'Password'}
                  placeholderTextColor={'rgba(255,255,255,0.7)'}
                  underlineColorAndroid='transparent' 
                  
                  />
          
          
        


      
        <TouchableOpacity style={styles.eyeBtn}>
            <Icons name='md-eye' size={26} color={'rgba(255,255,255,0.7)'} />
          
          </TouchableOpacity>          
        
          </View>

          <TouchableOpacity style={styles.logBtn} onPress={()=>navigation.navigate('HomepageScreenTest')}>
            <Text style={styles.text}>Sign in</Text>
          
          </TouchableOpacity>    


        <View style={styles.crtAcc}>

                <Text style={styles.accTxt}> Already have an account?</Text> 
                <TouchableOpacity onPress={()=>navigation.navigate('LogIn')}>
                  <Text style={styles.sigHere}> Sign up  </Text>
                </TouchableOpacity>

          </View>

      </ImageBackground>
    );
  }


const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    alignItems: 'center',
    justifyContent: 'center',
  },

    logoContainer: {
      alignItems: 'center',
      marginBottom: 30
    
    },

    logo: {
      width: 150,
      height: 220,

    },

    input: {
      top: 10,
      width: WIDTH -55,
      height: 45,
      borderRadius: 45,
      fontSize: 16,
      paddingLeft:55,
      backgroundColor: 'rgba(0,0,0,0.35)',
      color: 'rgba(255,255,255,0.7)',
      marginHorizontal: 25
    },

    inputIcons: {
      position: 'absolute',
      top:15,
      left: 37
    },

    inputContainer: {
      marginTop: 10,
    },

    eyeBtn: {
      position: 'absolute',
      top: 18,
      right: 45
    },
    logBtn: {
      top: 10,
      width: WIDTH -250,
      height: 45,
      borderRadius: 45,
      backgroundColor: '#00e2a5',
      justifyContent: 'center',
      marginTop: 20
    },
    text: {
      color:'rgba(255,255,255,0.7)',
      fontSize: 20,
      textAlign: 'center',
      fontWeight: 'bold'
    },

    crtAcc: {
        top: 35,
        alignItems: 'center',
        justifyContent: 'center',
        
    },

    accTxt: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 16
    },

    sigHere: {
        top: 5,
        color: '#00e2a5',
        fontSize: 16,
        fontWeight: 'bold'
    }

})
export default SignupTest;
