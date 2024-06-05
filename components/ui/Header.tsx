/* ------------------- IMPORTS */
import { StyleSheet, Text, View } from 'react-native';

/* ------------------- TYPES  */

/* ------------------- INTERFACES  */

interface Props {}

export const Header = ({}: Props) => {
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
    <View style={styles.HeaderContainer}>
      <Text style={{ color: 'white', fontSize: 30 }}>My todos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderContainer: {
    backgroundColor: 'blue',
    width: '100%',
    height: 120,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20,
  },
});
