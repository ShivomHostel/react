import {StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useMemo, useRef} from 'react';
import Main_Header from '../../Components/headers/Main_Header';
import Card from '../../Components/cards/Card';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {colors} from '../../Utils/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  height,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../Utils/Metrics';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Sales_BottomSeet from '../../Components/modals/Sales_BottomSeet';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

const Sale_Tenant_Screen = ({navigation}) => {
  const bottomSheetRef = useRef(null);

  // variablesc
  const snapPoints = useMemo(() => ['75%','100%'], []);

  // callbacks
  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);
  const handlePress = useCallback(() => {
    bottomSheetRef.current?.present();
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
    <BottomSheetModalProvider>
      <View style={{flex: 1}}>
        <Main_Header
          title={'Sales'}
          openDrawer={() => navigation.openDrawer()}
        />
        <View style={styles.wrapper}>
          <View
            style={{
              flexDirection: 'row',
              gap: horizontalScale(12),
            }}>
            <View style={styles.button}>
              <Text style={styles.btnText}>Reg. Sale</Text>
            </View>
            <View style={[styles.button, {backgroundColor: colors.grey}]}>
              <Text style={styles.btnText}>Custom Sale</Text>
            </View>
          </View>
          <Card>
            <View
              style={{justifyContent: 'space-between', flexDirection: 'row'}}>
              <View style={styles.inner_card}>
                <View style={styles.card_row}>
                  <MaterialCommunityIcons
                    name="arrow-down"
                    color={'green'}
                    size={18}
                  />
                  <Text style={styles.card_text}>You'll get</Text>
                </View>
                <View style={styles.card_row}>
                  <Text style={styles.card_text}>₹ 165800</Text>
                </View>
              </View>
              <View style={styles.inner_card}>
                <View style={styles.card_row}>
                  <MaterialCommunityIcons
                    name="receipt"
                    color={colors.orange}
                    size={18}
                  />
                  <Text style={styles.card_text}>Sale(Nov)</Text>
                </View>
                <View style={styles.card_row}>
                  <Text style={styles.card_text}>₹ 25806</Text>
                </View>
              </View>
            </View>
            <View style={{}}>
              <View style={styles.listheader}>
                <View style={[styles.listcol, {width: '15%'}]}>
                  <Text style={styles.list_title}>S No.</Text>
                </View>
                <View style={[styles.listcol, {width: '25%'}]}>
                  <Text style={styles.list_title}>Name</Text>
                </View>
                <View style={[styles.listcol, {width: '20%'}]}>
                  <Text style={styles.list_title}>Date</Text>
                </View>
                <View style={[styles.listcol, {width: '20%'}]}>
                  <Text style={styles.list_title}>Amount</Text>
                </View>
                <View style={[styles.listcol, {width: '20%'}]}>
                  <Text style={styles.list_title}>Action</Text>
                </View>
              </View>
              <FlatList
                data={[1, 2, 3, 4]}
                nestedScrollEnabled
                renderItem={(item, i) => {
                  return (
                    <View style={styles.listheader}>
                      <View style={[styles.listcol, {width: '10%'}]}>
                        <Text style={styles.list_title}>1.</Text>
                      </View>
                      <View style={[styles.listcol, {width: '30%'}]}>
                        <Text style={styles.list_title}>Raj mansoori</Text>
                      </View>
                      <View style={[styles.listcol, {width: '20%'}]}>
                        <Text style={styles.list_title}>01/12/23</Text>
                      </View>
                      <View style={[styles.listcol, {width: '20%'}]}>
                        <Text style={styles.list_title}>800</Text>
                      </View>
                      <View style={[styles.listcol, {width: '20%'}]}>
                        <MaterialCommunityIcons
                          name={'eye'}
                          size={15}
                          color={colors.black}
                        />
                      </View>
                    </View>
                  );
                }}
                keyExtractor={(item, i) => i}
              />
            </View>
          </Card>
        </View>
        <Render_Add_btn handleNavigation={handlePress} />
      </View>
      <Sales_BottomSeet
        bottomSheetRef={bottomSheetRef}
        snapPoints={snapPoints}
        handleSheetChanges={handleSheetChanges}
      />
    </BottomSheetModalProvider>
  );
};

export default Sale_Tenant_Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    width: '100%',
    padding: horizontalScale(20),
    gap: verticalScale(10),
  },
  inner_card_row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inner_card: {
    padding: 10,
    width: 'auto',
    backgroundColor: colors.white,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 3, // This is for Android box shadow
  },
  card_row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  card_text: {
    fontSize: 10,
    color: colors.black,
    fontWeight: '500',
  },
  listheader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
    alignItems: 'center',
  },
  listcol: {
    width: '20%',
    alignItems: 'center',
  },
  list_title: {
    fontSize: 13,
    color: colors.black,
    fontWeight: '600',
    fontFamily: 'Roboto-Medium',
  },
  bussiness_section: {
    width: '100%',
    height: verticalScale(50),
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  bussiness_title: {
    fontSize: 16,
    color: colors.black,
    fontWeight: '500',
  },
  button: {
    height: verticalScale(40),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(12),
    backgroundColor: colors.AppDefaultColor,
    borderRadius: 4,
  },
  btnText: {
    color: colors.white,
    fontSize: moderateScale(14),
    fontFamily: 'Roboto-Medium',
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
});
