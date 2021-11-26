import {LinearGradient} from 'expo-linear-gradient';
import {MaterialIcons} from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity, Image, Dimensions} from 'react-native';
import * as Font from 'expo-font';
import { useFonts } from '@use-expo/font';
import AppLoading from 'expo-app-loading';

const fetchFonts = () => {
    return Font.loadAsync ({
      'OpenSans-ExtraBold': require("./assets/fonts/OpenSans-ExtraBold.ttf"),
      'Kollektif': require("./assets/fonts/Kollektif.ttf")
    });
}


export default function App() {

  /*const [isLoaded] = useFonts({
    "OpenSans-ExtraBold": require("./assets/fonts/OpenSans-ExtraBold.ttf"),
    "Kollektif": require("./assets/fonts/Kollektif.ttf"),
  });*/

  const[dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
          startAsync = {fetchFonts}
          onFinish = {() => setDataLoaded(true)}
          onError = {(error) => console.warn(error)}
      />
    );
  }

  //Ito yung screen ng bookmarks
  /*return (
  
     <View style={styles.container}>

      <View style = {styles.bookmarks}>
       
            <View style = {styles.buttonView}>
                <TouchableOpacity style = {styles.backBtn} activeOpacity = {0.1}>
                  <Image source = {require('./assets/back-icon.png')} style = {styles.buttonImageIconStyle}/>
                </TouchableOpacity>
                <Text style = {styles.backText}>Back</Text>
            </View>
            
            <Text style = {styles.textBookmark}>Bookmarks</Text>
      </View>

      <ScrollView contentContainerStyle = {{flexGrow: 1, alignItems: 'center', flexDirection: 'column', height: Dimensions.get('screen').height}}>
          
          <View style = {styles.book}>

            <View style = {styles.bookCover}>
                <Image source = {require('./assets/Image/White-Fang.jpg')} style = {styles.bookImageCover}/>
            </View>

            <View style = {styles.bookInfo}>
                <Text style = {styles.titleLabel}>White Fang</Text>
                <Text style = {styles.authorLabel}>Jack London</Text>
                
                
                <View style = {styles.iconContainer}>
                    <Image source = {require('./assets/book-icon.png')} style = {{bottom: 2.5}}/>
                    <Text style = {styles.readCountLabel}>176</Text>

                    <Image source = {require('./assets/download-icon.png')} style = {{resizeMode: 'stretch', height: 21, width: 20, marginLeft: 10, bottom: 1}}/>
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
                <Image source = {require('./assets/Image/Element-of-fire.jpg')} style = {styles.bookImageCover}/>
            </View>

            <View style = {styles.bookInfo}>
                <Text style = {styles.titleLabel}>Element of Fire</Text>
                <Text style = {styles.authorLabel}>Martha Wells</Text>
                
                
                <View style = {styles.iconContainer}>
                    <Image source = {require('./assets/book-icon.png')} style = {{bottom: 2.5}}/>
                    <Text style = {styles.readCountLabel}>78</Text>

                    <Image source = {require('./assets/download-icon.png')} style = {{resizeMode: 'stretch', height: 21, width: 20, marginLeft: 10, bottom: 1}}/>
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
                <Image source = {require('./assets/Image/after-the-cure.jpg')} style = {styles.bookImageCover}/>
            </View>

            <View style = {styles.bookInfo}>
                <Text style = {styles.titleLabel}>After the Cure</Text>
                <Text style = {styles.authorLabel}>Deirde Gould</Text>
                
                
                <View style = {styles.iconContainer}>
                    <Image source = {require('./assets/book-icon.png')} style = {{bottom: 2.5}}/>
                    <Text style = {styles.readCountLabel}>150</Text>

                    <Image source = {require('./assets/download-icon.png')} style = {{resizeMode: 'stretch', height: 21, width: 20, marginLeft: 10, bottom: 1}}/>
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
                <Image source = {require('./assets/Image/night-and-day.jpg')} style = {styles.bookImageCover}/>
            </View>

            <View style = {styles.bookInfo}>
                <Text style = {styles.titleLabel}>Night and Day</Text>
                <Text style = {styles.authorLabel}>Virginia Woolf</Text>
                
                
                <View style = {styles.iconContainer}>
                    <Image source = {require('./assets/book-icon.png')} style = {{bottom: 2.5}}/>
                    <Text style = {styles.readCountLabel}>397</Text>

                    <Image source = {require('./assets/download-icon.png')} style = {{resizeMode: 'stretch', height: 21, width: 20, marginLeft: 10, bottom: 1}}/>
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
  

      <View style = {styles.navigationBar}>
            <LinearGradient
                start={{x:0,y:1}}
                end={{x:1,y:1}}
                colors={['#202020', '#202020']}
                style={styles.background1}>
                <TouchableOpacity>
                    <Image source = {require('./assets/home.png')} style = {styles.iconNavBar}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source = {require('./assets/category.png')} style = {styles.iconNavBar}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source = {require('./assets/bookmarks.png')} style = {styles.iconNavBar}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source = {require('./assets/account-circle.png')} style = {styles.iconNavBar}/>
                </TouchableOpacity>
            </LinearGradient>
                </View>
    </View>
   

  );*/

