import {View, Text, Touchable, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

const SeeAll = ({navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={{alignItems: 'center', justifyContent: 'center'}}>
      <View>
        <Text>Go back</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SeeAll;
