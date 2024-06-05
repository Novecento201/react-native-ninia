/* ------------------- IMPORTS */
import { StyleSheet, Text, View } from 'react-native';

/* ------------------- TYPES  */

/* ------------------- INTERFACES  */

interface Props {}

export const Sandbox = ({}: Props) => {
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
    <View style={styles.SandboxContainer}>
      <Text style={styles.text}>Sandbox</Text>
      <Text style={styles.text}>Sandbox</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  SandboxContainer: {
    // paddingTop: 400,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },

  text: {
    fontSize: 20,
    color: 'white',
  },
});
