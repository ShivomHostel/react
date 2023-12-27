import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
  Image,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../Utils/Metrics';
import {colors} from '../../Utils/Colors';
import {PickImage, RemoveImage} from '../../Hooks/useImagePicker';

const Choose_Image = ({title, setImageUrl, imageUrl}) => {
  return (
    <TouchableOpacity
      onPress={() => PickImage(setImageUrl)}
      style={styles.container}>
      <Text>{title}</Text>
      <View style={styles.box}>
        {imageUrl ? (
          <>
            <Image source={{uri: imageUrl}} style={styles.image} />
            <TouchableOpacity onPress={() => RemoveImage(imageUrl,setImageUrl)} style={styles.closeButton}>
              <Icon name={'xmark'} size={15} color={colors.white} />
            </TouchableOpacity>
          </>
        ) : (
          <TouchableOpacity onPress={() => PickImage(setImageUrl)} style={styles.addBtn}>
            <Icon name={'plus'} size={20} color={colors.white} />
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
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
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  closeButton: {
    height: verticalScale(25),
    width: verticalScale(25),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: horizontalScale(30),
    backgroundColor:colors.red,
    position: 'absolute',
    right: verticalScale(-5),
    top: verticalScale(-8),
  },
});
