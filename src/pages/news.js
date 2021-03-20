/*
 * @Author: your name
 * @Date: 2021-03-11 10:17:52
 * @LastEditTime: 2021-03-20 18:50:07
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
import StudyUse from '../component/studyUse'
export default function index({ navigation }) {
  const listData = [
    {
      img: '/_upload/article/images/2e/ac/909c23374b14b6888c0f12f984af/9a021b68-335c-408f-adda-df82dc0abf1e.jpg',
      day: '10',
      month: '2021-03',
      text: '（图文）我校召开2021年纪委第一次工作会议',
      link: "/2021/0310/c336a40287/page.htm"
    },
    {
      img: '/_upload/article/images/0f/48/df99853f4f0da52c345ceb2b32dc/ccba5355-2f77-4a75-8e1d-9543c6c45926.jpg',
      day: '09',
      month: '2021-03',
      text: '（图文）学生工作处组织召开2021年春季学期学生工作会议',
      link: "/2021/0309/c336a40273/page.htm"
    },
  ]
  const listData2 = [
    {
      img: '/_upload/article/images/8e/48/4cefd988406bba92cb3575d4ba72/448f6af5-e746-4678-a1bc-e8b76fb5575a.jpg',
      day: '09',
      month: '2021-03',
      text: '（图文）校工会女工委举办庆祝“三八”国际妇女节活动',
      link: "/2021/0309/c336a40266/page.htm"
    },
    {
      img: '/_upload/article/images/fb/7d/0af8ff1f45e2abdf26320c091d62/583618b5-142e-489c-8ee3-1f9a6cd8e047.png',
      day: '09',
      month: '2021-03',
      text: '（图文）我校召开2021届毕业生就业工作专题会议',
      link: "/2021/0308/c336a40265/page.htm"
    },
  ]
  const articalData = [
    {
      day: '09',
      month: '2021-03',
      title: '我校开展开学初线下教学巡视工作',
      text: '3月8日，开学初线下教学第一天，为深入了解新学期教学运行情况，切实保障教学秩序，在校长李家新、党委副书记王世俊和副校长秦锋的带领下，教师能力发展与教学质量监控中心组织教务处工作人员、教学督导专家开展了开学初线下教学巡视工作。巡视组分工明确，严格认真。从巡视情况来看，我校开学初线下教学秩序总体情况良好：...',
      link: "/2021/0309/c336a40269/page.htm"

    }
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
            <TextArtical listData={articalData} navigation={navigation}></TextArtical>
            <PicArtical listData={listData2} navigation={navigation}></PicArtical>
            <TeachActivites navigation={navigation}></TeachActivites>
            <StudyUse navigation={navigation}></StudyUse>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

