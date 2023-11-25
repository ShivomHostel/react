import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {fontSize} from '../../Utils/Size';
import {colors} from '../../Utils/Colors';
import {verticalScale} from '../../Utils/Metrics';

const InputCard = ({
  title,
  height,
  width,
  name,
  placeholder,
  secureTextEntry,
}) => {
  return (
    <View
      style={[
        styles.inputcard,
        {
          height: height ? height : title?verticalScale(85):verticalScale(50),
          width: width ? width : 'auto',
        },
      ]}>
      {title && <Text style={styles.inptitle}>{title}</Text>}
      <View style={styles.bax}>
        <TextInput
          name={name && name}
          placeholder={placeholder && placeholder}
          secureTextEntry={secureTextEntry && secureTextEntry}
          style={styles.inputStyle}
          placeholderTextColor={colors.txtgrey}
        />
      </View>
    </View>
  );
};

export default InputCard;

const styles = StyleSheet.create({
  inputcard: {
    width: '100%',
    height: 85,
    gap: 5,
   },
  inptitle: {
    fontSize: fontSize.lable,
    color: colors.black,
  },
  bax: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
  },
  inputStyle: {
    height: '100%',
    color: colors.txtgrey,
    fontSize: 12,
    width: '100%',
    paddingLeft: 12,
    borderWidth: 1,
    borderColor: colors.white,
  },

  textstyle: {
    fontSize: fontSize.lable,
    color: colors.black,
  },
});
