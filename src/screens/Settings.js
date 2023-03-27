import React, { useContext, useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Modal } from 'react-native';
import { useTheme } from '../contexts/ThemeProvider';
import UpdatePassword from './UpdatePassword';

const Settings = ({ navigation }) => {
  // to use hook
  const { theme, updateTheme } = useTheme();
  const changeTheme = () => updateTheme(theme.themeMode);
  const [modalVisible, setModalVisible] = useState(false);


  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.text.primary }]}>Settings</Text>
      <View>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: theme.ui.tertiary }]}
          onPress={changeTheme}>
          <Text style={[styles.text, { color: theme.text.secondary }]}>Change Theme</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: theme.ui.tertiary }]}
          onPress={() => navigation.navigate('UpdatePassword')}>
          <Text style={[styles.text, { color: theme.text.secondary }]}>Update Password</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: theme.ui.tertiary }]}
          onPress={() => setModalVisible(true)}>
          <Text style={[styles.text, { color: theme.text.secondary }]}>Log Out</Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={[styles.modalContainer]}>
          <View style={[styles.modal, { backgroundColor: theme.ui.quaternary }]}>
            <Text style={[styles.text, { color: theme.text.secondary }]}>Are you sure?</Text>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                style={[styles.modalButton]}
                onPress={() => setModalVisible(false)}>
                <Text style={[styles.text, { color: theme.text.error }]}>Confirm</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton]}
                onPress={() => setModalVisible(false)}>
                <Text style={[styles.text, { color: theme.text.secondary }]}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    alignContent: 'center'
  },
  button: {
    padding: 20,
    paddingHorizontal: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '35px',
    margin: 15,
  },
  modal: {
    borderRadius: '25px',
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    width: '62%',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  modalButton: {
    flex: 1,
    paddingHorizontal: 10,
    margin: 8,
    marginTop: 12,
  }
});

export default Settings;
