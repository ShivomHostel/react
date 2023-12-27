import {
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {
  height,
  horizontalScale,
  moderateScale,
  verticalScale,
  width,
} from '../../Utils/Metrics';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {colors} from '../../Utils/Colors';
import moment from 'moment';
import PickerCard from '../cards/PickerCard';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {Picker} from '@react-native-picker/picker';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {
  expenseAddCategoryItemThunkAPI,
  expenseCategoryItemThunkAPI,
  expenseDeleteCategoryItemThunkAPI,
  expenseUpdateCategoryItemThunkAPI,
} from '../../Service/api/thunks';
import {useDispatch} from 'react-redux';

const validationSchema = Yup.object().shape({
  // category_id: Yup.number().required('Category is required'),
  quantity: Yup.number('Quantity must be a number')
    .required('Quantity is required')
    .positive('Quantity should be positive')
    .integer('Quantity should be Number'),
  amount: Yup.number('Amount must be a number').required('Amount is required'),
  // billdate: Yup.date().required('Bill date is required'),
  itemname: Yup.string().required('Item name is required'),
  rate: Yup.number().required('Rate is required'),
  paymentmode: Yup.string().required('Payment mode is required'),
});

const Update_Expense_CategoryItem_Modal = ({
  bottomSheetRef,
  snapPoints,
  handleSheetChanges,
  data,
  category_id,
}) => {
  const INITIAL_DATA = {
    id: data?.id,
    category_id: String(category_id),
    quantity: data?.quantity,
    amount: String(data?.amount),
    billdate: data?.billdate,
    itemname: data?.itemname,
    rate: data?.rate,
    paymentmode: data?.paymentmode,
    uploadbill: data?.uploadbill,
  };
  const [isVisible, setIsVisible] = useState(false);
  const [date, setDate] = useState(moment.now());
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [pymentType, setPymentType] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = values => {
    // Handle form submission here
    dispatch(expenseUpdateCategoryItemThunkAPI(values))
      .then(res => {
        console.log('resp', res);
        if (res?.payload?.status === true) {
          ToastAndroid.show(res?.payload?.message, 5000, 50);
          dispatch(expenseCategoryItemThunkAPI(category_id));
          bottomSheetRef?.current?.dismiss();
        } else {
          ToastAndroid.showWithGravityAndOffset(
            res?.payload?.error,
            ToastAndroid.LONG,
            ToastAndroid.TOP,
            25, // X offset
            50, // Y offset
          );
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
      onChange={handleSheetChanges}>
      <View style={styles.modalContainer}>
        <Text style={styles.title}>Add Category Item</Text>
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
                  <TouchableOpacity
                    onPress={() => {
                      setIsDatePickerVisible(true);
                    }}
                    style={styles.dateButton}>
                    <Text style={styles.text}>{values?.billdate}</Text>
                    <Icon name={'calendar'} color={colors.black} size={20} />
                  </TouchableOpacity>
                  <DateTimePicker
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={date => {
                      const formatDate = moment(date).format('YYYY-MM-DD');
                      setValues({...values, billdate: formatDate});
                      setIsDatePickerVisible(false);
                    }}
                    onCancel={() => setIsDatePickerVisible(false)}
                  />
                  {errors.billdate && touched.billdate ? (
                    <Text style={styles.error}>{errors.billdate}</Text>
                  ) : null}
                </View>
                <View>
                  <View style={styles.inputView}>
                    <TextInput
                      onChangeText={handleChange('itemname')}
                      value={values.itemname}
                      placeholder="Item Name"
                      placeholderTextColor={colors.grey}
                    />
                  </View>
                  {errors.itemname && touched.itemname ? (
                    <Text style={styles.error}>{errors.itemname}</Text>
                  ) : null}
                </View>
                <View>
                  <View style={styles.inputView}>
                    <TextInput
                      onChangeText={handleChange('quantity')}
                      value={values.quantity}
                      placeholder="Quantity"
                      placeholderTextColor={colors.grey}
                    />
                  </View>
                  {errors.quantity && touched.quantity ? (
                    <Text style={styles.error}>{errors.quantity}</Text>
                  ) : null}
                </View>
                <View>
                  <View style={styles.inputView}>
                    <TextInput
                      placeholder="Rate"
                      value={values.rate}
                      onChangeText={handleChange('rate')}
                      placeholderTextColor={colors.grey}
                    />
                  </View>
                  {errors.rate && touched.rate ? (
                    <Text style={styles.error}>{errors.rate}</Text>
                  ) : null}
                </View>
                <View>
                  <View style={styles.inputView}>
                    <TextInput
                      value={values.amount}
                      onChangeText={handleChange('amount')}
                      placeholder="Amount"
                      placeholderTextColor={colors.grey}
                    />
                  </View>
                  {errors.amount && touched.amount ? (
                    <Text style={styles.error}>{errors.amount}</Text>
                  ) : null}
                </View>
                <View>
                  <View style={styles.inputView}>
                    <Picker
                      placeholder="Select Payment method"
                      style={{
                        color: colors.grey,
                        fontSize: moderateScale(10),
                      }}
                      selectedValue={values.paymentmode}
                      onValueChange={(itemValue, itemIndex) => {
                        setValues({...values, paymentmode: itemValue});
                      }}>
                      <Picker.Item label={'Cash'} value="cash" />
                      <Picker.Item label={'Chuque'} value="chuque" />
                      <Picker.Item label={'Online'} value="online" />
                    </Picker>
                  </View>
                  {errors.paymentmode && touched.paymentmode ? (
                    <Text style={styles.error}>{errors.paymentmode}</Text>
                  ) : null}
                </View>
                <View>
                  <View>
                    <TouchableOpacity
                      onPress={handleSubmit}
                      style={styles.dateButton}>
                      <Text style={styles.text}>Upload Bill</Text>
                      <Icon name={'paperclip'} color={colors.black} size={20} />
                    </TouchableOpacity>
                  </View>
                  {errors.uploadbill && touched.uploadbill ? (
                    <Text style={styles.error}>{errors.uploadbill}</Text>
                  ) : null}
                </View>

                <Pressable onPress={handleSubmit} style={[styles.button]}>
                  <Text style={[styles.text, {color: colors.white}]}>
                    Submit
                  </Text>
                </Pressable>
              </>
            )}
          </Formik>
        </View>
      </View>
    </BottomSheetModal>
  );
};

export default Update_Expense_CategoryItem_Modal;

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
  inputView: {
    width: '100%',
    height: verticalScale(50),
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: horizontalScale(4),
    paddingHorizontal: horizontalScale(12),
  },
  text: {
    fontSize: moderateScale(14),
    fontFamily: 'Roboto-Regular',
    color: colors.grey,
  },
  dateButton: {
    height: verticalScale(50),
    width: '100%',
    borderRadius: horizontalScale(4),
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(12),
    borderWidth: 1,
    borderColor: colors.grey,
  },
  error: {
    color: colors.red,
    fontSize: 12,
    fontFamily: 'Roboto-Medium',
  },
});
