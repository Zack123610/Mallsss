import React, {useContext, useState} from 'react';
import { Button, StyleSheet, Text, View, Switch } from 'react-native';
import { useTheme } from '../contexts/ThemeProvider';

// import AnimatedScrollView from './AnimatedScrollView';
import AnimatedScrollView from './AnimatedScrollView';

const Home = () => {
  // to use hook
  const {theme, updateTheme} = useTheme();

  const changeTheme = () => updateTheme(theme.themeMode)

  const [isEnabled, setIsEnabled] = useState(theme==='default'? false: true)
  const toggleSwitch = () => setIsEnabled(previousState => !previousState)



  return (
    <View style = {[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <Text style={[styles.text, {color: theme.textColor}]}>Custom bottom tab navigator!</Text>
      <Button title='change theme' onPress={changeTheme} color={theme.nav.backgroundColor} />
      {/* <Switch 
        value = {isEnabled}
        onChange={handleOnChange}
        trackColor={{false:'#767577', true:'#81b0ff'}}
        thumbColor={theme==='default'? '#f5dd4b':'#f4f3f4'}
        ios_backgroundColor='#3e3e3e'
        
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold'
  },
});

export default Home;
