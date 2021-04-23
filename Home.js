import React from 'react';
import { StyleSheet, Text, View , TextInput , Button , Linking} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import dictionary from './db';


export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = { 
      word: 'Enter text to discover!',
       definition: 'Enter text to discover!',
       type: 'Enter text to discover!',
      };
  }

 

  getData = async(text) => {
  text = text.toLowerCase();


  const word = dictionary[text]['word'];
  const lexicalCategory = dictionary[text]['lexicalCategory'];
  const definition = dictionary[text]['definition'];

   this.setState({
    word: word.trim(),
    type:lexicalCategory.trim(),
    definition: definition.trim(),
  });
  }



  render() {
    return (
     
      <View style={styles.container}>
      <View style={styles.row}>
      <Icon style={styles.icon} name="search" color='#7f5af0' size={27} />
        <Text style={styles.title}>Search</Text>
        </View>
        <TextInput
        placeholder="Type here to discover!"
        placeholderTextColor = "white"
        keyboardAppearance="dark"
        style={styles.input}
        onChangeText={(text) => {
         this.getData(text)
        }}
      ></TextInput>

      <Text style={styles.text}>Word : {this.state.word}</Text>
      <Text style={styles.text}>Type : {this.state.type}</Text>
      <Text style={styles.text}>Definition : {this.state.definition}</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#16161a",
    padding:0
  },
 
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    height: 40,
    width: 200,
    color:"#ffffff",
  },
  row:{
    flexDirection:'row' 
   },
   icon:{
     padding:10
   },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fffffe",
  },
  text:{
    color:'#fffffe',
    padding:20, 
  }

});