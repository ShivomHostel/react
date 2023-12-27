import {
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {
  height,
  horizontalScale,
  moderateScale,
  verticalScale,
  width,
} from '../Utils/Metrics';
import {colors} from '../Utils/Colors';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {useDispatch, useSelector} from 'react-redux';
import {
  createRoomThunkAPI,
  handleRoomsListAPI,
  updateRoomThunkAPI,
} from '../Service/slices/GetRoomsSlice';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Picker} from '@react-native-picker/picker';

const validationSchema = Yup.object().shape({
  roomNo: Yup.number('Room Number must be a number')
    .required('Room Number is required')
    .positive('Room Number should be positive')
    .integer('Room Number should be Number'),
  roomType: Yup.string().required('Room Type is required'),
  seatNo: Yup.string().required('Seat Number is required'),
  rent: Yup.number().required('Rent is required'),
});

const Rooms_Form = ({bottomSheetRef, snapPoints, handleSheetChanges}) => {
  const INITIAL_DATA = {
    roomNo: null,
    roomType: null,
    seatNo: null,
    noOfCandidate: '0',
    rent: null,
  };
  const inputRef1 = useRef(null);
  const dispatch = useDispatch();
  const {loading} = useSelector(
    state => state?.root?.roomData?.createRoomDataResponse,
  );

  // useEffect(() => {
  //   const backHandler = BackHandler.addEventListener(
  //     'hardwareBackPress',
  //     handleBackPress,
  //   );
  //   return () => {
  //     backHandler.remove();
  //   };
  // }, []);

  // const handleBackPress = () => {
  //   bottomSheetRef?.current?.dismiss();
  //   return true;
  // };

  const handleSubmit = values => {
    dispatch(createRoomThunkAPI(values))
      .then(res => {
        if (res?.payload?.status === true) {
          dispatch(handleRoomsListAPI());
          ToastAndroid.show(res?.payload?.message, 5000, 50);
          bottomSheetRef?.current?.dismiss();
        } else {
          ToastAndroid.showWithGravityAndOffset(
            res?.payload?.error,
            ToastAndroid.LONG,
            ToastAndroid.TOP,
            25, // X offset
            50, // Y offset
          );
          inputRef1.current.focus();
        }
      })
      .catch(err => {
        ToastAndroid.show('Something went wrong!' + err, 5000);
      });
  };
  return (
    <BottomSheetModal ref={bottomSheetRef} index={1} snapPoints={snapPoints}>
      <View style={styles.modalContainer}>
        <Text style={styles.title}>Add Room</Text>
        <View style={styles.content}>
          <Formik
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
                <View>
                  <View style={styles.inputView}>
                    <TextInput
                      placeholder="Room Number"
                      ref={inputRef1}
                      placeholderTextColor={colors.grey}
                      value={values.roomNo}
                      onChangeText={handleChange('roomNo')}
                      style={styles.input}
                    />
                  </View>
                  {errors.roomNo && touched.roomNo ? (
                    <Text style={styles.error}>{errors.roomNo}</Text>
                  ) : null}
                </View>
                <View>
                  <View style={styles.inputView}>
                    <TextInput
                      placeholder="Room Type"
                      placeholderTextColor={colors.grey}
                      value={values.roomType}
                      onChangeText={handleChange('roomType')}
                      style={styles.input}
                    />
                  </View>
                  {errors.roomType && touched.roomType ? (
                    <Text style={styles.error}>{errors.roomType}</Text>
                  ) : null}
                </View>
                <View>
                  <View style={styles.inputView}>
                    <Picker
                      style={{
                        color: colors.black,
                        fontSize: moderateScale(10),
                        marginTop: verticalScale(-8),
                        marginLeft: horizontalScale(-5),
                      }}
                      placeholder="Nuber Of Seats"
                      selectedValue={values.seatNo}
                      onValueChange={(itemValue, itemIndex) => {
                        setValues({...values, seatNo: itemValue});
                      }}>
                      {['1', '2', '3', '4', '5', '6', '7']?.map((item, i) => {
                        return (
                          <Picker.Item key={i} label={item} value={item} />
                        );
                      })}
                    </Picker>
                  </View>
                  {errors.seatNo && touched.seatNo ? (
                    <Text style={styles.error}>{errors.seatNo}</Text>
                  ) : null}
                </View>
                <View style={styles.inputView}>
                  <TextInput
                    placeholder="Number Of Candidate"
                    placeholderTextColor={colors.grey}
                    value={values.noOfCandidate}
                    onChangeText={handleChange('noOfCandidate')}
                    editable={false}
                    style={styles.input}
                  />
                </View>
                <View>
                  <View style={styles.inputView}>
                    <TextInput
                      placeholder="Rent"
                      placeholderTextColor={colors.grey}
                      keyboardType="numeric"
                      inputMode="numeric"
                      value={values.rent}
                      onChangeText={handleChange('rent')}
                      style={styles.input}
                    />
                  </View>
                  {errors.rent && touched.rent ? (
                    <Text style={styles.error}>{errors.rent}</Text>
                  ) : null}
                </View>
                <TouchableOpacity
                  disabled={loading}
                  style={[styles.button]}
                  onPress={handleSubmit}>
                  <Text
                    style={{color: colors.white, fontSize: moderateScale(14)}}>
                    {loading ? 'Loading...' : 'Add Room'}
                  </Text>
                </TouchableOpacity>
              </>
            )}
          </Formik>
        </View>
      </View>
    </BottomSheetModal>
  );
};

export default Rooms_Form;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  modalContainer: {
    width: '100%',
    borderRadius: horizontalScale(10),
    backgroundColor: colors.white,
    alignSelf: 'center',
    top: verticalScale(20),
    paddingHorizontal: horizontalScale(40),
  },
  title: {
    fontSize: moderateScale(20),
    color: colors.black,
    alignSelf: 'center',
  },
  content: {
    paddingTop: verticalScale(40),
    gap: verticalScale(20),
  },
  button: {
    height: verticalScale(45),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(20),
    backgroundColor: colors.AppDefaultColor,
    borderRadius: horizontalScale(5),
    marginTop: verticalScale(20),
  },
  buttonClose: {
    position: 'absolute',
    top: verticalScale(12),
    right: horizontalScale(12),
    height: verticalScale(30),
    width: verticalScale(30),
    borderRadius: horizontalScale(20),
    backgroundColor: colors.red,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    color: colors.black,
    fontSize: moderateScale(14),
    fontFamily: 'Roboto-Medium',
  },
  inputView: {
    width: '100%',
    height: verticalScale(50),
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: horizontalScale(2),
    paddingHorizontal: horizontalScale(12),
  },
  error: {
    color: colors.red,
    fontSize: moderateScale(12),
    fontFamily: 'Roboto-Medium',
  },
});
