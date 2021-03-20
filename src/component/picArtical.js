/*
 * @Author: your name
 * @Date: 2021-03-13 16:48:47
 * @LastEditTime: 2021-03-20 11:10:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /HelloWorld304/src/component/picArtical.js
 */
import React, { useState, useEffect } from 'react'
import {View, Text, ScrollView,SafeAreaView ,Image, TouchableOpacity, StyleSheet} from 'react-native'
export default function index({ navigation,listData }) {
  const api = 'http://www.masu.edu.cn'
  const jumpArtical = (url) => {
    navigation.navigate('文章', { url })

  }
  return (
    <View>
      {listData.map((item, index) =>
        <TouchableOpacity style={style.border} onPress={() => jumpArtical(item.link)} key={index}>
          <Image style={{ width: '100%', height: 153, }} source={{ uri: `${api}${item.img}` }}></Image>
          <View style={style.smallBox}>
            <Text style={style.smallBoxText}>{item.day}</Text>
            <View style={style.smallBoxBorder}></View>
            <Text style={style.smallBoxText2}>{item.month}</Text>
          </View>
          <View style={style.bottomTextBox}>
            <Text style={style.bottomText} numberOfLines={1} >{item.text}</Text>
          </View>
        </TouchableOpacity>
      )
      }
    </View>
  )
}
const style = StyleSheet.create({
  border: {
    position: 'relative',
    borderTopWidth: 4,
    borderTopColor: '#5398e8',
    marginBottom: 30
  },

  smallBox: {
    position: 'absolute',
    alignItems: 'center',
    backgroundColor: '#5398e8',
    width: 72,
    height: 61,
  },
  smallBoxText: {
    color: '#fff',
    fontSize: 18
  },
  smallBoxBorder: {
    backgroundColor: '#fff',
    marginTop: 6,
    marginBottom: 3,
    width: 50,
    height: 0.5
  },
  smallBoxText2: {
    color: '#fff',
    fontSize: 12
  },
  bottomTextBox: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: '#00000066',
    width: '100%',
    height: 56,
  },
  bottomText: {
    color: '#fff',
    lineHeight: 70,
    fontSize: 16

  },
})

