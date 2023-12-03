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
import {loginUser} from '../Service/slices/authSlice';
import {Picker} from '@react-native-picker/picker';

const LoginScreen = ({navigation}) => {
  const INITIAL_DATA = {
    userType: 'admin',
    businessName: 'Makwana Group',
    username: '9516760054',
    password: 'Makwana3192@',
  };
  const dispatch = useDispatch();
  const status = useSelector(state => state.root.auth);
  console.log('status', status);
  const [userBussiness, setUserBussiness] = useState(null);
  const [userData, setUserData] = useState(INITIAL_DATA);
  console.log('userData:', userData);
  const handleChange = useCallback(field => {
    setUserData(prev => {
      return {...prev, ...field};
    });
  });
  const handleSubmit = () => {
    dispatch(loginUser({...userData}));

    // navigation.navigate('RegisterScreen');
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={colors.white} />
      <View style={styles.card}>
        <View style={styles.imgbxstyle}>
          <Image
            source={require('../Assets/Photos/logo.png')}
            style={styles.img}
          />
        </View>
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
            <TextInput
              name={'userType'}
              value={userData.userType}
              placeholder="User Type"
              onChangeText={text => {
                handleChange({userType: text});
              }}
              style={styles.inputStyle}
            />
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
                handleChange({username: text});
              }}
              style={styles.inputStyle}
            />
          </View>
        </View>
        {
          // <View style={styles.inputcard}>
          //   <Text style={styles.inptitle}>USER NAME</Text>
          //   <View style={styles.bax}>
          //     <Picker
          //       style={{
          //         color: colors.txtgrey,
          //         fontSize: moderateScale(10),
          //         marginTop: verticalScale(-8),
          //         marginLeft: horizontalScale(-5),
          //       }}
          //       selectedValue={userData.businessName}
          //       onValueChange={(itemValue, itemIndex) => {
          //         setUserData({businessName: itemValue});
          //       }}>
          //       <Picker.Item label={'Makwana'} value="Makwana " />
          //       <Picker.Item label={'Makwana Group'} value="Makwana Group" />
          //     </Picker>
          //   </View>
          // </View>
        }
        <View style={styles.inputcard}>
          <Text style={styles.inptitle}>PASSWORD</Text>
          <View style={styles.bax}>
            <TextInput
              name={'password'}
              placeholder="Password"
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

        <TouchableOpacity disabled={status.loading} onPress={handleSubmit} style={styles.btn}>
          <Text style={styles.textstyle}>{status.loading?'Loading...':'Login'}</Text>
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
    top: '10%',
    // height:'75%',
    backgroundColor: '#808080aa',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 10,
    paddingHorizontal: 20,
    gap: 15,
    paddingVertical: 20,
  },
  imgbxstyle: {
    height: 100,
    width: 160,
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
    textTransform: 'lowercase',
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
});
