import * as React from 'react';
import { TouchableOpacity, TextInput, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const Form=()=>{
  const [getPrice,setPrice]=React.useState(0)
  const [getDiscount,setDiscount]=React.useState(0)
  const [getSave,setSave]=React.useState(0)
  const [getFinalPrice,setFinalPrice]=React.useState(0)

  const Calculations=()=>{
    
    var a= getDiscount
    var disc= 100-a;
    var FinalPrice= (disc/100)*getPrice;
    setFinalPrice(FinalPrice)

  var Amountsaved= getPrice-getFinalPrice
    setSave(Amountsaved)
    
  }

  return(
    <View >
    <Text style={styles.text}> Price: </Text>
  <TextInput
        style={styles.input}
        onChangeText={setPrice}
         placeholder="Original Price"
        value={getPrice}
      />
<Text style={styles.text}> Discount: </Text>
      <TextInput
        style={styles.input}
        onChangeText={setDiscount}
        value={getDiscount}
        placeholder="Discount percentage"
      
      />
      <Text style={styles.text}> You save: {getSave} </Text>
      <Text style={styles.text}> Final Price: {getFinalPrice} </Text>
  <View style={{alignItems: "center",justifyContent:"center" }}>
       <TouchableOpacity
          style={styles.button}
          onPress={()=>{
            
    var a= getDiscount
    var disc= 100-a;
    var FinalPrice= (disc/100)*getPrice;
    setFinalPrice(FinalPrice)

  var Amountsaved= getPrice-FinalPrice
    setSave(Amountsaved)
            
          }}
        >
         <Text style={styles.text}> Calculate</Text>
        </TouchableOpacity> 
        </View>
</View>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Change code in the editor and watch it change on your phone! Save to get a shareable url.
      </Text>
    <Form/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
    padding: 8,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
   button:{
    backgroundColor:"#9450ed",justifyContent:"center",margin:1, width:100, height:40,padding: 2
  },
   text:{
    paddingLeft:12,paddingTop:12, alignItems: 'center',justifyContent:"center",color: "black", fontWeight:"bold"
  }
});
