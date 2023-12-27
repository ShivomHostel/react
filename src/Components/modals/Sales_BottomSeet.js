import {
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  TextInput,
} from 'react-native';
import React from 'react';
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
import {ScrollView} from 'react-native-gesture-handler';

const Sales_BottomSeet = ({bottomSheetRef, snapPoints, handleSheetChanges}) => {
  return (
    <BottomSheetModal
      ref={bottomSheetRef}
      index={1}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}>
      <ScrollView contentContainerStyle={styles.modalContainer}>
        <View
          style={{
            flexDirection: 'row',
            gap: horizontalScale(6),
            backgroundColor:colors.black,
            padding:horizontalScale(5)
          }}>
          <View style={styles.buttonTab}>
            <Text style={styles.btnText}>Reg. Sale</Text>
          </View>
          <View style={[styles.buttonTab, {backgroundColor: colors.grey}]}>
            <Text style={styles.btnText}>Custom Sale</Text>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.inputView}>
            <TextInput
              placeholder="Room No"
              placeholderTextColor={colors.grey}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput placeholder="Name" placeholderTextColor={colors.grey} />
          </View>
          <View style={styles.inputView}>
            <TextInput
              placeholder="Mobile number"
              placeholderTextColor={colors.grey}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              placeholder="Address"
              placeholderTextColor={colors.grey}
            />
          </View>
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
            <TextInput placeholder="Tax" placeholderTextColor={colors.grey} />
          </View>
          <View style={styles.inputView}>
            <TextInput
              placeholder="Disscount"
              placeholderTextColor={colors.grey}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              placeholder="Amount"
              placeholderTextColor={colors.grey}
            />
          </View>
        </View>
        <Pressable style={[styles.button]}>
          <Text style={{color: colors.white, fontSize: moderateScale(14)}}>
            Add Item
          </Text>
        </Pressable>
      </ScrollView>
    </BottomSheetModal>
  );
};

export default Sales_BottomSeet;

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
    paddingBottom: verticalScale(80),
  },
  title: {
    fontSize: moderateScale(20),
    color: colors.black,
    alignSelf: 'center',
  },
  content: {
    paddingTop: verticalScale(12),
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
  buttonClose: {
    position: 'absolute',
    top: verticalScale(12),
    right: horizontalScale(12),
    height: verticalScale(30),
    width: verticalScale(30),
    borderRadius: horizontalScale(20),
    backgroundColor: colors.red,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputView: {
    width: '100%',
    height: verticalScale(50),
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: horizontalScale(10),
    paddingHorizontal: horizontalScale(12),
  },
  buttonTab: {
    height: verticalScale(40),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(12),
    backgroundColor: colors.AppDefaultColor,
    borderRadius: 4,
  },
  btnText: {
    color: colors.white,
    fontSize: moderateScale(14),
    fontFamily: 'Roboto-Medium',
  },
});
