import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {colors} from '../../Utils/Colors';
import Header from '../../Components/headers/Header';
import {horizontalScale, verticalScale, width} from '../../Utils/Metrics';
import {ThemeContext} from '../../Utils/Theme';
import Card from '../../Components/cards/Card';
import {fontSize} from '../../Utils/Size';
import {registration, registrationStats} from '../../Utils/constants';
import Render_Stats from '../../Components/Render_Stats';
import Rooms_Form from '../../Components/Rooms_Form';
import Main_Header from '../../Components/headers/Main_Header';

const Register_Candidate_Screen = ({navigation}) => {
  const [statsType, setStatsType] = useState(null);

  const Render_Add_btn = ({handleNavigation}) => {
    return (
      <View style={[styles.addbtn, styles.shadow]}>
        <TouchableOpacity onPress={handleNavigation}>
          <Icon name={'plus'} size={30} color={colors.white} />
        </TouchableOpacity>
      </View>
    );
  };

  const Queue_Reg = ({item}) => {
    return (
      <Card>
        <View style={{}}>
          <View
            style={[styles.flexRowWithGap, {justifyContent: 'space-between'}]}>
            <View style={{width: '70%'}}>
              <Text style={styles.room_num}>{item.name}</Text>
              <Text style={{color: colors.grey, fontSize: 14}}>8895841585</Text>
            </View>
            <View style={{width: '30%', alignItems: 'center'}}>
              <Text
                numberOfLines={1}
                style={[styles.room_num, {color: colors.AppDefaultColor}]}>
                {item.roomNo}
              </Text>
            </View>
          </View>
          <View style={styles.flexRowWithGap}>
            <Text style={{fontSize: 14, color: 'grey'}}>raj@gmail.com</Text>
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
              <Icon name={'user-lock'} color={colors.black} size={20} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name={'user-plus'} color={colors.black} size={20} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name={'trash-can'} color={colors.red} size={20} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Registartion_View')}>
              <Icon name={'file-pdf'} color={colors.green} size={20} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name={'rotate'} color={colors.black} size={20} />
            </TouchableOpacity>
          </View>
        </View>
      </Card>
    );
  };

  const Old_Registrations = ({item}) => {
    return (
      <Card>
        <View style={{}}>
          <View
            style={[styles.flexRowWithGap, {justifyContent: 'space-between'}]}>
            <View style={{width: '70%'}}>
              <Text style={styles.room_num}>{item.name}</Text>
              <Text style={{color: colors.grey, fontSize: 14}}>8895841585</Text>
            </View>
            <View style={{width: '30%', alignItems: 'center'}}>
              <Text
                numberOfLines={1}
                style={[styles.room_num, {color: colors.AppDefaultColor}]}>
                {item.roomNo}
              </Text>
              <Text
                numberOfLines={1}
                style={[{color: colors.grey, fontSize: 14, width: '100%'}]}>
                Tenure - 60 Days
              </Text>
              <View style={[styles.flexRowWithGap, {gap: 5}]}>
                <Text style={{fontSize: 14, color: 'grey'}}>Rent:</Text>
                <Text style={{fontSize: 14, color: 'grey'}}>₹8000</Text>
              </View>
            </View>
          </View>
          {/* <View> */}
          <View style={styles.flexRowWithGap}>
            <Text style={{fontSize: 14, color: 'grey'}}>Room Date:</Text>
            <Text style={{fontSize: 14, color: 'grey'}}>22/06/2023</Text>
          </View>
          <View style={styles.flexRowWithGap}>
            <Text style={{fontSize: 14, color: 'grey'}}>Leave Date:</Text>
            <Text style={{fontSize: 14, color: 'grey'}}>20/11/2023</Text>
          </View>
          <View style={styles.flexRowWithGap}>
            <Text style={{fontSize: 14, color: 'grey'}}>
              Reg No: {item?.seatNo}
            </Text>
          </View>
          <View
            style={[
              styles.flexRowWithGap,
              {width: '100%', justifyContent: 'space-between'},
            ]}>
            <Text style={{fontSize: 14, color: 'grey'}}>
              Seat No: {item?.seatNo}
            </Text>
            {/* <View style={styles.flexRowWithGap}> */}
            <Text style={{fontSize: 14, color: colors.grey}}>
              Fee: ${item.roomRent}
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
            <TouchableOpacity>
              <Icon name={'user-lock'} color={colors.black} size={20} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name={'user-plus'} color={colors.black} size={20} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name={'trash-can'} color={colors.red} size={20} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Registartion_View')}>
              <Icon name={'file-pdf'} color={colors.green} size={20} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name={'rotate'} color={colors.black} size={20} />
            </TouchableOpacity>
          </View>
        </View>
      </Card>
    );
  };

  const RenderItem = ({item}) => {
    return (
      <View
        style={{
          width: width,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <ScrollView
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}>
          {[1, 1].map(val => {
            return (
              <View
                style={{
                  width: width,
                  height: '100%',
                  paddingHorizontal: horizontalScale(20),
                  paddingVertical: verticalScale(10),
                }}>
                {statsType === 'old_reg' ? (
                  <Old_Registrations item={item} />
                ) : statsType === 'queue_reg' ? (
                  <Queue_Reg item={item} />
                ) : (
                  <Card>
                    <View style={{}}>
                      <View
                        style={[
                          styles.flexRowWithGap,
                          {justifyContent: 'space-between'},
                        ]}>
                        <View style={{width: '70%'}}>
                          <Text style={styles.room_num}>{item.name}</Text>
                          <Text style={{color: colors.grey, fontSize: 14}}>
                            8895841585
                          </Text>
                        </View>
                        <View style={{width: '30%', alignItems: 'center'}}>
                          <Text
                            style={[
                              styles.room_num,
                              {color: colors.AppDefaultColor},
                            ]}>
                            {item.roomNo}
                          </Text>
                          <Text style={[{color: colors.grey, fontSize: 14}]}>
                            Triple sharing
                          </Text>
                          <View style={[styles.flexRowWithGap, {gap: 5}]}>
                            <Text style={{fontSize: 14, color: 'grey'}}>
                              Rent:
                            </Text>
                            <Text style={{fontSize: 14, color: 'grey'}}>
                              ₹8000
                            </Text>
                          </View>
                        </View>
                      </View>
                      {/* <View> */}
                      <View style={styles.flexRowWithGap}>
                        <Text style={{fontSize: 14, color: 'grey'}}>
                          Reg Date:
                        </Text>
                        <Text style={{fontSize: 14, color: 'grey'}}>
                          22/11/2023
                        </Text>
                      </View>
                      <View style={styles.flexRowWithGap}>
                        <Text style={{fontSize: 14, color: 'grey'}}>
                          Reg No: {item?.seatNo}
                        </Text>
                      </View>
                      <View
                        style={[
                          styles.flexRowWithGap,
                          {width: '100%', justifyContent: 'space-between'},
                        ]}>
                        <Text style={{fontSize: 14, color: 'grey'}}>
                          Seat No: {item?.seatNo}
                        </Text>
                        {/* <View style={styles.flexRowWithGap}> */}
                        <Text style={{fontSize: 14, color: colors.grey}}>
                          Fee: ${item.roomRent}
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
                        <TouchableOpacity>
                          <Icon
                            name={'user-lock'}
                            color={colors.black}
                            size={20}
                          />
                        </TouchableOpacity>
                        <TouchableOpacity>
                          <Icon
                            name={'user-plus'}
                            color={colors.black}
                            size={20}
                          />
                        </TouchableOpacity>
                        <TouchableOpacity>
                          <Icon
                            name={'trash-can'}
                            color={colors.red}
                            size={20}
                          />
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() =>
                            navigation.navigate('Registartion_View')
                          }>
                          <Icon
                            name={'file-pdf'}
                            color={colors.green}
                            size={20}
                          />
                        </TouchableOpacity>
                        <TouchableOpacity>
                          <Icon
                            name={'rotate'}
                            color={colors.black}
                            size={20}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </Card>
                )}
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Main_Header
        title={'Register'}
        openDrawer={() => navigation.openDrawer()}
      />
      <View style={{height: 'auto'}}>
        <FlatList
          // ListHeaderComponentStyle={{marginHorizontal: horizontalScale(10)}}
          ListHeaderComponent={
            <Render_Stats
              value={statsType}
              setValue={setStatsType}
              data={registrationStats}
            />
          }
          showsVerticalScrollIndicator={false}
          data={registration}
          contentContainerStyle={styles.room_section}
          renderItem={({item}) => {
            return <RenderItem item={item} />;
          }}
          keyExtractor={(item, i) => i.toString()}
        />
      </View>
      <Render_Add_btn
        handleNavigation={() => navigation.navigate('Add_Registration')}
      />
    </View>
  );
};

export default Register_Candidate_Screen;

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
    marginVertical: 2,
    alignItems: 'flex-start',
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
    // gap: horizontalScale(12),
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
