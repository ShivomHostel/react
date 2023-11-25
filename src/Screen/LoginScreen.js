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
import React, {useState} from 'react';
import {colors} from '../Utils/Colors';
import {fontSize} from '../Utils/Size';
import {horizontalScale, verticalScale} from '../Utils/Metrics';
import PickerCard from '../Components/cards/PickerCard';

const LoginScreen = ({navigation}) => {
  const [user_Open, setUser_Open] = useState(false);
  const [user_Type, setuser_Type] = useState(null);
  const [typeItems, setType_Items] = useState([
    {lable: 'Admin', value: 'admin'},
    {lable: 'Warden', value: 'Warden'},
    {lable: 'Manager', value: 'Manager'},
  ]);

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
        <PickerCard
          title={'USER TYPE'}
          open={user_Open}
          value={user_Type}
          items={typeItems}
          setOpen={setUser_Open}
          setValue={setuser_Type}
          setItems={setType_Items}
        />
        <View style={styles.inputcard}>
          <Text style={styles.inptitle}>USER NAME</Text>
          <View style={styles.bax}>
            <TextInput
              name={'userName'}
              placeholder="USER NAME"
              style={styles.inputStyle}
            />
          </View>
        </View>
        <View style={styles.inputcard}>
          <Text style={styles.inptitle}>PASSWORD</Text>
          <View style={styles.bax}>
            <TextInput
              name={'password'}
              placeholder="PASSWORD"
              style={styles.inputStyle}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: 40,
            alignItems: 'center',
          }}>
          <Text style={styles.textstyle}>GUEST LOGIN </Text>
          <Text style={styles.textstyle}>FORGOT PASSWORD ?</Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('TabNavigation')}
          style={styles.btn}>
          <Text style={styles.textstyle}>Login</Text>
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
    height: 85,
    gap: 10,
  },
  inptitle: {
    fontSize: fontSize.lable,
    color: colors.black,
  },
  bax: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
  },
  inputStyle: {
    height: '100%',
    color: colors.txtgrey,
    fontSize: 12,
    width: '100%',
    paddingLeft: 12,
    borderWidth: 1,
    borderColor: colors.white,
  },
  btn: {
    height: 60,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.btn,
    borderRadius: 4,
  },
  textstyle: {
    fontSize: fontSize.lable,
    color: colors.black,
  },
  altext: {
    color: '#000',
    fontSize: 16,
    marginVertical: verticalScale(5),
  },
  loginText: {
    color: '#000',
    fontSize: 18,
    marginHorizontal: horizontalScale(10),
  },
});
