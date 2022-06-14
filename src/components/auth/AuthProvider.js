import {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            const result = await auth().signInWithEmailAndPassword(
              email,
              password,
            );
            setUser(result.user);
          } catch (error) {
            console.log(error);
          }
        },
        register: async (email, password) => {
          try {
            const result = await auth().createUserWithEmailAndPassword(
              email,
              password,
            );
            setUser(result.user);
          } catch (error) {
            console.log(error);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
            setUser(null);
          } catch (error) {
            console.log(error);
          }
        }
      }}>
      {children}
    </AuthContext.Provider>
  );
};
