import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {Platform} from 'react-native';

//screens
import MemoList from '../screens/MemoList';
import MemoContent from '../screens/MemoContent';
import MemoRevision from '../screens/MemoRevision';
//style
import {headerStyles} from './style';
//types
import {MainStackParamList} from '../types';

const Stack = createNativeStackNavigator<MainStackParamList>();

const Root = () => {
  return (
    <Stack.Navigator
      initialRouteName="MemoList"
      screenOptions={{
        replaceAnimation: 'push',
        headerTopInsetEnabled: false,
        headerHideShadow: true,
        ...headerStyles,
      }}>
      <Stack.Screen name="MemoList" component={MemoList} />
      <Stack.Screen name="MemoContent" component={MemoContent} />
      <Stack.Screen name="MemoRevision" component={MemoRevision} />
    </Stack.Navigator>
  );
};

const Layout = () => (
  <NavigationContainer>
    <Root />
  </NavigationContainer>
);

export default Layout;
