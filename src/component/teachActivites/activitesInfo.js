/*
 * @Author: your name
 * @Date: 2021-03-13 21:58:23
 * @LastEditTime: 2021-03-20 20:02:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /HelloWorld304/src/component/teachActivites/activitesInfo.js
 */
import React, { useState, useEffect } from 'react'
import {View, Text, ScrollView,SafeAreaView ,Image, TouchableOpacity, StyleSheet, ActivityIndicator} from 'react-native'
import axios from 'axios'
import HTMLView from 'react-native-htmlview';
import MaYuan from '../maYuan'

export default function ActivitesInfo({navigation, route}) {
  const api = 'http://www.masu.edu.cn'
  const [htmlContent, setHtmlContent] = useState();
  const [title, setTitle] = useState('')
  const [update, setUpdate] = useState('')
  const [info, setInfo] = useState('')
  const [views, setViews] = useState('')
  const [visitCount, setVisitCount] = useState('')
  const [artical, setArtical] = useState([])
  const [src, setSrc] = useState('')
  const [animatingVisible, setAnimatingVisible] = useState(true)
  let empty = false
  let url = ''
  if(route.params) {
    url = route.params.url
  } else {
    empty = true
  }
  let str = ''
  let arr = []
  // const textStyle = [
  //   'margin:0px;padding:0px;font-family:宋体, simsun;font-size:18px;color:#000000;line-height:2em;',
  //   'text-indent:2em;font-family:宋体, simsun;font-size:18px;color:#000000;line-height:2em;',
  //   'font-family:宋体, simsun;font-size:18px;color:#000000;line-height:2em;',
  //   'text-indent:2em;margin:0px;padding:0px;font-family:宋体, simsun;font-size:18px;color:#000000;line-height:2em;',
  //   'margin:0px;padding:0px;font-family:宋体, simsun;font-size:18px;line-height:2em;',
  //   'text-indent:2em;font-family:宋体, simsun;font-size:18px;line-height:2em;',
  //   'font-family:宋体, simsun;line-height:2em;',
  //   'text-indent:2em;font-family:宋体, simsun;font-size:18px;line-height:2em;',
  //   'font-family:文泉驛等寬正黑;color:#333333;color:#333333;color:#333333;font-family:宋体;color:#333333;color:#333333;font-family:宋体;color:#333333;font-family:宋体;font-family:宋体;font-size:16px;',
  // ]
  const sliceSty = [
    'padding:0px;color:#646464;font-size:14px;background-color:#ffffff;text-indent:2em;line-height:2em;margin-bottom:0px;margin-top:0px;',
    'font-size:14px;padding:0px;color:#646464;background-color:#ffffff;text-indent:2em;line-height:2em;margin-top:0px;margin-bottom:0px;',
    'font-size:14px;text-align:left;line-height:2em;text-indent:2em;',
    'text-align:left;line-height:2em;text-indent:2em;',
  ]
  const commonStl = 'line-height:2em;'
  const commonStArr = [
    'line-height:2em;',
    'font-family:文泉驛等寬正黑;'
  ]
  const commonSlice = 'background-color:#ffffff;'


  useEffect(() => {
    if (empty) return
    animatingVisible || setAnimatingVisible(true)

    axios.get(`${api}${url}`)
      .then((res) => {
        setHtmlContent(res.data)
        setAnimatingVisible(false)
      })
      .catch((res) => {
        console.log(res);
      })
  }, [url])


  function renderNode(node) {
    if (node.name) {
      if (node.name == 'h1' && node.attribs && node.attribs.class == 'arti-title') {
        setTitle(node.children[0].data)
      }
      switch(node.attribs && node.attribs.class) {
        case 'arti-update':
          setUpdate(node.children[0].data)
          break;
        case 'arti-info':
          setInfo(node.children[0].data)
          break;
        case 'arti-views':
          setViews(node.children[0].data)
          break;
        case 'WP_VisitCount':
          setVisitCount(node.children[0].data)
          break;

      }
      if (node.attribs && (node.attribs.style == 'text-align:center;' || node.attribs.style == 'text-align:center')) {
        if(node.children && node.children[0] && node.children[0].name == 'img') {
        const a = node.children[0].attribs.src
        a && setSrc(`${api}${a}`)
        }
      }

      if (node.name == 'span' && node.attribs && node.attribs.style && (node.attribs.style.indexOf(commonStl)) !== -1) {
        if(node.children && Array.isArray(node.children) && node.children[0] && node.children[0].data) {
          let data = node.children[0].data
          // if(data.slice(0, 6) == '&nbsp;') {
          //   str.length != 0 && arr.push(str)
            // str = ''
            str += data
            // console.log(str);
          //   return
          // } else {
          //   str += data
          // }
        }
      }
      sliceSty.map(item => {
        if(node.name == 'p' && node.attribs && node.attribs.style && node.attribs.style == item) {
          str.length !== 0 && arr.push(str)
          str = ''
        }
      })
      // if(node.name == 'p' && node.attribs && node.attribs.style && (node.attribs.style.indexOf(commonSlice)) !== -1) {
      //   str.length !== 0 && arr.push(str)
      //   str = ''
      // }

      if (node.attribs && node.attribs.id == 'bdshare') {
        arr.push(str)
        const newArr = arr.map(item => item.replace(/&nbsp;/g,''))
        setArtical(newArr)
        // console.log(newArr);
      }
    }
  }
  const openDrawer = () => {
    navigation.openDrawer()
  }
  const Message = () => {
    return (
      <View style={{ alignItems: 'center', marginTop: 6, marginBottom: 6 }}>
        <View style={{ flexDirection: 'row',flexWrap: 'wrap', justifyContent: 'center' , marginBottom: 4 }}>
          <Text style={style.message}> {update}&emsp; </Text>
          <Text style={style.message}> {info} </Text>
        </View>
        <View style={{ flexDirection: 'row'}}>
          <Text style={style.message}> {views} </Text>
          <Text style={style.message}> {visitCount} </Text>
        </View>
      </View>
    )
  }
  return (
    <View style={{ flex: 1, marginBottom: 20 }}>
      <MaYuan openDrawer={openDrawer}></MaYuan>

      {empty && <Image style={style.empty} source={require('../../assets/img/empty.jpg')}></Image>}
      {!empty &&
        <View style={{ flex: 1, paddingLeft: 5, paddingRight: 5 }}>
        {animatingVisible &&<ActivityIndicator style={{ flex: 1 }} size="large" color="#5398e8" animating={animatingVisible} />}
        <HTMLView value={htmlContent} renderNode={renderNode} style={{ display: 'none' }}></HTMLView>
        {!animatingVisible &&
          <SafeAreaView style={{ flex: 1 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Text style={style.title}> {title} </Text>
              <Message></Message>
              {src.length !== 0 && <Image style={style.pic} source={{ uri: src }}></Image>}
              {artical.length !== 0 && artical.map((item, index) => {
                return (
                  <View>
                    <Text key={index} style={style.p}> {item} </Text>
                  </View>
                )
              })}
            </ScrollView>
          </SafeAreaView>
        }

      </View>
      }
  </View>
  )
}
const style = StyleSheet.create({
  p: {
    lineHeight: 30,
    color: '#333'
  },
  pic: {
    width: '100%',
    height: 150,
    marginTop: 15,
    marginBottom: 15
  },
  empty: {
    width: '100%',
    height: 300,
  },
  title: {
    color: '#0e419c',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 10,
    marginBottom: 10
  },
  message: {
    color: '#787878',
    fontSize: 12,
  },
  p: {
    fontSize: 16,
    marginTop: 10
  }
})
