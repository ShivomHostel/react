import {Alert, FlatList, StyleSheet, Text, View} from 'react-native';
import React, {memo, useCallback, useEffect, useRef, useState} from 'react';
import {colors} from '../../Utils/Colors';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Card from '../cards/Card';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
  width,
} from '../../Utils/Metrics';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {handleRegistrationListAPI} from '../../Service/slices/RegisterSlice';
import {deleteStudentBookingThunkAPI} from '../../Service/api/thunks';
import DeleteMainStudentModal from '../modals/DeleteMainStudentModal';
import ChangeRoomModal from '../modals/ChangeRoomModal';
const Regular_Registeration = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {registerListResponse} = useSelector(state => state.root.registerData);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isSwitchModalVisible, setSwitchModalVisible] = useState(false);
  const [deleteId, setDeleteId] = useState(false);
  const [switchDetails, setSwitchDetails] = useState([]);

  const toggleModal = useCallback(
    id => {
      setModalVisible(!isModalVisible);
      setDeleteId(id);
    },
    [isModalVisible],
  );
  const toggleSwitchModal = useCallback(() => {
    setSwitchModalVisible(!isSwitchModalVisible);
  }, [isSwitchModalVisible]);

  useEffect(() => {
    dispatch(handleRegistrationListAPI());
  }, []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef();

  const handleDeleteBooking = id => {
    Alert.alert('Delete', 'Do you want to Delete Student Booking ?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () =>
          dispatch(deleteStudentBookingThunkAPI(id))
            .then(res => {
              console.log('resp', res);
              if (res?.payload?.status === true) {
                Alert.alert('Success', res.payload.message);
                dispatch(handleRegistrationListAPI());
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

  const getAllRooms = registerListResponse?.response?.map(item => {
    return item?.roomNo;
  });

  const RenderItem = useCallback(
    ({item}) => {
      return (
        <View
          style={{
            width: width,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ScrollView
            ref={scrollViewRef}
            horizontal={true}
            pagingEnabled={true}
            scrollEventThrottle={16}
            showsHorizontalScrollIndicator={false}>
            {item?.studentData?.map((val, i) => {
              return (
                <View
                  key={i}
                  style={{
                    width: width,
                    height: '100%',
                    paddingHorizontal: horizontalScale(20),
                    paddingVertical: verticalScale(10),
                  }}>
                  <RenderCard item={item} val={val} />
                </View>
              );
            })}
          </ScrollView>
        </View>
      );
    },
    [registerListResponse?.response],
  );

  const RenderCard = useCallback(({item, val}) => {
    const [isBookingVisible, setIsBookingVisible] = useState(false);

    return (
      <Card>
        {/* {Object.keys(item).length === 0 ? ( */}
        <View style={{}}>
          <View
            style={[styles.flexRowWithGap, {justifyContent: 'space-between'}]}>
            <View style={{width: '65%'}}>
              <Text style={styles.room_num}>
                {!isBookingVisible && val?.reg.length !== 0
                  ? val.reg.name
                  : val?.book.length !== 0
                  ? val.book.name
                  : 'No Candidate'}
              </Text>
              <Text style={{color: colors.grey, fontSize: 14}}>
                {!isBookingVisible && val?.reg.length !== 0
                  ? val?.reg?.mobileNumber
                  : val?.book.length !== 0
                  ? val.book.mobileNumber
                  : null}
              </Text>
            </View>
            <View style={{width: '35%', alignItems: 'center'}}>
              <Text style={[styles.room_num, {color: colors.AppDefaultColor}]}>
                {item?.roomNo}
              </Text>
              <Text style={[{color: colors.grey, fontSize: 14}]}>
                {item?.roomType}
              </Text>
              <View style={[styles.flexRowWithGap, {gap: 5}]}>
                <Text style={{fontSize: 14, color: 'grey'}}>Rent:</Text>
                <Text style={{fontSize: 14, color: 'grey'}}>
                  <Icon
                    name={'indian-rupee-sign'}
                    size={14}
                    color={colors.grey}
                  />{' '}
                  {item?.rent}
                </Text>
              </View>
            </View>
          </View>
          {/* <View> */}
          <View style={styles.flexRowWithGap}>
            <Text style={{fontSize: 14, color: 'grey'}}>
              {!isBookingVisible && val?.reg.length !== 0
                ? 'Reg Date:'
                : val?.book.length !== 0
                ? 'Booking Date:'
                : 'Reg Date:'}
            </Text>
            <Text style={{fontSize: 14, color: 'grey'}}>
              {!isBookingVisible && val?.reg.length !== 0
                ? val?.reg?.registrationDate
                : val?.book.length !== 0
                ? val.book.bookingDate
                : '-/-'}
            </Text>
          </View>
          <View style={styles.flexRowWithGap}>
            <Text style={{fontSize: 14, color: 'grey'}}>
              {!isBookingVisible && val?.reg.length !== 0
                ? 'Reg No'
                : val?.book.length !== 0
                ? 'Reg Date'
                : 'Reg No'}
              :{'   '}
              {!isBookingVisible && val?.reg.length !== 0
                ? val?.reg?.registrationNumber
                : val?.book.length !== 0
                ? val.book.registrationDate
                : '-/-'}
            </Text>
          </View>
          <View
            style={[
              styles.flexRowWithGap,
              {width: '100%', justifyContent: 'space-between'},
            ]}>
            <Text style={{fontSize: 14, color: 'grey'}}>
              {!isBookingVisible && val?.reg.length !== 0
                ? 'Seat No'
                : val?.book.length !== 0
                ? 'Seat No'
                : 'Seat No'}
              :{'   '}
              {!isBookingVisible && val?.reg.length !== 0
                ? val?.reg?.seatNumber
                : val?.book.length !== 0
                ? val.book.seatNumber
                : '-/-'}
            </Text>
            {/* <View style={styles.flexRowWithGap}> */}
            <Text style={{fontSize: 14, color: colors.grey}}>
              {!isBookingVisible && val?.reg.length !== 0
                ? 'Fee'
                : val?.book.length !== 0
                ? 'Booking Amount'
                : 'Fee'}
              :{'   '}
              <Icon
                name={'indian-rupee-sign'}
                size={14}
                color={colors.grey}
              />{' '}
              {!isBookingVisible && val?.reg.length !== 0
                ? val?.reg?.remainingAmount
                : val?.book.length !== 0
                ? val.book.BookingAmount
                : '0.00'}
            </Text>
          </View>

          <View
            style={[
              styles.flexRowWithGap,
              {
                justifyContent: 'flex-end',
                borderTopWidth: 1,
                gap: horizontalScale(15),
                borderTopColor: colors.lightygrey,
                paddingTop: verticalScale(12),
              },
            ]}>
            {val?.book.length !== 0 && val?.reg.length !== 0 ? (
              <TouchableOpacity
                onPress={() => setIsBookingVisible(!isBookingVisible)}>
                <Icon name={'user-lock'} color={colors.black} size={20} />
              </TouchableOpacity>
            ) : null}
            {val?.book.length !== 0 && val?.reg.length === 0 ? (
              <TouchableOpacity>
                <Icon name={'user-plus'} color={colors.black} size={20} />
              </TouchableOpacity>
            ) : null}
            {!isBookingVisible && val?.reg.length !== 0 ? (
              <TouchableOpacity onPress={() => toggleModal(val.reg.id)}>
                <Icon name={'trash-can'} color={colors.red} size={20} />
              </TouchableOpacity>
            ) : val?.book.length !== 0 ? (
              <TouchableOpacity
                onPress={() => {
                  handleDeleteBooking(val?.book.id);
                }}>
                <Icon name={'trash-can'} color={colors.red} size={20} />
              </TouchableOpacity>
            ) : null}
            {/* {val?.book.length !== 0 || val?.reg.length !== 0 ? (
              <TouchableOpacity onPress={()=>{}} >
                <Icon name={'trash-can'} color={colors.red} size={20} />
              </TouchableOpacity>
            ) : null} */}
            {!isBookingVisible && val?.reg.length !== 0 ? (
              <TouchableOpacity
                onPress={() => navigation.navigate('Registartion_View')}>
                <Icon name={'file-pdf'} color={colors.green} size={20} />
              </TouchableOpacity>
            ) : null}
            {!isBookingVisible && val?.reg.length !== 0 ? (
              <TouchableOpacity
                onPress={() => {
                  toggleSwitchModal();
                  setSwitchDetails({
                    id: val.reg.id,
                    seatNumber: val.reg.seatNumber,
                    roomNumber: item?.roomNo,
                  });
                }}>
                <Icon name={'rotate'} color={colors.black} size={20} />
              </TouchableOpacity>
            ) : (
              <View style={styles.icon} />
            )}
          </View>
        </View>
      </Card>
    );
  }, []);
  return (
    <>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={registerListResponse?.response}
        contentContainerStyle={styles.room_section}
        renderItem={({item}) => {
          return <RenderItem item={item} />;
        }}
        keyExtractor={(item, i) => i}
      />
      <DeleteMainStudentModal
        isVisible={isModalVisible}
        onClose={toggleModal}
        id={deleteId}
      />
      <ChangeRoomModal
        isVisible={isSwitchModalVisible}
        onClose={toggleSwitchModal}
        details={switchDetails}
        allRooms={getAllRooms}
      />
    </>
  );
};

export default memo(Regular_Registeration);

const styles = StyleSheet.create({
  flexRowWithGap: {
    flexDirection: 'row',
    marginVertical: 2,
    alignItems: 'flex-start',
    gap: 10,
  },
  room_num: {
    fontSize: moderateScale(24),
    color: colors.grey,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  scrollBtn: {
    position: 'absolute',
    verticalAlign: 'middle',
  },
  room_section: {
    // backgroundColor: colors.white,
    // gap: horizontalScale(12),
    paddingBottom: verticalScale(100),
  },
  icon: {
    height: horizontalScale(20),
    width: horizontalScale(20),
  },
});
