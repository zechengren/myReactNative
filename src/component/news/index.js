import React, { useState, useEffect } from 'react'
import {View, Text, ScrollView,SafeAreaView, Image, TouchableOpacity, StyleSheet, ImageBackground} from 'react-native'
import MaYuan from '../maYuan'
import HTMLView from 'react-native-htmlview';
import axios from 'axios'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Artical from '../artical'
// import { Button } from 'react-native-paper';
export default function index({ navigation }) {
  const [htmlContent, setHtmlContent] = useState();
  const api = 'http://www.masu.edu.cn'
  // const linkTo = useLinkTo();
  const listData = [
    {
      img: '/_upload/article/images/2e/ac/909c23374b14b6888c0f12f984af/9a021b68-335c-408f-adda-df82dc0abf1e.jpg',
      day: '10',
      month: '2021-03',
      text: '（图文）我校召开2021年纪委第一次工作会议'
    },
    {
      img: '/_upload/article/images/0f/48/df99853f4f0da52c345ceb2b32dc/ccba5355-2f77-4a75-8e1d-9543c6c45926.jpg',
      day: '09',
      month: '2021-03',
      text: '（图文）学生工作处组织召开2021年春季学期学生工作会议'
    },
  ]
  const listData2 = [
    {
      img: '/_upload/article/images/8e/48/4cefd988406bba92cb3575d4ba72/448f6af5-e746-4678-a1bc-e8b76fb5575a.jpg',
      day: '09',
      month: '2021-03',
      text: '（图文）校工会女工委举办庆祝“三八”国际妇女节活动'
    },
    {
      img: '/_upload/article/images/fb/7d/0af8ff1f45e2abdf26320c091d62/583618b5-142e-489c-8ee3-1f9a6cd8e047.png',
      day: '09',
      month: '2021-03',
      text: '（图文）我校召开2021届毕业生就业工作专题会议'
    },
  ]
  const articalData = [
    {
      day: '09',
      month: '2021-03',
      title: '我校开展开学初线下教学巡视工作',
      text: '3月8日，开学初线下教学第一天，为深入了解新学期教学运行情况，切实保障教学秩序，在校长李家新、党委副书记王世俊和副校长秦锋的带领下，教师能力发展与教学质量监控中心组织教务处工作人员、教学督导专家开展了开学初线下教学巡视工作。巡视组分工明确，严格认真。从巡视情况来看，我校开学初线下教学秩序总体情况良好：...'
    }
  ]
  const openDrawer = () => {
    navigation.openDrawer()
  }
  // const jumpArtical = () => {
  //   this.props.navigator.push({
  //     component: Artical,
  //     args: {
  //     }
  // })
  // }
  // useEffect(() => {
  //   axios.get('http://www.masu.edu.cn/')
  //     .then((res) => {
  //       setHtmlContent(res.data)
  //     })
  // }, [])
  // function renderNode(node, index, siblings, parent, defaultRenderer) {
  //   if(node.attribs && node.attribs.class == 'post post-7') {
  //     console.log(node,'ooo');
  //     console.log(node.children[3].children[1].children[0].data);
  //   }
  // }
  return (
    <View style={{ flex: 1 }}>
      <MaYuan openDrawer={openDrawer}></MaYuan>
      {/* <Button title='pppp'></Button> */}

      {/* <HTMLView value={htmlContent} renderNode={renderNode} style={{ display: 'none' }}></HTMLView> */}
      <SafeAreaView style={{ flex: 1, paddingLeft: 10, paddingRight: 10, marginTop: 10}}>
        <ScrollView>
          <TouchableOpacity>
            {listData.map(item =>
                <View style={style.border}>
                  <Image style={{ width: 351, height: 153, }} source={{ uri: `${api}${item.img}` }}></Image>
                  <View style={style.smallBox}>
                    <Text style={style.smallBoxText}>{item.day}</Text>
                    <View style={style.smallBoxBorder}></View>
                    <Text style={style.smallBoxText2}>{item.month}</Text>
                  </View>
                  <View style={style.bottomTextBox}>
                    <Text style={style.bottomText}>{item.text}</Text>
                  </View>
                </View>
              )
            }

            {articalData.map(item =>
              <View style={style.border}>
                  <View style={style.border2Title}>
                    <Text style={{lineHeight: 40}}>{item.title}</Text>
                  </View>
                  <View style={style.smallBox}>
                    <Text style={style.smallBoxText}>{item.day}</Text>
                    <View style={style.smallBoxBorder}></View>
                    <Text style={style.smallBoxText2}>{item.month}</Text>
                  </View>
                  <View style={style.artical}>
                    <Text style={style.articalText}>{item.text}</Text>
                  </View>
              </View>
            )}

            {listData2.map(item =>
                <View style={style.border}>
                  <Image style={{ width: 351, height: 153, }} source={{ uri: `${api}${item.img}` }}></Image>
                  <View style={style.smallBox}>
                    <Text style={style.smallBoxText}>{item.day}</Text>
                    <View style={style.smallBoxBorder}></View>
                    <Text style={style.smallBoxText2}>{item.month}</Text>
                  </View>
                  <View style={style.bottomTextBox}>
                    <Text style={style.bottomText}>{item.text}</Text>
                  </View>
                </View>
              )
            }





          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
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
  bottomTextBox: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: '#00000066',
    width: 351,
    height: 56,
    // background: url('http://www.masu.edu.cn/_upload/tpl/00/13/19/template19/images/img.png') repeat-x bottom left
  },
  bottomText: {
    color: '#fff',
    lineHeight: 70,
    fontSize: 16

  },
  artical: {
    marginTop: 8,
  },
  articalText: {
    fontSize: 12,
    lineHeight: 20
  }
})
