import { useNavigation } from "@react-navigation/native";
import { Pressable, View, Text, StyleSheet, Image } from "react-native"

const RenderMovieItem = ({movie, categoryId}) => {
    const navigation = useNavigation()

    const onPress = () => {
        navigation.navigate('MovieDetailScreen', {
            movieId: movie.id,
            categoryId 
        })
    }

    return (
        <View style={styles.container}>
            <Pressable style={styles.pressable} onPress={onPress}>
                    <Image source={{uri: movie.poster_image}} style={styles.image} />
                    <Text style={styles.text}>{movie.title}</Text>
            </Pressable>
        </View>
    )
}

export default RenderMovieItem;

const styles = StyleSheet.create({
    container: {
        marginVertical: 16,
        marginHorizontal: 24
    },
    pressable: {
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16
    },
    image: {
        width: 150,
        height: 200
    },
    text: {
        fontSize: 24
    }
})