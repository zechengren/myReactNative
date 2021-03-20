/*
 * @Author: your name
 * @Date: 2021-02-03 15:07:55
 * @LastEditTime: 2021-03-20 20:05:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /HelloWorld304/App.js
 */
import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import News from './src/pages/news.js'
import Dynamic from './src/pages/dynamic'
import Artical from './src/component/artical'
import TeachActivites from './src/component/teachActivites'
import ActivitesInfo from './src/component/teachActivites/activitesInfo'
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="学校要闻">
        <Drawer.Screen name="学校要闻" component={News} />
        <Drawer.Screen name="院系动态" component={Dynamic} />
        <Drawer.Screen name="文章" component={Artical} />
        <Drawer.Screen name="教研详情" component={ActivitesInfo} />
        {/* {/* <Drawer.Screen name="产学研用" component={StudyUse} /> */}

      </Drawer.Navigator>
    </NavigationContainer>
  );
}
