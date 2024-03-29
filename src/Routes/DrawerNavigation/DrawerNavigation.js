import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import Rooms_Seat_Screen from '../../Screen/Rooms/Rooms_Seat_Screen';
import {colors} from '../../Utils/Colors';
import Dashboard_Screen from '../../Screen/Dashboard/Dashboard_Screen';
import Register_Candidate_Screen from '../../Screen/Registration/Register_Candidate_Screen';
import Expenses_Screen from '../../Screen/Expenses/Expenses_Screen';
import Bussiness_Dashboard from '../../Screen/Dashboard/Bussiness_Dashboard';
import Payment_Screen from '../../Screen/Payment/Payment_Screen';
import Sale_Tenant_Screen from '../../Screen/Sale/Sale_Tenant_Screen';
import Complaint_Board_Screen from '../../Screen/Complaint/Complaint_Board_Screen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  const navigation = useNavigation();
  const logout = async () => {
    try {
      await AsyncStorage.clear();
      navigation.replace('LoginScreen');
    } catch (e) {
      console.log('Something went wrong!');
    }
    console.log('Done.');
  };
  const CustomDrawerContent = props => {
    return (
      <DrawerContentScrollView>
        <DrawerItemList {...props} />
        <DrawerItem
          labelStyle={{color: colors.white}}
          label="Log Out"
          onPress={logout}
        />
      </DrawerContentScrollView>
    );
  };
  return (
    <Drawer.Navigator
      screenOptions={{

        drawerContentStyle: {backgroundColor: '#333333'},
        drawerActiveBackgroundColor: colors.darkgrey,
        drawerItemStyle: {backgroundColor: colors.darkgrey},
        drawerActiveTintColor: colors.AppDefaultColor,
        drawerInactiveTintColor: colors.white,
        drawerContentContainerStyle: {backgroundColor: colors.black},
        drawerStyle: {backgroundColor: '#333333'},
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="Dashboard"
        component={Dashboard_Screen}
        options={{headerShown: false, drawerLabel: 'Home'}}
      />
      <Drawer.Screen
        name="Rooms\Seats"
        component={Rooms_Seat_Screen}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Registration"
        component={Register_Candidate_Screen}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Bussiness Dashboard"
        component={Bussiness_Dashboard}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Expenses"
        component={Expenses_Screen}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Payment"
        component={Payment_Screen}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Sale_Tenant"
        component={Sale_Tenant_Screen}
        options={{headerShown: false, drawerLabel: 'Sale/Tenant'}}
      />
      <Drawer.Screen
        name="Complaint_Board"
        component={Complaint_Board_Screen}
        options={{headerShown: false, drawerLabel: 'Complaint Board'}}
      />
    </Drawer.Navigator>
  );
};
export default DrawerNavigation;
