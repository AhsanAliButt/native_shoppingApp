import Potato from '../../../assets/Potato.jpg';

import {Dimensions} from 'react-native';

export const goToHomePage = ({navigation}) => {
  return navigation.navigate('HomeScreen');
};

export const slideData = [
  {
    title: 'LadyFinger',
    description:
      'Lady Finger is a fresh and healthy vegetable that is a great source of protein and fiber.',
    image: Potato,
  },
  {
    title: 'Carrot',
    description:
      'Carrot is a fresh and healthy vegetable that is a great source of protein and fiber.',
    image: Potato,
  },
  {
    title: 'Tomato',
    description:
      'Tomato is a vegetable, usually red, produced by the tomato plant.',
    image: require('../../../assets/tomate-1.jpg'),
  },
  {
    title: 'Potato',
    description:
      'Potato is a root vegetable, which is a tuberous plant with a bulbous, round, tuberous, or tuberous-like, fleshy head.',
    image: require('../../../assets/tomate-1.jpg'),
  },
  {
    title: 'broccoli',
    description:
      'broccoli is a vegetable, which is a tuberous plant with a bulbous, round, tuberous, or tuberous-like, fleshy head.',
    image: require('../../../assets/broccoli.webp'),
  },
  {
    title: 'Gobhi',
    description:
      'Gobhi is a vegetable, which is a tuberous plant with a bulbous, round, tuberous, or tuberous-like, fleshy head.',
    image: require('../../../assets/Potato.jpg'),
  },
];

export const vegetablesList = [
  {
    title: 'LadyFinger',
    description:
      'Lady Finger is a fresh and healthy vegetable that is a great source of protein and fiber.',
    image: Potato,
  },
  {
    title: 'Carrot',
    description:
      'Carrot is a fresh and healthy vegetable that is a great source of protein and fiber.',
    image: Potato,
  },
  {
    title: 'Tomato',
    description:
      'Tomato is a vegetable, usually red, produced by the tomato plant.',
    image: require('../../../assets/tomate-1.jpg'),
  },
  {
    title: 'Potato',
    description:
      'Potato is a root vegetable, which is a tuberous plant with a bulbous, round, tuberous, or tuberous-like, fleshy head.',
    image: require('../../../assets/tomate-1.jpg'),
  },
  {
    title: 'broccoli',
    description:
      'broccoli is a vegetable, which is a tuberous plant with a bulbous, round, tuberous, or tuberous-like, fleshy head.',
    image: require('../../../assets/broccoli.webp'),
  },
  {
    title: 'Gobhi',
    description:
      'Gobhi is a vegetable, which is a tuberous plant with a bulbous, round, tuberous, or tuberous-like, fleshy head.',
    image: require('../../../assets/Potato.jpg'),
  },
];

export const fruitesList = [
  {
    title: 'LadyFinger',
    description:
      'Lady Finger is a fresh and healthy vegetable that is a great source of protein and fiber.',
    image: require('../../../assets/tomate-1.jpg'),
  },
  {
    title: 'Carrot',
    description:
      'Carrot is a fresh and healthy vegetable that is a great source of protein and fiber.',
    image: require('../../../assets/tomate-1.jpg'),
  },
  {
    title: 'Tomato',
    description:
      'Tomato is a vegetable, usually red, produced by the tomato plant.',
    image: require('../../../assets/tomate-1.jpg'),
  },
  {
    title: 'Potato',
    description:
      'Potato is a root vegetable, which is a tuberous plant with a bulbous, round, tuberous, or tuberous-like, fleshy head.',
    image: require('../../../assets/tomate-1.jpg'),
  },
  {
    title: 'broccoli',
    description:
      'broccoli is a vegetable, which is a tuberous plant with a bulbous, round, tuberous, or tuberous-like, fleshy head.',
    image: require('../../../assets/broccoli.webp'),
  },
  {
    title: 'Gobhi',
    description:
      'Gobhi is a vegetable, which is a tuberous plant with a bulbous, round, tuberous, or tuberous-like, fleshy head.',
    image: require('../../../assets/Potato.jpg'),
  },
];

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;
