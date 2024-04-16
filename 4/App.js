import { StatusBar } from 'expo-status-bar';
import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { useCallback } from 'react';
// import { useState } from 'react';
import { GameScreen } from './screens/GameScreen'
import { StartScreen } from './screens/StartScreen'
import React, { useState } from 'react';

SplashScreen.preventAutoHideAsync()

export default function App() {

  const [maxScore, setMaxScore] = useState(4)
  const [player1name, setPlayer1name] = useState('');
  const [player2name, setPlayer2name] = useState('');
  
  const [currentScreen, setCurrentScreen] = useState('Start');

  const handleNavigate = (screenName) => {
    setCurrentScreen(screenName);
  };

  // const [player1name, setPlayer1name] = useState('');
  // const [player2name, setPlayer2name] = useState('');

  const [fontsLoaded, fontError] = useFonts({
    'comic': require('./assets/fonts/comic.ttf'),
    'comic-bold': require('./assets/fonts/comicbd.ttf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded, fontError) {
    return null
  }

  return (
    <LinearGradient
      style={styles.container}
      colors={['yellow', 'orange','lime']}
      onLayout={onLayoutRootView}
     >
      <ImageBackground 
        style={styles.container}
        source={require('./assets/splash.jpg')}
        imageStyle={styles.image}
      >
        <SafeAreaView>
          {currentScreen === 'Start' ? (
            <StartScreen 
              onNavigate={handleNavigate} 
              setMaxScore={setMaxScore}
              setPlayer1name={setPlayer1name}
              setPlayer2name={setPlayer2name}
            />
          ) : (
            <GameScreen 
              onNavigate={handleNavigate}
              maxScore={maxScore}
              player1name={player1name}
              player2name={player2name}
            />
          )}
          {/* <GameScreen></GameScreen> */}
          {/* <StartScreen></StartScreen> */}
        </SafeAreaView>
        <StatusBar style="auto" />
      </ImageBackground>
      
      
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  image: {
    opacity: 0.35
  },

  text: {
    fontFamily: 'comic',
    fontSize: 48,
  }
});
