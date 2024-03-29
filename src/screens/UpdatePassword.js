import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '../contexts/ThemeProvider';
import style from '../css/UpdatePassword.css'

const UpdatePassword = () => {
  const {theme} = useTheme()
  return (
    <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <Text style={[styles.text, {color: theme.textColor}]}>Update</Text>
      <Text style={[styles.text, {color: theme.textColor}]}>Password</Text>
      <View style = {[style.box, {backgroundColor: theme.textColor}]}>
        <TouchableOpacity style={[style.confirmButton, {backgroundColor: theme.backgroundColor}]}>
          <Text style={[style.confirm, {color: theme.textColor}]}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 120
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    paddingLeft: 30
  },
});

export default UpdatePassword;
