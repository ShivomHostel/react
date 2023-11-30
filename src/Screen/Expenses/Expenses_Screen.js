import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Main_Header from '../../Components/headers/Main_Header';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../Utils/Metrics';
import {colors} from '../../Utils/Colors';
import moment from 'moment';
import Add_Expenses_Modal from '../../Components/modals/Add_Expenses_Modal';
const Expenses_Screen = ({navigation}) => {
  const [start_Date, setStart_Date] = useState(moment.now());
  const [end_Date, setEnd_Date] = useState(moment.now());
  const [date, setDate] = useState(moment.now());
  const [isModalVisible, setIsModalVisible] = useState(false);
  console.log('isModalVisible ', isModalVisible);

  const Render_Add_btn = ({handleNavigation}) => {
    return (
      <View style={[styles.addbtn, styles.shadow]}>
        <TouchableOpacity onPress={handleNavigation}>
          <Icon name={'plus'} size={30} color={colors.white} />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <>
      <View style={styles.container}>
        <Main_Header
          title={'Expenses'}
          openDrawer={() => navigation.openDrawer()}
        />
        <View style={styles.wrapper}>
          <View
            style={{
              padding: horizontalScale(12),
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: '100%',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                width: '50%',
                alignItems: 'center',
              }}>
              <Text style={styles.label}>From : </Text>
              <TouchableOpacity style={styles.picker}>
                <Text>{moment(start_Date).format('DD-MMM-YYYY')}</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: '50%',
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}>
              <Text style={styles.label}>To : </Text>
              <TouchableOpacity style={styles.picker}>
                <Text>{moment(end_Date).format('DD-MMM-YYYY')}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              padding: horizontalScale(5),
              flexDirection: 'row',
              justifyContent: 'center',
              width: '100%',
              alignItems: 'center',
              gap: horizontalScale(12),
            }}>
            <TouchableOpacity
              style={{
                height: verticalScale(40),
                paddingHorizontal: horizontalScale(12),
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: horizontalScale(4),
                backgroundColor: colors.AppDefaultColor,
              }}>
              <Text style={{fontSize: moderateScale(14), color: colors.white}}>
                Filter
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: verticalScale(40),
                paddingHorizontal: horizontalScale(12),
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: horizontalScale(4),
                backgroundColor: colors.AppDefaultColor,
              }}>
              <Text style={{fontSize: moderateScale(14), color: colors.white}}>
                Report
              </Text>
            </TouchableOpacity>
          </View>
          <FlatList
            contentContainerStyle={{
              padding: horizontalScale(12),
              gap: verticalScale(12),
            }}
            data={[1, 2, 3, 4]}
            renderItem={item => {
              return (
                <View style={[styles.chip, styles.shadow]}>
                  <View style={styles.left}>
                    <Text style={styles.title}>Groceries</Text>
                  </View>
                  <View style={styles.right}>
                    <Text style={[styles.label, {color: colors.red}]}>
                      ₹ 25000
                    </Text>
                    <Text style={styles.label}>
                      {moment(date).format('DD-MMM-YYYY')}
                    </Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
        <Render_Add_btn handleNavigation={() => setIsModalVisible(true)} />
      </View>
      <Add_Expenses_Modal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </>
  );
};

export default Expenses_Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    width: '100%',
    // padding: horizontalScale(12),
  },
  chip: {
    height: verticalScale(100),
    width: '100%',
    borderRadius: horizontalScale(10),
    backgroundColor: colors.white,
    padding: horizontalScale(12),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  title: {
    fontSize: moderateScale(18),
    color: colors.black,
  },
  label: {
    fontSize: moderateScale(14),
    color: colors.black,
  },
  right: {
    height: '100%',
    alignItems: 'flex-end',
    justifyContent: 'space-evenly',
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
  picker: {
    height: verticalScale(40),
    width: horizontalScale(120),
    borderRadius: horizontalScale(4),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
});
