import { Pressable, View, Text, StyleSheet, } from "react-native"

const RenderCategoryItem = (category) => {
    return (
        <View style={styles.container}>
            <Pressable style={styles.pressable}>
                <Text style={styles.text}>category.name</Text>
            </Pressable>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // flexDirection: 'row'
        marginVertical: 16,
        marginHorizontal: 24
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
        fontSize: 24,
    }
})

export default RenderCategoryItem