import {
  Image,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView
} from 'react-native';
import React, { useState } from 'react';
import { colors } from '../Utils/Colors';
import { fontSize } from '../Utils/Size';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import InputCard from '../Components/cards/InputCard';
import User_Form from '../Components/User_Form';
import Bussiness_Form from '../Components/Bussiness_Form';
import Account_Form from '../Components/Account_Form';
import { useMultistepForm } from '../Hooks/useMultistepForm';

const RegisterScreen = ({navigation}) => {
  const [data, setData] = useState({
    first_Name: "",
    last_Name: "",
    email: "",
    mobile: "",
    alternate_mobile: "",
    bussiness_type: "",
    bussiness_name: "",
    gst_no: "",
    city: "",
    state: "",
    country: "",
    pin_code: "",
    address: "",
    user_name: "",
    password: "",
    confirm_address: "",
  })
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <User_Form {...data} updateFields={updateFields} />,
      <Bussiness_Form {...data} updateFields={updateFields} />,
      <Account_Form {...data} updateFields={updateFields} />,
    ])
  function updateFields(fields) {
    setData(prev => {
      return { ...prev, ...fields }
    })
  }
  const onSubmit =()=>{
    console.log('Pressed')
    if (!isLastStep) return next()
  }
  // function onSubmit(e: FormEvent) {
  //   e.preventDefault()
  //   if (!isLastStep) return next()
  //   alert("Successful Account Creation")
  // }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingVertical: '5%' }}  >
        <StatusBar barStyle={'dark-content'} backgroundColor={colors.white} />
        <View style={styles.card}>
          <View style={styles.imgbxstyle}>
            <Image
              source={require('../Assets/Photos/logo.png')}
              style={styles.img}
            />
          </View>
          {step}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: 40, alignItems: 'center' }}>
            {isFirstStep&&<TouchableOpacity onPress={()=>navigation.navigate('LoginScreen')}><Text style={[styles.textstyle]}>LOGIN </Text></TouchableOpacity>}
                        <View style={styles.step_col} >
              {!isFirstStep && (
                <TouchableOpacity onPress={back} style={styles.stepbtn}>
                  <MaterialCommunityIcons name="arrow-left" color={'#008000'} size={16} />
                  <Text style={[styles.textstyle, { color: '#008000' }]}> Previous</Text>
                </TouchableOpacity>
              )}
              <TouchableOpacity onPress={onSubmit} style={styles.stepbtn}>
                <Text style={[styles.textstyle, { color: '#008000' }]}>{isLastStep ? "Submit" : "Next "}</Text>
                {!isLastStep && <MaterialCommunityIcons name="arrow-right" color={'#008000'} size={16} />}
              </TouchableOpacity>

            </View>
          </View>

          {/* <TouchableOpacity style={styles.btn}>
          <Text style={styles.textstyle}>Register</Text>
        </TouchableOpacity> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: '5%',
    justifyContent: 'center'
  },
  card: {
    // top: '10%',
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
    color: colors.black
  },
  bax: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff'
  },
  inputStyle: {
    height: '100%',
    color: colors.txtgrey,
    fontSize: 12,
    width: '100%',
    paddingLeft: 12,
    borderWidth: 1,
    borderColor: colors.white
  },
  btn: {
    height: 60,
    width: '100%',
    paddingLeft: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.btn,
    borderRadius: 4
  },
  step_col: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 20
  },
  stepbtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textstyle: {
    fontSize: fontSize.lable,
    color: colors.black
  }
});
