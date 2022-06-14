import {
  TouchableOpacity,
  TextInput,
  Text,
  View,
  Platform,
  StatusBar,
  Dimensions,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  FlatList,
  ScrollViewBase,
  VirtualizedList,
} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import TextInputWithLabel from '../../textInput/TextInputWithLabel';
import * as Animatable from 'react-native-animatable';
// import validators from '../../ultis/Validator';
import {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomDrawer from '../../ultis/customDrawer';
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

function HomeScreen() {
  const [groceryTab, setGroceryTab] = useState(1);

  const renderBanner = ({item, index}) => {
    return <BannerSlider data={item} />;
  };

  const onSelectSwitch = value => {
    setGroceryTab(value);
  };
  const renderGroceryList = ({item, index}) => {
    return <ListItem data={item} />;
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView style={{padding: 20}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Roboto-Medium',
              fontWeight: 'bold',
            }}>
            Hellow Ahsan Butt
          </Text>
          <TouchableOpacity>
            <ImageBackground
              source={require('../../../../assets/Ahsan.jpg')}
              style={{width: 35, height: 35}}
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
            height: 55,
          }}>
          <Feather
            name="search"
            size={20}
            color="#C6C6C6"
            styel={{marginRight: 5}}
          />
          <TextInput placeholder="Search" />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Roboto-Medium',
              fontWeight: 'bold',
              color: '#0aada8',
              backgroundColor: '#fff',
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
                padding: 5,
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
        {groceryTab === 1 && (
          <FlatList data={vegetablesList} renderItem={renderGroceryList} />
        )}
        {groceryTab === 2 && (
          <FlatList
            nestedScrollEnabled={true}
            data={fruitesList}
            renderItem={renderGroceryList}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
