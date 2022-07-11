import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import CountryPicker from 'react-native-country-picker-modal';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import useSignIn from '../../splash/useAuth';

const CountrySelector = () => {
  const {countryCode, mobile, country} = useSignIn();
  // const [country, setCountry] = useState('');
  // const [countryCode, setCountryCode] = useState('');
  // const [mobile, setMobile] = useState('');
  const onSelect = country => {
    console.log(country);
    setCountryCode(country.cca2);
    setCountry(country);
  };
  const onSignUpClick = () => {
    if (country === '') {
      alert('Select your Country');
    } else if (mobile === '') {
      alert('Select your Mobile Number');
    } else if (mobile === '') {
      alert('Select your Mobile Number');
    } else if (mobile === '') {
      alert('Select your Mobile Number');
    } else if (mobile === '') {
      alert('Select your Mobile Number');
    } else if (mobile === '') {
      alert('Select your Mobile Number');
    } else if (mobile === '') {
      alert('Select your Mobile Number');
    } else if (mobile === '') {
      alert('Select your Mobile Number');
    } else {
      setLoading(!isLoading);
      loginUser(getLoginModel(userName, mobile))
        .then(res => {
          setLoading(isLoading);
          console.log('TOKEN : ', res.headers.token);
          setUserName('');
          setMobile('');
          console.log('LOGIN RESPONSE => ' + JSON.stringify(res));

          if (res.data.success) {
            storeLocalData(constants.ACCESS_TOKEN, res.headers.token);
            storeLocalData(constants.USER_ID, res.data.id);
            storeLocalData(constants.USER_NAME, userName);

            navigation.navigate(NAV_TYPES.HOME_SCREEN, {});
          }
        })
        .catch(error => {
          console.log('LOGIN ERROR ', error);
        });
    }
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
              onChangeText={text => setMobile(text)}
              value={mobile}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default CountrySelector;
