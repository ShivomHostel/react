<<<<<<< HEAD
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../Utils/Colors';
import AddSales_Screen from '../../Screen/AddSales_Screen';
import Add_Expenses_Screen from '../../Screen/Add_Expenses_Screen';
import Add_Food_Screen from '../../Screen/Add_Food_Screen';
import Add_Registration_Screen from '../../Screen/Add_Registration_Screen';
import DrawerNavigation from '../DrawerNavigation/DrawerNavigation';
import Add_Item_Screen from '../../Screen/Items/Add_Item_Screen';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
    initialRouteName='Home' 
      screenOptions={{
        tabBarActiveTintColor: colors.orange,
        tabBarInactiveTintColor: colors.lightygrey,
        tabBarStyle: {
          backgroundColor: colors.white,
          borderTopColor: colors.lightygrey,
          height: 70,
          paddingBottom: 10,

        },
        tabBarLabelStyle: {
          fontSize: 12,
          lineHeight: 15,
          fontWeight:'500',
          // fontFamily: 'Superclarendon-Regular',
        },
      }}>
      <Tab.Screen
        name="Add_Sales"
        component={AddSales_Screen}
        options={{
          tabBarLabel: 'Add Sales',
          headerShown: false,
          tabBarIcon: ({focused, color}) =>
            !focused ? (
              <Image
                source={require('../../Assets/Icons/sales.png')}
                style={{
                  width: 28,
                  height: 28,
                  tintColor: colors.lightygrey,
                  resizeMode: 'contain',
                }}
              />
            ) : (
              <Image
                source={require('../../Assets/Icons/sales.png')}
                style={{
                  width: 28,
                  height: 28,
                  tintColor: colors.orange,
                  resizeMode: 'contain',
                }}
              />
            ),
        }}
      />
      <Tab.Screen
        name="Add_Expenses"
        component={Add_Item_Screen}
        options={{
          tabBarLabel: 'Add Expenses',
          headerShown: false,
          tabBarIcon: ({focused, color}) =>
            !focused ? (
              <Image
                source={require('../../Assets/Icons/expenses.png')}
                style={{
                  width: 28,
                  height: 28,
                  tintColor: colors.lightygrey,
                  resizeMode: 'contain',
                }}
              />
            ) : (
              <Image
                source={require('../../Assets/Icons/expenses.png')}
                style={{
                  width: 28,
                  height: 28,
                  tintColor: colors.orange,
                  resizeMode: 'contain',
                }}
              />
            ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={DrawerNavigation}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarIcon: ({focused, color}) =>
            !focused ? (
              <Image
              source={require('../../Assets/Icons/home.png')}
              style={{
                width: 28,
                height: 28,
                tintColor: colors.lightygrey,
                resizeMode: 'contain',
              }}
            />
          ) : (
            <Image
              source={require('../../Assets/Icons/home.png')}
              style={{
                width: 28,
                height: 28,
                tintColor: colors.orange,
                resizeMode: 'contain',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Add_Registration"
        component={Add_Registration_Screen}
        options={{
          tabBarLabel: 'Registration',
          headerShown: false,
            tabBarIcon: ({focused, color}) =>
          !focused ? (
            <Image
              source={require('../../Assets/Icons/registration.png')}
              style={{
                width: 28,
                height: 28,
                tintColor: colors.lightygrey,
                resizeMode: 'contain',
              }}
            />
          ) : (
            <Image
              source={require('../../Assets/Icons/registration.png')}
              style={{
                width: 28,
                height: 28,
                tintColor: colors.orange,
                resizeMode: 'contain',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Add_Menu"
        component={Add_Food_Screen}
        options={{
          tabBarLabel: 'Add Menu',
          headerShown: false,
          tabBarIcon: ({focused, color}) =>
            !focused ? (
              <Image
                source={require('../../Assets/Icons/add_menu.png')}
                style={{
                  width: 28,
                  height: 28,
                  tintColor: colors.lightygrey,
                  resizeMode: 'contain',
                }}
              />
            ) : (
              <Image
                source={require('../../Assets/Icons/add_menu.png')}
                style={{
                  width: 28,
                  height: 28,
                  tintColor: colors.orange,
                  resizeMode: 'contain',
                }}
              />
            ),
        }}
      />
      
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({});
=======
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../Utils/Colors';
import AddSales_Screen from '../../Screen/AddSales_Screen';
import Add_Expenses_Screen from '../../Screen/Add_Expenses_Screen';
import Add_Food_Screen from '../../Screen/Add_Food_Screen';
import Add_Registration_Screen from '../../Screen/Add_Registration_Screen';
import DrawerNavigation from '../DrawerNavigation/DrawerNavigation';
import { fontSize } from '../../Utils/Size';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
    initialRouteName='Home' 
      screenOptions={{
        tabBarActiveTintColor: colors.orange,
        tabBarInactiveTintColor: colors.lightygrey,
        tabBarStyle: {
          backgroundColor: colors.white,
          borderTopColor: colors.lightygrey,
          height: 60,
          paddingBottom: 5,

        },
        tabBarLabelStyle: {
          fontSize: fontSize.small,
          lineHeight: 15,
          fontWeight:'500',
          // fontFamily: 'Superclarendon-Regular',
        },
      }}>
      <Tab.Screen
        name="Add_Sales"
        component={AddSales_Screen}
        options={{
          tabBarLabel: 'Add Sales',
          headerShown: false,
          tabBarIcon: ({focused, color}) =>
            !focused ? (
              <Image
                source={require('../../Assets/Icons/sales.png')}
                style={{
                  width: 28,
                  height: 28,
                  tintColor: colors.lightygrey,
                  resizeMode: 'contain',
                }}
              />
            ) : (
              <Image
                source={require('../../Assets/Icons/sales.png')}
                style={{
                  width: 28,
                  height: 28,
                  tintColor: colors.orange,
                  resizeMode: 'contain',
                }}
              />
            ),
        }}
      />
      <Tab.Screen
        name="Add_Expenses"
        component={Add_Expenses_Screen}
        options={{
          tabBarLabel: 'Add Expenses',
          headerShown: false,
          tabBarIcon: ({focused, color}) =>
            !focused ? (
              <Image
                source={require('../../Assets/Icons/expenses.png')}
                style={{
                  width: 28,
                  height: 28,
                  tintColor: colors.lightygrey,
                  resizeMode: 'contain',
                }}
              />
            ) : (
              <Image
                source={require('../../Assets/Icons/expenses.png')}
                style={{
                  width: 28,
                  height: 28,
                  tintColor: colors.orange,
                  resizeMode: 'contain',
                }}
              />
            ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={DrawerNavigation}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarIcon: ({focused, color}) =>
            !focused ? (
              <Image
              source={require('../../Assets/Icons/home.png')}
              style={{
                width: 28,
                height: 28,
                tintColor: colors.lightygrey,
                resizeMode: 'contain',
              }}
            />
          ) : (
            <Image
              source={require('../../Assets/Icons/home.png')}
              style={{
                width: 28,
                height: 28,
                tintColor: colors.orange,
                resizeMode: 'contain',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Add_Registration"
        component={Add_Registration_Screen}
        options={{
          tabBarLabel: 'Registration',
          headerShown: false,
            tabBarIcon: ({focused, color}) =>
          !focused ? (
            <Image
              source={require('../../Assets/Icons/registration.png')}
              style={{
                width: 28,
                height: 28,
                tintColor: colors.lightygrey,
                resizeMode: 'contain',
              }}
            />
          ) : (
            <Image
              source={require('../../Assets/Icons/registration.png')}
              style={{
                width: 28,
                height: 28,
                tintColor: colors.orange,
                resizeMode: 'contain',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Add_Menu"
        component={Add_Food_Screen}
        options={{
          tabBarLabel: 'Add Menu',
          headerShown: false,
          tabBarIcon: ({focused, color}) =>
            !focused ? (
              <Image
                source={require('../../Assets/Icons/add_menu.png')}
                style={{
                  width: 28,
                  height: 28,
                  tintColor: colors.lightygrey,
                  resizeMode: 'contain',
                }}
              />
            ) : (
              <Image
                source={require('../../Assets/Icons/add_menu.png')}
                style={{
                  width: 28,
                  height: 28,
                  tintColor: colors.orange,
                  resizeMode: 'contain',
                }}
              />
            ),
        }}
      />
      
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({});
>>>>>>> main
