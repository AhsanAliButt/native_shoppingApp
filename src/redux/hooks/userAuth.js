import {useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';
import {goToHomePage} from '../../components/constants/consttant';

const userAuth = () => {
  const {email, token, id} = useSelector(state => state.userAuth.user);
  return {email, token, id, isLogin: !!email};
};

export const onAuthSign = ({val, email, password, navigation}) => {
  auth()
    .signInWithEmailAndPassword(data.email, data.password)
    .then(() => {
      return navigation.navigate('Home');
    })
    .catch(error => {
      console.log(error);
    });
};

export default userAuth;
