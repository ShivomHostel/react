<<<<<<< HEAD
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../Utils/Colors';
import Header from '../../Components/headers/Header';
import {horizontalScale, verticalScale, width} from '../../Utils/Metrics';
import {ThemeContext} from '../../Utils/Theme';
import Card from '../../Components/cards/Card';
import {fontSize} from '../../Utils/Size';
import {Complaint_stats, rooma_list} from '../../Utils/constants';
import Render_Stats from '../../Components/Render_Stats';

const Complaint_Board_Screen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header title={'Complaint Management'} path={() => navigation.goBack()} />
      <View style={{height: 'auto'}}>
        {/* {render_Stats()} */}

        <FlatList
          ListHeaderComponent={<Render_Stats data={Complaint_stats} />}
          showsVerticalScrollIndicator={false}
          data={rooma_list}
          contentContainerStyle={styles.room_section}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  width: width,
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
                      <Text style={styles.room_num}>Raj Mansoori</Text>
                      <Text
                        style={[
                          styles.room_num,
                          {color: colors.AppDefaultColor},
                        ]}>
                        004
                      </Text>
                    </View>
                    <View>
                      <View style={styles.flexRowWithGap}>
                        <Text style={{fontSize: 14, color: 'grey'}}>
                          Complaint:
                        </Text>
                        <Text style={{fontSize: 14, color: 'grey'}}>
                          Room cleaning
                        </Text>
                      </View>
                      {/* <Text>{item.roomType}</Text> */}
                    </View>
                    <View style={styles.flexRowWithGap}>
                      <Text style={{fontSize: 12, color: 'grey'}}>Date:</Text>
                      <Text style={{fontSize: 12, color: 'grey'}}>
                        20/11/2023
                      </Text>
                    </View>

                    <View style={styles.flexRowWithGap}>
                      <Text style={{fontSize: 14, color: colors.grey}}>
                        Complaint Type:
                      </Text>
                      <Text
                        style={{
                          fontSize: 16,
                          color: colors.AppDefaultColor,
                          fontWeight: '600',
                        }}>
                        cleaning
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
                        style={[
                          styles.btn,
                          {backgroundColor: colors.AppDefaultColor},
                        ]}>
                        <Text
                          style={{
                            fontSize: 16,
                            color: colors.white,
                            fontWeight: 'bold',
                          }}>
                          View
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[styles.btn, {backgroundColor: colors.green}]}>
                        <Text
                          style={{
                            fontSize: 16,
                            color: colors.white,
                            fontWeight: 'bold',
                          }}>
                          Response{' '}
                          <Icon name={'share'} color={colors.white} size={20} />
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
    </View>
  );
};

export default Complaint_Board_Screen;

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
=======
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../Utils/Colors';
import Header from '../../Components/headers/Header';
import {horizontalScale, verticalScale, width} from '../../Utils/Metrics';
import {ThemeContext} from '../../Utils/Theme';
import Card from '../../Components/cards/Card';
import {fontSize} from '../../Utils/Size';
import {Complaint_stats, rooma_list} from '../../Utils/constants';
import Render_Stats from '../../Components/Render_Stats';

const Complaint_Board_Screen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header title={'Complaint Management'} path={() => navigation.goBack()} />
      <View style={{height: 'auto'}}>
        {/* {render_Stats()} */}

        <FlatList
          ListHeaderComponent={<Render_Stats data={Complaint_stats} />}
          showsVerticalScrollIndicator={false}
          data={rooma_list}
          contentContainerStyle={styles.room_section}
          renderItem={({item}) => {
            return (
              <Card>
                <ScrollView
                  horizontal
                  disableIntervalMomentum={true}
                  snapToInterval={width-horizontalScale(60)}
                  showsHorizontalScrollIndicator={false}
                  >
                <View style={{width:width-horizontalScale(80)}}>
                  <View
                    style={[
                      styles.flexRowWithGap,
                      {justifyContent: 'space-between'},
                    ]}>
                    <Text style={styles.room_num}>Arti</Text>
                    <Text
                      style={[
                        styles.room_num,
                        {color: colors.AppDefaultColor},
                      ]}>
                      004
                    </Text>
                  </View>
                  <View>
                    <View style={styles.flexRowWithGap}>
                      <Text style={{fontSize: 14, color: 'grey'}}>
                        Complaint:
                      </Text>
                      <Text style={{fontSize: 14, color: 'grey'}}>
                        Room cleaning
                      </Text>
                    </View>
                    {/* <Text>{item.roomType}</Text> */}
                  </View>
                  <View style={styles.flexRowWithGap}>
                    <Text style={{fontSize: 12, color: 'grey'}}>Date:</Text>
                    <Text style={{fontSize: 12, color: 'grey'}}>
                      20/11/2023
                    </Text>
                  </View>

                  <View style={styles.flexRowWithGap}>
                    <Text style={{fontSize: 14, color: colors.grey}}>
                      Complaint Type:
                    </Text>
                    <Text
                      style={{
                        fontSize: 16,
                        color: colors.AppDefaultColor,
                        fontWeight: '600',
                      }}>
                      cleaning
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
                      style={[
                        styles.btn,
                        {backgroundColor: colors.AppDefaultColor},
                      ]}>
                      <Text
                        style={{
                          fontSize: 16,
                          color: colors.white,
                          fontWeight: 'bold',
                        }}>
                        View
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[styles.btn, {backgroundColor: colors.green}]}>
                      <Text
                        style={{
                          fontSize: 16,
                          color: colors.white,
                          fontWeight: 'bold',
                        }}>
                        Response{' '}
                        <Icon name={'share'} color={colors.white} size={20} />
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={{width:width-80}}>
                  <View
                    style={[
                      styles.flexRowWithGap,
                      {justifyContent: 'space-between'},
                    ]}>
                    <Text style={styles.room_num}>Arti</Text>
                    <Text
                      style={[
                        styles.room_num,
                        {color: colors.AppDefaultColor},
                      ]}>
                      004
                    </Text>
                  </View>
                  <View>
                    <View style={styles.flexRowWithGap}>
                      <Text style={{fontSize: 14, color: 'grey'}}>
                        Complaint:
                      </Text>
                      <Text style={{fontSize: 14, color: 'grey'}}>
                        Room cleaning
                      </Text>
                    </View>
                    {/* <Text>{item.roomType}</Text> */}
                  </View>
                  <View style={styles.flexRowWithGap}>
                    <Text style={{fontSize: 12, color: 'grey'}}>Date:</Text>
                    <Text style={{fontSize: 12, color: 'grey'}}>
                      20/11/2023
                    </Text>
                  </View>

                  <View style={styles.flexRowWithGap}>
                    <Text style={{fontSize: 14, color: colors.grey}}>
                      Complaint Type:
                    </Text>
                    <Text
                      style={{
                        fontSize: 16,
                        color: colors.AppDefaultColor,
                        fontWeight: '600',
                      }}>
                      cleaning
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
                      style={[
                        styles.btn,
                        {backgroundColor: colors.AppDefaultColor},
                      ]}>
                      <Text
                        style={{
                          fontSize: 16,
                          color: colors.white,
                          fontWeight: 'bold',
                        }}>
                        View
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[styles.btn, {backgroundColor: colors.green}]}>
                      <Text
                        style={{
                          fontSize: 16,
                          color: colors.white,
                          fontWeight: 'bold',
                        }}>
                        Response{' '}
                        <Icon name={'share'} color={colors.white} size={20} />
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                </ScrollView>

              </Card>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Complaint_Board_Screen;

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
    padding: horizontalScale(20),
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
>>>>>>> main
