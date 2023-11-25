import React, { useRef, useEffect, useState } from 'react';
import { View, Text, SafeAreaView, Animated, StatusBar } from 'react-native';
import { colors } from '../../Utils/Colors';
import { styles } from './SplashStyle';
function SplashScreen(props) {
  const [visible, setVisible] = useState(false);

  const fadeAnim = useRef(new Animated.Value(1)).current;
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  useEffect(() => {
    isConnected();
  });
  const move = () => {
    setTimeout(() => {
      props.navigation.replace('LoginScreen');
    }, 3000);
  };

  const isConnected = () => {
    hideModal();
    hideModal();
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 5000,
      useNativeDriver: true,
    }).start();
    move();
  };

  return (
    <SafeAreaView style={[styles.Container]}>
      <StatusBar
        backgroundColor={colors.AppDefaultColor}
        barStyle={colors.AppDefaultColor}
      />
      <Animated.Text style={[styles.txt, { opacity: fadeAnim }]}>
      Smart Hostel
      </Animated.Text>

    </SafeAreaView>
  );
}
export default SplashScreen;
