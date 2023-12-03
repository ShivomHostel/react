import {
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {
  height,
  horizontalScale,
  moderateScale,
  verticalScale,
  width,
} from '../../Utils/Metrics';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {colors} from '../../Utils/Colors';
import moment from 'moment';
import PickerCard from '../cards/PickerCard';
import {Picker} from '@react-native-picker/picker';

const Category_Expenses_Modal = ({
  bottomSheetRef,
  snapPoints,
  handleSheetChanges,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [date, setDate] = useState(moment.now());
  const [pymentType, setPymentType] = useState('');

  return (
    <BottomSheetModal
      ref={bottomSheetRef}
      index={1}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}>
      <View style={styles.modalContainer}>
        <Text style={styles.title}>Add Category Item</Text>
        <View style={styles.content}>
          <TouchableOpacity
            onPress={() => {
              setIsVisible(true);
            }}
            style={styles.dateButton}>
            <Text style={styles.text}>
              {moment(date).format('DD/MMM/YYYY')}
            </Text>
            <Icon name={'calendar'} color={colors.black} size={20} />
          </TouchableOpacity>
          <View style={styles.inputView}>
            <TextInput
              placeholder="Item Name"
              placeholderTextColor={colors.grey}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              placeholder="Quantity"
              placeholderTextColor={colors.grey}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput placeholder="Rate" placeholderTextColor={colors.grey} />
          </View>
          <View style={styles.inputView}>
            <TextInput
              placeholder="Amount"
              placeholderTextColor={colors.grey}
            />
          </View>
          <View style={styles.inputView}>
            <Picker
              style={{
                color: colors.grey,
                fontSize: moderateScale(10),
              }}
              selectedValue={pymentType}
              onValueChange={(itemValue, itemIndex) => {
                setPymentType(itemValue);
              }}>
              <Picker.Item label={'Cash'} value="cash" />
              <Picker.Item label={'Chuque'} value="chuque" />
              <Picker.Item label={'Online'} value="online" />
            </Picker>
          </View>
          <TouchableOpacity style={styles.dateButton} >
            <Text style={styles.text}>Upload Bill</Text>
            <Icon name={'paperclip'} color={colors.black} size={20} />
          </TouchableOpacity>
          {/* <View
            style={{
              height: verticalScale(220),
              width: horizontalScale(180),
              borderWidth: 1,
              borderColor: colors.grey,
              borderRadius: horizontalScale(5),
            }}
          /> */}
        </View>

        <Pressable style={[styles.button]}>
          <Text style={[styles.text,{color:colors.white}]}>
            Submit
          </Text>
        </Pressable>
      </View>
    </BottomSheetModal>
  );
};

export default Category_Expenses_Modal;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  modalContainer: {
    width: '100%',
    borderRadius: horizontalScale(10),
    backgroundColor: colors.white,
    alignSelf: 'center',
    top: verticalScale(20),
    paddingHorizontal: horizontalScale(40),
  },
  title: {
    fontSize: moderateScale(20),
    color: colors.black,
    alignSelf: 'center',
  },
  content: {
    paddingTop: verticalScale(40),
    gap: verticalScale(20),
  },
  button: {
    height: verticalScale(45),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(20),
    backgroundColor: colors.AppDefaultColor,
    borderRadius: horizontalScale(5),
    marginTop: verticalScale(20),
  },
  inputView: {
    width: '100%',
    height: verticalScale(50),
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: horizontalScale(4),
    paddingHorizontal: horizontalScale(12),
  },
  text: {
    fontSize: moderateScale(14),
    fontFamily: 'Roboto-Regular',
    color: colors.grey,
  },
  dateButton: {
    height: verticalScale(50),
    width: '100%',
    borderRadius: horizontalScale(4),
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(12),
    borderWidth: 1,
    borderColor: colors.grey,
  },
});
