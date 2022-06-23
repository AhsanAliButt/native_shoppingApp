import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {windowWidth} from '../../constants/consttant';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CartItems = ({data, key}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        padding: 5,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          flex: 1,
        }}>
        <Image
          source={data.image}
          style={{width: 70, height: 70, borderRadius: 10, marginRight: 8}}
        />
        <View style={{width: windowWidth - 220}}>
          <Text
            style={{fontSize: 14, fontFamily: 'Roboto-Medium', color: '#333'}}>
            {data.title}
          </Text>
          <Text
            style={{
              textTransform: 'uppercase',
              fontSize: 14,
              fontFamily: 'Roboto-Medium',
              color: '#333',
            }}>
            50rs/kg
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: 'red',
          borderRadius: 5,
          padding: 2,
        }}>
        <MaterialCommunityIcons name="minus" size={20} color="green" />
      </TouchableOpacity>
      <View>
        <Text
          style={{
            textAlign: 'center',
            fontFamily: 'Roboto-Medium',
            fontSize: 20,
          }}>
          {' '}
          1{' '}
        </Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: 'lightgreen',
          borderRadius: 5,
          padding: 2,
        }}>
        <MaterialCommunityIcons name="plus" size={20} color="green" />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: 'lightgray',
          borderRadius: 5,
          padding: 2,
          margin: 5,
        }}>
        <MaterialCommunityIcons name="delete-outline" size={20} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default CartItems;
