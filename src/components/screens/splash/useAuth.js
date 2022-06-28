import {useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';
import {goToHomePage} from '../../constants/consttant';
import {useDispatch} from 'react-redux';
import {loginUser, logoutUser} from '../../../redux/slicer/AuthSlicer';

export default useSignIn = (email, password, navigation) => {
  const dispatch = useDispatch();

  const loginHandler = async (email, password, navigation) => {
    let user = {
      email,
      password,
      navigation,
    };
    dispatch(loginUser(user));
  };
  const signOutHandler = async () => {
    console.log('Now logout');
    dispatch(logoutUser());
  };

  return {loginHandler, signOutHandler};
};
