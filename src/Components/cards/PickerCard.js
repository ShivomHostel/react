<<<<<<< HEAD
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Picker} from '@react-native-picker/picker';
import {fontSize} from '../../Utils/Size';
import {moderateScale, verticalScale} from '../../Utils/Metrics';
import {colors} from '../../Utils/Colors';

const PickerCard = ({title, placeholder, value, setValue, items,editable,error}) => {
  return (
    <View
        style={[
          styles.inputcard,
          {height: error ? verticalScale(105) : verticalScale(85)},
        ]}>
      <Text style={styles.inptitle}>{title && title}</Text>
      <View style={styles.bax}>
        <Picker
          enabled={editable}
          style={{
            color: colors.grey,
            fontSize: moderateScale(10),
          }}
          selectedValue={value}
          onValueChange={(itemValue, itemIndex) => setValue(itemValue)}>
          {placeholder && <Picker.Item label={placeholder} value="" />}
          {items?.map((item, i) => {
            return (
              <Picker.Item
                key={i}
                style={{color: colors.grey}}
                label={item.label}
                value={item.value}
              />
            );
          })}
        </Picker>
      </View>
      {error && <Text style={styles.error}>{error} </Text>}
    </View>
  );
};

export default PickerCard;

const styles = StyleSheet.create({
  inputcard: {
    height: 85,
    gap: verticalScale(5),
  },
  inptitle: {
    fontSize: fontSize.lable,
    fontFamily: 'Roboto-Regular',
    color: colors.black,
  },
  bax: {
    width: '100%',
    // height: verticalScale(80),
    backgroundColor: '#fff',
    paddingTop: verticalScale(-10),
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
    fontFamily: 'Roboto-Regular',
  },
  error:{
    fontSize:moderateScale(12),
    color:colors.red,
    fontFamily: 'Roboto-Regular',
  }
});
=======
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {fontSize} from '../../Utils/Size';
import {colors} from '../../Utils/Colors';
import {verticalScale} from '../../Utils/Metrics';
import {Picker} from '@react-native-picker/picker';

const PickerCard = ({
  title,
  open,
  value,
  items,
  setOpen,
  setValue,
  setItems,
}) => {
  return (
    <View style={styles.inputcard}>
      <Text style={styles.inptitle}>{title && title}</Text>
      <View style={styles.bax}>
        {/* <DropDownPicker
          open={open&&open}
          value={value&&value}
          items={items&&items}
          setOpen={setOpen&&setOpen}
          setValue={setValue&&setValue}
          setItems={setItems&&setItems}
          style={{borderColor:colors.white,}}
          placeholderStyle={{color:colors.txtgrey}}
        /> */}
        <Picker
          selectedValue={value}
          onValueChange={(itemValue, itemIndex) => setValue(itemValue)}>
          <Picker.Item label="Seclet Room No" value="" />
          {items.map((item, i) => {
            return <Picker.Item key={i} label={item.label} value={item.name} />;
          })}
        </Picker>
      </View>
    </View>
  );
};

export default PickerCard;

const styles = StyleSheet.create({
  inputcard: {
    height: verticalScale(85),
    gap: 10,
  },
  inptitle: {
    fontSize: fontSize.lable,
    color: colors.black,
  },
  bax: {
    width: '100%',
    height: verticalScale(50),
    backgroundColor: colors.white,
  },
});
>>>>>>> main