/*NORTH AND SOUTH
return (
    <View style = {styles.container}>

        <View style = {styles.overviewContainer}>
            
          <TouchableOpacity style = {styles.backBtn} activeOpacity = {0.1}>
            <Image source = {require('./assets/back-icon.png')} style = {styles.buttonImageIconStyle}/>
          </TouchableOpacity>
          <Text style = {styles.backText}>Back</Text>

          <Text style = {styles.overviewText}>Overview</Text>

          <View style = {styles.bookContainerOverview}>

            <View style = {styles.bookImageOverview}>
                <Image source = {require('./assets/Image/north-and-south.png')} style = {{height: '100%', width: '30%', resizeMode: 'stretch'}}/>
            </View>

            <View style = {styles.bookDetails}>

              <Text style = {styles.bookTitleOverviewLabel}>North and South</Text>
              <Text style = {styles.bookAuthorOverviewLabel}>Elizabeth Gaskell</Text>

              <View style = {styles.bookDetailsContent}>

                <View style = {styles.ratingContainer}>
                    <Text style = {styles.bookRating}>4.5</Text>
                    <Text style = {{color: 'white', fontFamily: 'Kollektif', fontSize: 10}}>Rating</Text>

                </View>

                <View style = {styles.pagesCountContainer}>
                    <Text style = {styles.bookRating}>407</Text>
                    <Text style = {{color: 'white', fontFamily: 'Kollektif', fontSize: 10}}>Pages</Text>
                </View>

                <View style = {styles.downloadsContainer}>
                    <Text style = {styles.bookRating}>36.6k</Text>
                    <Text style = {{color: 'white', fontFamily: 'Kollektif', fontSize: 10}}>Download</Text>
                </View>
                  
              </View>    

            </View>

          </View>

        </View>

        <View style = {styles.descriptionContainer}>

          <View style = {styles.descriptionText}>

              <View style = {styles.descriptionLabel}>
                <Text style = {{color: 'white', fontFamily: 'Kollektif', marginLeft: 60, fontSize: 20}}>Description</Text>
              </View>

              <View style = {styles.description}>
                <Text style = {{color: 'white', fontFamily: 'Kollektif', fontSize: 20}}>
                 When her father leaves the Church in a crisis of conscience, Margaret Hale is uprooted from her comfortable home in Hampshire to move with her family to the north of England.
                </Text>
              </View>

          </View>

          <View style = {styles.downloadBoxContainer}>

            <View style = {styles.bookmarkBox}>
                <TouchableOpacity>
                    <Image source = {require('./assets/bookmarks.png')} style = {styles.bookmarkIcon}/>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style = {styles.downloadButton}>
              <View>
                <Text style = {{color: 'white', fontFamily: 'Kollektif', fontSize: 25}}>Start Reading</Text>
              </View>
            </TouchableOpacity>

          </View>

        </View>

        <View style = {styles.navigationBar}>
            <LinearGradient
                start={{x:0,y:1}}
                end={{x:1,y:1}}
                colors={['#202020', '#202020']}
                style={styles.background1}>
                <TouchableOpacity>
                    <Image source = {require('./assets/home.png')} style = {styles.iconNavBar}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source = {require('./assets/category.png')} style = {styles.iconNavBar}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source = {require('./assets/bookmarks.png')} style = {styles.iconNavBar}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source = {require('./assets/account-circle.png')} style = {styles.iconNavBar}/>
                </TouchableOpacity>
            </LinearGradient>
        </View>
    </View>
  );

} */
 
