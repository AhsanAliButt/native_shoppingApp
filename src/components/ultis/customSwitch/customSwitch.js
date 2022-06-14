import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const CustomSwitch = ({selectionMode, option1, option2, onSelectSwitch}) => {
  const [selected, setSelected] = useState(selectionMode);
  const updateSwitchData = value => {
    setSelected(value);
    onSelectSwitch(value);
  };

  return (
    <View
      style={{
        height: 44,
        width: '100%',
        backgroundColor: '#e4e4e4',
        borderRadius: 10,
        borderColor: '#AD40AF',
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchData(1)}
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
          backgroundColor: selected === 1 ? '#AD40AF' : '#e4e4e4',
        }}>
        <Text
          style={{
            fontSize: 14,
            fontFamily: 'Roboto-Medium',
            color: selected === 1 ? 'white' : '#AD40AF',
          }}>
          {' '}
          {option1}{' '}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchData(2)}
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
          backgroundColor: selected === 2 ? '#AD40AF' : '#e4e4e4',
        }}>
        <Text
          style={{
            fontSize: 14,
            fontFamily: 'Roboto-Medium',
            color: selected === 2 ? 'white' : '#AD40AF',
          }}>
          {' '}
          {option2}{' '}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomSwitch;
