import React, { useMemo } from 'react';
import { useState } from "react"
import { Button } from "../components/Button"
import { View, TextInput, Text, StyleSheet, Alert, Keyboard } from 'react-native';




export const StartScreen = ({ onNavigate, setMaxScore, setPlayer1name, setPlayer2name }) => {
  const [localMaxScore, seltLocalMaxScore] = useState(4);
  const [localPlayer1name, setLocalPlayer1name] = useState('');
  const [localPlayer2name, setLocalPlayer2name] = useState('');

  const inputData = useMemo(() => [
    {
      text: 'Player 1',
      placeholder: "Enter Player 1 name",
      method: setLocalPlayer1name,
      name: localPlayer1name
    },
    {
      text: 'Player 2',
      placeholder: "Enter Player 2 name",
      method: setLocalPlayer2name,
      name: localPlayer2name
    },
  ], [localPlayer1name, localPlayer2name, setLocalPlayer1name, setLocalPlayer2name])

  const startGame = () => {
    if (!localPlayer1name || !localPlayer2name) {
      Alert.alert(
        'შეცდომა!',
        `გთხოვთ შეიყვანოთ ორივე მოთამაშის სახელი!`, 
        [{text: 'გავიგე'}]
      )
      return;
    }
    console.log("Start game tapped with Player 1: ", localPlayer1name, " Player 2: ", localPlayer1name, " and Max Score: ", localMaxScore);
    Keyboard.dismiss();
    setMaxScore(localMaxScore);
    setPlayer1name(localPlayer1name);
    setPlayer2name(localPlayer2name);
    onNavigate('Game');
  }
  return (
    <View style={{height: "100%"}}>
      <View style={styles.container}>
        <View style={{ flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View style={{alignItems: 'center'}}> 
          <Text style={styles.text}>Max Score</Text>
              <TextInput style={styles.input} 
                placeholder="Enter Max Score"
                onChangeText={newScore => seltLocalMaxScore(newScore)}
                defaultValue={localMaxScore} />
          </View>
          <View style={styles.inputWrapper}>
              {
                inputData.map(data => <View style={styles.textWrapper}>
                  <Text style={styles.text}>{data.text}</Text>
                  <TextInput style={styles.input} 
                    placeholder={data.placeholder}
                    onChangeText={newText => data.method(newText)}
                    defaultValue={data.name} />
                </View>)
              }
          </View>
        </View>
      </View>
      <View style={styles.button}>
        <Button onPress={startGame}>Start Game</Button>
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
    borderRadius: 12,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 25,
    flex: 1
  },
});

export default StartScreen;