/*AFTER THE CURE
 return (
    <View style = {styles.container}>

        <View style = {styles.overviewContainer}>
            
          <TouchableOpacity style = {styles.backBtn} activeOpacity = {0.1}>
            <Image source = {require('./assets/back-icon.png')} style = {styles.buttonImageIconStyle}/>
          </TouchableOpacity>
          <Text style = {styles.backText}>Back</Text>

          <Text style = {styles.overviewText}>Overview</Text>

          <View style = {styles.bookContainerOverview}>

            <View style = {styles.bookImageOverview}>
                <Image source = {require('./assets/Image/after-the-cure.jpg')} style = {{height: '100%', width: '30%', resizeMode: 'stretch'}}/>
            </View>

            <View style = {styles.bookDetails}>

              <Text style = {styles.bookTitleOverviewLabel}>After The Cure</Text>
              <Text style = {styles.bookAuthorOverviewLabel}>Deidre Gould</Text>

              <View style = {styles.bookDetailsContent}>

                <View style = {styles.ratingContainer}>
                    <Text style = {styles.bookRating}>4.6</Text>
                    <Text style = {{color: 'white', fontFamily: 'Kollektif', fontSize: 10}}>Rating</Text>

                </View>

                <View style = {styles.pagesCountContainer}>
                    <Text style = {styles.bookRating}>373</Text>
                    <Text style = {{color: 'white', fontFamily: 'Kollektif', fontSize: 10}}>Pages</Text>
                </View>

                <View style = {styles.downloadsContainer}>
                    <Text style = {styles.bookRating}>24.2k</Text>
                    <Text style = {{color: 'white', fontFamily: 'Kollektif', fontSize: 10}}>Download</Text>
                </View>
                  
              </View>    

            </View>

          </View>

        </View>

        <View style = {styles.descriptionContainer}>

          <View style = {styles.descriptionText}>

              <View style = {styles.descriptionLabel}>
                <Text style = {{color: 'white', fontFamily: 'Kollektif', marginLeft: 60, fontSize: 20}}>Description</Text>
              </View>

              <ScrollView>
               <View style = {[styles.description, {height: '110%', width: '85%', marginLeft: '7%'}]}>
                <Text style = {{color: 'white', fontFamily: 'Kollektif', fontSize: 21}}>
                 Eight years ago the December Plague swept through the human population of earth. The Infected were driven mad by the disease, becoming violent and cannibalistic, killing even those closest to them without hesitation.
                </Text>
               </View>
              </ScrollView>

          </View>

          <View style = {styles.downloadBoxContainer}>

            <View style = {styles.bookmarkBox}>
                <TouchableOpacity>
                    <Image source = {require('./assets/bookmarks.png')} style = {styles.bookmarkIcon}/>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style = {styles.downloadButton}>
              <View>
                <Text style = {{color: 'white', fontFamily: 'Kollektif', fontSize: 25}}>Start Reading</Text>
              </View>
            </TouchableOpacity>

          </View>

        </View>

        <View style = {styles.navigationBar}>
            <LinearGradient
                start={{x:0,y:1}}
                end={{x:1,y:1}}
                colors={['#202020', '#202020']}
                style={styles.background1}>
                <TouchableOpacity>
                    <Image source = {require('./assets/home.png')} style = {styles.iconNavBar}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source = {require('./assets/category.png')} style = {styles.iconNavBar}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source = {require('./assets/bookmarks.png')} style = {styles.iconNavBar}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source = {require('./assets/account-circle.png')} style = {styles.iconNavBar}/>
                </TouchableOpacity>
            </LinearGradient>
        </View>
    </View>
  );

} */


