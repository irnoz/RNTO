import { View, Image, Text, StyleSheet, Alert } from "react-native" // add Pressable
import { Button } from "../components/Button"
import { useEffect, useState } from "react"

const diceImages = {
    1: require('../assets/dice/1.png'),
    2: require('../assets/dice/2.png'),
    3: require('../assets/dice/3.png'),
    4: require('../assets/dice/4.png'),
    5: require('../assets/dice/5.png'),
    6: require('../assets/dice/6.png'),
}

export const GameScreen = ({ onNavigate, maxScore, player1name, player2name }) => {

    const goBack = () => {
        onNavigate('Start');
    }

    const [player1Dice, setPlayer1Dice] = useState(1)
    const [player2Dice, setPlayer2Dice] = useState(1)

    const [player1Score, setPlayer1Score] = useState(0)
    const [player2Score, setPlayer2Score] = useState(0)

    useEffect(() => {
        let winner = ""
        if (player1Score == maxScore) {
            winner = player1name
        } else if (player2Score == maxScore) {
            winner = player2name
        }

        if (winner != "") {

            Alert.alert(
                'გილოცავ!',
                `გამარჯვებულია ${winner}`,
                [{
                    text: 'იუჰუუუ',
                    onPress: () => {
                        setPlayer1Score(0)
                        setPlayer2Score(0)
                    }
                }]
            )
        }
    }, [player1Score, player2Score, maxScore])
    
    const checkWinner = () => {
        let winner = ""
        if (player1Score == maxScore) {
            winner = player1name
        } else if (player2Score == maxScore) {
            winner = player2name
        } 

        Alert.alert(
            'გილოცავ!',
            `გამარჯვებულია ${winner}`,
            [{
                text: 'იუჰუუუ',
                onPress: () => {
                    setPlayer1Score(0)
                    setPlayer2Score(0)
                }
            }]
        )
    }

    const rollDice = () => {
        const dice1Value = Math.floor(Math.random() * 6) + 1
        const dice2Value = Math.floor(Math.random() * 6) + 1

        setPlayer1Dice(dice1Value)
        setPlayer2Dice(dice2Value)

        if(dice1Value === dice2Value) {
            Alert.alert(
                'ფრეა!',
                `ორივე მოთამაშემ გააგორა ${dice1Value}`, 
                [{text: 'გავიგე'}]
            )
        } else if(dice1Value > dice2Value) {
            setPlayer1Score(state => state + 1)
        } else {
            setPlayer2Score(state => state + 1)
        }

        // checkWinner()
    }
// add new screen where you input names and max game score
    return (
        <View style={ {height: '100%' }}>
            <View style={styles.buttonContainer}>
                <Button onPress={goBack}>back</Button>
            </View>
            <View style={styles.container}>
                <View style={styles.playerWrapper}>
                    <Text style= {[styles.text, styles.playerLabel]}>{player1name}</Text>
                    <Image 
                        style={styles.image}
                        source={diceImages[player1Dice]}>
                    </Image>
                    <Text style= {[styles.text, styles.playerLabel]}>{player1Score}</Text>
                </View>
                <View style={styles.playerWrapper}>
                    <Text style={{...styles.text, fontSize: 48}}>VS</Text>
                </View>
                <View style={styles.playerWrapper}>
                    <Text style= {[styles.text, styles.playerLabel]}>{player2name}</Text>
                    <Image 
                        style={styles.image}
                        source={diceImages[player2Dice]}>
                    </Image>
                    <Text style= {[styles.text, styles.playerLabel]}>{player2Score}</Text>
                </View>
            </View>
                <View style={{ flex: 1 }}>
                        <Button onPress={rollDice}>Roll The Dice</Button>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 40,
        flexDirection: 'row',
        marginHorizontal: 10,
    },
    container: {
        flex: 5,
        flexDirection: 'row',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 24
    },
    playerWrapper: {
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
    },
    text: {
        fontFamily: 'comic',
        fontSize: 48
    },
    playerLabel: {
        fontSize: 24
    }
})

export default GameScreen