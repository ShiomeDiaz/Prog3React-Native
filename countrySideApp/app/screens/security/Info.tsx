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
  Image,

} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
function Separator() {
    return <View style={styles.separator} />;
  }
const bgImg = require("../../../assets/bg/wallpaper.png");
export default class Info extends React.Component {

  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <ImageBackground source={bgImg} style={styles.backgroundApp}>
        <Text style={styles.titleText}>Countryside App</Text>
        <Text style={styles.subtitleText}>
          A virtual store where you can buy or sell the best products of the field.
        </Text>
          <Text style={styles.subtitleText}>
          Get to know us and be part of the team</Text>
        <View style={styles.container}>
            <Image
                source={require('../../../assets/bg/carrot.png')}
                style={{width: 100, height: 100}}
            />
            <Separator />
            <Button 
                title="Go to Login"
                onPress={() => this.props.navigation.push("Login")}
            />
            <Separator />
            <Button 
                title='Sign Up' 
                onPress={() => this.props.navigation.push('SignUp')}/>
            <Separator />
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
    left:0,
    top:60
  },
  subtitleText: {
    fontSize: 30,
    justifyContent: "center",
    color: "#fff",
    alignContent:"center",
    left:0,
    top:80
  },
  separator: {
    marginVertical: 4,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
    left:0
  },
})