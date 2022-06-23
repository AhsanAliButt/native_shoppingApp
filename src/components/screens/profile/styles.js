import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  containerImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },

  bgImage: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  bottomContainer: {
    position: 'absolute',
    marginTop: '52%',
    height: '90%',
    width: 400,
    backgroundColor: '#fff',
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    alignItems: 'center',
  },
  profile: {
    width: 120,
    height: 120,
    borderRadius: 25,
    bottom: '10%',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    bottom: '8%',
  },
  view: {
    flexDirection: 'row',
  },
  number: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6d6a7f',
  },
  numberSecond: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6d6a7f',
    marginLeft: 36,
  },
  followersandfollowing: {
    alignItems: 'center',
    bottom: '5%',
  },
});

export default styles;
