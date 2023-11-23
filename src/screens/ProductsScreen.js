import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import React from 'react'
import { productsSlice } from '../store/productsSlice'

const ProductsScreen = ({navigation}) => {

  const dispatch = useDispatch();
  
  const products = useSelector(state =>state.products.products)

  
  return (
    <FlatList
    data={products}
    renderItem={({ item }) => (
      <Pressable onPress={()=> {
        dispatch(productsSlice.actions.setSelectedProduct(item.id))
        navigation.navigate('Product Details')}}       
      style={styles.itemContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
      </Pressable>
             
    )}
    numColumns={2}
  />
  )
}

export default ProductsScreen

const styles = StyleSheet.create({
    itemContainer: {
        width: '50%',
        padding: 1,
      },
    
      image: {    
        width : '100%',
        aspectRatio: 1
      }
})