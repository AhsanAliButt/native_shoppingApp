import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {windowWidth} from '../../constants/consttant';

const ListItem = ({data}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
        <Image
          source={data.image}
          style={{width: 55, height: 55, borderRadius: 10, marginRight: 8}}
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
          backgroundColor: '#0aada8',
          borderRadius: 10,
          padding: 10,
          borderRadius: 10,
          width: '20%',
        }}>
        <Text
          style={{
            color: '#fff',
            textAlign: 'center',
            fontFamily: 'Roboto-Medium',
            fontSize: 14,
          }}>
          {' '}
          Buy{' '}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListItem;
