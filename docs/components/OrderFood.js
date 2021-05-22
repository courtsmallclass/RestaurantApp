import * as React from 'react';
import {useState} from 'react';
import { Button, Text, View, TextInput, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

function OrderFood() {
  const [total, setTotal] = useState(0)
  const [lasagne, setLasagne] = useState(0)
  const [cr, setCR] = useState(0)
  const [cp, setCP] = useState(0)
  const [chocCake, setChocCake] = useState(0)
  const [tiramisu, setTira] = useState(0)
  const [cannoli, setCannoli] = useState(0)
  const [cap, setCap] = useState(0)

  return(
    <View style={styles.bckgrd}>
      <h2>Order Food Below</h2>
      <h3> Dinner: </h3>
      <Text> Lasagne </Text>
      <View style={styles.buttons}>
        <Button title="-" onPress={() => setLasagne((prevValue => prevValue - 1))}  />
        <Text>{lasagne}</Text>
        <Button title="+" onPress={() => setLasagne((prevValue => prevValue + 1))} />
      </View>

      <Text> Cheese Ravoli </Text>
      <View style={styles.buttons}>
        <Button title="-" onPress={() => setCR((prevValue => prevValue - 1))} />
        <Text>{cr}</Text>
        <Button title="+" onPress={() => setCR((prevValue => prevValue + 1))} />
      </View>

      <Text> Chicken Parmesan </Text>
      <View style={styles.buttons}>
        <Button title="-" onPress={() => setCP((prevValue => prevValue - 1))} />
        <Text>{cp}</Text>
        <Button title="+" onPress={() => setCP((prevValue => prevValue + 1))} />
      </View>

      <h3> Dessert: </h3>
      <Text> Chocolate Lava Cake </Text>
      <View style={styles.buttons}>
        <Button title="-" onPress={() => setChocCake((prevValue => prevValue - 1))} />
        <Text>{chocCake}</Text>
        <Button title="+" onPress={() => setChocCake((prevValue => prevValue + 1))} />
      </View>

      <Text> Tiramisu </Text>
      <View style={styles.buttons}>
        <Button title="-" onPress={() => setTira((prevValue => prevValue - 1))} />
        <Text>{tiramisu}</Text>
        <Button title="+" onPress={() => setTira((prevValue => prevValue + 1))} />
      </View>

      <Text> Cannolis </Text>
      <View style={styles.buttons}>
        <Button title="-" onPress={() => setCannoli((prevValue => prevValue - 1))} />
        <Text>{cannoli}</Text>
        <Button title="+" onPress={() => setCannoli((prevValue => prevValue + 1))} />
      </View>

      
      <Text> Cappuccino </Text>
      <View style={styles.buttons}>
        <Button title="-" onPress={() => setCap((prevValue => prevValue - 1))} />
        <Text>{cap}</Text>
        <Button title="+" onPress={() => setCap((prevValue => prevValue + 1))} />
      </View>
    </View>
  );
}

const styles= StyleSheet.create ({
  //The styling for the buttons is based on the example from https://reactnative.dev/docs/button
    buttons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginLeft: "150px",
      marginRight: "50px",
    },

    bckgrd: {
      backgroundColor: "#cfd8dc"
    },
  });
export default OrderFood;