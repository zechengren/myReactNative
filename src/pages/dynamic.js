/*
 * @Author: your name
 * @Date: 2021-03-11 10:17:52
 * @LastEditTime: 2021-03-20 18:51:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /HelloWorld304/src/component/news/index.js
 */
import React, { useState, useEffect } from 'react'
import {View, Text, ScrollView,SafeAreaView ,Image, TouchableOpacity, StyleSheet} from 'react-native'
import MaYuan from '../component/maYuan'
import PicArtical from '../component/picArtical'
import TextArtical from '../component/textArtical'
import TeachActivites from '../component/teachActivites/index'
// import StudyUse from '../studyUse.js'
import StudyUse from '../component/studyUse'


export default function index({ navigation }) {
  const listData = [
    {
      img: '/_upload/article/images/d1/f5/b2f81e6d498685735bb7d7353a46/148ae70a-7ead-482e-9f4d-4e5af42c00b8.png',
      day: '11',
      month: '2021-03',
      text: '（图文）腾讯云大数据学院举办考研复试、调剂指导交流会',
      link: "/2021/0311/c337a40300/page.htm"
    },
    {
      img: '/_upload/article/images/da/4a/021dd4f14646abd12b609329d7dd/5e50e625-55bf-4d78-9b92-6954b84a6c47.jpg',
      day: '10',
      month: '2021-03',
      text: '（图文）智造工程学院召开教学大纲修订培训会',
      link: "/2021/0310/c337a40282/page.htm"
    },
    {
      text: "（图文）建筑工程学院开展庆祝“三八”妇女节活动并召开新学期教学工作会议",
      img: "/_upload/article/images/9c/3a/56a89c5e4c42a0f7f4e3b8fe7d07/33bd1046-a9aa-4c1c-bb42-5c83622552fd.jpg",
      month: "2021-03",
      day: '10',
      link: "/2021/0310/c337a40276/page.htm"
    },
    {
      text: "把握形势，立足实际，助力成长——建筑工程学院召开新学期学生工作布置会议",
      img: "/_upload/article/images/20/54/9b34620f4c6e85ddc6b69ee61e8f/2c01241e-a21c-41f1-8188-a670da231267.jpg",
      month: "2021-03",
      day: '09',
      link: "/2021/0309/c337a40274/page.htm"
    },

    {
      text: "(图文)智造工程学院召开2021届毕业生就业再动员暨新学期开学工作会议",
      img: "/_upload/article/images/93/29/ece4f6fc4d3d9e6b82fb38a61844/b4c96810-e6d6-4532-b623-112158f34813.jpg",
      month: "2021-03",
      day: '09',
      link: "/2021/0305/c337a40248/page.htm"
    },
    {
      text: "（图文）智造工程学院召开新学期工作会议",
      img: "/_upload/article/images/17/e0/286bfb52462c957d1f442912870e/5986ee9c-fdc2-45d9-8179-d592dcaf55bb.jpg",
      month: "2021-03",
      day: '04',
      link: "/2021/0304/c337a40233/page.htm"
    },
  ]

  const openDrawer = () => {
    navigation.openDrawer()
  }

  return (
    <View style={{ flex: 1 }}>
      <MaYuan openDrawer={openDrawer}></MaYuan>

      <SafeAreaView style={{ flex: 1, paddingLeft: 10, paddingRight: 10, marginTop: 10}}>
        <ScrollView>
            <PicArtical listData={listData} navigation={navigation}></PicArtical>
            <TeachActivites navigation={navigation}></TeachActivites>
            <StudyUse navigation={navigation}></StudyUse>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

