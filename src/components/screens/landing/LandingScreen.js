import {Text, View, Dimensions, Image, TouchableOpacity,ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import styles from './LandingStyle';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
import {useDispatch} from 'react-redux';
import {checkUser} from '../../../redux/slicer/AuthSlicer';
import {useNavigation} from '@react-navigation/native';

const LandingScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const navigate = useNavigation();
  useEffect(() => {
    dispatch(checkUser(navigate));
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duraton="2500"
          source={require('../../../../assets/Ahsan.jpg')}
          style={{width: 200, height: 300, borderRadius: 50}}
        />
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <Text style={styles.title}>Welcome to My Store</Text>
        <Text style={styles.text}> Sign In with Account </Text>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
            <LinearGradient
              colors={['#08d4c4', '#01ab9d']}
              style={styles.signIn}>
              <Text style={styles.textSign}>Get Started</Text>
              <MaterialIcons name="navigate-next" color="#fff" size={20} />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default LandingScreen;
