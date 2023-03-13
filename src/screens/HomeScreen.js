import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../config';

export const HomeScreen = () => {
  const handleLogout = () => {
    signOut(auth).catch(error => console.log('Error logging out: ', error));
  };
  const navigation = useNavigation();
  const mallrec = () => {
    navigation.navigate('MallRecommendation')
  }
  return (
    <View style={styles.container}>
      <Button title='Sign Out' onPress={handleLogout} />
      <Button title="next" onPress={mallrec} />
    </View>
  );
};





const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
