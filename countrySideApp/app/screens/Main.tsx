import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  FlatList,
  ImageBackground,
  Image,
  Dimensions,
  TouchableHighlight,
  Button,
  SafeAreaView
} from "react-native";

import SessionNavbar from "./security/SessionNavbar";
const bgImg = require("../../assets/bg/main_bg4.jpg");
export default class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      products: [],
      url:
        'http://192.168.100.5:3000/product?filter={"include":[{"relation":"brand"},{"relation":"category"},{"relation":"images"}]}',
    };
  }

  componentDidMount = () => {
    this.getProducts();
  };

  getProducts = () => {
    this.setState({ loading: true });
    fetch(this.state.url)
      .then((data) => data.json())
      .then((data) => {
        this.setState({
          products: data,
          loading: false,
        });
      })
      .catch((err) => {
        //console.log(err);
        Alert.alert("Error", "Error loading products.");
      });
  };

  render() {
    const { navigation } = this.props;
    if (this.state.loading) {
      return (
        <View style={styles.dataViewLoading}>
          <Text>Loading products... please wait.</Text>
        </View>
      );
    } else {
      return (
        <ImageBackground source={bgImg} style={styles.backgroundApp}>
          <View  style={styles.productsView}>
            <SessionNavbar navigation={navigation}></SessionNavbar>
            <Text style={{ color: "orange", fontSize: 25,fontWeight: "bold", }}>Products List</Text>
            
            <FlatList
              style={styles.flatList}
              data={this.state.products}
              renderItem={({ item }) => (
                <View style={styles.productViewContent}>
                  <TouchableHighlight
                    onPress={() => {
                      Alert.alert("Image Tapped", `Product: ${item.name}`);
                    }}
                  >
                    <Image
                      source={{
                        width: 200,
                        height: 150,
                        uri: `http://192.168.100.5:3000/files/2/${item.images[0].id}`,
                      }}
                    />
                  </TouchableHighlight>
                  <Text style={styles.productName}>{item.name}</Text>
                  <Text style={styles.productDescription} numberOfLines={1}>{item.description}</Text>
                  <Text style={styles.productBrand}>Marca: {item.brand.name}</Text>
                </View>
              )}
            ></FlatList>
          </View >
        </ImageBackground>
      );
    }
  }
}

const styles = StyleSheet.create({
  productViewContent: {
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 5,
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  productName: {
    fontSize: 20,
    color: "green",
    borderColor:"white",
    fontWeight: "bold",
  },
  productDescription: {
    fontSize: 20,
    color: "black",
    borderColor:"white",
    fontWeight: "bold",
  },
  productBrand: {
    fontSize: 20,
    color: "black",
    borderColor:"white",
    fontWeight: "bold",
  },
  productsView: {
    alignItems: "center",
    alignContent: "center",
    flex: 1,
  },
  dataViewLoading: {
    alignItems: "center",
    alignContent: "center",
    flex: 1,
  },
  button: {
    alignSelf: "center",
    alignContent: "flex-start",
  },
  itemTitle: {
    padding: 10,
    fontSize: 25,
    height: 44,
    fontWeight: "bold",
  },
  flatList: {
    alignContent: "center",
    textAlign: "center",
    alignSelf: "center",
  },
  img: {
    width: 100,
    height: 100,
  },
  separator: {
    height: 4,
    backgroundColor: "black",
    width: Dimensions.get("window").width / 2,
  },
  backgroundApp: {
    flex: 1,
    width: "100%",
  },

  //http://192.168.100.5:3000
  //<Button title='Sign Up' onPress={() => this.props.navigation.push('SignUp')}/>
});





