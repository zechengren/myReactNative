/*
 * @Author: your name
 * @Date: 2021-02-03 15:07:55
 * @LastEditTime: 2021-03-20 23:55:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /HelloWorld304/App.js
 */
import * as React from 'react';
import { useState, useEffect } from 'react'
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import News from './src/pages/news.js'
import storage from './src/store/index'
import Dynamic from './src/pages/dynamic'
import Artical from './src/component/artical'
import TeachActivites from './src/component/teachActivites'
import ActivitesInfo from './src/component/teachActivites/activitesInfo'
import Login from './src/pages/login'
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
export default function App() {
  const [init, setInit] = useState('学校要闻')
  const [visible, setVisible] = useState(false)
  const getStore = () => {
    storage
    .load({
      key: 'entersssss',
    })
    .then(ret => {
      console.log(ret);
      if (ret.enterKey == 'yes')  {
        console.log(ret.enterKey,'ret.enterKey');
        setInit('学校要闻')
        setVisible(true)
      }
    })
    .catch(res => {
      console.log('ooo');
      setInit('login')
      setVisible(true)
    })
  }

  useEffect(() => {
    getStore()

  }, [init])
  return (
    <React.Fragment>
        {visible &&
          <React.Fragment>
            {init == 'login' &&
             <NavigationContainer>
              <Stack.Navigator headerMode='none' initialRouteName={init}>
                <Stack.Screen name="login" component={Login} />
                {/* <Stack.Screen name="学校要闻" component={News} /> */}
              </Stack.Navigator>
              </NavigationContainer> ||

              <NavigationContainer>
              <Drawer.Navigator initialRouteName={init}>
                {/* <Drawer.Screen name="login" component={Login} /> */}
                <Drawer.Screen name="学校要闻" component={News} />
                <Drawer.Screen name="院系动态" component={Dynamic} />
                <Drawer.Screen name="文章" component={Artical} />
                <Drawer.Screen name="教研详情" component={ActivitesInfo} />
              </Drawer.Navigator>

            </NavigationContainer>
            }

          </React.Fragment>


        }

    </React.Fragment>




  );
}
