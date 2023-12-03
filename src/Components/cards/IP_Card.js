import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {verticalScale} from '../../Utils/Metrics';
import {fontSize} from '../../Utils/Size';
import {colors} from '../../Utils/Colors';
import DropDownPicker from 'react-native-dropdown-picker';
import {Picker} from '@react-native-picker/picker';

const IP_Card = ({
  title,
  name,
  placeholder,
  value,
  items, 
  setValue, 
}) => {
  return (
    <View style={styles.inputcard}>
      <Text style={styles.inptitle}>{title && title}</Text>
      <View style={styles.bax}>
        <View
          style={{
            width: '20%',
            height: verticalScale(50),
            borderRightColor: colors.grey,
            borderRightWidth: 1,
          }}>
          {/* <DropDownPicker
        open={open&&open}
        value={value&&value}
        items={items&&items}
        setOpen={setOpen&&setOpen}
        setValue={setValue&&setValue}
        setItems={setItems&&setItems}
        style={{borderColor:colors.white,height:verticalScale(50) }}
        placeholder={dropDownPlaceholder&&dropDownPlaceholder}
        placeholderStyle={{color:colors.txtgrey}}
      /> */}
          <Picker
            style={{alignItems: 'center'}}
            selectedValue={value}
            onValueChange={(itemValue, itemIndex) => setValue(itemValue)}>
            <Picker.Item label="Seclect" value="" />
            {items.map((item, i) => {
              return (
                <Picker.Item key={i} label={item.label} value={item.name} />
              );
            })}
          </Picker>
        </View>
        <TextInput
          name={name && name}
          placeholder={placeholder && placeholder}
          style={styles.inputStyle}
        />
      </View>
    </View>
  );
};

export default IP_Card;

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
    flexDirection: 'row',
  },
  inputStyle: {
    height: '100%',
    color: colors.txtgrey,
    fontSize: 12,
    width: '80%',
    paddingLeft: 12,
    borderWidth: 1,
    borderColor: colors.white,
    borderLeftColor: colors.grey,
  },
});
