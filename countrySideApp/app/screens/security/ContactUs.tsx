import React from 'react'
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  Alert,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  Text,
} from 'react-native'
const bgImg = require("../../../assets/bg/wallpaper.png");
export default class ContactUs extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    name: '', phone: '', email: '', subject:'', url: "http://192.168.100.5:3000/contactUs",
  }
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  contactUs = async () => {
    const { name, phone,email, subject} = this.state
    try {
      fetch(this.state.url,{//promesa
          method: "POST",
          headers:{
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name:name,
            phone:phone,
            email:email,
            subject:subject
          })
      })
        .then((data) => data.json())
        .then((data) =>{
            console.log(data);
            if(data.error){
                Alert.alert("App Message", "Invalid data.");
            } else{
                Alert.alert("App Message", "Send message!");
                this.props.navigation.push('Home')
                
            }
        })
    } catch (err) {
      console.log('error signing up: ', err)
    }
  }
 
  render() {
    return (
      <ImageBackground source={bgImg} style={styles.backgroundApp}>
        <Text style={styles.titleText}>Contact Us</Text>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder='Name'
            autoCapitalize="none"
            placeholderTextColor='white'
            onChangeText={val => this.onChangeText('name', val)}
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
            placeholder='Subject'
            autoCapitalize="none"
            placeholderTextColor='white'
            onChangeText={val => this.onChangeText('subject', val)}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={this.contactUs.bind(this)}
          >
            <Text style={styles.buttonText}> Contact Us </Text>
          </TouchableOpacity>
        </View>
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
  backgroundApp: {
    flex: 1,
    width: "100%",
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
  titleText: {
    fontSize: 50,
  
    justifyContent: "center",
    color: "#fff",
    alignContent:"center",
    left:60,
    top:60
  },
  subtitleText: {
    fontSize: 50,
  
    justifyContent: "center",
    color: "#fff",
    alignContent:"center",
  },
})