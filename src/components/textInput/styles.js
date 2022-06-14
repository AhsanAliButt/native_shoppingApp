import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: '#05375a',
    marginTop: Platform.OS === 'ios' ? 0 : -12,
  },
});

export default styles;
