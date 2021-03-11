import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import News from './src/component/news'
import Dynamic from './src/component/dynamic'
import Artical from './src/component/artical'


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="学校要闻" component={News} />
        <Drawer.Screen name="院系动态" component={Dynamic} />
        <Drawer.Screen name="文章" component={Artical} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}
