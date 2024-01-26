import {StyleSheet, Text, View, FlatList, TouchableOpacity, Alert} from 'react-native';
import React, {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Main_Header from '../../Components/headers/Main_Header';
import {
  height,
  horizontalScale,
  moderateScale,
  verticalScale,
  width,
} from '../../Utils/Metrics';
import moment from 'moment';
import Add_Item_Model from '../../Components/modals/Add_Item_Model';
import {colors} from '../../Utils/Colors';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import Header from '../../Components/headers/Header';
import DateTimePicker from 'react-native-modal-datetime-picker';
import Category_Expenses_Modal from '../../Components/modals/Category_Expenses_Modal';
import {useDispatch, useSelector} from 'react-redux';
import {expenseCategoryItemThunkAPI, expenseDeleteCategoryItemThunkAPI} from '../../Service/api/thunks';
import Update_Expense_CategoryItem_Modal from '../../Components/modals/Update_Expense_CategoryItem_Modal';

const Category_Expenses = ({navigation, route}) => {
  const {category_id} = route.params;
  const bottomSheetRef = useRef(null);
  const updateSheetRef = useRef(null);
  const [start_Date, setStart_Date] = useState(moment.now());
  const [end_Date, setEnd_Date] = useState(moment.now());
  const [paymentDate, SetPayment_Date] = useState(moment.now);
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [isEndDatePickerVisible, setEndIsDatePickerVisible] = useState(false);
  const [categoryItem, setCategoryItem] = useState(null);
  const snapPoints = useMemo(() => ['85%', '100%'], []);
  const dispatch = useDispatch();
  const {expenseCategoryItemResponse} = useSelector(
    state => state.root.expensesData,
  );

  console.log(
    'expenseCategoryItemResponse',
    expenseCategoryItemResponse?.response,
  );
  useEffect(() => {
    dispatch(expenseCategoryItemThunkAPI(category_id))
      .then(res => console.log('res', res))
      .catch(err => console.log(err));
  }, []);

  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);

  const handlePress = useCallback(() => {
    bottomSheetRef.current?.present();
    console.log(bottomSheetRef.current);
  }, []);


  const handleDelete = id => {
    Alert.alert('Delete', 'Do you want to Delete Category ?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () =>
          dispatch(expenseDeleteCategoryItemThunkAPI(id))
            .then(res => {
              console.log('resp', res);
              if (res?.payload?.status === true) {
                Alert.alert('Success', res.payload.message);
                dispatch(expenseCategoryItemThunkAPI());
              } else {
                Alert.alert('Error', 'Something Went wrong!');
              }
            })
            .catch(err => {
              console.log(err);
            }),
      },
    ]);
  };

  const Render_Add_btn = ({handleNavigation}) => {
    return (
      <View style={[styles.addbtn, styles.shadow]}>
        <TouchableOpacity onPress={handleNavigation}>
          <Icon name={'plus'} size={30} color={colors.white} />
        </TouchableOpacity>
      </View>
    );
  };

  const Chip_Item = memo(({item}) => {
    return (
      <View style={[styles.chip, styles.shadow]}>
        <View style={[styles.left, styles.flexRowWithSpace]}>
          <View>
            <Text
              style={[
                styles.label,
                {
                  fontSize: moderateScale(12),
                  fontFamily: 'Roboto-Light',
                },
              ]}>
              Code :{`A${item?.id}`}
            </Text>
            <Text style={styles.title}>{item?.itemname}</Text>
          </View>
          <View>
            <Text style={[styles.label, {fontSize: moderateScale(12)}]}>
              {moment(item?.billdate).format('DD/MMM/YYYY')}
            </Text>
          </View>
        </View>
        <View style={styles.right}>
          <View style={{width: '28%'}}>
            <Text style={[styles.label]}>Rate</Text>
            <Text style={styles.price}>
              <Icon name={'indian-rupee-sign'} size={14} color={colors.grey} />{' '}
              {item.rate}
            </Text>
          </View>
          <View style={{width: '28%'}}>
            <Text style={[styles.label]}>Amount</Text>
            <Text style={styles.price}>
              <Icon name={'indian-rupee-sign'} size={14} color={colors.grey} />{' '}
              {item?.amount}
            </Text>
          </View>
          <View style={{width: '28%'}}>
            <Text numberOfLines={1} style={[styles.label, {width: '100%'}]}>
              Payment Type
            </Text>
            <Text style={styles.price}>{item?.paymentmode}</Text>
          </View>
          <View
            style={{
              width: '16%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={[styles.button, {backgroundColor: colors.green}]}
              onPress={() => {
                setCategoryItem(item);
                updateSheetRef.current.present()
              }}>
              <Icon name={'edit'} color={colors.white} size={20} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.right}>
          <View style={{width: '28%'}}>
            <Text style={[styles.label]}>Item Name</Text>
            <Text style={styles.price}>{item?.itemname}</Text>
          </View>
          <View style={{width: '28%'}}>
            <Text style={[styles.label]}>Quantity</Text>
            <Text style={styles.price}>{item?.quantity}</Text>
          </View>
          <View style={{width: '28%'}}>
            <Text numberOfLines={1} style={[styles.label, {width: '100%'}]}>
              Uploaded Bill
            </Text>
            <Text style={styles.price}>View</Text>
          </View>
          <View
            style={{
              width: '16%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={[styles.button, {backgroundColor: colors.AppDefaultColor}]}
              onPress={() => handleDelete(item?.id)}>
              <Icon name={'trash-can'} color={colors.white} size={20} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  });

  const Filter_Section = memo(() => {
    return (
      <View
        style={{
          padding: horizontalScale(12),
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '100%',
          alignItems: 'center',
          gap: 12,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={styles.label}>From : </Text>
          <TouchableOpacity
            onPress={() => setIsDatePickerVisible(true)}
            style={styles.picker}>
            <Text style={[styles.label, {color: colors.grey}]}>
              {moment(start_Date).format('DD-MMM-YYYY')}
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}>
          <Text style={styles.label}>To : </Text>
          <TouchableOpacity
            onPress={() => setEndIsDatePickerVisible(true)}
            style={styles.picker}>
            <Text style={[styles.label, {color: colors.grey}]}>
              {moment(end_Date).format('DD-MMM-YYYY')}
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={[styles.label, {color: colors.white}]}>Filter</Text>
        </TouchableOpacity>
      </View>
    );
  });
  return (
    <>
      <BottomSheetModalProvider>
        <View style={styles.container}>
          <Header title={'Category Home'} path={() => navigation.goBack()} />
          <View style={styles.wrapper}>
            <Filter_Section />
            <FlatList
              contentContainerStyle={{
                padding: horizontalScale(12),
                gap: verticalScale(12),
                paddingBottom: verticalScale(80),
                // height:'80%'
              }}
              data={expenseCategoryItemResponse?.response}
              renderItem={({item}) => {
                return <Chip_Item item={item} />;
              }}
            />
          </View>
          <Render_Add_btn handleNavigation={handlePress} />
        </View>
        <Category_Expenses_Modal
          bottomSheetRef={bottomSheetRef}
          snapPoints={snapPoints}
          handleSheetChanges={handleSheetChanges}
          category_id={category_id}
        />
        <Update_Expense_CategoryItem_Modal
          bottomSheetRef={updateSheetRef}
          snapPoints={snapPoints}
          category_id={category_id}
          data={categoryItem}
        />
      </BottomSheetModalProvider>
      <DateTimePicker
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={date => {
          setStart_Date(date);
          setIsDatePickerVisible(false);
        }}
        onCancel={() => setIsDatePickerVisible(false)}
      />
      <DateTimePicker
        isVisible={isEndDatePickerVisible}
        mode="date"
        onConfirm={date => {
          setEnd_Date(date);
          setEndIsDatePickerVisible(false);
        }}
        onCancel={() => setEndIsDatePickerVisible(false)}
      />
    </>
  );
};

export default Category_Expenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    width: '100%',
    height: '100%',
    // padding: horizontalScale(12),
  },
  chip: {
    width: '100%',
    // height: verticalScale(130),
    borderRadius: horizontalScale(10),
    backgroundColor: colors.white,
    padding: horizontalScale(12),
    justifyContent: 'space-between',
    gap: verticalScale(12),
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  title: {
    fontSize: moderateScale(18),
    color: colors.AppDefaultColor,
    fontFamily: 'Roboto-Medium',
    letterSpacing: 0.5,
    fontVariant: '',
    textTransform: 'capitalize',
  },
  label: {
    fontSize: moderateScale(14),
    color: colors.black,
    fontFamily: 'Roboto-Light',
  },
  price: {
    fontSize: moderateScale(14),
    color: colors.black,
    letterSpacing: 0.5,
    fontFamily: 'Roboto-Medium',
  },

  right: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addbtn: {
    height: verticalScale(60),
    width: verticalScale(60),
    borderRadius: horizontalScale(50),
    backgroundColor: colors.AppDefaultColor,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: verticalScale(20),
    right: horizontalScale(20),
  },
  picker: {
    height: verticalScale(40),
    // width: horizontalScale(120),
    borderRadius: horizontalScale(4),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingHorizontal: horizontalScale(12),
  },
  button: {
    height: verticalScale(40),
    paddingHorizontal: horizontalScale(12),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: horizontalScale(4),
    backgroundColor: colors.AppDefaultColor,
  },
  flexRowWithSpace: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
