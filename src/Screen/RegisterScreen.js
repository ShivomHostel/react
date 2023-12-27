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
import React, {memo, useState} from 'react';
import {colors} from '../Utils/Colors';
import {fontSize} from '../Utils/Size';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import InputCard from '../Components/cards/InputCard';
import User_Form from '../Components/User_Form';
import Bussiness_Form from '../Components/Bussiness_Form';
import Account_Form from '../Components/Account_Form';
import {useMultistepForm} from '../Hooks/useMultistepForm';
import {Formik} from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string().email('Invalid email!').required('Email is required'),
  mobileNumber: Yup.string()
    .required('Mobile Number is required')
    .matches(/^[0-9]{10}$/, 'Invalid mobile number'),

  businesType: Yup.string().required('Busines Type is required'),
  businessName: Yup.string().required('Business Name is required'),
  city: Yup.string().required('City is required'),
  state: Yup.string().required('State is required'),
  country: Yup.string().required('Country is required'),
  pincode: Yup.string().required('Pincode is required'),
  address: Yup.string().required('Address is required'),
  password: Yup.string().required('Password is required'),
  conformPassword: Yup.string().required('Confirm Password is required'),
});

const RegisterScreen = memo(({navigation}) => {
  const INITIAL_DATA = {
    firstName: null,
    lastName: null,
    email: null,
    mobileNumber: null,
    alternateMobileNumber: null,
    logoImgage: null,
    businesType: null,
    gstNumber: null,
    businessName: null,
    city: null,
    state: null,
    country: null,
    pincode: null,
    address: null,
    password: null,
    conformPassword: null,
  };
  const [errors, setErrors] = useState(INITIAL_DATA);

  const [data, setData] = useState(INITIAL_DATA);
  // console.log('data', data);

  const validateField = async (name, value) => {
    try {
      await validationSchema.validateAt(name, {[name]: value});
      setErrors({...errors, [name]: ''});
    } catch (error) {
      setErrors({...errors, [name]: error.message});
    }
  };

  const {steps, currentStepIndex, step, isFirstStep, isLastStep, back, next} =
    useMultistepForm([
      <User_Form
        {...data}
        updateFields={updateFields}
        validateField={validateField}
        errors={errors}
      />,
      <Bussiness_Form
        {...data}
        updateFields={updateFields}
        validateField={validateField}
        errors={errors}
      />,
      <Account_Form
        {...data}
        updateFields={updateFields}
        validateField={validateField}
        errors={errors}
      />,
    ]);

  function updateFields(fields) {
    setData(prev => {
      return {...prev, ...fields};
    });
  }

  const areAllFieldsValid = () => {
    for (const field in data) {
      if (data.hasOwnProperty(field)) {
        validateField(field, data[field]);
        console.log(errors, errors[field]);
        if (errors[field]) {
          return false;
        }
      }
    }
    return true;
  };

  const onSubmit = () => {
    console.log('Pressed', areAllFieldsValid());

    if (areAllFieldsValid()) {
      if (!isLastStep) return next();
    }
  };
  // function onSubmit(e: FormEvent) {
  //   e.preventDefault()
  //   if (!isLastStep) return next()
  //   alert("Successful Account Creation")
  // }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{paddingVertical: '5%'}}>
        <StatusBar barStyle={'dark-content'} backgroundColor={colors.white} />
        <View style={styles.card}>
          <View style={styles.imgbxstyle}>
            <Image
              source={require('../Assets/Photos/logo.png')}
              style={styles.img}
            />
          </View>
          {step}
          {/* <Formik
            initialValues={INITIAL_DATA}
            validationSchema={validationSchema}
            onSubmit={values => handleSubmit(values)}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              setValues,
              errors,
              touched,
            }) => (
              <>
                {currentStepIndex === 0 ? (
                  <User_Form values={values} handleChange={handleChange} />
                ) : currentStepIndex === 1 ? (
                  <Bussiness_Form {...data} updateFields={updateFields} />
                ) : currentStepIndex === 2 ? (
                  <Account_Form {...data} updateFields={updateFields} />
                ) : null}
              </>
            )}
          </Formik> */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              height: 40,
              alignItems: 'center',
            }}>
            {isFirstStep && (
              <TouchableOpacity
                onPress={() => navigation.navigate('LoginScreen')}>
                <Text style={[styles.textstyle]}>LOGIN </Text>
              </TouchableOpacity>
            )}
            <View style={styles.step_col}>
              {!isFirstStep && (
                <TouchableOpacity onPress={back} style={styles.stepbtn}>
                  <MaterialCommunityIcons
                    name="arrow-left"
                    color={'#008000'}
                    size={16}
                  />
                  <Text style={[styles.textstyle, {color: '#008000'}]}>
                    {' '}
                    Previous
                  </Text>
                </TouchableOpacity>
              )}
              <TouchableOpacity onPress={onSubmit} style={styles.stepbtn}>
                <Text style={[styles.textstyle, {color: '#008000'}]}>
                  {isLastStep ? 'Submit' : 'Next '}
                </Text>
                {!isLastStep && (
                  <MaterialCommunityIcons
                    name="arrow-right"
                    color={'#008000'}
                    size={16}
                  />
                )}
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
});

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: '5%',
    justifyContent: 'center',
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
    paddingLeft: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.btn,
    borderRadius: 4,
  },
  step_col: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 20,
  },
  stepbtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textstyle: {
    fontSize: fontSize.lable,
    color: colors.black,
  },
});
