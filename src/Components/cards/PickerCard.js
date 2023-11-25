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
