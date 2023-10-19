import { useNavigation } from '@react-navigation/native';
// import React from 'react';
import React, { useEffect, useState } from 'react'
import {View, Text, Touchable, TouchableOpacity,Button} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import {darkGreen} from './Constants';
import Field from './Field';
// import { auth } from './firebase';
import Home from './Home';
// import svgmaps from './svgmaps';
// import svgmaps2 from './svgmaps2';

const Login = (props) => {
  const[email, setEmail]=useState('');
  const[password, setPassword]= useState('');
  const navigation=useNavigation();
  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged(user => {
  //     if (user) {
  //       navigation.replace("Home")
  //     }
  //   })

  //   return unsubscribe
  // }, [])

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
      })
      .catch(error => alert(error.message))
  }

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
      })
      // .catch(error => alert(error.message))
      .catch(error => svg2.html)
      
  }
  const nav=useNavigation();
 
  return (
    <Background>
      <View style={{alignItems: 'center', width: 460}}>
        <Text
          style={{
            color: 'white',
            fontSize: 64,
            fontWeight: 'bold',
            marginVertical: 20,
          }}>
          Login
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 700,
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 100,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 40, color: darkGreen, fontWeight: 'bold'}}>
            Welcome Back
          </Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 19,
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            Login to your account
          </Text>
          <Field
            placeholder="Email / Username"
            keyboardType={'email-address'}
            value={email}
            onChangeText={text=>setEmail(text)}
            // secureTextEntry 
          />
          <Field
            placeholder="Password" 
            value={password}
            onChangeText={text=>setPassword(text)}
            secureTextEntry={true} 
          />
          <View
            style={{alignItems: 'flex-end', width: '78%', paddingRight: 16, marginBottom: 80}}>
            <Text style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
              Forgot Password ?
            </Text>
          </View>
          {/* <Button onPress={nav.navigate("mapopen")} title="Login"></Button> */}
          <Button btnLabel="Login" onPress={nav.navigate("mapopen")} title="Login"></Button> 
          {/* <Btn textColor='white' bgColor={darkGreen} btnLabel="Login" Press={() => alert("Logged In")} /> */}
          {/* <Btn textColor='white' bgColor={darkGreen} btnLabel="Login" Press={() => props.navigation.navigate("Login")}  /> */}
          
          <View style={{ display: 'flex', flexDirection :'row', justifyContent: "center" }}>
            <Text style={{ fontSize: 16, fontWeight:"bold" }}>Don't have an account ? </Text>
            <TouchableOpacity onPress={() => props.navigation.navigate("Signup")}>
            <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Login;