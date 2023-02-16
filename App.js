import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, ScrollView, Button, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';

const Profile = (props) => {
  return <View style={{flexDirection: "row"}}> 
          <Image source={props.source}
            style={{
              width: props.width,
              height: props.height
            }}/>
          <Text>{props.title}</Text>
         </View>
};

const Btn = (props) => {
  const [count, setCnt] = useState(0);
  
  useEffect(() => {
    console.log('didMount');
  }, []);  
  
  useEffect(() => {
    console.log('didUpdate', count);
    if(count > 10) {
      setCnt(0);
    }
  }, [count]);  

  return <View>
            <Text onPress={() => setCnt(count + 1)}
              style={{backgroundColor: "pink",
                width: 100,
                height: 100,
                textAlign: 'center'}}>
              {count}
            </Text>
            {count > 5 && <ActivityIndicator/>}
         </View>
  
}

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.text}>paul2</Text>
      <Image source={require('./assets/img.png')}/>
      <Button title="안녕?"
        onPress={() => {
          console.log("D");
        }}
      /> 

      <Profile source={require('./assets/img.png')} 
                title="d" width={100} height={100}/>

      <Profile source={require('./assets/img.png')}
                title="d" width={25} height={25}/>

      <Btn/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 20,
    fontWeight: "bold"
  },
});
