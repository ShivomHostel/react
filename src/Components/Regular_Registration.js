import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Icon from 'react-native-vector-icons//FontAwesome6';
import Card from './cards/Card';
import {horizontalScale, verticalScale, width} from '../Utils/Metrics';
import {fontSize} from '../Utils/Size';
import {colors} from '../Utils/Colors';
import { useNavigation } from '@react-navigation/native';

const Regular_Registration = ({data}) => {
    const navigation= useNavigation()
  return (
    <>
      {data ? (
        <FlatList
          // ListHeaderComponent={<Render_Stats data={registrationStats} />}
          showsVerticalScrollIndicator={false}
          data={data}
          contentContainerStyle={styles.room_section}
          renderItem={({item}) => {
            return (
              <Card>
                <ScrollView
                  horizontal
                  disableIntervalMomentum={true}
                  snapToInterval={width - horizontalScale(20)}
                  showsHorizontalScrollIndicator={false}>
                  <View
                    style={{
                      width: width - horizontalScale(60),
                      padding: horizontalScale(2),
                    }}>
                    <View
                      style={[
                        styles.flexRowWithGap,
                        {justifyContent: 'space-between'},
                      ]}>
                      <View style={{width: 'auto'}}>
                        <Text style={styles.room_num}>{item.name}</Text>
                        <Text style={styles.label}>8895744854</Text>
                      </View>
                      <View style={{alignItems: 'center'}}>
                        <Text
                          style={[
                            styles.room_num,
                            {color: colors.AppDefaultColor},
                          ]}>
                          {item.roomNo}
                        </Text>
                        <Text style={styles.label}>Triple Sharing</Text>
                        <Text style={styles.label}>Rent: 8000/-</Text>
                      </View>
                    </View>
                    <View
                      style={[
                        styles.flexRowWithGap,
                        {
                          justifyContent: 'space-between',
                          alignItems: 'flex-end',
                        },
                      ]}>
                      <View style={{width: '50%'}}>
                        <View style={styles.flexRowWithGap}>
                          <Text
                            style={{fontSize: fontSize.lable, color: 'grey'}}>
                            Room Date:
                          </Text>
                          <Text
                            style={{fontSize: fontSize.lable, color: 'grey'}}>
                            21/11/23
                          </Text>
                        </View>
                        <View style={styles.flexRowWithGap}>
                          <Text
                            style={{fontSize: fontSize.lable, color: 'grey'}}>
                            Reg No.:
                          </Text>
                          <Text
                            style={{fontSize: fontSize.lable, color: 'grey'}}>
                            A8445
                          </Text>
                        </View>

                        <View style={styles.flexRowWithGap}>
                          <Text
                            style={{fontSize: fontSize.lable, color: 'grey'}}>
                            Seat No: {item?.seatNo}
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{height: 'auto', justifyContent: 'flex-end'}}>
                        <View
                          style={[
                            styles.flexRowWithGap,
                            {alignItems: 'center'},
                          ]}>
                          <Text
                            style={{
                              fontSize: fontSize.lable,
                              color: colors.grey,
                            }}>
                            Rent:
                          </Text>
                          <Text
                            style={{
                              fontSize: 16,
                              color: colors.AppDefaultColor,
                              fontWeight: '600',
                            }}>
                            ${item.roomRent}
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View
                      style={[
                        styles.flexRowWithGap,
                        {
                          justifyContent: 'flex-end',
                          borderTopWidth: 1,
                          borderTopColor: colors.lightygrey,
                          paddingTop: verticalScale(20),
                          gap: horizontalScale(20),
                        },
                      ]}>
                      <TouchableOpacity>
                        <Icon
                          name={'user-plus'}
                          color={colors.black}
                          size={20}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Icon
                          name={'user-lock'}
                          color={colors.black}
                          size={20}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={()=>navigation.navigate('Registration_Details')}>
                        <Icon
                          name={'file-pdf'}
                          color={colors.green}
                          size={20}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Icon
                          name={'arrows-rotate'}
                          color={colors.black}
                          size={20}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Icon name={'trash-can'} color={colors.red} size={20} />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View
                    style={{
                      width: width - horizontalScale(60),
                      padding: horizontalScale(2),
                    }}>
                    <View
                      style={[
                        styles.flexRowWithGap,
                        {justifyContent: 'space-between'},
                      ]}>
                      <Text style={styles.room_num}>{item.name}</Text>
                      <Text
                        style={[
                          styles.room_num,
                          {color: colors.AppDefaultColor},
                        ]}>
                        {item.roomNo}
                      </Text>
                    </View>
                    {/* <View> */}
                    <View style={styles.flexRowWithGap}>
                      <Text style={{fontSize: 14, color: 'grey'}}>
                        Room Type:
                      </Text>
                      <Text style={{fontSize: 14, color: 'grey'}}>
                        {item.roomType}
                      </Text>
                    </View>

                    <View style={styles.flexRowWithGap}>
                      <View style={styles.qtyView}>
                        <Text style={{fontSize: 12, color: 'grey'}}>
                          Seat No: {item?.seatNo}
                        </Text>
                      </View>
                    </View>

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
                        ${item.roomRent}
                      </Text>
                    </View>
                    <View
                      style={[
                        styles.flexRowWithGap,
                        {
                          justifyContent: 'flex-end',
                          borderTopWidth: 1,
                          borderTopColor: colors.lightygrey,
                          paddingTop: verticalScale(20),
                          gap: horizontalScale(20),
                        },
                      ]}>
                      <TouchableOpacity>
                        <Icon
                          name={'user-plus'}
                          color={colors.black}
                          size={20}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Icon
                          name={'user-lock'}
                          color={colors.black}
                          size={20}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Icon
                          name={'file-pdf'}
                          color={colors.green}
                          size={20}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Icon
                          name={'arrows-rotate'}
                          color={colors.black}
                          size={20}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Icon name={'trash-can'} color={colors.red} size={20} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </ScrollView>
              </Card>
            );
          }}
        />
      ) : (
        <Text>No Records Found!</Text>
      )}
    </>
  );
};

export default Regular_Registration;

const styles = StyleSheet.create({
  flexRowWithGap: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    marginVertical: 2,
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
    padding: horizontalScale(20),
    gap: horizontalScale(12),
    paddingBottom: verticalScale(250),
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
    fontSize: 24,
    color: colors.black,
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    height: verticalScale(40),
    paddingHorizontal: horizontalScale(20),
    backgroundColor: colors.red,
    borderRadius: horizontalScale(5),
  },
  label: {
    fontSize: fontSize.lable,
    // fontWeight:'600',
    color: colors.grey,
  },
});
