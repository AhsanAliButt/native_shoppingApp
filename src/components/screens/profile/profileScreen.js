import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import styles from './styles';

const ProfileScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.bgImage}
        source={require('../../../../assets/background.jpg')}
      />
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View>
          <Text style={styles.name}> GoBack </Text>
        </View>
      </TouchableOpacity>
      <View style={styles.bottomContainer}>
        <Image
          style={styles.profile}
          source={require('../../../../assets/Ahsan.jpg')}
        />
        <Text style={styles.name}> Ahsan Ali Butt </Text>
        <Text style={{color: 'gray', bottom: '7%'}}> Faisalabad,Pakistan </Text>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.followersandfollowing}>
            <Text style={styles.number}> 1.208M </Text>
            <Text style={[styles.number, {fontWeight: 'normal', fontSize: 16}]}>
              {' '}
              Followers{' '}
            </Text>
          </View>
          <View style={styles.followersandfollowing}>
            <Text style={styles.numberSecond}> 2.0M </Text>
            <Text
              style={[
                styles.numberSecond,
                {fontWeight: 'normal', fontSize: 16},
              ]}>
              {' '}
              Following{' '}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '75%',
          }}>
          <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>
            {' '}
            Stories{' '}
          </Text>
          <TouchableOpacity>
            <Text style={{color: 'black', fontSize: 14, fontWeight: 'bold'}}>
              {' '}
              See All{' '}
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          style={{
            flexDirection: 'row',
            height: 200,
            width: '100%',
            paddingLeft: 50,
            paddingTop: 12,
          }}
          horizontal>
          <Image
            source={require('../../../../assets/Ahsan.jpg')}
            style={{width: 150, height: 200, borderRadius: 15, marginLeft: 8}}
          />
          <Image
            source={require('../../../../assets/Ahsan.jpg')}
            style={{width: 150, height: 200, borderRadius: 15, marginLeft: 8}}
          />
          <Image
            source={require('../../../../assets/Ahsan.jpg')}
            style={{width: 150, height: 200, borderRadius: 15, marginLeft: 8}}
          />
          <Image
            source={require('../../../../assets/Ahsan.jpg')}
            style={{width: 150, height: 200, borderRadius: 15, marginLeft: 8}}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
