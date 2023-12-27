import {Alert, FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {colors} from '../../Utils/Colors';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Card from '../cards/Card';
import {horizontalScale, verticalScale, width} from '../../Utils/Metrics';
import {useDispatch, useSelector} from 'react-redux';
import {
  deleteSelfStudentThunkAPI,
  getSelfRegisterStudentsThunkAPI,
} from '../../Service/slices/RegisterSlice';

const Queue_Registration = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef();
  const dispatch = useDispatch();
  const {getSelfRegisterStudentsResponse} = useSelector(
    state => state.root.registerData,
  );

  useEffect(() => {
    dispatch(getSelfRegisterStudentsThunkAPI());
  }, [dispatch]);
  console.log(
    'getSelfRegisterStudentsResponse',
    getSelfRegisterStudentsResponse,
  );
  const handleDelete = id => {
    Alert.alert('Delete', 'Do you want to Delete Student Data ?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () =>
          dispatch(deleteSelfStudentThunkAPI(id))
            .then(res => {
              console.log('resp', res);
              if (res?.payload?.status === true) {
                Alert.alert('Success', res.payload.message);
                dispatch(getSelfRegisterStudentsThunkAPI());
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
      // <View
      //   style={{
      //     width: width,
      //     alignItems: 'center',
      //     justifyContent: 'center',
      //   }}>
      //   <ScrollView
      //     ref={scrollViewRef}
      //     horizontal={true}
      //     pagingEnabled={true}
      //     scrollEventThrottle={16}
      //     showsHorizontalScrollIndicator={false}>
      //     {item?.studentData?.map((val, i) => {
      //       return (
      <View
        style={{
          width: width,
          height: '100%',
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
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
              {/* <View style={{width: '30%', alignItems: 'center'}}>
                <Text
                  numberOfLines={1}
                  style={[styles.room_num, {color: colors.AppDefaultColor}]}>
                  {item?.roomNo}
                </Text>
              </View> */}
            </View>
            <View style={styles.flexRowWithGap}>
              <Text style={{fontSize: 14, color: 'grey'}}>{item?.email}</Text>
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
              <TouchableOpacity>
                <Icon name={'user-plus'} color={colors.black} size={20} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDelete(item?.id)}>
                <Icon name={'trash-can'} color={colors.red} size={20} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon name={'eye'} color={colors.black} size={20} />
              </TouchableOpacity>
            </View>
          </View>
        </Card>
      </View>
      //       );
      //     })}
      //   </ScrollView>
      //   {/* {currentIndex !== 0 ? (
      //   <TouchableOpacity
      //     style={[styles.scrollBtn, {left: horizontalScale(30)}]}>
      //     <Icon name={'chevron-left'} size={20} color={colors.grey} />
      //   </TouchableOpacity>
      // ) : null}
      // <TouchableOpacity
      //   style={[styles.scrollBtn, {right: horizontalScale(30)}]}>
      //   <Icon name={'chevron-right'} size={20} color={colors.grey} />
      // </TouchableOpacity> */}
      // </View>
    );
  };

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={getSelfRegisterStudentsResponse?.response}
      contentContainerStyle={styles.room_section}
      renderItem={({item}) => {
        return <RenderItem item={item} />;
      }}
      keyExtractor={(item, i) => i}
    />
  );
};

export default Queue_Registration;

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
});
