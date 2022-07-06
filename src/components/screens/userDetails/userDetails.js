import {
  TouchableOpacity,
  TextInput,
  Text,
  View,
  Platform,
  StatusBar,
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

const UserDetails = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [toggleCheckBox1, setToggleCheckBox1] = useState(false);
  const [toggleCheckBox2, setToggleCheckBox2] = useState(false);

  // const [date, setDate] = useState(new Date(1598051730000));
  // const [mode, setMode] = useState('date');
  // const [show, setShow] = useState(false);

  // const onChange = (event, selectedDate) => {
  //   const currentDate = selectedDate;
  //   setShow(false);
  //   setDate(currentDate);
  // };

  // const showMode = currentMode => {
  //   setShow(true);
  //   setMode(currentMode);
  // };

  // const showDatepicker = () => {
  //   showMode('date');
  // };

  // const showTimepicker = () => {
  //   showMode('time');
  // };

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

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      {/* <View>
        <View>
          <Button onPress={showDatepicker} title="Show date picker!" />
        </View>
        <View>
          <Button onPress={showTimepicker} title="Show time picker!" />
        </View>
        <Text>selected: {date.toLocaleString()}</Text>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            onChange={onChange}
          />
        )}
      </View> */}

      <View style={styles.header}>
        <Text style={styles.text_header}> Enter Your Details !</Text>
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Text style={styles.text_footer}> FirstName </Text>
        <View style={styles.action}>
          <TextInput
            placeholder="Enter your first name"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={val => textInputChange(val)}
          />
        </View>
        <Text style={[styles.text_footer, {marginTop: 35}]}> LastName </Text>
        <View style={styles.action}>
          <TextInput
            placeholder="Enter your last name"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={val => handlePasswordChange(val)}
          />
        </View>
        <Text style={[styles.text_footer, {marginTop: 35}]}>Gender</Text>
        <View style={styles.action}>
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
        </View>
        <Text style={[styles.text_footer, {marginTop: 35}]}> Age</Text>
        <View style={styles.action}>
          <Text> Age </Text>
        </View>
        <Text style={[styles.text_footer, {marginTop: 35}]}> Country </Text>
        <RNPickerSelect
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
        />
        <View style={styles.action}></View>

        <View style={[styles.button, {marginTop: 50}]}>
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
      </Animatable.View>
    </View>
  );
};

export default UserDetails;

// Write a function which uncheck the checkbox when the user clicks on another checkbox
