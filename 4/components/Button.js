import { Pressable, View, Text, StyleSheet } from "react-native";


export const Button = ({onPress, children, ...rest}) => {
    return (
        <View style={styles.wrapper}>
            <Pressable 
                android_ripple={{color: 'lime'}}
                onPress={onPress} 
                style={styles.pressable}
            >
                <Text style={styles.text}>{children}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
    },
    pressable: {
        borderWidth: 1,
        paddingHorizontal: 24,
        paddingVertical: 12,
        // borderRadius: 12,
        // overflow: 'hidden'
    },
    text: {
        fontFamily: 'comic',
        fontSize: 24
    }
})

export default Button