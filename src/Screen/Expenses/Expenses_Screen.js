<<<<<<< HEAD
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Main_Header from '../../Components/headers/Main_Header';
import {
  height,
  horizontalScale,
  moderateScale,
  verticalScale,
  width,
} from '../../Utils/Metrics';
import {colors} from '../../Utils/Colors';
import moment from 'moment';
import Add_Expenses_Modal from '../../Components/modals/Add_Expenses_Modal';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const Expenses_Screen = ({navigation}) => {
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [isEndDatePickerVisible, setEndIsDatePickerVisible] = useState(false);
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
              gap: 12,
            }}>
            <View
              style={{
                flexDirection: 'row',
                 alignItems: 'center',
              }}>
              <Text style={styles.label}>From : </Text>
              <TouchableOpacity
                onPress={() => setIsDatePickerVisible(true)}
                style={styles.picker}>
                <Text>{moment(start_Date).format('DD-MMM-YYYY')}</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}>
              <Text style={styles.label}>To : </Text>
              <TouchableOpacity
                onPress={() => setEndIsDatePickerVisible(true)}
                style={styles.picker}>
                <Text>{moment(end_Date).format('DD-MMM-YYYY')}</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.button}>
              <Text style={{fontSize: moderateScale(14), color: colors.white}}>
                Filter
              </Text>
            </TouchableOpacity>
          </View>
          <FlatList
            contentContainerStyle={{
              padding: horizontalScale(12),
              gap: verticalScale(12),
              paddingBottom:verticalScale(80)
              // height:'80%'
            }}
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
            renderItem={item => {
              return (
                <TouchableOpacity onPress={()=>navigation.navigate('Category_Expenses')} style={[styles.chip, styles.shadow]}>
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
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item,i)=>i.toString()}
          />
        </View>
        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor: '#dc3545',
              position: 'absolute',
              bottom: verticalScale(20),
              left: horizontalScale(20),
            },
          ]}>
          <Text style={{fontSize: moderateScale(14), color: colors.white}}>
            Report
          </Text>
        </TouchableOpacity>
        <Render_Add_btn handleNavigation={() => setIsModalVisible(true)} />
      </View>
      <Add_Expenses_Modal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={date => {
          setStart_Date(date);
          setIsDatePickerVisible(false);
        }}
        onCancel={() => setIsDatePickerVisible(false)}
      />
      <DateTimePickerModal
        isVisible={isEndDatePickerVisible}
        mode="date"
        onConfirm={date => {
          setEnd_Date(date);
          setEndIsDatePickerVisible(false);
        }}
        onCancel={() => setEndIsDatePickerVisible(false)}
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
    height:height- verticalScale(135)
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
    // width: horizontalScale(120),
    borderRadius: horizontalScale(4),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingHorizontal: horizontalScale(12),
  },
  button: {
    height: verticalScale(40),
    paddingHorizontal: horizontalScale(12),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: horizontalScale(4),
    backgroundColor: colors.AppDefaultColor,
  },
});
=======
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Main_Header from '../../Components/headers/Main_Header';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { BarChart, PieChart } from 'react-native-gifted-charts';
import { expenses_data, pieData } from '../../Utils/constants';
import { horizontalScale } from '../../Utils/Metrics';

const Expenses_Screen = ({navigation}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(true);
  const handleConfirm = date => {
    console.warn('A date has been picked: ', date);
    setDatePickerVisibility(false);
  };
  const handleCancel = () => {
    setDatePickerVisibility(false);
  };

  const DatePicker = ({isVisible}) => {
    return (
      <DateTimePickerModal
        isVisible={isVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={() => setDatePickerVisibility(false)}
      />
    );
  };
  return (
    <View>
      <Main_Header
        title={'Expenses'}
        openDrawer={() => navigation.openDrawer()}
      />
      <View>
        <View style={styles.flexRow}>
          <View style={styles.flexRow}>
            <Text>From: </Text>
            <TouchableOpacity>
              <Text>MM/DD/YYYY</Text>
            </TouchableOpacity>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={() => setDatePickerVisibility(false)}
            />
          </View>
          <View style={styles.flexRow}>
            <Text>To: </Text>
            <TouchableOpacity>
              <Text>MM/DD/YYYY</Text>
            </TouchableOpacity>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={() => setDatePickerVisibility(false)}
            />
          </View>
        </View>
        <View style={styles.flexRow}>
          <TouchableOpacity>
            <Text>Filter</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Reports</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.chartSection}>
        <PieChart
              data={pieData}
              showText
              textColor="white"
              radius={horizontalScale(130)}
              textSize={15}
              focusOnPress
              textBackgroundRadius={26}
            />
        </View>
      </View>
    </View>
  );
};

export default Expenses_Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  chartSection: {},
});
>>>>>>> main
