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
import { colors } from '../../Utils/Colors';

const Add_Item_Model = ({bottomSheetRef, snapPoints, handleSheetChanges}) => {
  return (
    <BottomSheetModal
      ref={bottomSheetRef}
      index={1}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}>
      <View style={styles.modalContainer}>
        <Text style={styles.title}>Add Item</Text>
        <View style={styles.content}>
          <View style={styles.inputView}>
            <TextInput
              placeholder="Item Code"
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
              placeholder="Rate"
              placeholderTextColor={colors.grey}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              placeholder="Tax"
              placeholderTextColor={colors.grey}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput placeholder="Amount" placeholderTextColor={colors.grey} />
          </View>
        </View>
        <Pressable style={[styles.button]}>
          <Text style={{color: colors.white, fontSize: moderateScale(14)}}>
            Add Item
          </Text>
        </Pressable>
      </View>
    </BottomSheetModal>
  );
};

export default Add_Item_Model;

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
});
