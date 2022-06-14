import {View, Text, Image} from 'react-native';
import React from 'react';

const BannerSlider = ({data}) => {
  return (
    <View style={{marginTop: 20}}>
      <Image
        source={data.image}
        style={{height: 150, width: 300, borderRadius: 10}}
        loop={true}
      />
    </View>
  );
};

export default BannerSlider;
