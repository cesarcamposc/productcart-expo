import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';

import React from 'react'
import { cartSlice } from '../store/cartSlice';

const ProductDetailsScreen = () => {
  
  const product = useSelector((state)=> state.products.selectedProduct);
  const dispatch = useDispatch();

  const { width } = useWindowDimensions();

  const addToCart = ()=>{
    dispatch(cartSlice.actions.addCartItem({product}))   
  }

  return (
    <View>
      <ScrollView>
        {/* Image carousel */}
        <FlatList
          data={product.images}
          renderItem={({ item }) => (
            <Image source={{ uri: item }} style={{ width, aspectRatio: 1 }} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />

        <View style={{ padding: 20 }}>
          {/* Title */}
          <Text style={styles.name}>{product.name}</Text>

          {/* Price */}
          <Text style={styles.price}>${product.price}</Text>

          {/* Description */}
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>

      {/* Add Cart Button */}
      <Pressable onPress={addToCart} style = {styles.button}>
        <Text style = {styles.buttonText}>ADD TO CART</Text>        
      </Pressable>

      {/* Navigation Icon */}
    </View>
  );
}

export default ProductDetailsScreen

const styles = StyleSheet.create({
    name:{
        fontSize: 35,
        fontWeight: '600',
        marginVertical: 10,
    },

    price: {
        fontWeight: '600',
        fontSize: 20,
        letterSpacing: 3,        
    },

    description: {
        marginVertical: 10,
        fontSize: 15,
        fontWeight: '300',
        lineHeight: 30,
    },

    button:{
        position: 'absolute',
        backgroundColor: 'purple',
        bottom: 30,
        width: '80%',
        alignSelf: 'center',
        padding: 20,
        borderRadius: 100,
        alignItems:'center',
    },

    buttonText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 20,
    }
})