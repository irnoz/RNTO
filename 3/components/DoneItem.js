import { memo } from "react"
import { View, Text, StyleSheet, Pressable } from "react-native"

const DoneItem = ({name, onDelete, id}) => {
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
        backgroundColor: 'green',
    }
})

export default memo(DoneItem);