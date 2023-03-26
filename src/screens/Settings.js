import React, {useContext, useState} from 'react';
import { Button, StyleSheet, Text, View, Switch } from 'react-native';
import { useTheme } from '../contexts/ThemeProvider';

import UpdatePassword from './UpdatePassword';

const Settings = ({navigation}) => {
  // to use hook
  const {theme, updateTheme} = useTheme();

  const changeTheme = () => updateTheme(theme.themeMode)

  const [isEnabled, setIsEnabled] = useState(theme==='default'? false: true)
  const toggleSwitch = () => setIsEnabled(previousState => !previousState)



  return (
    <View style = {[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <Text style={[styles.text, {color: theme.textColor}]}>Settings</Text>
      <Button title='change theme' onPress={changeTheme} color={theme.nav.backgroundColor} />
      {/* <Switch 
        value = {isEnabled}
        onChange={handleOnChange}
        trackColor={{false:'#767577', true:'#81b0ff'}}
        thumbColor={theme==='default'? '#f5dd4b':'#f4f3f4'}
        ios_backgroundColor='#3e3e3e'
        
      /> */}
      <Button title='Update Password' onPress={()=> navigation.navigate('UpdatePassword')} color={theme.nav.backgroundColor}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    padding: 90
  },
});

export default Settings;
