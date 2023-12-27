import {Alert, FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {colors} from '../../Utils/Colors';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Card from '../cards/Card';
import {horizontalScale, verticalScale, width} from '../../Utils/Metrics';
import {useDispatch, useSelector} from 'react-redux';
import {getOldStudentRegisterThunkAPI} from '../../Service/slices/RegisterSlice';
import Restore_Main_Modal from '../modals/Restore_Main_Modal';
import {deleteOldStudentRecordsThunkAPI} from '../../Service/api/thunks';

const Old_Registrations = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalVisible, setModalVisible] = useState(false);
  const [restoreData, setRestoreData] = useState(null);

  const scrollViewRef = useRef();
  const dispatch = useDispatch();
  const {getOldStudentRegisterResponse} = useSelector(
    state => state.root.registerData,
  );

  const toggleModal = useCallback(
    id => {
      setModalVisible(!isModalVisible);
    },
    [isModalVisible],
  );

  useEffect(() => {
    dispatch(getOldStudentRegisterThunkAPI());
  }, []);
  // console.log('getOldStudentRegisterResponse', getOldStudentRegisterResponse);

  const handleDeleteStudent = id => {
    Alert.alert('Delete', 'Do you want to Delete Student Records ?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () =>
          dispatch(deleteOldStudentRecordsThunkAPI(id))
            .then(res => {
              console.log('resp', res);
              if (res?.payload?.status === true) {
                Alert.alert('Success', res.payload.message);
                dispatch(getOldStudentRegisterThunkAPI());
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

  const RenderItem = ({item}) => {
    return (
      <View
        style={{
          width: width,
          // height: '100%',
          paddingHorizontal: horizontalScale(20),
          paddingVertical: verticalScale(10),
        }}>
        <Card>
          <View style={{}}>
            <View
              style={[
                styles.flexRowWithGap,
                {justifyContent: 'space-between'},
              ]}>
              <View style={{width: '70%'}}>
                <Text style={styles.room_num}>{item?.name}</Text>
                <Text style={{color: colors.grey, fontSize: 14}}>
                  {item?.mobileNumber}
                </Text>
              </View>
              <View style={{width: '30%', alignItems: 'center'}}>
                <Text
                  numberOfLines={1}
                  style={[styles.room_num, {color: colors.AppDefaultColor}]}>
                  {item?.roomNumber}
                </Text>
                <Text
                  numberOfLines={1}
                  style={[{color: colors.grey, fontSize: 14, width: '100%'}]}>
                  Tenure -{item?.stayDuration}
                </Text>
                <View style={[styles.flexRowWithGap, {gap: 5}]}>
                  <Text style={{fontSize: 14, color: 'grey'}}>Rent:</Text>
                  <Text style={{fontSize: 14, color: 'grey'}}>
                    {' '}
                    <Icon
                      name={'indian-rupee-sign'}
                      size={14}
                      color={colors.grey}
                    />{' '}
                    {item?.roomRent}
                  </Text>
                </View>
              </View>
            </View>
            {/* <View> */}
            <View style={styles.flexRowWithGap}>
              <Text style={{fontSize: 14, color: 'grey'}}>Room Date:</Text>
              <Text style={{fontSize: 14, color: 'grey'}}>
                {item?.registrationDate}
              </Text>
            </View>
            <View style={styles.flexRowWithGap}>
              <Text style={{fontSize: 14, color: 'grey'}}>Leave Date:</Text>
              <Text style={{fontSize: 14, color: 'grey'}}>
                {item?.leaveDate}
              </Text>
            </View>
            <View style={styles.flexRowWithGap}>
              <Text style={{fontSize: 14, color: 'grey'}}>
                Reg No: {item?.registrationNumber}
              </Text>
            </View>
            <View
              style={[
                styles.flexRowWithGap,
                {width: '100%', justifyContent: 'space-between'},
              ]}>
              <Text style={{fontSize: 14, color: 'grey'}}>
                Seat No: {item?.seatNumber}
              </Text>
              {/* <View style={styles.flexRowWithGap}> */}
              <Text style={{fontSize: 14, color: colors.grey}}>
                Fee:{' '}
                <Icon
                  name={'indian-rupee-sign'}
                  size={14}
                  color={colors.grey}
                />{' '}
                {item.roomRent}
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
              <TouchableOpacity
                onPress={() => {
                  handleDeleteStudent(item?.id);
                }}>
                <Icon name={'trash-can'} color={colors.red} size={20} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  toggleModal(),
                    setRestoreData({
                      roomNumber: item?.roomNumber,
                      seatNumber: item?.seatNumber,
                      date: null,
                      oldStudentId: item?.id,
                    });
                }}>
                <Icon name={'edit'} color={colors.green} size={20} />
              </TouchableOpacity>
            </View>
          </View>
        </Card>
      </View>
      //       );
      //     })}
      //   </ScrollView>
      // </View>
    );
  };
  return (
    <>
      <FlatList
        // ListHeaderComponentStyle={{marginHorizontal: horizontalScale(10)}}

        showsVerticalScrollIndicator={false}
        data={getOldStudentRegisterResponse?.response}
        contentContainerStyle={styles.room_section}
        renderItem={({item}) => {
          return <RenderItem item={item} />;
        }}
        keyExtractor={(item, i) => i}
      />
      <Restore_Main_Modal
        isVisible={isModalVisible}
        onClose={toggleModal}
        details={restoreData}
      />
    </>
  );
};

export default Old_Registrations;

const styles = StyleSheet.create({
  flexRowWithGap: {
    flexDirection: 'row',
    marginVertical: 2,
    alignItems: 'flex-start',
    gap: 10,
  },
  room_num: {
    fontSize: 30,
    color: colors.grey,
    fontWeight: '600',
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
});