/*THE CANTERVILLE GHOST
return (
    <View style = {styles.container}>

        <View style = {styles.overviewContainer}>
            
          <TouchableOpacity style = {styles.backBtn} activeOpacity = {0.1}>
            <Image source = {require('./assets/back-icon.png')} style = {styles.buttonImageIconStyle}/>
          </TouchableOpacity>
          <Text style = {styles.backText}>Back</Text>

          <Text style = {styles.overviewText}>Overview</Text>

          <View style = {styles.bookContainerOverview}>

            <View style = {styles.bookImageOverview}>
                <Image source = {require('./assets/Image/tcg.jpg')} style = {{height: '100%', width: '30%', resizeMode: 'stretch'}}/>
            </View>

            <View style = {styles.bookDetails}>

              <Text style = {styles.bookTitleOverviewLabel}>The Canterville Ghost</Text>
              <Text style = {styles.bookAuthorOverviewLabel}>Oscar Wilde</Text>

              <View style = {styles.bookDetailsContent}>

                <View style = {styles.ratingContainer}>
                    <Text style = {styles.bookRating}>4.8</Text>
                    <Text style = {{color: 'white', fontFamily: 'Kollektif', fontSize: 10}}>Rating</Text>

                </View>

                <View style = {styles.pagesCountContainer}>
                    <Text style = {styles.bookRating}>412</Text>
                    <Text style = {{color: 'white', fontFamily: 'Kollektif', fontSize: 10}}>Pages</Text>
                </View>

                <View style = {styles.downloadsContainer}>
                    <Text style = {styles.bookRating}>69.4k</Text>
                    <Text style = {{color: 'white', fontFamily: 'Kollektif', fontSize: 10}}>Download</Text>
                </View>
                  
              </View>    

            </View>

          </View>

        </View>

        <View style = {styles.descriptionContainer}>

          <View style = {styles.descriptionText}>

              <View style = {styles.descriptionLabel}>
                <Text style = {{color: 'white', fontFamily: 'Kollektif', marginLeft: 60, fontSize: 20}}>Description</Text>
              </View>


             <ScrollView>
                <View style = {[styles.description, {height: '110%', width: '85%', marginLeft: '7%'}]}>
                  <Text style = {{color: 'white', fontFamily: 'Kollektif', fontSize: 16}}>
                    Horace B. Otis, a wealthy American, purchases Canterville Chase, an ancient English manor-house, despite warnings that the house is known to be haunted. He moves into the house accompanied by his wife, his eldest son Washington, his daughter Virginia, and his two younger twin sons. Immediately upon arrival, the family is confronted by a bloodstain in a sitting room. The housekeeper, Mrs. Umney, explains that the stain has been there since 1575 and is the result of Lady Eleanore de Canterville having been brutally murdered by her husband, Sir Simon de Canterville.
                  </Text>
                </View>
             </ScrollView>

          </View>

          <View style = {styles.downloadBoxContainer}>

            <View style = {styles.bookmarkBox}>
                <TouchableOpacity>
                    <Image source = {require('./assets/bookmarks.png')} style = {styles.bookmarkIcon}/>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style = {styles.downloadButton}>
              <View>
                <Text style = {{color: 'white', fontFamily: 'Kollektif', fontSize: 25}}>Start Reading</Text>
              </View>
            </TouchableOpacity>

          </View>

        </View>

        <View style = {styles.navigationBar}>
            <LinearGradient
                start={{x:0,y:1}}
                end={{x:1,y:1}}
                colors={['#202020', '#202020']}
                style={styles.background1}>
                <TouchableOpacity>
                    <Image source = {require('./assets/home.png')} style = {styles.iconNavBar}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source = {require('./assets/category.png')} style = {styles.iconNavBar}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source = {require('./assets/bookmarks.png')} style = {styles.iconNavBar}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source = {require('./assets/account-circle.png')} style = {styles.iconNavBar}/>
                </TouchableOpacity>
            </LinearGradient>
        </View>
    </View>
  );

} */


