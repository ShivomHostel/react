import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React, {useCallback, useMemo, useRef, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Main_Header from '../../Components/headers/Main_Header';
import {
  height,
  horizontalScale,
  moderateScale,
  verticalScale,
  width,
} from '../../Utils/Metrics';
import moment from 'moment';
import Add_Item_Model from '../../Components/modals/Add_Item_Model';
import {colors} from '../../Utils/Colors';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

const Add_Item_Screen = () => {
  const bottomSheetRef = useRef(null);

  // variablesc
  const snapPoints = useMemo(() => ['15%', '75%'], []);

  // callbacks
  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handlePress = useCallback(() => {
    bottomSheetRef.current?.present();
    console.log(bottomSheetRef.current);
  }, []);

  const Render_Add_btn = ({handleNavigation}) => {
    return (
      <View style={[styles.addbtn, styles.shadow]}>
        <TouchableOpacity onPress={handleNavigation}>
          <Icon name={'plus'} size={30} color={colors.white} />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <>
      <BottomSheetModalProvider>
        <View style={styles.container}>
          <Main_Header
            title={'Add Item'}
            openDrawer={() => navigation.openDrawer()}
          />
          <View style={styles.wrapper}>
            <FlatList
              contentContainerStyle={{
                padding: horizontalScale(12),
                gap: verticalScale(12),
                paddingBottom: verticalScale(80),
                // height:'80%'
              }}
              data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
              renderItem={item => {
                return (
                  <View style={[styles.chip, styles.shadow]}>
                    <View style={styles.left}>
                      <Text
                        style={[
                          styles.label,
                          {
                            fontSize: moderateScale(12),
                            fontFamily: 'Roboto-Light',
                          },
                        ]}>
                        Code : A505
                      </Text>
                      <Text style={styles.title}>Groceries</Text>
                    </View>
                    <View style={styles.right}>
                      <View style={{width: width / 3}}>
                        <Text style={[styles.label]}>Rate</Text>
                        <Text style={styles.price}>₹ {Math.random().toFixed(3)*1000}</Text>
                      </View>
                      <View style={{width: width / 3}}>
                        <Text style={[styles.label]}>Tax</Text>
                        <Text style={styles.price}>₹ {Math.random().toFixed(2)*100}</Text>
                      </View>
                      <View style={{width: width / 3}}>
                        <Text style={[styles.label]}>Amount</Text>
                        <Text style={styles.price}>₹ {Math.random().toFixed(3)*1000}</Text>
                      </View>
                    </View>
                  </View>
                );
              }}
            />
          </View>
          <Render_Add_btn handleNavigation={handlePress} />
        </View>
      <Add_Item_Model
        bottomSheetRef={bottomSheetRef}
        snapPoints={snapPoints}
        handleSheetChanges={handleSheetChanges}
      />
      </BottomSheetModalProvider>
    </>
  );
};

export default Add_Item_Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    width: '100%',
    height: '100%',
    // padding: horizontalScale(12),
  },
  chip: {
    width: '100%',
    height: verticalScale(130),
    borderRadius: horizontalScale(10),
    backgroundColor: colors.white,
    padding: horizontalScale(12),
    justifyContent: 'space-between',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  title: {
    fontSize: moderateScale(18),
    color: colors.AppDefaultColor,
    fontFamily: 'Roboto-Medium',
    letterSpacing: 0.5,
    fontVariant: '',
  },
  label: {
    fontSize: moderateScale(14),
    color: colors.black,
    fontFamily: 'Roboto-Light',
  },
  price: {
    fontSize: moderateScale(14),
    color: colors.black,
    letterSpacing: 0.5,
    fontFamily: 'Roboto-Medium',
  },

  right: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addbtn: {
    height: verticalScale(60),
    width: verticalScale(60),
    borderRadius: horizontalScale(50),
    backgroundColor: colors.AppDefaultColor,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: verticalScale(20),
    right: horizontalScale(20),
  },
});
