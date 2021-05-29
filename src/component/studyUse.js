/*
 * @Author: your name
 * @Date: 2021-03-13 19:55:35
 * @LastEditTime: 2021-05-29 21:44:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /HelloWorld304/src/component/teachActivites.js
 */
import React, { useState, useEffect, Fragment } from 'react'
import {View, Text, ScrollView,SafeAreaView ,Image, TouchableOpacity, StyleSheet, ActivityIndicator} from 'react-native'
import axios from 'axios'
import HTMLView from 'react-native-htmlview';

export default function StudyUse({ navigation }) {
  const api = 'http://www.masu.edu.cn'
  const [htmlContent, setHtmlContent] = useState();
  const [title, setTitle] = useState([])
  const arr = []
  let obj = {}
  const [animatingVisible, setAnimatingVisible] = useState(true)
  let newTitle = 'ppppp'

  useEffect(() => {
    animatingVisible || setAnimatingVisible(true)

    axios.get(`${api}/main.htm`)
      .then((res) => {
        setHtmlContent(res.data)
        setAnimatingVisible(false)
      })
  }, [])
  function renderNode(node) {
    if (node.name) {
      if (node.name == 'span' && node.attribs && node.attribs.frag == '标题') {
        if (node.children[0].data == '会议安排') {
          newTitle = 'news_title'
        }
      }
      if (node.name == 'div' && node.attribs && node.attribs.class == newTitle) {
        obj = node.children[0].attribs
        arr.push(obj)
      }
      // if (node.name == 'div' && node.attribs && node.attribs.class == 'news_summary') {
      //   const data = node.children[0].data
      //   obj.detail = data
      //   arr.push(obj)
      // }
      if (node.attribs && node.attribs.class == 'footer clearfix') {
        setTitle(arr)
      }
    }
  }
  const jumpArtical = item => {
    const { href } = item

    navigation.navigate('教研详情', { url: 'error' })
  }
  return (
    <View style={{ flex: 1 }}>
        <HTMLView value={htmlContent} renderNode={renderNode} style={{ display: 'none' }}></HTMLView>
        {animatingVisible &&<ActivityIndicator style={{ flex: 1 }} size="large" color="#5398e8" animating={animatingVisible} />}
        {
          !animatingVisible &&
            <Fragment>
              <View style={style.titleBox}>
                   <Text style={style.titleText}>会议安排</Text>
                </View>
                <View>
                  {console.log(title,'tltletle')}
                  {title.map((item,index) => {
                    return (
                      <TouchableOpacity key={index} style={style.bodyBox} onPress={() => jumpArtical(item)}>
                        <Text style={style.bodyText} numberOfLines={1}>{item.title}</Text>
                      </TouchableOpacity>
                    )
                  })}
                </View>
            </Fragment>
        }
    </View>
  )
}
const style = StyleSheet.create({
  titleBox: {
    height: 62,
    borderBottomColor: '#c7c7c7',
    borderBottomWidth: 0.5,
  },
  titleText: {
    fontSize: 20,
    lineHeight: 62,
  },
  bodyBox: {
    height: 54,
    borderRadius: 8,
    borderStyle: 'dotted',
    borderBottomWidth: 0.5,
    borderBottomColor: '#c7c7c7',
  },
  bodyText: {
    lineHeight: 54,
    fontSize: 16
  },
  pText: {
    fontSize: 14,
    color: '#888888'
  }
})
