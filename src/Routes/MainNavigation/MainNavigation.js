<<<<<<< HEAD
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {colors} from '../../Utils/Colors';
import {fontSize} from '../../Utils/Size';

import SplashScreen from '../../Screen/Splash/SplashScreen';
import LoginScreen from '../../Screen/LoginScreen.js';
import RegisterScreen from '../../Screen/RegisterScreen';
import TabNavigation from '../TabNavigation/TabNavigation';
import Registarion_View from '../../Screen/Registration/Registarion_View';
import Category_Expenses from '../../Screen/Expenses/Category_Expenses';
function MainNavigation(props) {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TabNavigation"
          component={TabNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Registartion_View"
          component={Registarion_View}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Category_Expenses"
          component={Category_Expenses}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MainNavigation;
=======
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {colors} from '../../Utils/Colors';
import {fontSize} from '../../Utils/Size';

import SplashScreen from '../../Screen/Splash/SplashScreen';
import LoginScreen from '../../Screen/LoginScreen.js';
import RegisterScreen from '../../Screen/RegisterScreen';
import TabNavigation from '../TabNavigation/TabNavigation';
import Registration_Details from '../../Screen/Registration/Registration_Details';
function MainNavigation(props) {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TabNavigation"
          component={TabNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Registration_Details"
          component={Registration_Details}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MainNavigation;
>>>>>>> main
