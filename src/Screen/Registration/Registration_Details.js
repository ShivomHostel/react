import {StyleSheet, Text, View} from 'react-native';
import React ,{useState} from 'react';
import Card from '../../Components/cards/Card';
import {colors} from '../../Utils/Colors';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../Utils/Metrics';
import Icon from 'react-native-vector-icons/FontAwesome6';
import PickerCard from '../../Components/cards/PickerCard';
import InputCard from '../../Components/cards/InputCard';

const Registration_Details = () => {
    const [selected_Room,setSelected_Room]=useState(null)
  const rooms_list = [
    {id: 1, room_no: 100, label: '100'},
    {id: 2, room_no: 102, label: '102'},
    {id: 3, room_no: 101, label: '101'},
    {id: 4, room_no: 103, label: '103'},
  ];
  return (
    <View style={styles.container}>
      <Card>
        <Text style={styles.title}>Makwana Group</Text>
        <View style={[styles.flexRow, {gap: verticalScale(20)}]}>
          <View style={styles.flexRow}>
            <Icon name={'envelope'} size={14} color={colors.black} />
            <Text style={styles.label}>raj@gmail.com</Text>
          </View>
          <View style={styles.flexRow}>
            <Icon name={'phone-volume'} size={14} color={colors.black} />
            <Text style={styles.label}>8435451321,88456415348</Text>
          </View>
        </View>
        <View style={styles.flexRow}>
          <Icon name={'house'} size={14} color={colors.black} />
          <Text numberOfLines={1} style={styles.label}>
            Puspa Nager Bhopal,Bhopal,Madhya Pradesh,India,462010
          </Text>
        </View>
      </Card>
      <View style={styles.filterSection}>
        <InputCard title={'Registration No'} placeholder={'114'} />
        <PickerCard value={selected_Room} title={'Room No.'} setValue={setSelected_Room} items={rooms_list}  />
      </View>
    </View>
  );
};

export default Registration_Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: horizontalScale(12),
  },
  title: {
    color: colors.black,
    fontSize: 20,
  },
  label: {
    color: colors.black,
    fontSize: moderateScale(12),
  },
  flexRow: {
    flexDirection: 'row',
    gap: horizontalScale(5),
    alignItems: 'center',
    marginVertical: verticalScale(4),
  },
  filterSection: {
    width: '100%',
  },
});
