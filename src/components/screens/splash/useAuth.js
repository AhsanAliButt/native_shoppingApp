import {useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';
import {goToHomePage} from '../../constants/consttant';
import {useDispatch} from 'react-redux';
import {loginUser, signOut} from '../../../redux/slicer/AuthSlicer';

export default useSignIn = (email, password, navigation) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  const loginHandler = async (email, password, navigation) => {
    let user = {
      email,
      password,
      navigation,
    };
    dispatch(loginUser(user));
  };
  const signOutHandler = async () => {
    console.log('signOutHandler');
    dispatch(signOut());
    console.log('dispatched done');
  };

  return {loginHandler, signOutHandler};
};
