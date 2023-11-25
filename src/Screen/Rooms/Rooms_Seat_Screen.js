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
import {horizontalScale, verticalScale} from '../../Utils/Metrics';
import {ThemeContext} from '../../Utils/Theme';
import Card from '../../Components/cards/Card';
import {fontSize} from '../../Utils/Size';
import {rooma_list} from '../../Utils/constants';
import Render_Stats from '../../Components/Render_Stats';
import Rooms_Form from '../../Components/Rooms_Form';

const Rooms_Seat_Screen = ({navigation}) => {
  const panelRef = useRef(null);

  const render_Add_btn = ({panel}) => {
    return (
      <View style={[styles.addbtn, styles.shadow]}>
        {/* <TouchableOpacity onPress={() => panelRef.current.togglePanel()}> */}
          <Icon name={'plus'} size={30} color={colors.white} />
        {/* </TouchableOpacity> */}
        
      </View>
    );
  };

  return (
    <>
      <View style={styles.container}>
        <Header title={'Rooms & Seats'} path={() => navigation.goBack()} />
        <View style={{height: 'auto'}}>
          {/* {render_Stats()} */}

          <FlatList
            ListHeaderComponent={<Render_Stats />}
            showsVerticalScrollIndicator={false}
            data={rooma_list}
            contentContainerStyle={styles.room_section}
            renderItem={({item}) => {
              return (
                <Card>
                  <View style={{}}>
                    <View>
                      <Text style={styles.room_num}>{item.roomNo}</Text>
                    </View>
                    <View>
                      <View style={styles.flexRowWithGap}>
                        <Text style={{fontSize: 14, color: 'grey'}}>
                          Room Type:
                        </Text>
                        <Text style={{fontSize: 14, color: 'grey'}}>
                          {item.roomType}
                        </Text>
                      </View>
                      <View style={styles.flexRowWithGap}>
                        <Icon
                          name={'information-outline'}
                          color={colors.grey}
                          size={20}
                        />
                        <Icon name={'bed'} color={colors.orange} size={25} />
                        <Icon name={'bed'} color={colors.orange} size={25} />
                        <Icon name={'bed'} color={colors.orange} size={25} />
                      </View>
                      {/* <Text>{item.roomType}</Text> */}
                    </View>
                    <View style={styles.flexRowWithGap}>
                      <View style={styles.qtyView}>
                        <Text style={{fontSize: 12, color: 'grey'}}>
                          {item.noOfSeats} Number of Seats
                        </Text>
                      </View>
                      <View style={styles.qtyView}>
                        <Text style={{fontSize: 12, color: 'grey'}}>
                          0 Number of Candidates
                        </Text>
                      </View>
                      {/* <View>
                      <Text>Rent</Text>
                      <Text>$ {item.rent}</Text>
                    </View> */}
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
                        ${item.rent}
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
                      <TouchableOpacity style={styles.btn}>
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
                        style={[styles.btn, {backgroundColor: colors.green}]}>
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
              );
            }}
          />
        </View>
        {render_Add_btn(panelRef)}
      </View>
      {/* <Rooms_Form panelRef={panelRef} /> */}
    </>
  );
};

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
