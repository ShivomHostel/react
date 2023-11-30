import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {colors} from '../../Utils/Colors';
import {fontSize} from '../../Utils/Size';
import MIcon from 'react-native-vector-icons/MaterialIcons';

import SplashScreen from '../../Screen/Splash/SplashScreen';
import HomeScreen from '../../Screen/HomeScreen';
import AlertDetais from '../../Screen/AlertDetais';
import AnalysisDetails from '../../Screen/AnalysisDetails';
import AlertList from '../../Screen/AlertList';
import LoginScreen from '../../Screen/LoginScreen.js';
import AnalysisList from '../../Screen/AnalysisList';

function StackNavigation(props) {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  return (
    // <NavigationContainer>
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerLeft: () => (
            <MIcon
              name="menu"
              color={colors.white}
              size={22}
              onPress={() => navigation.openDrawer()}
            />
          ),
          headerTitle: '   Tina',
          headerTitleAlign: 'left',
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.AppDefaultColor,
          },
          headerTitleStyle: {fontSize: fontSize.txt},
        }}
      />
      <Stack.Screen
        name="AlertList"
        component={AlertList}
        options={{
          headerTitle: 'Alert List',
          headerTitleAlign: 'left',
          headerTintColor: colors.white,
          headerStyle: {backgroundColor: colors.AppDefaultColor},
          headerTitleStyle: {fontSize: fontSize.lable},
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="AlertDetais"
        component={AlertDetais}
        options={{
          headerTitle: 'Alert Details',
          headerTitleAlign: 'left',
          headerTintColor: colors.white,
          headerStyle: {backgroundColor: colors.AppDefaultColor},
          headerTitleStyle: {fontSize: fontSize.lable},
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="AnalysisList"
        component={AnalysisList}
        options={{
          headerTitle: 'Live Patient',
          headerTitleAlign: 'left',
          headerTintColor: colors.white,
          headerStyle: {backgroundColor: colors.AppDefaultColor},
          headerTitleStyle: {fontSize: fontSize.lable},
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="AnalysisDetails"
        component={AnalysisDetails}
        options={{
          headerTitle: 'Live Patient',
          headerTitleAlign: 'left',
          headerTintColor: colors.white,
          headerStyle: {backgroundColor: colors.AppDefaultColor},
          headerTitleStyle: {fontSize: fontSize.lable},
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
    // </NavigationContainer>
  );
}
export default StackNavigation;
