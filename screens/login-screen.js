import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from "react-native";

import { useDispatch, useSelector } from "react-redux";

import Spinner from 'react-native-loading-spinner-overlay';


import * as action from "../State/actionCreator";

const LoginFormScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const loggedIn = useSelector((state) => state.authReducer.loggedIn);

  const loading = useSelector((state) => state.authReducer.loading);

  const errorMessage = useSelector((state) => state.authReducer.errorMessage);


  if (loggedIn) {
    debugger;
    props.navigation.navigate("HomePage");
  }

  const loginHandler = () => {
    debugger;
    console.log("dddddd");
    dispatch(action.tryLogin(email, password));
    console.log(email, password, "email password");
    fetch(`http://cad4770001a8.ngrok.io/Users`)
      .then((response) => response.json())
      .then((data) => {
        console.log("dataaaaa", data);
        if (email === data[0].Email && password === data[0].Password) {
          debugger;
          dispatch(action.loginSuccess());
        } else {
          debugger;
          dispatch(action.loginfaild());
        }
      })
      .catch((err) => console.log(err));
  };

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
        onChangeText={e => setEmail(e)}
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
        disabled={email.length == 0 || password.length == 0}
        onPress={loginHandler}
      >
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>

      {loading ? <View style={{
        flex: 1,
        justifyContent: "center"
      }}>
        <Spinner
          visible={loading}
          textContent={'Loading...'}
        />
      </View> : <View style={{alignItems:'center'}}>
        <Text style={{fontSize:30, color:'red'}}>{errorMessage}</Text>
      </View>
      }


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

export default LoginFormScreen;
