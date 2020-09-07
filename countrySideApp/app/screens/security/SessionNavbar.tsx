import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, Alert, Button, AsyncStorage, View, SafeAreaView } from "react-native";
import * as RootNavigation from '../RootNavigation';
import Constants from 'expo-constants';
import { color } from "react-native-reanimated";

function Separator() {
  return <View style={styles.separator} />;
}
export default class SessionNavbar extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    isLoggedIn: false,
    name: "",
  };

  async componentDidMount() {
    let session = await AsyncStorage.getItem("session");

    if (session) {
      this.setState({
        isLoggedIn: true,
        name: JSON.parse(session).data.username,
      });
    }
  }

  signOut = () => {
    Alert.alert("Sign out", "Do you want to sign out?", [
      {
        text: "Yes",
        onPress: () => {
          AsyncStorage.removeItem("session");
          this.setState({
            isLoggedIn: false,
            name: "",
          

          });
          this.props.navigation.push("Info");
        },
      },
      {
        text: "No",
      },
    ]);
  };

  render() {
    if (this.state.isLoggedIn) {
      return (

        <View>
          <Button
            title="Logout"
            onPress={this.signOut}
          />
          <Text>In session {this.state.name}</Text>
          <Separator /> 
          <Button
            title="Contact Us"
            onPress={() => this.props.navigation.push("ContactUs")}
          />
        </View>

      );
    } else {
      return (

        <View >
          <Button 
            title="Go to Login"
            onPress={() => this.props.navigation.push("Login")}
          />
          <Separator />
          <Button 
            title='Sign Up' 
            onPress={() => this.props.navigation.push('SignUp')}/>
          <Separator />
          <Button style={{color:"green"}}
            title="Contact Us"
            onPress={() => this.props.navigation.push("ContactUs")}
          />
          </View>

      );
    }
  }
}

const styles = StyleSheet.create({
  loginView: {
    flex: 1,
    alignItems: "center",
    marginBottom: 50,
    zIndex: 1,
  },
  separator: {
    marginVertical: 4,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
    left:0
  },
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16,
    alignContent:"stretch",
    position: 'absolute',
    top:  0,
    left: 0,
    width: 80,
    height:60,
    fontSize:2,
 
    
  },
  botton:{
    flex:1,
    position: 'absolute',
    bottom:0,
  }
});