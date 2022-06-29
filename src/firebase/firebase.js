import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {onAuthStateChanged} from '@react-native-firebase/auth';

const db = firestore();
export {db, onAuthStateChanged};
