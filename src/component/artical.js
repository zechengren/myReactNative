/*
 * @Author: your name
 * @Date: 2021-02-16 17:34:17
 * @LastEditTime: 2021-03-20 20:02:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /HelloWorld304/src/component/news/index.js
 */
import React, { Component, useEffect, useState } from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity,ActivityIndicator, ScrollView, SafeAreaView, Dimensions, StatusBar } from 'react-native';
import HTMLView from 'react-native-htmlview';
import axios from 'axios'
// import styled from 'styled-components'
import MaYuan from './maYuan'


export default function index({ navigation, route}) {
  const api = 'http://www.masu.edu.cn'
  const [htmlContent, setHtmlContent] = useState();
  const [title, setTitle] = useState('')
  const [artical, setArtical] = useState([])
  const [src, setSrc] = useState('')
  const [update, setUpdate] = useState('')
  const [info, setInfo] = useState('')
  const [views, setViews] = useState('')
  const [visitCount, setVisitCount] = useState('')
  const [write, setWrite] = useState('')
  const [animatingVisible, setAnimatingVisible] = useState(true)
  // const [empty, setEmpty] = useState(false)
  let empty = false
  let url = ''
  if(route.params) {
    url = route.params.url
  } else {
    empty = true
  }
  let str = ''
  const arr = []

  // const textStyle = ['font-weight:normal;line-height:1.5em;',
  //   'font-weight:normal;line-height:1.75em;',
  //   'line-height:2em;font-family:宋体,simsun;font-size:18px;font-style:normal;',
  //   'font-size:16px;font-family:宋体, simsun;line-height:1.75em;',
  //   'font-weight:normal;font-size:16px;font-family:宋体, simsun;line-height:1.75em;',
  //   'font-family:宋体, simsun;font-size:16px;',
  //   'line-height:1.75em;font-family:宋体, simsun;font-size:16px;',
  //   'line-height:1.75em;font-family:宋体;font-size:16px;',
  //   'font-family:宋体, simsun;font-size:16px;line-height:1.75em;',
  //   'line-height:1.75em;font-size:16px;',
  //   'line-height:2em;font-family:宋体;font-size:16px;',
  //   'line-height:1.75em;',
  //   'line-height:2em;font-family:文泉驛等寬正黑;font-size:18px;',
  //   'font-size:18px;line-height:1.75em;',
  //   'font-family:宋体;font-size:16px;line-height:1.75em;',
  //   'font-family:宋体, serif;font-size:16px;line-height:1.75em;',
  //   'font-family:文泉驛等寬正黑;font-family:宋体;font-family:宋体;font-family:宋体;font-size:16px;',
  //   'font-weight:normal',
  //   'font-family:宋体, serif;font-size:16px;font-size:16px;color:#000000;font-size:16px;color:#000000;color:#000000;font-family:serif;',
  //   'font-family:宋体;font-size:16px;font-size:16px;color:#000000;',
  // ]
  const commonStyArr = [
    'font-family:宋体',
    'font-weight:normal',
    'line-height:2em',
    'line-height:1.75em',
    'font-size:16px',
    'font-size:18px',
    'color:#000000',
    'background:#ffffff',
  ]


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
  const trim = (str) => { //删除左右两端的空格
    return str.replace(/(^\s*)|(\s*$)/g, "");
  }

  function renderNode(node, index, siblings, parent, defaultRenderer) {

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
      commonStyArr.some(item => {
        if (node.name = 'span' && node.attribs && ((node.attribs.style && (node.attribs.style.indexOf(item)) !== -1) || (node.attribs.lang && (node.attribs.lang == 'zh-CN')))) {
          if(!(node.children && node.children[0] && node.children[0].data)) return
          let data = node.children[0].data
          if(data) {
            data = trim(data)
            if(data.indexOf('&nbsp;') !== -1) {
              data = data.replace(/&nbsp;/g, '')
            }
            str = str + data
            if (data.slice(-1) == '。' || data.slice(-1) == '）') {
              arr.push(str)
              str = ''
            } else if (data.slice(-1) == '）') {
              const write = data.replace(/&nbsp;/g, '')
              setWrite(write)
            } else {
              // console.log('无匹配');
            }
            return true

          }

        }
      })

      // if (node.name = 'span' && node.attribs && node.attribs.lang && (node.attribs.lang == 'zh-CN')) {
      //   console.log(node);
      // }
      if (node.attribs && node.attribs.id == 'bdshare') {
        setArtical(arr)
      }
      if (node.attribs && (node.attribs.style == 'text-align:center;' || node.attribs.style == 'text-align:center')) {
        const a = node.children[0].attribs.src && node.children[0].attribs.src
        a && setSrc(`${api}${a}`)
      }

    }
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
  const openDrawer = () => {
    navigation.openDrawer()
  }
  return (
    <View style={{ flex: 1 }}>
      <MaYuan openDrawer={openDrawer}></MaYuan>
      {empty && <Image style={style.empty} source={require('../assets/img/empty.jpg')}></Image>}
      {!empty &&
        <View style={{ flex: 1, paddingLeft: 5, paddingRight: 5 }}>
        {animatingVisible && <ActivityIndicator style={{ flex: 1 }} size="large" color="#5398e8" animating={animatingVisible} />}
        <HTMLView value={htmlContent} renderNode={renderNode} style={{ display: 'none' }}></HTMLView>
        {!animatingVisible &&
        <SafeAreaView style={{ flex: 1 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={style.title}> {title} </Text>
            <Message></Message>
            {artical.length != 0 && artical.map((item, index) => {
              if (index == 1) {
                return (
                  <View key={index}>
                    {src.length !== 0 && <Image style={style.pic} source={{ uri: src }}></Image>}
                    <Text style={style.p}> &emsp;&emsp;{item} </Text>
                  </View>
                )
              }
              return (
                <Text key={index} style={style.p}> &emsp;&emsp;{item} </Text>
              )
            })}
            <View style={{marginBottom: 40, }}>
              <Text style={{textAlign: 'right', color: '#333'}}> {write} </Text>
            </View>

          </ScrollView>
        </SafeAreaView>}
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
  }
})

