import {
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  TextInput,
  ToastAndroid,
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
} from '../../Utils/Metrics';
import {colors} from '../../Utils/Colors';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {useDispatch, useSelector} from 'react-redux';
//   import { createRoomThunkAPI, updateRoomThunkAPI } from '../Service/slices/GetRoomsSlice';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {updateRoomThunkAPI} from '../../Service/slices/GetRoomsSlice';
import {Formik} from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  roomNo: Yup.number('Room Number must be a number')
    .required('Room Number is required')
    .positive('Room Number should be positive')
    .integer('Room Number should be Number'),
  roomType: Yup.string().required('Room Type is required'),
  seatNo: Yup.string().required('Seat Number is required'),
  rent: Yup.number().required('Rent is required'),
});

const SelfStudentToMainRegisterModal = ({bottomSheetRef, snapPoints, }) => {

  const INITIAL_DATA = {
    formNumber: null,
    roomNumber: data?.roomtype,
    seatNumber: String(data?.seats),
    registrationDate: null,
    selfStudentId: null,
  };
  const [roomData, setRoomData] = useState(INITIAL_DATA);
  const inputRef1 = useRef(null);
  const dispatch = useDispatch();
  const {loading} = useSelector(
    state => state?.root?.roomData?.createRoomDataResponse,
  );

  const updateFields = useCallback(fields => {
    setRoomData(prev => {
      return {...prev, ...fields};
    });
  }, []);
  const handleSubmit = values => {
    dispatch(updateRoomThunkAPI(values))
      .then(res => {
        if (res?.payload?.status === true) {
          ToastAndroid.show(res?.payload?.message, 5000, 50);
          dispatch(handleRoomsListAPI());
          bottomSheetRef?.current?.dismiss();
        } else {
          console.log('res err', res);
          ToastAndroid.show('Something went wrong!', 5000);
          inputRef1.current.focus();
        }
      })
      .catch(err => {
        ToastAndroid.show('Something went wrong!' + err, 5000);
      });
  };
  return (
    <BottomSheetModal
      ref={bottomSheetRef}
      index={1}
      snapPoints={snapPoints}
      // onChange={handleSheetChanges}
    >
      <View style={styles.modalContainer}>
        <Text style={styles.title}>Update Room</Text>
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
                    />
                  </View>
                  {errors.roomType && touched.roomType ? (
                    <Text style={styles.error}>{errors.roomType}</Text>
                  ) : null}
                </View>
                <View>
                  <View style={styles.inputView}>
                    <TextInput
                      placeholder="Nuber Of Seats"
                      placeholderTextColor={colors.grey}
                      maxLength={1}
                      inputMode="numeric"
                      value={values.seatNo}
                      onChangeText={handleChange('seatNo')}
                    />
                  </View>
                  {errors.seatNo && touched.seatNo ? (
                    <Text style={styles.error}>{errors.seatNo}</Text>
                  ) : null}
                </View>
                <View>
                  <View style={styles.inputView}>
                    <TextInput
                      placeholder="Number Of Candidate"
                      placeholderTextColor={colors.grey}
                      value={values.noOfCandidate}
                      onChangeText={handleChange('noOfCandidate')}
                      editable={false}
                    />
                  </View>
                  {errors.noOfCandidate && touched.noOfCandidate ? (
                    <Text style={styles.error}>{errors.noOfCandidate}</Text>
                  ) : null}
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
                    {loading ? 'Loading...' : 'Update Room'}
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

export default SelfStudentToMainRegisterModal;

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
  inputView: {
    width: '100%',
    height: verticalScale(50),
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: horizontalScale(10),
    paddingHorizontal: horizontalScale(12),
  },
  error: {
    color: colors.red,
    fontSize: 12,
    fontFamily: 'Roboto-Medium',
  },
});
