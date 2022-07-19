import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

const useCart = () => {
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

  return (
    <View>
      <Text>useCart</Text>
    </View>
  );
};

export default useCart;
