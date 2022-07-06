import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native';
import styles from './styles';

const TextInputWithLabel = ({
  label,
  value,
  style,
  isSecure,
  onChangeText,
  placeHolder,
  multiline,
  onFocus,
  ...props
}) => {
  return (
    <View style={{marginBottom: 16}}>
      <Text
        style={{
          fontSize: 16,
          marginBottom: 8,
          fontWeight: 'bold',
          textAlign: 'center',
        }}>
        {label}
      </Text>
      <TouchableOpacity>
        <TextInput
          value={value}
          placeholder={placeHolder}
          onChangeText={onChangeText}
          multiline={multiline}
          onFocus={onFocus}
          style={style}
          placeholderTextColor="black"
          {...props}
        />
      </TouchableOpacity>
    </View>
  );
};

export default TextInputWithLabel;
