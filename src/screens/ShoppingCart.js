import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native'

import CartListItem from '../components/CartListItem'
import React from 'react'
import cart from '../data/cart'
import { useSelector } from 'react-redux'

const ShoppingCartTotals = ()=>{
  
  
  
  return(
    <View style={styles.totalContainer}>
    <View style={styles.row}>
      <Text style={styles.text}>Subtotal</Text>
      <Text style={styles.text}>400,000 US$</Text>
    </View>

    <View style={styles.row}>
      <Text style={styles.text}>Delivery</Text>
      <Text style={styles.text}>10,000 US$</Text>
    </View>

    <View style={styles.row}>
      <Text style={styles.textBold}>Total</Text>
      <Text style={styles.textBold}>410,000 US$</Text>
    </View>
  </View>
  )
  
} 
const ShoppingCart = () => {
  const cartItems = useSelector ((state)=>state.cart.items)
  return (
    <>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={ShoppingCartTotals}
      />
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>CHECKOUT</Text>
      </Pressable>
    </>
  );
}

export default ShoppingCart

const styles = StyleSheet.create({
  totalContainer: {
    margin: 20,
    paddingTop: 10,
    borderColor: "purple",
    borderTopWidth: 1,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 2,
  },

  text: {
    fontSize: 16,
    color: "green",
  },

  textBold: {
    fontSize: 16,
    fontWeight: "bold",
    color: "green",
  },
  
  button: {
    position: "absolute",
    backgroundColor: "purple",
    bottom: 30,
    width: "80%",
    alignSelf: "center",
    padding: 20,
    borderRadius: 100,
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 20,
  },
});