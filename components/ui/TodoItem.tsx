/* ------------------- IMPORTS */
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

/* ------------------- TYPES  */

/* ------------------- INTERFACES  */

interface Props {
  todo: {
    id: number;
    name: string;
  };
  action: () => void;
}

export const TodoItem = ({ todo, action }: Props) => {
  /* ----------------- STATE  */

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
    <TouchableOpacity
      style={styles.TodoItemContainer}
      onPress={action}
    >
      <AntDesign
        name="delete"
        size={24}
        color="black"
      />

      <Text style={styles.text}> {todo.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  TodoItemContainer: {
    backgroundColor: 'pink',
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
    padding: 20,
    gap: 24,
    borderRadius: 10,
    flexDirection: 'row',
  },

  text: {
    fontSize: 20,
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
