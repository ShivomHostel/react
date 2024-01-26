import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../Utils/Colors';
import {horizontalScale, verticalScale} from '../../Utils/Metrics';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const TopSectionCard = () => {
  return (
    <View style={styles.card}>
      <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
        <View style={styles.inner_card}>
          <View style={styles.card_row}>
            <Text style={styles.card_text}>Total Room :</Text>
            <Text style={styles.card_text}>11</Text>
          </View>
          <View style={styles.card_row}>
            <Text style={styles.card_text}>Engaged Room :</Text>
            <Text style={styles.card_text}> 4</Text>
          </View>
        </View>
        <View style={styles.inner_card}>
          <View style={styles.card_row}>
            <Text style={styles.card_text}>Total Seats :</Text>
            <Text style={styles.card_text}>55</Text>
          </View>
          <View style={styles.card_row}>
            <Text style={styles.card_text}>Engaged Seats :</Text>
            <Text style={styles.card_text}> 31</Text>
          </View>
        </View>
      </View>
      <View style={styles.bottom}>
        <MaterialCommunityIcons name="bed" color={colors.black} size={40} />
        <Text style={styles.titletext}>Rooms-Seats</Text>
      </View>
    </View>
  );
};

export default TopSectionCard;

const styles = StyleSheet.create({
  card: {
    width: horizontalScale(290),
    height: verticalScale(200),
    borderRadius: 10,
    padding: 20,
    // backgroundColor:colors.red,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    justifyContent:'space-between',
    backgroundColor: colors.white,
  },
  inner_card_row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inner_card: {
    padding: 10,
    width: 'auto',
    backgroundColor: colors.white,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 3, // This is for Android box shadow
  },
  card_row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottom:{
    height:100,
    justifyContent:'center',
    alignItems:'center',
  },
  card_text: {
    fontSize: 10,
    color: colors.black,
    fontWeight: '500',
  },
  titletext:{
    fontSize:20,
    color:colors.orange,
    fontWeight:'600'
  }
});
