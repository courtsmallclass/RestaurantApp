import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import OrderFood from './components/OrderFood';
import Survey from './components/Survey';

export default class App extends React.Component {
  render() {
    let data = {
      dinnerArray: [
        {itemName: "Lasagne: ", itemPrice: " $12", 
          itemDescription: 
          "Meat and cheese layered between house-made pasta with bell peppers and onions.",
        },
        {
          itemName: "Cheese Ravioli: ",
          itemPrice: " $10",
          itemDescription: "Cheese-filled ravioli served with house red sauce.",
        },

        {itemName: "Chicken Parmesan: ",
          itemPrice: " $14",
          itemDescription:
            "Breaded chicken topped with marinara sauce and lots of cheese served over house made spaghetti.",
        },
      ],
      dessertArray : [
        {itemName: "Chocolate Lava Cake:  ", itemPrice: " $10",
          itemDescription: "Dark chocolate molten lava cake. Serves 2-3",
        },
        {itemName: "Tiramisu:  ", itemPrice: " $8",
          itemDescription: "Layers of espresso-soaked ladyfingers and marscarpone cream topped with cocoa and espresso powder",
        },
        {itemName: "Cannolis:  ", itemPrice: " $5",
          itemDescription: "Three flaky pastries enclosing a rich, ricotta filling dotted with decadent chocolate chips.",
        },
        {itemName: "Cappuccino:  ", itemPrice: " $5",
          itemDescription: "Steamed milk with two ristretto shots of espresso.",
        },
      ],
    }
    return <MyElem {...data}></MyElem>
  }
}

class MyElem extends React.Component {
  render() {
    return (
      <>
      <View style={styles.menu}>
      <div>
      <h1>Menu</h1>
      <h3>Dinner</h3>
        {this.props.dinnerArray.map((elem)=> {
          return (
            <>
            <p>
              {elem.itemName}
              {elem.itemPrice}
            </p>
            <p>
              {elem.itemDescription}
            </p>
            </>
          );
        })}
      <h3>Dessert:</h3>
        {this.props.dessertArray.map((elem)=> {
          return (
            <>
            <p>
              {elem.itemName}
              {elem.itemPrice}
            </p>
            <p>
              {elem.itemDescription}
            </p>
            </>
          );
        })}
      </div>
      </View>
      <OrderFood />
      <Survey />
      </>
    );
  }
}

const styles= StyleSheet.create ({
    menu: {
      marginBottom: "20px",
      marginLeft: "10px",
      marginRight: "10px",
      border: "solid black 0.5px",
      padding: "5px",
    },
});

