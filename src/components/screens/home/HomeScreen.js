import {
  TouchableOpacity,
  TextInput,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  FlatList,
} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {useState} from 'react';
import Carousel from 'react-native-snap-carousel';
import {
  fruitesList,
  slideData,
  vegetablesList,
  windowWidth,
} from '../../constants/consttant';
import BannerSlider from '../../ultis/banner/bannerSlider';
import CustomSwitch from '../../ultis/customSwitch/customSwitch';
import ListItem from '../../ultis/listItem/listItem';

function HomeScreen({navigation}) {
  const [groceryTab, setGroceryTab] = useState(1);

  const renderBanner = ({item, index}) => {
    return <BannerSlider data={item} />;
  };

  const onSelectSwitch = value => {
    setGroceryTab(value);
  };
  const renderGroceryList = ({item, index}) => {
    return <ListItem data={item} navigation={navigation} />;
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView style={{padding: 20}}>
        <StatusBar backgroundColor="transparent" barStyle="light-content" />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'Roboto-Medium',
              fontWeight: 'bold',
            }}>
            Hellow Ahsan Butt
          </Text>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <ImageBackground
              source={require('../../../../assets/Ahsan.jpg')}
              style={{width: 45, height: 45}}
              imageStyle={{borderRadius: 25}}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            borderRadius: 10,
            paddingHorizontal: 10,
            paddingVertical: 8,
            borderColor: '#0aada8',
            height: 40,
          }}>
          <Feather
            name="search"
            size={20}
            color="#C6C6C6"
            styel={{marginRight: 5}}
          />
          <TextInput placeholder="Search" style={{height: 40}} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 15,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Roboto-Medium',
              color: '#0aada8',
              fontWeight: 'bold',
            }}>
            HighLited Products
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Roboto-Medium',
                color: '#0aada8',
                backgroundColor: '#f7f6f2',
                fontWeight: 'bold',
              }}>
              See All
            </Text>
          </TouchableOpacity>
        </View>
        <Carousel
          data={slideData}
          renderItem={renderBanner}
          sliderWidth={windowWidth - 40}
          itemWidth={300}
        />
        <View style={{marginVertical: 20}}>
          <CustomSwitch
            selectionMode={1}
            option1="Vegetables"
            option2="Fruits"
            onSelectSwitch={onSelectSwitch}
          />
        </View>
        <View>
          {groceryTab === 1 && (
            <FlatList data={vegetablesList} renderItem={renderGroceryList} />
          )}
          {groceryTab === 2 && (
            <FlatList data={fruitesList} renderItem={renderGroceryList} />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
