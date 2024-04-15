import React from 'react';
import { useState } from "react"
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

export const StartScreen = ({ onNavigate }) => {
  const [player1name, setPlayer1name] = useState('');
  const [player2name, setPlayer2name] = useState('');

  const startGame = () => {
    if (!player1name || !player2name) {
      Alert.alert("გთხოვთ შეიყვანოთ ორივე მოთამაშის სახელი!");
      return;
    }
    console.log("Start game tapped with Player 1: ", player1name, " and Player 2: ", player2name);
    Keyboard.dismiss();
    onNavigate('Game');
  }
  return (
    <View style={{height: "100%"}}>
      <View style={styles.container}>
        <View style={styles.inputWrapper}>
          <View style={styles.textWrapper}>
              <Text style={styles.text}>Player 1</Text>
              <TextInput style={styles.input} 
                placeholder="Enter Player 1 name"
                onChangeText={newText => setPlayer1name(newText)}
                defaultValue={player1name} />
            </View>
            <View style={styles.textWrapper}>
              <Text style={styles.text}>Player 2</Text>
              <TextInput style={styles.input} 
                placeholder="Enter Player 2 name" 
                onChangeText={newText => setPlayer2name(newText)}
                defaultValue={player2name} />
            </View>
          </View>
        </View>
      <View style={styles.button}>
          <Button title="Start Game" onPress={startGame} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 5,
    flexDirection: 'row',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 24
  },
  inputWrapper: {
    // marginBottom: 20,
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  textWrapper: {
    paddingHorizontal: 10,
    justifyContent: 'center', 
    alignItems: 'center'
  },
  text: {
    // alignContent: 'center',
    // justifyContent: 'center',
    fontFamily: 'comic',
    fontSize: 24
  },
  input: {
    width: 150,
    height: 40,
    // borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 25,
    flex: 1
  },
});

export default StartScreen;
