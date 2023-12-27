import {
  Alert,
  BackHandler,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {
  useRef,
  useState,
  useCallback,
  useMemo,
  useEffect,
  memo,
} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {colors} from '../../Utils/Colors';
import {horizontalScale, verticalScale, width} from '../../Utils/Metrics';
import Card from '../../Components/cards/Card';
import {fontSize} from '../../Utils/Size';
import {rooma_list} from '../../Utils/constants';
import Render_Stats from '../../Components/Render_Stats';
import Main_Header from '../../Components/headers/Main_Header';
import Add_Rooms_Modal from '../../Components/modals/Add_Rooms_Modal';
import Rooms_Form from '../../Components/Rooms_Form';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {useDispatch, useSelector} from 'react-redux';
import {
  deleteRoomThunkAPI,
  handleBasicRoomDetails,
  handleRoomsListAPI,
} from '../../Service/slices/GetRoomsSlice';
import UpdateRooms_Form from '../../Components/modals/UpdateRooms_Form';
const Rooms_Seat_Screen = memo(({navigation}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [roomStats, setRoomStats] = useState(null);
  const [roomData, setRoomData] = useState([]);
  const [selectRoomStats, setSelectRoomStats] = useState('');
  const bottomSheetRef = useRef(null);
  const updateSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['75%', '100%'], []);
  const dispatch = useDispatch();
  const {roomsListResponse, roomsBasicDataResponse} = useSelector(
    state => state.root.roomData,
  );

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackPress,
    );
    return () => {
      backHandler.remove();
    };
  }, []);

  const handleBackPress = () => {
    bottomSheetRef?.current?.dismiss();
    updateSheetRef?.current?.dismiss();
    return true;
  };

  useEffect(() => {
    dispatch(handleRoomsListAPI());
    dispatch(handleBasicRoomDetails());
  }, []);

  const roomsList = useMemo(() => {
    return Object.keys(roomsListResponse?.response).map(key => ({
      roomNumber: key,
      ...roomsListResponse?.response[key],
    }));
  }, [roomsListResponse]);

  const roomsStats = roomsBasicDataResponse?.response;

  const handlePress = useCallback(() => {
    bottomSheetRef.current?.present();
  }, []);

  const handleDeleteRoom = roomId => {
    Alert.alert('Delete', 'Do you want to Delete Room ?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () =>
          dispatch(deleteRoomThunkAPI(roomId))
            .then(res => {
              console.log('resp', res);
              if (res.payload.status === true) {
                Alert.alert('Success', res.payload.message);
                dispatch(handleRoomsListAPI());
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

  const Render_Add_btn = ({handlePress}) => {
    return (
      <View style={[styles.addbtn, styles.shadow]}>
        <TouchableOpacity onPress={handlePress}>
          <Icon name={'plus'} size={30} color={colors.white} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <>
      <BottomSheetModalProvider>
        <View style={styles.container}>
          <Main_Header
            title={'Room Seats'}
            openDrawer={() => navigation.openDrawer()}
          />
          <View style={{height: 'auto'}}>
            <FlatList
              ListHeaderComponentStyle={{
                marginHorizontal: horizontalScale(20),
              }}
              ListHeaderComponent={
                <Render_Stats data={roomsStats} setValue={setSelectRoomStats} />
              }
              showsVerticalScrollIndicator={false}
              data={roomsList}
              contentContainerStyle={styles.room_section}
              renderItem={({item}) => {
                const bedsArray = Array.from(
                  {length: item.seats},
                  (_, index) => index,
                );

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
                        <View>
                          <Text style={styles.room_num}>
                            {item?.roomNumber}
                          </Text>
                        </View>
                        <View>
                          <View style={styles.flexRowWithGap}>
                            <Text style={{fontSize: 14, color: 'grey'}}>
                              Room Type:
                            </Text>
                            <Text style={{fontSize: 14, color: 'grey'}}>
                              {item?.roomtype}
                            </Text>
                          </View>
                          <View style={styles.flexRowWithGap}>
                            <Icon
                              name={'circle-info'}
                              color={colors.grey}
                              size={20}
                            />
                            {bedsArray.map((bed, index) => (
                              <Icon
                                key={index}
                                name={'bed'}
                                color={
                                  index < item.totalStudents
                                    ? colors.orange
                                    : colors.black
                                }
                                size={25}
                              />
                            ))}
                          </View>
                        </View>
                        {/* <View style={styles.flexRowWithGap}>
                          <View style={styles.qtyView}>
                            <Text style={{fontSize: 12, color: 'grey'}}>
                              {item?.seats} Number of Seats
                            </Text>
                          </View>
                          <View style={styles.qtyView}>
                            <Text style={{fontSize: 12, color: 'grey'}}>
                              {item?.totalStudents} Number of Candidates
                            </Text>
                          </View>
                           
                        </View> */}

                        <View style={styles.flexRowWithGap}>
                          <Text style={{fontSize: 14, color: colors.grey}}>
                            Rent:
                          </Text>
                          <Text
                            style={{
                              fontSize: 16,
                              color: colors.AppDefaultColor,
                              fontWeight: '600',
                            }}>
                            <Icon
                              name={'indian-rupee-sign'}
                              size={14}
                              color={colors.black}
                            />{' '}
                            {item?.rent}
                          </Text>
                        </View>
                        <View
                          style={[
                            styles.flexRowWithGap,
                            {
                              justifyContent: 'space-between',
                              borderTopWidth: 1,
                              borderTopColor: colors.lightygrey,
                              paddingTop: verticalScale(20),
                            },
                          ]}>
                          <TouchableOpacity
                            onPress={() => handleDeleteRoom(item.roomNumber)}
                            style={styles.btn}>
                            <Text
                              style={{
                                fontSize: 16,
                                color: colors.white,
                                fontWeight: 'bold',
                              }}>
                              Delete
                            </Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            onPress={() => {
                              setRoomData(item);
                              updateSheetRef.current?.present();
                            }}
                            style={[
                              styles.btn,
                              {backgroundColor: colors.green},
                            ]}>
                            <Text
                              style={{
                                fontSize: 16,
                                color: colors.white,
                                fontWeight: 'bold',
                              }}>
                              Update
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </Card>
                  </View>
                );
              }}
            />
          </View>
          <Render_Add_btn handlePress={handlePress} />
          <Rooms_Form bottomSheetRef={bottomSheetRef} snapPoints={snapPoints} />
          <UpdateRooms_Form
            bottomSheetRef={updateSheetRef}
            snapPoints={snapPoints}
            data={roomData}
          />
        </View>
      </BottomSheetModalProvider>
      {/* <Rooms_Form panelRef={panelRef} /> */}
      <Add_Rooms_Modal
        setIsModalVisible={setIsModalVisible}
        isModalVisible={isModalVisible}
      />
    </>
  );
});

export default Rooms_Seat_Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  qtyView: {
    padding: 5,
    backgroundColor: `${colors.orange}50`,
    borderRadius: 5,
  },
  flexRowWithGap: {
    flexDirection: 'row',
    marginVertical: 5,
    alignItems: 'center',
    gap: 10,
  },
  stats_setion: {
    flexDirection: 'row',
    // height: verticalScale(170),
    backgroundColor: colors.white,
    gap: horizontalScale(12),
    alignItems: 'center',
  },
  room_section: {
    backgroundColor: colors.white,
    gap: horizontalScale(12),
    paddingBottom: verticalScale(100),
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
  room_num: {
    fontSize: 30,
    color: colors.grey,
    fontWeight: '600',
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    height: verticalScale(40),
    paddingHorizontal: horizontalScale(20),
    backgroundColor: colors.red,
    borderRadius: horizontalScale(5),
  },
  room_type: {},
  seats_view: {},
  rent: {},
});
