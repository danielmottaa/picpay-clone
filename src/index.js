import React from 'react';
import {
  StatusBar
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import MyBottom from '../routes';

export default function Main() {
  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#000' />
      <NavigationContainer>
        <MyBottom />
      </NavigationContainer>
    </>
  );
}