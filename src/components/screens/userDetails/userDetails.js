import {
  TouchableOpacity,
  TextInput,
  Text,
  View,
  Platform,
  StatusBar,
  ScrollView,
  Dimensions,
  Button,
} from 'react-native';
import {Checkbox} from '@react-native-community/checkbox';
import React from 'react';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import TextInputWithLabel from '../../textInput/TextInputWithLabel';
import * as Animatable from 'react-native-animatable';
import validators from '../../ultis/Validator';
import {useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import useSignIn from '../../screens/splash/useAuth';
import CheckBox from '@react-native-community/checkbox';
import RNPickerSelect from 'react-native-picker-select';
import DatePicker from 'react-native-date-picker';
import Foundation from 'react-native-vector-icons/Foundation';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import CountrySelector from './components/countryPicker';
import UploadImage from './components/imagePicker';

const UserDetails = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const currentDate = date.toLocaleDateString();

  console.log(currentDate);

  const {registerHandler} = useSignIn();
  // const dispatch = useDispatch();
  const [data, setData] = useState({
    email: '',
    password: '',
    gender: '',
    confirm_password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
    isValidConfirmPassword: true,
  });
  const textInputChange = val => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = val => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };
  const handleConfirmPasswordChange = val => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        confirm_password: val,
        isValidConfirmPassword: true,
      });
    } else {
      setData({
        ...data,
        confirm_password: val,
        isValidConfirmPassword: false,
      });
    }
  };

  const handleValidEmail = val => {
    if (!val) {
      setData({
        ...data,
        isValidEmail: true,
      });
    } else {
      if (val.trim.length >= 4) {
        setData({
          ...data,
          isValidEmail: true,
        });
      } else {
        setData({
          ...data,
          isValidEmail: false,
        });
      }
    }
  };

  const handleValidPassword = val => {
    if (!val) {
      setData({
        ...data,
        isValidPassword: true,
      });
    } else {
      if (val.trim.length >= 8) {
        setData({
          ...data,
          isValidPassword: true,
        });
      } else {
        setData({
          ...data,
          isValidPassword: false,
        });
      }
    }
  };

  const handleConfirmValidPassword = val => {
    if (!val) {
      setData({
        ...data,
        isValidPassword: true,
      });
    } else {
      if (val.trim.length >= 8) {
        setData({
          ...data,
          isValidPassword: true,
        });
      } else {
        setData({
          ...data,
          isValidPassword: false,
        });
      }
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };
  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
  };

  const email = data.email;
  const password = data.password;

  const radio_props = [
    {label: 'Male  ', value: 'Male'},
    {label: 'Female  ', value: 'Female'},
    {label: 'Other  ', value: 'Other'},
  ];

  // const handleSubmit = () => {
  //   if (
  //     data.email.trim().length >= 4 &&
  //     data.password.trim().length >= 8 &&
  //     data.confirm_password.trim().length >= 8
  //   ) {
  //     if (data.password === data.confirm_password) {
  //       registerHandler(data.email, data.password);
  //     } else {
  //       alert('Password not match');
  //     }
  //   } else {
  //     alert('Please fill all field');
  //   }
  // };
  const handleCheckBox = val => {
    if (val) {
      setToggleCheckBox(true);
    } else {
      setToggleCheckBox(false);
    }
  };

  const handleLastName = val => {
    const result = val.replace(/[^a-z]/gi, '');
    console.log(result);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}> Enter Your Details !</Text>
      </View>

      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View>
              <Text style={styles.text_footer}> FirstName </Text>
              <View
                style={[
                  styles.action,
                  {
                    borderBottomColor: '#009387',
                    borderBottomWidth: 1,
                    width: 150,
                  },
                ]}>
                <TextInput
                  placeholder="Enter your first name"
                  maxLength={10}
                  type="text"
                  style={styles.textInput}
                  autoCapitalize="none"
                  onChangeText={val => textInputChange(val)}
                />
              </View>
            </View>
            <View>
              <Text style={styles.text_footer}> LastName </Text>
              <View
                style={[
                  styles.action,
                  {
                    borderBottomColor: '#009387',
                    borderBottomWidth: 1,
                    width: 150,
                  },
                ]}>
                <TextInput
                  placeholder="Enter your last name"
                  keyboardType="number-pad"
                  style={styles.textInput}
                  maxLength={10}
                  autoCapitalize="none"
                  onChangeText={val => handleLastName(val)}
                />
              </View>
            </View>
          </View>
          <Text style={[styles.text_footer, {marginTop: 20}]}>Gender</Text>
          <View style={styles.action}>
            <RadioForm
              radio_props={radio_props}
              initial={0}
              formHorizontal={true}
              buttonSize={8}
              // labelHorizontal={true}
              buttonColor={'#2196f3'}
              animation={true}
              onPress={value => {
                console.log(value);
              }}
            />
          </View>
          {/* <View style={styles.action}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={val => handleCheckBox(val)}
          />
          <CheckBox
            disabled={false}
            value={toggleCheckBox2}
            onValueChange={newValue => setToggleCheckBox2(newValue)}
          />
          <CheckBox value={true} />
          <CheckBox value={false} />
        </View> */}

          <Text style={[styles.text_footer, {marginTop: 20}]}> Age</Text>
          <View
            style={{
              marginTop: 10,
              borderBottomWidth: 1,
              borderBottomColor: '#f2f2f2',
              paddingBottom: 5,
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <Text style={styles.text1}> {currentDate} </Text>
              </View>
              <TouchableOpacity onPress={() => setOpen(true)}>
                <Foundation name="calendar" size={20} color="#2196f3" />
              </TouchableOpacity>
            </View>
            <DatePicker
              modal
              style={styles.datePickerStyle}
              mode="date"
              placeholder="Select date"
              format="DD/MM/YYYY"
              minDate="01-01-1900"
              maxDate="01-01-2020"
              open={open}
              date={date}
              androidVariant="iosClone"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  right: -5,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  borderColor: 'gray',
                  alignItems: 'flex-start',
                  borderWidth: 0,
                  borderBottomWidth: 1,
                },
                placeholderText: {
                  fontSize: 17,
                  color: 'gray',
                },
                dateText: {
                  fontSize: 17,
                },
              }}
              onConfirm={date => {
                setOpen(false);
                setDate(date);
              }}
              onCancel={() => {
                setOpen(false);
              }}
              onDateChange={date => {
                setDate(date);
              }}
            />
          </View>
          <CountrySelector />
          <UploadImage />
          {/* <RNPickerSelect
          onValueChange={value => console.log(value)}
          useNativeAndroidPickerStyle={false}
          placeholder={{
            label: 'Select Your Country...',
            value: null,
          }}
          style={{
            placeholder: {color: '#05375a'},
            inputAndroid: {
              color: 'white',
              borderRadius: 5,
            },
          }}
          items={[
            {label: 'Football', value: 'football'},
            {label: 'Baseball', value: 'baseball'},
            {label: 'Hockey', value: 'hockey'},
            {label: 'Football', value: 'football'},
            {label: 'Baseball', value: 'baseball'},
            {label: 'Hockey', value: 'hockey'},
            {label: 'Football', value: 'football'},
          ]}
        /> */}

          <View style={[styles.button, {marginTop: 50, marginBottom: 50}]}>
            <TouchableOpacity
              style={styles.signIn}
              onPress={() => registerHandler(email, password)}>
              <LinearGradient
                colors={['#08d4c4', '#01ab9d']}
                style={styles.signIn}>
                <Text style={styles.textSign}> Register </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

export default UserDetails;
