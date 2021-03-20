/*
 * @Author: your name
 * @Date: 2021-03-13 17:01:41
 * @LastEditTime: 2021-03-13 17:16:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /HelloWorld304/src/component/textArtital.js
 */
import React, { useState, useEffect } from 'react'
import {View, Text, ScrollView,SafeAreaView ,Image, TouchableOpacity, StyleSheet} from 'react-native'
export default function index({ navigation,listData }) {
  const jumpArtical = (url) => {
    navigation.navigate('文章', { url })

  }
  return (
    <View>
      {listData.map((item, index) =>
        <TouchableOpacity style={style.border} onPress={() => jumpArtical(item.link)} key={index}>
          <View style={style.border2Title}>
            <Text style={{ lineHeight: 40 }} numberOfLines={1}>{item.title}</Text>
          </View>
          <View style={style.smallBox}>
            <Text style={style.smallBoxText}>{item.day}</Text>
            <View style={style.smallBoxBorder}></View>
            <Text style={style.smallBoxText2}>{item.month}</Text>
          </View>
          <View style={style.artical}>
            <Text style={style.articalText} >{item.text}</Text>
          </View>
        </TouchableOpacity>
      )}
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

  border2Title: {
    marginLeft: 90,
    height: 61,
    fontSize: 16,

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
  artical: {
    marginTop: 8,
  },
  articalText: {
    fontSize: 12,
    lineHeight: 20
  }
})


