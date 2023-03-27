import React, { useContext, useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Switch } from 'react-native';
import { useTheme } from '../contexts/ThemeProvider';

import UpdatePassword from './UpdatePassword';

const Settings = ({ navigation }) => {
  // to use hook
  const { theme, updateTheme } = useTheme();

  const changeTheme = () => updateTheme(theme.themeMode)

  const [isEnabled, setIsEnabled] = useState(theme === 'default' ? false : true)
  const toggleSwitch = () => setIsEnabled(previousState => !previousState)



  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.text.primary }]}>Settings</Text>
      <TouchableOpacity title='change theme' onPress={changeTheme} color={theme.text.primary} />
      <View style = {[padding = 10]}>
        <TouchableOpacity style={styles.button} onPress={changeTheme}>
          <Text style={[{ color: theme.text.primary }]}>
            Change Theme
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('UpdatePassword')}>
          <Text style={[{ color: theme.text.primary }]}>
            Update Password
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    padding: 90
  },
  Button: {
    padding: 10
  }
});

export default Settings;
