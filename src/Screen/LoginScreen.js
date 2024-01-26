import {
  Image,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {colors} from '../Utils/Colors';
import {fontSize} from '../Utils/Size';
import {horizontalScale, moderateScale, verticalScale} from '../Utils/Metrics';
import {useDispatch, useSelector} from 'react-redux';
import {loginUser, setUserData} from '../Service/slices/authSlice';

import {Picker} from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {handleUserHostelAPI} from '../Service/slices/GetUserHostelSlice';

const LoginScreen = ({navigation}) => {
  const INITIAL_DATA = {
    userType: 'admin',
    businessName: 'Makwana Group',
    username: '9516760054',
    password: 'Makwana3192@',
  };
  const dispatch = useDispatch();
  const status = useSelector(state => state.root);
  const loading = useSelector(state => state?.root.auth.loading);
  const error = useSelector(state => state?.root.auth.error);
  const LoginResult = useSelector(state => state?.root.auth.loginResponse);
  const hostelNames = useSelector(state => state?.root.hostelNames.data);
  const [userBussiness, setUserBussiness] = useState(null);
  const [userData, setUserdata] = useState(INITIAL_DATA);

  const handleChange = useCallback(field => {
    setUserdata(prev => {
      return {...prev, ...field};
    });
  });
  const handleSubmit = async () => {
    try {
      let res = await dispatch(loginUser({...userData}));
      if (res.payload.status === true) {
        const jsonValue = JSON.stringify(res.payload.data);
        console.log('value', jsonValue);
        await AsyncStorage.setItem(
          'userToken',
          JSON.stringify(res.payload.data),
        );
        dispatch(setUserData(res.payload.data));
        navigation.replace('TabNavigation');
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getHostels = async text => {
    console.log(text);
    try {
      const res = await dispatch(handleUserHostelAPI(text));
    } catch (error) {
      console.log('something went wrong!');
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={colors.white} />
      <ScrollView style={{height: 'auto'}}>
        <View style={styles.card}>
          <View style={styles.imgbxstyle}>
            <Image
              source={require('../Assets/Photos/logo.png')}
              style={styles.img}
            />
          </View>
          {error && <Text style={styles.error}>{error}</Text>}
          <View style={styles.inputcard}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={styles.textstyle}>USER TYPE</Text>
            </View>
            <View style={styles.bax}>
              <Picker
                style={{
                  color: colors.txtgrey,
                  fontSize: moderateScale(10),
                  marginTop: verticalScale(-8),
                  marginLeft: horizontalScale(-5),
                }}
                selectedValue={userData.userType}
                onValueChange={(itemValue, itemIndex) => {
                  setUserdata({userType: itemValue});
                }}>
                {['Admin', 'Manager', 'Warden']?.map((item, i) => {
                  return <Picker.Item key={i} label={item} value={item} />;
                })}
              </Picker>
            </View>
          </View>
          <View style={styles.inputcard}>
            <Text style={styles.inptitle}>USER NAME</Text>
            <View style={styles.bax}>
              <TextInput
                name={'userName'}
                value={userData.username}
                placeholder="User Name"
                onChangeText={text => {
                  getHostels(text);
                  handleChange({username: text});
                }}
                // onChange={getHostels}
                style={styles.inputStyle}
              />
            </View>
          </View>
          {hostelNames !== null && (
            <View style={styles.inputcard}>
              <Text style={styles.inptitle}>Select Users</Text>
              <View style={styles.bax}>
                <Picker
                  style={{
                    color: colors.txtgrey,
                    fontSize: moderateScale(10),
                    marginTop: verticalScale(-8),
                    marginLeft: horizontalScale(-5),
                  }}
                  selectedValue={userData.businessName}
                  onValueChange={(itemValue, itemIndex) => {
                    setUserdata({businessName: itemValue});
                  }}>
                  {hostelNames?.map((item, i) => {
                    return <Picker.Item key={i} label={item} value={item} />;
                  })}
                </Picker>
              </View>
            </View>
          )}
          <View style={styles.inputcard}>
            <Text style={styles.inptitle}>PASSWORD</Text>
            <View style={styles.bax}>
              <TextInput
                name={'password'}
                placeholder="Password"
                secureTextEntry={true}
                value={userData.password}
                onChangeText={text => {
                  handleChange({password: text});
                }}
                style={styles.inputStyle}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              // height: 40,
              alignItems: 'center',
            }}>
            <Text style={styles.textstyle}>GUEST LOGIN </Text>
            <Text style={styles.textstyle}>FORGOT PASSWORD ?</Text>
          </View>

          <TouchableOpacity
            disabled={status.loading}
            onPress={handleSubmit}
            style={styles.btn}>
            <Text style={styles.textstyle}>
              {status.loading ? 'Loading...' : 'Login'}
            </Text>
          </TouchableOpacity>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.altext}>Already have an account?</Text>
            <Text
              onPress={() => {
                navigation.navigate('RegisterScreen');
              }}
              style={styles.loginText}>
              Register
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: '5%',
  },
  card: {
    marginTop: '10%',
    // height:'75%',
    verticalAlign: 'middle',
    backgroundColor: '#808080aa',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 10,
    paddingHorizontal: 20,
    gap: 15,
    paddingVertical: 20,
  },
  imgbxstyle: {
    height: verticalScale(100),
    width: horizontalScale(160),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  img: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  inputcard: {
    height: verticalScale(75),
    gap: 10,
  },
  inptitle: {
    fontSize: fontSize.lable,
    color: colors.black,
    fontFamily: 'Roboto-Regular',
  },
  bax: {
    width: '100%',
    height: verticalScale(45),
    backgroundColor: '#fff',
  },
  inputStyle: {
    height: '100%',
    color: colors.txtgrey,
    fontSize: moderateScale(16),
    width: '100%',
    paddingLeft: 12,
    borderWidth: 1,
    borderColor: colors.white,
    fontFamily: 'Roboto-Regular',
  },
  btn: {
    height: verticalScale(50),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.btn,
    borderRadius: 4,
  },
  textstyle: {
    fontSize: fontSize.lable,
    color: colors.black,
    fontFamily: 'Roboto-Regular',
  },
  altext: {
    color: '#000',
    fontSize: moderateScale(16),
    fontFamily: 'Roboto-Regular',
    marginVertical: verticalScale(5),
  },
  loginText: {
    color: '#000',
    fontSize: moderateScale(18),
    fontFamily: 'Roboto-Regular',
    marginHorizontal: horizontalScale(10),
  },
  error: {
    fontSize: moderateScale(14),
    color: colors.red,
    fontFamily: 'Roboto-Regular',
    alignSelf: 'center',
  },
});
