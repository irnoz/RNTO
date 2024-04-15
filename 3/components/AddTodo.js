import { useRef, useState } from "react"
import { View, TextInput, Button } from "react-native"

const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState('')
    const currentRef = useRef(10)
    let customNumber = 10

    // useEffect(() => {
    //     console.log('Mounted')
    // }, [])

    // useEffect(() => {
    //     console.log('Updated')
    // })

    // useEffect(() => {
    //     console.log('title is updated')
    // }, [title])

    // console.log(currentRef.current, customNumber)
    
    const onChangeText = (text) => {
        setTitle(text)
    }

    const addTotoClickHandler = () => {
        setTitle('')
        addTodo(title)
    }

    return (
        <View>
            <Button title='Add To Ref' onPress={() => {
                currentRef.current = 100; 
                customNumber = 100
                }
            } />
            <Button title='Add New Todo' onPress={addTotoClickHandler} />
            <View style={{flexDirection: 'row'}}>
            <TextInput 
                // ref={currentRef}
                style={{borderWidth: 1, borderColor: 'lime', flex: 1}}
                value={title} 
                onChangeText={onChangeText} 
            />
            </View>
        </View>
    )
}

export default AddTodo;