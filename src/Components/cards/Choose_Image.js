import {StyleSheet, TouchableOpacity, Text, View, Image} from 'react-native';
import React from 'react';
import {colors} from '../../Utils/Colors';
import {horizontalScale, verticalScale} from '../../Utils/Metrics';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {fontSize} from '../../Utils/Size';
import ImageCropPicker from 'react-native-image-crop-picker';
const Choose_Image = ({title, image, handlePress, setImage}) => {
  const AddPhotoBtn = () => {
    return (
      <View style={styles.addphotoBtn}>
        <Icon name="plus" size={15} color={colors.white} />
      </View>
    );
  };

  return (
    <View style={{width: '45%', gap: verticalScale(10)}}>
      <Text style={styles.labelText}>{title && title}</Text>
      <TouchableOpacity
        disabled={!handlePress && true}
        onPress={() => {handlePress(setImage)}}
        style={styles.chip}>
        {image ? (
          <>
            <Image source={{uri: image}} style={styles.uploadedimage} />
            <TouchableOpacity onPress={()=>setImage('')} style={styles.removeImg}>
              <Icon name={'xmark'} color={colors.white} size={16} />
            </TouchableOpacity>
          </>
        ) : (
          <AddPhotoBtn />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Choose_Image;

const styles = StyleSheet.create({
  chip: {
    backgroundColor: colors.white,
    height: verticalScale(250),
    width: '100%',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 5,
    borderColor: colors.grey,
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadedimage: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  addphotoBtn: {
    height: 35,
    width: 35,
    borderRadius: 35,
    backgroundColor: colors.AppDefaultColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelText: {
    fontSize: fontSize.lable,
    color: colors.txtgrey,
    lineHeight: 20,
  },
  removeImg: {
    height: horizontalScale(20),
    width: horizontalScale(20),
    borderRadius: horizontalScale(30),
    position: 'absolute',
    right: horizontalScale(-8),
    top: verticalScale(-10),
    backgroundColor: colors.red,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
