/*
 * @Author: your name
 * @Date: 2021-03-13 19:55:35
 * @LastEditTime: 2021-05-29 21:37:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /HelloWorld304/src/component/teachActivites.js
 */
import React, { useState, useEffect, Fragment } from 'react'
import {View, Text, ScrollView,SafeAreaView ,Image, TouchableOpacity, StyleSheet, ActivityIndicator} from 'react-native'
import axios from 'axios'
import HTMLView from 'react-native-htmlview';

export default function TextActivites({ navigation }) {
  const api = 'http://www.masu.edu.cn'
  const [htmlContent, setHtmlContent] = useState();
  const [title, setTitle] = useState([])
  const arr = []
  const [animatingVisible, setAnimatingVisible] = useState(true)
  let newTitle = 'news_title'
  let num = 0
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
      if (node.name == 'div' && node.attribs && node.attribs.class == newTitle) {
        num++
        if (num > 3 && num < 10) {
          const obj = node.children[0].attribs
          arr.push(obj)
        }
      }
      if (node.name == 'span' && node.attribs && node.attribs.frag == '标题') {
        if (node.children[0].data == '产学研用') {
          newTitle = 'pppppp'
        }
      }
      if (node.attribs && node.attribs.class == 'footer clearfix') {
        setTitle(arr)
      }
    }
  }
  const jumpArtical = item => {
    const { title, href } = item
    if(title.slice(0, 4) == '（图文）') {
      navigation.navigate('文章', { url: href })
    } else {
      navigation.navigate('教研详情', { url: href })
    }
  }
  return (
    <View style={{ flex: 1 }}>
        <HTMLView value={htmlContent} renderNode={renderNode} style={{ display: 'none' }}></HTMLView>
        {animatingVisible &&<ActivityIndicator style={{ flex: 1 }} size="large" color="#5398e8" animating={animatingVisible} />}
        {
          !animatingVisible &&
            <Fragment>
              <View style={style.titleBox}>
                   <Text style={style.titleText}>教研活动</Text>
                </View>
                <View>
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
  }
})
