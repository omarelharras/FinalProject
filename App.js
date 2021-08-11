import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { useSelector, Provider, useDispatch } from 'react-redux';
import { HandleGetUsers, HandleValidateData } from './State/actionCreator';
import { getUsers } from './State/actions';
import storeFunction from './State/store';

export default function App() {
  const store = storeFunction();
  const { data } = useSelector(state => state.reducer);
  const dispatch = useDispatch();
  const fetchUsers = () => dispatch(HandleGetUsers());
  useEffect(() => {
    fetchUsers();
  }, []);
  const AttepmtLogin = (Email, Password)  => {
    dispatch(HandleValidateData(Email, Password));
  };
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const Print = () => console.log(Email + "   " + Password);
  return (
    <View style={styles.container}>
      <View style={{ flex: 15, backgroundColor: "rgb(20, 20, 255)" }} />
      <Image
        style={{ width: "75%", height: "22%", position: 'absolute', right: "12.5%", top: "10%" }}
        source={{ uri: "https://www.mintformations.co.uk/blog/wp-content/uploads/2020/05/shutterstock_583717939.jpg" }}
      />
      <Text style={styles.Title}>
        Login to your account
      </Text>
      <TextInput
        placeholder="Email"
        placeholderTextColor='#000'
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize='none'
        autoCorrect={false}
        onChangeText={Email => setEmail(Email)}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor='#000'
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize='none'
        autoCorrect={false}
        onChangeText={Password => setPassword(Password)}
      />
      <TouchableOpacity
        style={styles.buttonContainer}
        disabled={Email.length == 0 || Password.length == 0}
        onPress={Print}
      >
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>

      <Text style={styles.hyperlink}>
        Forgot password?
      </Text>
      <View style={{ flex: 1, backgroundColor: "white" }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  Title: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 20
  },
  input: {
    height: 30,
    width: "95%",
    padding: 20,
    marginHorizontal: 10,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: "rgb(211, 211, 211)",
    flex: 1
  },
  buttonContainer: {
    backgroundColor: "rgb(20, 20, 255)",
    height: 30,
    width: "95%",
    padding: 20,
    marginHorizontal: 10,
    marginTop: 20,
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    textAlignVertical: 'center',
    alignItems: 'center',
    fontWeight: "bold"
  },
  hyperlink: {
    fontWeight: 'bold',
    color: "rgb(20, 20, 255)",
    padding: 20,
    marginHorizontal: 10,
    marginTop: 20,
    fontSize: 18,
    textAlign: "center"
  }
});