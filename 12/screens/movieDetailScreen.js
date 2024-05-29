import { View, Image, Text, StyleSheet, Button } from "react-native"
import { DATA } from "../data"
import { useEffect } from "react";

const MovieDetailScreen = ({route, navigation}) => {

    const {movieId, categoryId} = route.params;
    const movie = DATA.find((category) => category.id === categoryId)
                        .movies.find((movie) => movie.id === movieId)

    useEffect(() => {
        navigation.setOptions({
            title: movie.title,
            headerRight: () => <Button title="Like" onPress={() => console.log('Liked')} />
        })
    }, [navigation, movie.title])

    return (
        <View style={styles.container}>
            <Image source={{uri: movie.poster_image}} style={styles.image} />
            <Text style={styles.text}>{movie.title}</Text>
        </View>
    )
}

export default MovieDetailScreen;

const styles = StyleSheet.create({
    container: {
        marginVertical: 16,
        marginHorizontal: 24
    },
    image: {
        width: 150,
        height: 200
    },
    text: {
        fontSize: 24
    }
})