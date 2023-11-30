import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../Utils/Metrics';
import {colors} from '../../Utils/Colors';

const Choose_Image = ({title}) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <View style={styles.box}>
        <TouchableOpacity style={styles.addBtn}>
          <Icon name={'plus'} size={20} color={colors.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Choose_Image;

const styles = StyleSheet.create({
  container: {
    gap: verticalScale(10),
    width: horizontalScale(140),
  },
  box: {
    height: verticalScale(200),
    width: horizontalScale(140),
    borderWidth: 1,
    borderColor: colors.lightygrey,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addBtn: {
    height: verticalScale(50),
    width: verticalScale(50),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: horizontalScale(30),
    backgroundColor: `${colors.AppDefaultColor}70`,
  },
  label: {
    fontSize: moderateScale(16),
    color: colors.black,
  },
});
