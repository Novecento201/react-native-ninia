import { AddTodo } from '@/components/ui/AddTodo';
import { Header } from '@/components/ui/Header';
import { Sandbox } from '@/components/ui/Sandbox';
import { TodoItem } from '@/components/ui/TodoItem';
import { useState } from 'react';
import {
  Alert,
  Button,
  FlatList,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

export const _layout = () => {
  const [todos, setTodos] = useState([
    { id: 1, name: 'Buy milk' },
    { id: 2, name: 'Buy eggs' },
    { id: 3, name: 'Buy bread' },
  ]);

  const handlePressTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const submitTodo = (name: string) => {
    // if (name === '') return alert('Please enter a todo');

    if (name.length > 3) {
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: prevTodos.length + 1, name },
      ]);
    } else {
      Alert.alert('Title alert', 'Todo must be over 3 characters long', [
        {
          text: 'Understood',
          onPress: () => console.log('alert closed'),
        },
        {
          text: 'Cancel',
          onPress: () => console.log('alert closed'),
        },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />

        <View style={styles.content}>
          <AddTodo submitTodo={submitTodo} />

          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem
                  todo={item}
                  action={() => handlePressTodo(item.id)}
                />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default _layout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    gap: 20,
  },

  text: {
    fontSize: 20,
    color: 'white',
  },

  content: {
    width: '90%',
    flex: 1,
    padding: 20,
  },

  list: {
    flex: 1,
    marginTop: 20,
  },
});
