import * as React from 'react';
import { View } from 'react-native';
import { Button, Paragraph, Menu, Divider, Provider } from 'react-native-paper';

export default class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  };
  state = {
    visible: false,
  };

  _openMenu = () => this.setState({ visible: true });

  _closeMenu = () => this.setState({ visible: false });

  render() {
    return (
      <Provider>
        <View
          style={{
            paddingTop: 50,
            flexDirection: "row-reverse",
            justifyContent: 'flex-end'
          }}>
          <Menu
            visible={this.state.visible}
            onDismiss={this._closeMenu}
            anchor={
              <Button onPress={this._openMenu}>Show menu</Button>
            }
          >
            <Menu.Item onPress= {this.props.navigation.push('Login')} title="Login"/>
            <Menu.Item onPress={() => this.props.navigation.push("Register")} title="Register" />
            <Divider />
            <Menu.Item onPress={() => this.props.navigation.push("ContactUs")} title="ContactUs" />
          </Menu>

        </View>
      </Provider>
    );
  }
}
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Info">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ContactUs" component={ContactUs} />
        <Stack.Screen name="Info" component={Info} />
      </Stack.Navigator>
    </NavigationContainer >
  );