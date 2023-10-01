import {useSelector} from 'react-redux';

import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
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

  const registerHandler = async data => {
    if (!data.username) {
      return alert('plz enter name');
    }
    if (!data.username.trim().length >= 3) {
      return alert('plz enter Valid name');
    }
    if (!data.email.trim().length >= 4) {
      return alert('plz enter Valid email address');
    }
    if (
      !data.password.trim().length >= 8 &&
      !data.confirm_password.trim().length >= 8
    ) {
      return alert('plz enter Valid password');
    }
    if (data.password === data.confirm_password) {
      let user = {
        username: data.username,
        email: data.email,
        password: data.password,
      };
      console.log('user', user);
      dispatch(setUserDetailData(user));
      navigation.navigate('userDetails');
    } else {
      alert('Password not match');
    }
    // dispatch(signUpUser(userDetails));
  };
  const onSignUpHandler = data => {
    console.log('onSignUpHandler', data);
    if (data.country === '') {
      return alert('Select your Country');
    } else if (!data.gender) {
      return alert('Select Gender');
    } else if (data.firstname === '') {
      return alert('Enter your first name');
    } else if (data.lastName === '') {
      return alert('Enter your LastName');
    } else if (data.imagePath === '') {
      return alert('plz Add Picture');
    } else if (data.age === '') {
      return alert('Select your CountryCode');
    } else {
      let userDetails = {
        ...userDetail,
        ...data,
      };
      console.log('user Data Total', userDetails);
      dispatch(signUpUser(userDetails))
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

  return {
    loginHandler,
    signOutHandler,
    registerHandler,
    onSignUpHandler,
  };
};

// Write a Programe get UserDetails from singup screen "Done"
// Send them to RegisterHandler and Save in state "Done"
// and userDetails Screen and send them all to the reducer "Done"
