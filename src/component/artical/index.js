/*
 * @Author: your name
 * @Date: 2021-02-16 17:34:17
 * @LastEditTime: 2021-03-12 14:30:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /HelloWorld304/src/component/news/index.js
 */
import React, { Component, useEffect, useState } from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, SafeAreaView, Dimensions, StatusBar } from 'react-native';
import HTMLView from 'react-native-htmlview';
import axios from 'axios'
// import styled from 'styled-components'
import MaYuan from '../maYuan'


export default function index({ navigation, route}) {
  const api = 'http://www.masu.edu.cn'

  // useEffect(() => {
  //   console.log(route,'route');
  //   const { url } = route.params
  // }, [])

  const [htmlContent, setHtmlContent] = useState();
  // const [content, setContent] = useState('')
  // const windowHeight = Dimensions.get("window").height;
  // const statusBarHeight = StatusBar.currentHeight;

  const [title, setTitle] = useState('')
  const [artical, setArtical] = useState([])
  const [src, setSrc] = useState('')
  const [update, setUpdate] = useState('')
  const [info, setInfo] = useState('')
  const [views, setViews] = useState('')
  const [visitCount, setVisitCount] = useState('')
  const [write, setWrite] = useState('')

  let str = ''
  const arr = []


  useEffect(() => {
    const { url } = route.params
    axios.get(`${api}${url}`)
      .then((res) => {
        setHtmlContent(res.data)
      })
  }, [])
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
      if (node.name = 'span' && node.attribs && (node.attribs.style == 'font-weight:normal;font-size:16px;font-family:宋体, simsun;line-height:1.75em;' || node.attribs.style == 'font-size:16px;font-family:宋体, simsun;line-height:1.75em;')) {
        str = str + node.children[0].data
        console.log('pppp');
        if (node.children[0].data.slice(-1) == '。') {
          arr.push(str)
          console.log(arr,'arr');
          str = ''
        } else if (node.children[0].data.slice(-1) == '）') {
          setWrite(node.children[0].data)
        }
      }

      if (node.attribs && node.attribs.id == 'bdshare') {
        console.log(arr,'arr33'); //[]
        setArtical(arr)
      }
      if (node.attribs && node.attribs.style == 'text-align:center;') {
        const a = node.children[0].attribs.src
        setSrc(`${api}${a}`)
      }

    }
  }
  const Message = () => {
    return (
      <View style={{ alignItems: 'center', marginTop: 6, marginBottom: 6 }}>
        <View style={{ flexDirection: 'row', marginBottom: 4 }}>
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

      <View style={{ flex: 1 }}>
        <HTMLView value={htmlContent} renderNode={renderNode} style={{ display: 'none' }}></HTMLView>
        <SafeAreaView style={{ flex: 1 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={style.title}> {title} </Text>
            <Message></Message>
            {artical.length != 0 && artical.map((item, index) => {
              if (index == 1) {
                return (
                  <View key={index}>
                    <Image style={style.pic} source={{ uri: src }}></Image>
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
        </SafeAreaView>
      </View>


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

