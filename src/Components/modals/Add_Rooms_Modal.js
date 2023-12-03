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
import {colors} from '../../Utils/Colors';
import Icon from 'react-native-vector-icons/FontAwesome6';

const Add_Rooms_Modal = ({isModalVisible, setIsModalVisible}) => {
  return (
    <>
      {isModalVisible ? (
        <Pressable
          style={styles.Container}
          onPress={() => setIsModalVisible(false)}>
          <Modal
            transparent
            animationType="slide"
            visible={isModalVisible}
            onRequestClose={() => {
              setIsModalVisible(!isModalVisible);
            }}>
            <View style={styles.modalContainer}>
              <Text style={styles.title}>Add Room</Text>
              <View style={styles.content}>
                <View style={styles.inputView}>
                  <TextInput
                    placeholder="Room Number"
                    placeholderTextColor={colors.grey}
                  />
                </View>
                <View style={styles.inputView}>
                  <TextInput
                    placeholder="Room Type"
                    placeholderTextColor={colors.grey}
                  />
                </View>
                <View style={styles.inputView}>
                  <TextInput
                    placeholder="Nuber Of Seats"
                    placeholderTextColor={colors.grey}
                  />
                </View>
                <View style={styles.inputView}>
                  <TextInput
                    placeholder="Number Of Candidate"
                    placeholderTextColor={colors.grey}
                  />
                </View>
                <View style={styles.inputView}>
                  <TextInput
                    placeholder="Rent"
                    placeholderTextColor={colors.grey}
                  />
                </View>
              </View>
              <Pressable
                style={[styles.button]}
                onPress={() => setIsModalVisible(!isModalVisible)}>
                <Text
                  style={{color: colors.white, fontSize: moderateScale(14)}}>
                  Add Room
                </Text>
              </Pressable>
              <Pressable
                style={styles.buttonClose}
                onPress={() => setIsModalVisible(!isModalVisible)}>
                <Icon name={'xmark'} size={20} color={colors.white} />
              </Pressable>
            </View>
          </Modal>
        </Pressable>
      ) : null}
    </>
  );
};

export default Add_Rooms_Modal;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: horizontalScale(20),
    backgroundColor: '#000000aa',
    position: 'absolute',
  },
  modalContainer: {
    width: '95%',
    borderRadius: horizontalScale(10),
    backgroundColor: colors.white,
    alignSelf:'center',
    top: verticalScale(100),
    padding: horizontalScale(50),

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
