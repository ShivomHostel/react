import React, {useRef, useEffect, useState, useLayoutEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Animated,
  StatusBar,
  Image,
} from 'react-native';
import {colors} from '../../Utils/Colors';
import {styles} from './SplashStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {setUserData} from '../../Service/slices/authSlice';
import {horizontalScale, verticalScale} from '../../Utils/Metrics';
function SplashScreen(props) {
  const [visible, setVisible] = useState(false);
  const [token, setToken] = useState(null);
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const dispatch = useDispatch();
  const move = async () => {
    const value = await AsyncStorage.getItem('userToken');
    const parseValue = JSON.parse(value);
    console.log('token', parseValue);
    setTimeout(() => {
      if (parseValue !== null) {
        dispatch(setUserData(parseValue));
        props.navigation.replace('TabNavigation');
      } else {
        props.navigation.replace('LoginScreen');
      }
    }, 3000);
  };

  useEffect(() => {
    move();
  }, []);

  return (
    <SafeAreaView style={[styles.Container]}>
      <StatusBar
        backgroundColor={colors.AppDefaultColor}
        barStyle={colors.AppDefaultColor}
      />
      {/* <Animated.Text style={[styles.txt]}>
        Smart Hostel
      </Animated.Text> */}
      <Image
        source={require('../../Assets/Photos/logo.png')}
        style={{height: verticalScale(120), width: horizontalScale(200)}}
        resizeMode="contain"
      />
    </SafeAreaView>
  );
}
export default SplashScreen;
