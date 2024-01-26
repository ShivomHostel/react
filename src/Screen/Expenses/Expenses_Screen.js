import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Alert,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useMemo, useRef, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Main_Header from '../../Components/headers/Main_Header';
import {
  height,
  horizontalScale,
  moderateScale,
  verticalScale,
  width,
} from '../../Utils/Metrics';
import {colors} from '../../Utils/Colors';
import moment from 'moment';
import Add_Expenses_Modal from '../../Components/modals/Add_Expenses_Modal';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {useDispatch, useSelector} from 'react-redux';
import {
  deleteExpenseCategoryThunkAPI,
  handleExpensesDetailseThunkAPI,
} from '../../Service/api/thunks';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import Update_Expenses_Modal from '../../Components/modals/Update_Expenses_Modal';

const Expenses_Screen = ({navigation}) => {
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const bottomSheetRef = useRef(null);
  const updateRef = useRef(null);
  const snapPoints = useMemo(() => ['75%', '100%'], []);
  const [isEndDatePickerVisible, setEndIsDatePickerVisible] = useState(false);
  const [start_Date, setStart_Date] = useState(moment.now());
  const [end_Date, setEnd_Date] = useState(moment.now());
  const [date, setDate] = useState(moment.now());
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();
  const {expensesListResponse} = useSelector(state => state.root.expensesData);
  const [refreshing, setRefreshing] = useState(false);
  const [categoryData, setCategoryData] = useState(null);

  // console.log('expensesListResponse', expensesListResponse?.response);
  useEffect(() => {
    dispatch(handleExpensesDetailseThunkAPI());
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(handleExpensesDetailseThunkAPI());
    setRefreshing(false);
  };

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
          dispatch(deleteExpenseCategoryThunkAPI(id))
            .then(res => {
              // console.log('resp', res);
              if (res?.payload?.status === true) {
                Alert.alert('Success', res.payload.message);
                dispatch(handleExpensesDetailseThunkAPI());
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
  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <Main_Header
          title={'Expenses'}
          openDrawer={() => navigation.openDrawer()}
        />
        <View style={styles.wrapper}>
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
                <Text>{moment(start_Date).format('DD-MMM-YYYY')}</Text>
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
                <Text>{moment(end_Date).format('DD-MMM-YYYY')}</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={{fontSize: moderateScale(14), color: colors.white}}>
                Filter
              </Text>
            </TouchableOpacity>
          </View>
          <FlatList
            contentContainerStyle={{
              padding: horizontalScale(12),
              gap: verticalScale(12),
              paddingBottom: verticalScale(80),
              // height:'80%'
            }}
            data={expensesListResponse?.response?.TableData}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Category_Expenses', {
                      category_id: item.id,
                    })
                  }
                  style={[styles.chip, styles.shadow]}>
                  <View style={styles.left}>
                    <Text style={styles.title}>{item?.name}</Text>
                    <Text style={[styles.label, {color: colors.red}]}>
                      ₹ {item.value}
                    </Text>
                  </View>
                  <View style={styles.right}>
                    {item?.value <= 0 && (
                      <TouchableOpacity onPress={() => handleDelete(item?.id)}>
                        <Icon name={'trash-can'} color={colors.red} size={20} />
                      </TouchableOpacity>
                    )}
                    <TouchableOpacity
                      onPress={() => {
                        setCategoryData({
                          category_id: item?.id,
                          category_name: item?.name,
                        }),
                          updateRef.current.present();
                      }}>
                      <Icon name={'edit'} color={colors.black} size={20} />
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item, i) => i.toString()}
          />
        </View>
        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor: '#dc3545',
              position: 'absolute',
              bottom: verticalScale(20),
              left: horizontalScale(20),
            },
          ]}>
          <Text style={{fontSize: moderateScale(14), color: colors.white}}>
            Report
          </Text>
        </TouchableOpacity>
        <Render_Add_btn
          handleNavigation={() => bottomSheetRef.current.present()}
        />
      </View>
      <Add_Expenses_Modal
        bottomSheetRef={bottomSheetRef}
        snapPoints={snapPoints}
      />
      <Update_Expenses_Modal
        bottomSheetRef={updateRef}
        snapPoints={snapPoints}
        Data={categoryData}
      />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={date => {
          setStart_Date(date);
          setIsDatePickerVisible(false);
        }}
        onCancel={() => setIsDatePickerVisible(false)}
      />
      <DateTimePickerModal
        isVisible={isEndDatePickerVisible}
        mode="date"
        onConfirm={date => {
          setEnd_Date(date);
          setEndIsDatePickerVisible(false);
        }}
        onCancel={() => setEndIsDatePickerVisible(false)}
      />
    </BottomSheetModalProvider>
  );
};

export default Expenses_Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    width: '100%',
    height: height - verticalScale(135),
    // padding: horizontalScale(12),
  },
  chip: {
    height: verticalScale(100),
    width: '100%',
    borderRadius: horizontalScale(10),
    backgroundColor: colors.white,
    padding: horizontalScale(12),
    // flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    color: colors.black,
  },
  label: {
    fontSize: moderateScale(14),
    color: colors.black,
  },
  left: {
    height: '50%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  right: {
    height: '50%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    gap: horizontalScale(12),
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
});
