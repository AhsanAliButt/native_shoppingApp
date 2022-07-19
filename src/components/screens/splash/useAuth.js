import {useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';
import {goToHomePage} from '../../constants/consttant';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {loginUser, signOut, signUpUser} from '../../../redux/slicer/AuthSlicer';
import {useEffect} from 'react';
import {setUserDetailData} from '../../../redux/slicer/AuthSlicer';
import {selectUserDetailData} from '../../../redux/slicer/AuthSlicer';

export default useSignIn = (email, password) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const userDetail = useSelector(state => state.auth.userDetailData);
  console.log('user useSignIn', userDetail);
  useEffect(() => {
    console.log('user useSignIn coming from redux store', userDetail);
  }, [userDetail]);

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
      let user = {
        username,
        email,
        password,
      };
      console.log('user', user);
      dispatch(setUserDetailData(user));

      navigation.navigate('userDetails');
    }
    // dispatch(signUpUser(userDetails));
  };
  const onSignUpHandler = data => {
    console.log('onSignUpHandler', data);
    if (data.country === '') {
      alert('Select your Country');
    } else if (data.mobile === '') {
      alert('Select your Mobile Number');
    } else if (data.firstname === '') {
      alert('Select your Mobile Number');
    } else if (data.lastName === '') {
      alert('Select your Mobile Number');
    } else if (data.dateOfBirth === '') {
      alert('Select your Mobile Number');
    } else if (data.filePath === '') {
      alert('Select your Mobile Number');
    } else {
      let user = {
        ...userDetail,
        ...data,
      };
      console.log('user Data Total', user);
      dispatch(signUpUser(user))
        .then(res => {
          // setLoading(isLoading);
          // console.log('TOKEN : ', res.headers.token);
          // setUserName('');
          // setMobile('');
          // console.log('LOGIN RESPONSE => ' + JSON.stringify(res));
          // if (res.data.success) {
          //   storeLocalData(constants.ACCESS_TOKEN, res.headers.token);
          //   storeLocalData(constants.USER_ID, res.data.id);
          //   storeLocalData(constants.USER_NAME, userName);
          //   navigation.navigate(NAV_TYPES.HOME_SCREEN, {});
          // }
        })
        .catch(error => {
          console.log('LOGIN ERROR ', error);
        });
    }
  };
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

  return {
    loginHandler,
    signOutHandler,
    registerHandler,
    onSignUpHandler,
  };
};

// Write a Programe get UserDetails from singup screen "Done"
// Send them to RegisterHandler and Save in state "Done"
// and userDetails Screen and send them all to the reducer
