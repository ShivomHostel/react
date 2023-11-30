import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useMemo} from 'react';
import {fontSize} from '../../Utils/Size';
import {colors} from '../../Utils/Colors';
import {verticalScale} from '../../Utils/Metrics';

const InputCard = ({
  title,
  name,
  value,
  placeholder,
  secureTextEntry,
  updateFields,
  keyboardType,
  editable,
  error,
}) => {
  return useMemo(
    () => (
      <View
        style={[
          styles.inputcard,
          {height: error ? verticalScale(105) : verticalScale(85)},
        ]}>
        <Text style={styles.inptitle}>{title && title}</Text>
        <View style={styles.bax}>
          <TextInput
            name={name && name}
            value={value && value}
            placeholder={placeholder && placeholder}
            secureTextEntry={secureTextEntry && secureTextEntry}
            style={styles.inputStyle}
            onChangeText={text => {
              updateFields && updateFields({[name]: text});
            }}
            keyboardType={keyboardType ? keyboardType : 'default'}
            editable={editable}
          />
        {error && <Text style={styles.error}>{error} </Text>}
        </View>
      </View>
    ),
    [title, name, placeholder, secureTextEntry, updateFields],
  );
};

export default InputCard;

const styles = StyleSheet.create({
  inputcard: {
    height: verticalScale(85),
    gap: verticalScale(8),
  },
  inptitle: {
    fontSize: fontSize.lable,
    color: colors.black,
  },
  bax: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    gap: verticalScale(2),
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
  error: {
    color: colors.red,
    fontSize: 12,
  },
});
