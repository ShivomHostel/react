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
