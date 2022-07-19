import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import CartItems from '../../ultis/cart/cartItems';
import {vegetablesList} from '../../constants/consttant';
const CartScreen = ({navigation}) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getCart();
  }, []);
  const getCart = async () => {
    const cart = await AsyncStorage.getItem('cart');
    if (cart) {
      setCart(JSON.parse(cart));
      setIsLoading(false);
    }
  };
  const removeCart = async id => {
    const cart = await AsyncStorage.getItem('cart');
    if (cart) {
      const newCart = JSON.parse(cart).filter(item => item.id !== id);
      setCart(newCart);
      AsyncStorage.setItem('cart', JSON.stringify(newCart));
    }
  };
  const getTotal = () => {
    let total = 0;
    cart.forEach(item => {
      total += item.price;
    });
    setTotal(total);
  };
  const checkout = async () => {
    await AsyncStorage.removeItem('cart');
    setCart([]);
    setTotal(0);
  };

  const renderCart = ({item, index}) => {
    return <CartItems data={item} key={index} />;
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            paddingTop: 16,
            paddingHorizontal: 16,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              fontSize: 18,
              backgroundColor: 'lightgray',
              padding: 10,
              borderRadius: 12,
            }}
            onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons name="chevron-left" size={24} />
          </TouchableOpacity>
          <Text style={{fontSize: 14, fontWeight: 'bold'}}>Order Details</Text>
          <View></View>
        </View>
        <View>
          <Text
            style={{
              paddingTop: 20,
              paddingLeft: 16,
              fontSize: 20,
              fontWeight: '500',
              letterSpacing: 1,
              paddingTop: 20,
              paddingLeft: 16,
              marginBottom: 10,
            }}>
            {' '}
            My Cart{' '}
          </Text>
        </View>
        <View>
          <ScrollView>
            <FlatList data={vegetablesList} renderItem={renderCart} />
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default CartScreen;
