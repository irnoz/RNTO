import { memo } from "react"
import { View, Text, StyleSheet, Pressable } from "react-native"

const TodoItem = ({name, onDelete, id}) => {
    console.log(name)
    return (
        <Pressable onPress={() => onDelete(id)}>
            <View style={styles.wrapper}>
                <Text>{name}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        margin: 1,
        padding: 20,
        backgroundColor: 'red',
    }
})

export default memo(TodoItem);