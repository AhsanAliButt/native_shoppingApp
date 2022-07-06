import {useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';
import {goToHomePage} from '../../constants/consttant';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {loginUser, signOut, signUpUser} from '../../../redux/slicer/AuthSlicer';

export default useSignIn = (email, password) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dateOfBirth: '',
    gender: '',
    phone: '',
    secretQuestion: '',
    secretAnswer: '',
    recoverEmail: '',
  });

  const loginHandler = async (email, password) => {
    let user = {
      email,
      password,
    };
    dispatch(loginUser(user));
  };
  const signOutHandler = async () => {
    console.log('signOutHandler');
    dispatch(signOut());
    console.log('dispatched done');
  };

  const registerHandler = async (email, password) => {
    console.log('registerHandler', email, password);
    if (email.length < 4 || password.length < 8) {
      alert('Please enter a valid email and password');
    } else {
      let userDetails = {
        email,
        password,
      };
      navigation.navigate('userDetails');
    }
    dispatch(signUpUser(userDetails));
  };

  const userDetailsHandler = async () => {
    console.log('userDetailsHandler');
  };

  return {loginHandler, signOutHandler, registerHandler};
};

// Write a Programe get UserDetails from singup screen "Done"
// Send them to RegisterHandler and Save in state "Done"
// and userDetails Screen and send them all to the reducer
