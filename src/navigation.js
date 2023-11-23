import { FonstAwesone, Ionicons, MaterialIcons } from '@expo/vector-icons'
import { Pressable, Text, View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import ProductDetailsScreen from './screens/ProductDetailsScreen'
import ProductsScreen from './screens/ProductsScreen'
import React from 'react'
import ShoppingCart from './screens/ShoppingCart'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { selectNumberItems } from './store/cartSlice'
import { useSelector } from 'react-redux'

const  Stack = createNativeStackNavigator();
const navigation = () => {

  const numberOfItems = useSelector(selectNumberItems);
  
  return (
    <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen 
        name = 'Products' 
        component={ProductsScreen} 
        options={({navigation}) => ({
            headerRight: ()=>(
                <Pressable onPress={()=>navigation.navigate('Cart')} style= {{flexDirection: 'row'}}>
                    <Ionicons name="cart-outline"size={25} color='gray' />
                    <Text style={{marginLeft: 5, fontWeight:'bold', fontSize: 20}}>{numberOfItems}</Text>
                </Pressable>
            )

        })}/>
            
        <Stack.Screen 
        name = 'Product Details' 
        component={ProductDetailsScreen}/>
        <Stack.Screen 
        name = 'Cart' 
        component={ShoppingCart} />
        </Stack.Navigator>        
    </NavigationContainer>
  )
}

export default navigation