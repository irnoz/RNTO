import { useNavigation } from "@react-navigation/native";
import { Pressable, View, Text, StyleSheet } from "react-native"
import { useTheme } from "../context/theme.context";

const RenderCategoryItem = ({category}) => {
    const navigation = useNavigation()
    const {theme} = useTheme()

    const onPress = () => {
        navigation.navigate('MoviesScreen', {
            categoryId: category.id
        })
    }

    return (
        <View style={[styles.container, theme]}>
            <Pressable style={styles.pressable} onPress={onPress}>
                <Text style={[styles.text, theme]}>{category.name}</Text>
            </Pressable>
        </View>
    )
}

export default RenderCategoryItem;

const styles = StyleSheet.create({
    container: {
        marginVertical: 16,
        marginHorizontal: 24,
    },
    pressable: {
        borderWidth: 1,
        flex: 1,
        flexDirection: 'row',
        height: 150,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 24
    }
})