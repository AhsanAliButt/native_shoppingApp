import {useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';
import {goToHomePage} from '../../constants/consttant';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {loginUser, signOut, signUpUser} from '../../../redux/slicer/AuthSlicer';
import {useEffect} from 'react';
import ImagePicker from 'react-native-image-crop-picker';

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
    filePath: null,
    countryCode: '',
    country: '',
    mobile: '',
  });
  useEffect(() => {
    console.log(userDetails);
  }, [userDetails]);

  const filePath = userDetails.filePath;
  const dateOfBirth = userDetails.dateOfBirth;
  const firstName = userDetails.firstName;
  const lastName = userDetails.lastName;
  const gender = userDetails.gender;
  const country = userDetails.country;
  const countryCode = userDetails.countryCode;
  const mobile = userDetails.mobile;

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

  const registerHandler = async (username, email, password) => {
    console.log('emai =>', email, 'Password', password, 'username', username);
    if (email.length < 4 || password.length < 8) {
      alert('Please enter a valid email and password');
    } else {
      setUserDetails({
        email: email,
        password: password,
        username: username,
      });
      navigation.navigate('userDetails');
    }
    // dispatch(signUpUser(userDetails));
  };

  const userDetailsHandler = async () => {
    console.log('userDetailsHandler');
  };

  const countryCodeHandler = async (countryCode, country) => {
    setUserDetails({
      ...userDetails,
      countryCode: countryCode,
      country: country,
    });
  };
  const phoneHandler = async phone => {
    setUserDetails({
      ...userDetails,
      phone: phone,
    });
  };

  const imagePathHandler = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        console.log(image);
        setUserDetails({
          filePath: image.path,
        });
      })
      .catch(error => {
        console.log(error);
      })
      .done();
  };

  return {
    imagePathHandler,
    loginHandler,
    signOutHandler,
    registerHandler,
    setUserDetails,
    userDetailsHandler,
    filePath,
    dateOfBirth,
    firstName,
    lastName,
    gender,
    countryCodeHandler,
    phoneHandler,
  };
};

// Write a Programe get UserDetails from singup screen "Done"
// Send them to RegisterHandler and Save in state "Done"
// and userDetails Screen and send them all to the reducer
