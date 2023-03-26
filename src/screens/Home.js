import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { useTheme } from '../contexts/ThemeProvider';
// import Test from './Test';

const Home = () => {
  const {theme} = useTheme()
  return (
    <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <Text style={[styles.text, {color: theme.textColor}]}>Home</Text>
      {/* <Button title='test' onPress={()=> navigation.navigate('Test')}/> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Home;