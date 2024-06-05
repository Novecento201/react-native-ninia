/* ------------------- IMPORTS */
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

/* ------------------- TYPES  */

/* ------------------- INTERFACES  */

interface Props {
  submitTodo: (name: string) => void;
}

export const AddTodo = ({ submitTodo }: Props) => {
  /* ----------------- STATE  */
  const [inputValue, setInputValue] = useState('');

  /* ----------------- ROUTER  */

  /* ----------------- ENUM  */

  /* ----------------- CONFIG  */

  /* ----------------- REF  */

  /* ----------------- ZUSTAND  */

  /* ----------------- VARIABLES  */

  /* ----------------- METHODS  */

  /* ----------------- API CALL  */

  /* ----------------- USEEFFECT  */

  return (
    <View style={styles.AddTodoContainer}>
      <TextInput
        style={{
          backgroundColor: 'white',
          padding: 10,
          borderRadius: 10,
          width: '100%',
        }}
        value={inputValue}
        onChangeText={setInputValue}
        placeholder="Add todo..."
      />

      <Button
        onPress={() => submitTodo(inputValue)}
        title="add todo"
        color="coral"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  AddTodoContainer: {
    gap: 8,
  },
});