/*ELEMENT OF FIRE
 return (
    <View style = {styles.container}>

        <View style = {styles.overviewContainer}>
            
          <TouchableOpacity style = {styles.backBtn} activeOpacity = {0.1}>
            <Image source = {require('./assets/back-icon.png')} style = {styles.buttonImageIconStyle}/>
          </TouchableOpacity>
          <Text style = {styles.backText}>Back</Text>

          <Text style = {styles.overviewText}>Overview</Text>

          <View style = {styles.bookContainerOverview}>

            <View style = {styles.bookImageOverview}>
                <Image source = {require('./assets/Image/Element-of-fire.jpg')} style = {{height: '100%', width: '30%', resizeMode: 'stretch'}}/>
            </View>

            <View style = {styles.bookDetails}>

              <Text style = {styles.bookTitleOverviewLabel}>The Element of Fire</Text>
              <Text style = {styles.bookAuthorOverviewLabel}>Martha Wells</Text>

              <View style = {styles.bookDetailsContent}>

                <View style = {styles.ratingContainer}>
                    <Text style = {styles.bookRating}>4.3</Text>
                    <Text style = {{color: 'white', fontFamily: 'Kollektif', fontSize: 10}}>Rating</Text>

                </View>

                <View style = {styles.pagesCountContainer}>
                    <Text style = {styles.bookRating}>454</Text>
                    <Text style = {{color: 'white', fontFamily: 'Kollektif', fontSize: 10}}>Pages</Text>
                </View>

                <View style = {styles.downloadsContainer}>
                    <Text style = {styles.bookRating}>23.26k</Text>
                    <Text style = {{color: 'white', fontFamily: 'Kollektif', fontSize: 10}}>Download</Text>
                </View>
                  
              </View>    

            </View>

          </View>

        </View>

        <View style = {styles.descriptionContainer}>

          <View style = {styles.descriptionText}>

              <View style = {styles.descriptionLabel}>
                <Text style = {{color: 'white', fontFamily: 'Kollektif', marginLeft: 60, fontSize: 20}}>Description</Text>
              </View>

            <ScrollView>
              <View style = {[styles.description, {height: '110%', width: '85%', marginLeft: '7%'}]}>
                <Text style = {{color: 'white', fontFamily: 'Kollektif', fontSize: 21}}>
                    The kingdom of Ile-Rien is in peril, menaced by magical threats and court intrigue. As the weak King Roland, misled by treacherous companions, rules the country, only his ruthless mother, the Dowager Queen Ravenna, truly guards the safety of the realm.
                </Text>
              </View>
            </ScrollView>

          </View>

          <View style = {styles.downloadBoxContainer}>

            <View style = {styles.bookmarkBox}>
                <TouchableOpacity>
                    <Image source = {require('./assets/bookmarks.png')} style = {styles.bookmarkIcon}/>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style = {styles.downloadButton}>
              <View>
                <Text style = {{color: 'white', fontFamily: 'Kollektif', fontSize: 25}}>Start Reading</Text>
              </View>
            </TouchableOpacity>

          </View>

        </View>

        <View style = {styles.navigationBar}>
            <LinearGradient
                start={{x:0,y:1}}
                end={{x:1,y:1}}
                colors={['#202020', '#202020']}
                style={styles.background1}>
                <TouchableOpacity>
                    <Image source = {require('./assets/home.png')} style = {styles.iconNavBar}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source = {require('./assets/category.png')} style = {styles.iconNavBar}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source = {require('./assets/bookmarks.png')} style = {styles.iconNavBar}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source = {require('./assets/account-circle.png')} style = {styles.iconNavBar}/>
                </TouchableOpacity>
            </LinearGradient>
        </View>
    </View>
  );

} */


