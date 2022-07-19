import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import CountryPicker from 'react-native-country-picker-modal';
import styles from './styles';

const CountrySelector = ({data, setData}) => {
  const [country, setCountry] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const onSelect = country => {
    console.log(country);
    const code = country.cca2;
    setCountryCode(country.cca2);
    setCountry(country);
    setData({...data, country: country.name, countryCode: code});
  };

  const mobileHandler = val => {
    setData({
      ...data,
      mobile: val,
    });
  };
  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
      }}>
      <Text style={[styles.text_footer, {marginTop: 20}]}> Country </Text>
      <View
        style={{
          flexDirection: 'column',
          borderBottomWidth: 1,
          borderBottomColor: '#f2f2f2',
          paddingBottom: 5,
        }}>
        {/* <_TextInput editable={true} style={{width:'20%'}} /> */}
        <CountryPicker
          containerButtonStyle={{
            height: 40,
            marginTop: 5,
            justifyContent: 'center',
          }}
          countryCode={countryCode}
          withCountryNameButton={true}
          visible={false}
          withFlag={true}
          withCloseButton={true}
          withAlphaFilter={true}
          withCallingCode={true}
          //   withCurrency={true}
          withEmoji={true}
          withCountryNameButton={true}
          //   withCurrencyButton={true}
          //   withCallingCodeButton={true}
          withFilter={true}
          withModal={true}
          onSelect={onSelect}
          // value={data.country}
          // onChange={val => setData({...data, country: val.name})}
        />
        <View style={{height: '2%', backgroundColor: 'green'}} />
      </View>
      <View style={{flexDirection: 'column'}}>
        <Text style={[styles.text_footer, {marginTop: 20}]}>Phone Number</Text>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <View
            style={{
              margin: 5,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'lightgray',
              opacity: 0.5,
              padding: 5,
              borderRadius: 5,
            }}>
            <Text style={styles.text_code}>+{country.callingCode}</Text>
          </View>
          <View style={{width: '75%'}}>
            <TextInput
              style={{
                borderBottomWidth: 1,
                borderBottomColor: '#f2f2f2',
                paddingBottom: 5,
              }}
              placeholder="Enter your phone number"
              placeholderTextColor="#05375a"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={val => mobileHandler(val)}
              value={data.mobile}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default CountrySelector;
