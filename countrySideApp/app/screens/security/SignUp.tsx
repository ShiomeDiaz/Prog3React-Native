import React from 'react'
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  Text,
  ImageBackground,
  Alert,
  SafeAreaView,
  TouchableOpacity
} from 'react-native'
const bgImg = require("../../../assets/bg/wallpaper.png");

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    document: '', name: '', lastname: '', phone: '', email: '', address: '', city: '', url: "http://192.168.100.5:3000/customer",
  }
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  signUp = async () => {
    const { document, name, lastname, phone,email,address,city } = this.state
    try {
      fetch(this.state.url,{//promesa
          method: "POST",
          headers:{
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            document:document,
            name:name,
            lastname:lastname,
            phone:phone,
            email:email,
            address:address,
            city:city
          })
      })
        .then((data) => data.json())
        .then((data) =>{
            console.log(data);
            if(data.error){
                Alert.alert("App Message", "Invalid data.");
            } else{
                Alert.alert("App Message", "successfully signed up!");
                this.props.navigation.push('Login')
                
            }
        })
    } catch (err) {
      console.log('error signing up: ', err)
    }
  }
 
  render() {
    return (
      <ImageBackground source={bgImg} style={styles.backgroundApp}>
        <Text style={styles.titleText}>Sign Up</Text>
        <SafeAreaView style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder='Document'
            autoCapitalize="none"
            placeholderTextColor='white'
            onChangeText={val => this.onChangeText('document', val)}
          />
          <TextInput
            style={styles.input}
            placeholder='Name'
            autoCapitalize="none"
            placeholderTextColor='white'
            onChangeText={val => this.onChangeText('name', val)}
          />
          <TextInput
            style={styles.input}
            placeholder='Lastname'
            autoCapitalize="none"
            placeholderTextColor='white'
            onChangeText={val => this.onChangeText('lastname', val)}
          />
          <TextInput
            style={styles.input}
            placeholder='Phone'
            autoCapitalize="none"
            placeholderTextColor='white'
            onChangeText={val => this.onChangeText('phone', val)}
          />
          <TextInput
            style={styles.input}
            placeholder='Email'
            autoCapitalize="none"
            placeholderTextColor='white'
            onChangeText={val => this.onChangeText('email', val)}
          />
          <TextInput
            style={styles.input}
            placeholder='Address'
            autoCapitalize="none"
            placeholderTextColor='white'
            onChangeText={val => this.onChangeText('address', val)}
          />
          <TextInput
            style={styles.input}
            placeholder='City'
            autoCapitalize="none"
            placeholderTextColor='white'
            onChangeText={val => this.onChangeText('city', val)}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={this.signUp.bind(this)}
          >
            <Text style={styles.buttonText}> SIGNUP </Text>
          </TouchableOpacity>
         </SafeAreaView>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: '#6666ff',
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    alignItems: "center",
    backgroundColor: "#66ff66",
    width: 200,
    height: 55,
    padding: 10,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 25,
    marginBottom: 10,
    
  },
  buttonText: {
    fontSize: 20,
    alignItems: "center",
    justifyContent: "center",
    color: "black",
  },
  backgroundApp: {
    flex: 1,
    width: "100%",
  },
  titleText: {
    fontSize: 50,
  
    justifyContent: "center",
    color: "#fff",
    alignContent:"center",
    left:100,
    top:60
  },
  
})
/*
<Button
title='Sign Up'
onPress={this.signUp}
/>
*/