import React, { useState, useCallback, useMemo } from 'react'
import { StatusBar, StyleSheet, View, FlatList } from 'react-native'
import TodoItem from './components/TodoItem'
import AddTodo from './components/AddTodo'
import DoneItem from './components/DoneItem'

export default function App() {
  const [todos, setTodos] = useState([{name: 'James', id: Math.random()}, {name: 'Bond', id: Math.random()}])
  const [dones, setDones] = useState([{name: 'James', id: Math.random()}, { name: 'Bond', id: Math.random()}])

  const addTodo = (title) => {
    setTodos([...todos, {name: title, id: Math.random()}])
  }

  const onDeleteTodo = useCallback((id) => {
    // setTodos(todos.filter((_, currentIndex) => currentIndex !== index))
    setDones((state) => {
      
      return [...state, { name: todos.find( ({id: todoID}) => {
        
        return todoID === id
      }).name, id: Math.random()}]
    })
    setTodos((state) => {
      return state.filter(({ id: todoId }) => todoId !== id);
    })
    
  }, [todos]);

  const onDeleteDone = useCallback((id) => {
    setTodos((state) => {
      return [...state, { name: dones.find( ({id: doneID}) => {
        return doneID === id
      }).name, id: Math.random()}]
    })
    setDones((state) => {
      // return state.find(({id: todoID }) => todoID === id);
      return state.filter(({ id: doneID }) => doneID !== id)
    })
  }, [dones]);

  const value = useMemo(() => {
    return 100*100
  }, [])

  return (
    <View style={styles.container}>
      <AddTodo addTodo={addTodo} />
      <View>
        {/* <ScrollView>
          {todos.map((todo, index) => {
            return <TodoItem key={index} name={todo.name} />
          })}
        </ScrollView> */}
        <FlatList renderItem={({item: {name, id}}) => 
          <TodoItem name={name} id={id} onDelete={onDeleteTodo} />} data={todos} />
        <FlatList renderItem={({ item: { name, id}}) => 
          <DoneItem name={name} id={id} onDelete={onDeleteDone} />} data={dones} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 30
  },
});