/* NIGHT AND DAY
return (
    <View style = {styles.container}>

        <View style = {styles.overviewContainer}>
            
          <TouchableOpacity style = {styles.backBtn} activeOpacity = {0.1}>
            <Image source = {require('./assets/back-icon.png')} style = {styles.buttonImageIconStyle}/>
          </TouchableOpacity>
          <Text style = {styles.backText}>Back</Text>

          <Text style = {styles.overviewText}>Overview</Text>

          <View style = {styles.bookContainerOverview}>

            <View style = {styles.bookImageOverview}>
                <Image source = {require('./assets/Image/night-and-day.jpg')} style = {{height: '100%', width: '30%', resizeMode: 'stretch'}}/>
            </View>

            <View style = {styles.bookDetails}>

              <Text style = {styles.bookTitleOverviewLabel}>Night and Day</Text>
              <Text style = {styles.bookAuthorOverviewLabel}>Virgina Woolf</Text>

              <View style = {styles.bookDetailsContent}>

                <View style = {styles.ratingContainer}>
                    <Text style = {styles.bookRating}>4.8</Text>
                    <Text style = {{color: 'white', fontFamily: 'Kollektif', fontSize: 10}}>Rating</Text>

                </View>

                <View style = {styles.pagesCountContainer}>
                    <Text style = {styles.bookRating}>332</Text>
                    <Text style = {{color: 'white', fontFamily: 'Kollektif', fontSize: 10}}>Pages</Text>
                </View>

                <View style = {styles.downloadsContainer}>
                    <Text style = {styles.bookRating}>34.13k</Text>
                    <Text style = {{color: 'white', fontFamily: 'Kollektif', fontSize: 10}}>Download</Text>
                </View>
                  
              </View>    

            </View>

          </View>

        </View>

        <View style = {styles.descriptionContainer}>

          <View style = {styles.descriptionText}>

              <View style = {styles.descriptionLabel}>
                <Text style = {{color: 'white', fontFamily: 'Kollektif', marginLeft: 60, fontSize: 20}}>Description</Text>
              </View>

            <ScrollView>
              <View style = {[styles.description, {height: '110%', width: '85%', marginLeft: '7%'}]}>
                <Text style = {{color: 'white', fontFamily: 'Kollektif', fontSize: 18}}>
                    Set in Edwardian London, Night and Day contrasts the daily lives and romantic attachments of two acquaintances, Katharine Hilbery and Mary Datchet.
                </Text>
              </View>
            </ScrollView>

          </View>

          <View style = {styles.downloadBoxContainer}>

            <View style = {styles.bookmarkBox}>
                <TouchableOpacity>
                    <Image source = {require('./assets/bookmarks.png')} style = {styles.bookmarkIcon}/>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style = {styles.downloadButton}>
              <View>
                <Text style = {{color: 'white', fontFamily: 'Kollektif', fontSize: 25}}>Start Reading</Text>
              </View>
            </TouchableOpacity>

          </View>

        </View>

        <View style = {styles.navigationBar}>
            <LinearGradient
                start={{x:0,y:1}}
                end={{x:1,y:1}}
                colors={['#202020', '#202020']}
                style={styles.background1}>
                <TouchableOpacity>
                    <Image source = {require('./assets/home.png')} style = {styles.iconNavBar}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source = {require('./assets/category.png')} style = {styles.iconNavBar}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source = {require('./assets/bookmarks.png')} style = {styles.iconNavBar}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source = {require('./assets/account-circle.png')} style = {styles.iconNavBar}/>
                </TouchableOpacity>
            </LinearGradient>
        </View>
    </View>
  );

} */


