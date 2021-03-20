/*
 * @Author: your name
 * @Date: 2021-03-11 10:49:00
 * @LastEditTime: 2021-03-20 11:08:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /HelloWorld304/src/component/maYuan.js
 */
import React from 'react'
import {View, StyleSheet, Image, TouchableOpacity,} from 'react-native'
export default function index({ openDrawer }) {
  return (
    <View style={style.imageBox}>
      <TouchableOpacity style={style.asideBox} onPress={openDrawer}>
        <Image style={{ width: 20, height: 20 }} source={require('../assets/img/aside.png')}></Image>
      </TouchableOpacity>
      <Image style={{ width: 308, height: 38 }} source={{ uri: 'http://www.masu.edu.cn/_upload/site/00/03/3/logo.png' }}></Image>
    </View>
  )
}

const style = StyleSheet.create({
  asideBox: {
    marginLeft: 10,
    marginRight: 5,
  },
  imageBox: {
    flexDirection: 'row',
    backgroundColor: '#5398e8',
    width: '100%',
    height: 50,
    alignItems: 'center'
  },

})

