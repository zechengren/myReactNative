import React, { Component, useEffect, useState, useRef } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native';
import RNRestart from 'react-native-restart';
import storage from '../store/index'
// import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Icon, Button } from 'react-native-elements';
// const input = React.createRef();
export default function login({ navigation }) {
  const [user_errorMessage, setUser_errorMessage] = useState('')
  const [passWord_errorMessage, setPassWord_errorMessage] = useState('')
  const [params, setParams] = useState({
    useId: '',
    passWord: ''
  })
  // const names = useRef()
  const {current: message} = useRef({
    useId: '',
    passWord: ''
  })
  const useIdFun = (e) => {
    message.useId = e
    setParams({
      ...params,
      useId: e
    })
  }
  const passWordFun = (e) => {
    message.passWord = e
    setParams({
      ...params,
      passWord: e
    })
  }

  const loginFun = () => {
    const {useId, passWord} = message
    if(useId == '123456' && passWord == '123456') {
      setUser_errorMessage('')
      setPassWord_errorMessage('')
      storage.save({
        key: 'entersssss',
        data: {
          enterKey: 'yes',
        },
        expires: 1000 * 3600
      })
      // navigation.back()
      RNRestart.Restart();
    } else {
      if (useId.length == 0 ) {
        setUser_errorMessage('用户名不能为空')
      }

      if (passWord.length == 0 ) {
        console.log('lll');
        setPassWord_errorMessage('密码不能为空')
      }
    }
  }
  return (
    <View style={{ alignItems: 'center', height: 800, marginTop: 100}}>
      <View style={style.titleBox}><Text style={style.title}>登录</Text></View>
      <View style={style.dataBox}>
        <Input
          placeholder='用户名'
          leftIcon={
            <Image style={{width: 30, height: 30}} source={require('../assets/img/user.png')}></Image>
          }
          onChangeText={useIdFun}
          errorMessage={params.useId == '123456' ? '' : (params.useId == '' ? user_errorMessage : '请输入正确的用户名')}
        />
        <Input
          placeholder="密码"
          secureTextEntry={true}
          leftIcon={
            <Image style={{width: 30, height: 30}} source={require('../assets/img/password.png')}></Image>
          }
          onChangeText={passWordFun}
          errorMessage={params.passWord == '123456' ? '' : (params.passWord == '' ? passWord_errorMessage : '请输入正确的密码')}
        />
      </View>
      <View style={style.btnBox}>
        <Button
          title="登录"
          onPress={loginFun}
        />
      </View>
    </View>
  )
}
const style = StyleSheet.create({
  titleBox: {
    height: 40
  },
  dataBox: {
    width: '100%'
  },
  title: {
    color: '#ea6f5a',
    fontSize: 16,
    lineHeight: 40
  },
  btnBox: {
    width: '50%'
  }
})