//Mademoiselle at Arms
return (
    <View style = {styles.container}>

        <View style = {styles.overviewContainer}>
            
          <TouchableOpacity style = {styles.backBtn} activeOpacity = {0.1}>
            <Image source = {require('./assets/back-icon.png')} style = {styles.buttonImageIconStyle}/>
          </TouchableOpacity>
          <Text style = {styles.backText}>Back</Text>

          <Text style = {styles.overviewText}>Overview</Text>

          <View style = {styles.bookContainerOverview}>

            <View style = {styles.bookImageOverview}>
                <Image source = {require('./assets/Image/m.jpg')} style = {{height: '100%', width: '30%', resizeMode: 'stretch'}}/>
            </View>

            <View style = {styles.bookDetails}>

              <Text style = {styles.bookTitleOverviewLabel}>Mademoiselle at Arms</Text>
              <Text style = {styles.bookAuthorOverviewLabel}>Elizabeth Bailey</Text>

              <View style = {styles.bookDetailsContent}>

                <View style = {styles.ratingContainer}>
                    <Text style = {styles.bookRating}>4.4</Text>
                    <Text style = {{color: 'white', fontFamily: 'Kollektif', fontSize: 10}}>Rating</Text>

                </View>

                <View style = {styles.pagesCountContainer}>
                    <Text style = {styles.bookRating}>421</Text>
                    <Text style = {{color: 'white', fontFamily: 'Kollektif', fontSize: 10}}>Pages</Text>
                </View>

                <View style = {styles.downloadsContainer}>
                    <Text style = {styles.bookRating}>26.3k</Text>
                    <Text style = {{color: 'white', fontFamily: 'Kollektif', fontSize: 10}}>Download</Text>
                </View>
                  
              </View>    

            </View>

          </View>

        </View>

        <View style = {styles.descriptionContainer}>

          <View style = {styles.descriptionText}>

              <View style = {styles.descriptionLabel}>
                <Text style = {{color: 'white', fontFamily: 'Kollektif', marginLeft: 60, fontSize: 20}}>Description</Text>
              </View>

            <ScrollView>
              <View style = {[styles.description, {height: '110%', width: '85%', marginLeft: '7%'}]}>
                <Text style = {{color: 'white', fontFamily: 'Kollektif', fontSize: 18}}>
                    Set on unravelling the mystery, Gerald begins a relentless pursuit, hunting down every possible clue - much to the indignation of Mademoiselle. When her life proves to be in danger from the villainous émigré Valade, Gerald has his work cut out. For Mademoiselle Melusine, engaged in a desperate battle to prove her true identity, believes she is well able to take care of herself and is determined not to be rescued.
                </Text>
              </View>
            </ScrollView>

          </View>

          <View style = {styles.downloadBoxContainer}>

            <View style = {styles.bookmarkBox}>
                <TouchableOpacity>
                    <Image source = {require('./assets/bookmarks.png')} style = {styles.bookmarkIcon}/>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style = {styles.downloadButton}>
              <View>
                <Text style = {{color: 'white', fontFamily: 'Kollektif', fontSize: 25}}>Start Reading</Text>
              </View>
            </TouchableOpacity>

          </View>

        </View>

        <View style = {styles.navigationBar}>
            <LinearGradient
                start={{x:0,y:1}}
                end={{x:1,y:1}}
                colors={['#202020', '#202020']}
                style={styles.background1}>
                <TouchableOpacity>
                    <Image source = {require('./assets/home.png')} style = {styles.iconNavBar}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source = {require('./assets/category.png')} style = {styles.iconNavBar}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source = {require('./assets/bookmarks.png')} style = {styles.iconNavBar}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source = {require('./assets/account-circle.png')} style = {styles.iconNavBar}/>
                </TouchableOpacity>
            </LinearGradient>
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
    fontFamily: 'OpenSans-ExtraBold'
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
    bottom: 0,
    borderTopWidth: 1,
    borderColor: "#454545"
  },

  background1: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  iconNavBar: {
    height: 45,
    width: 45

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
    fontFamily: 'OpenSans-ExtraBold'
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
    marginRight: '10%',
    justifyContent: 'center',
    //borderWidth: 1,
    //borderColor: 'yellow',
  },

  description: {
    height: '70%',
    width: '70%',
    textAlign: 'justify',
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


});

