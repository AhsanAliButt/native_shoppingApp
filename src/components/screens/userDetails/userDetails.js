import {
  TouchableOpacity,
  TextInput,
  Text,
  View,
  StatusBar,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import useSignIn from '../../screens/splash/useAuth';
import DatePicker from 'react-native-date-picker';
import Foundation from 'react-native-vector-icons/Foundation';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import CountrySelector from './components/countryPicker';
import UploadImage from './components/imagePicker';
import moment from 'moment';

const UserDetails = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const selectedDate = moment(date).format('MMMM D, YYYY');
  const currentDate = moment(date).format('DD-MM-YYYY');

  //convert month to name

  const {onSignUpHandler} = useSignIn();

  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    country: '',
    countryCode: '',
    mobile: '',
    imagePath: '',
    age: '',
  });
  useEffect(() => {
    console.log(data);
  }, [data]);

  const radio_props = [
    {label: 'Male  ', value: 'Male'},
    {label: 'Female  ', value: 'Female'},
    {label: 'Other  ', value: 'Other'},
  ];

  const handleCheckBox = val => {
    if (val) {
      setToggleCheckBox(true);
    } else {
      setToggleCheckBox(false);
    }
  };

  const handleFirstName = val => {
    const result = val.replace(/[^a-z]/gi, '');
    setData({...data, firstName: result});
    console.log(result);
  };

  const handleLastName = val => {
    const result = val.replace(/[^a-z]/gi, '');
    setData({...data, lastName: result});
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
                  onChangeText={val => handleFirstName(val)}
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
              initial={-1}
              formHorizontal={true}
              buttonSize={8}
              // labelHorizontal={true}
              buttonColor={'#2196f3'}
              animation={true}
              onPress={value => setData({...data, gender: value})}
            />
          </View>

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
                setData({...data, age: moment(date).format('MMMM D, YYYY')});
              }}
              onCancel={() => {
                setOpen(false);
              }}
              onDateChange={date => {
                setDate(date);
                setData({...data, age: date});
              }}
            />
          </View>
          <CountrySelector data={data} setData={setData} />
          <UploadImage data={data} setData={setData} />

          <View style={[styles.button, {marginTop: 50, marginBottom: 50}]}>
            <TouchableOpacity
              style={styles.signIn}
              onPress={() => onSignUpHandler(data)}>
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
