import {
  FlatList,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {colors} from '../../Utils/Colors';
import Header from '../../Components/headers/Header';
import {horizontalScale, verticalScale, width} from '../../Utils/Metrics';
import {ThemeContext} from '../../Utils/Theme';
import Card from '../../Components/cards/Card';
import {fontSize} from '../../Utils/Size';
import {registration, registrationStats} from '../../Utils/constants';
import Main_Header from '../../Components/headers/Main_Header';
import {useDispatch, useSelector} from 'react-redux';
import {
  handleBasicRegisterDetails,
  handleRegistrationListAPI,
} from '../../Service/slices/RegisterSlice';
import Old_Registrations from '../../Components/register/Old_Registrations';
import Queue_Registration from '../../Components/register/Queue_Registration';
import Regular_Registeration from '../../Components/register/Regular_Registeration';
import Render_Stats from '../../Components/Render_Stats';
const Register_Candidate_Screen = memo(({navigation}) => {
  const [statsType, setStatsType] = useState(null);

  const {registerListResponse, registerBasicDataResponse} = useSelector(
    state => state.root.registerData,
  );
  const dispatch = useDispatch();

  const handleNavigation = useCallback(() => {
    navigation.navigate('Add_Registration');
  }, [navigation]);

  useEffect(() => {
    dispatch(handleBasicRegisterDetails());
  }, []);

  console.log('registerListResponse', registerListResponse);

  const Render_Add_btn = useCallback(
    () => (
      <View style={[styles.addbtn, styles.shadow]}>
        <TouchableOpacity onPress={handleNavigation}>
          <Icon name={'plus'} size={30} color={colors.white} />
        </TouchableOpacity>
      </View>
    ),
    [handleNavigation],
  );

  return (
    <View style={styles.container}>
      <Main_Header
        title={'Register'}
        openDrawer={() => navigation.openDrawer()}
      />
      <View style={{flex: 1}}>
        <View style={{width: '100%',paddingHorizontal:horizontalScale(20)}}>
          <Render_Stats
            value={statsType}
            setValue={setStatsType}
            data={registerBasicDataResponse?.response}
          />
        </View>
        <>
          {statsType === 'Old Registration' ? (
            <Old_Registrations />
          ) : statsType === 'Registration Queue' ? (
            <Queue_Registration />
          ) : (
            <Regular_Registeration />
          )}
        </>
      </View>
      <Render_Add_btn />
    </View>
  );
});

export default memo(Register_Candidate_Screen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  qtyView: {
    padding: 5,
    backgroundColor: `${colors.orange}50`,
    borderRadius: 5,
  },
  flexRowWithGap: {
    flexDirection: 'row',
    marginVertical: 2,
    alignItems: 'flex-start',
    gap: 10,
  },
  stats_setion: {
    flexDirection: 'row',
    // height: verticalScale(170),
    backgroundColor: colors.white,
    gap: horizontalScale(12),
    alignItems: 'center',
  },
  room_section: {
    backgroundColor: colors.white,
    // gap: horizontalScale(12),
    paddingBottom: verticalScale(100),
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
  room_num: {
    fontSize: 30,
    color: colors.grey,
    fontWeight: '600',
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    height: verticalScale(40),
    paddingHorizontal: horizontalScale(20),
    backgroundColor: colors.red,
    borderRadius: horizontalScale(5),
  },
  scrollBtn: {
    position: 'absolute',
    verticalAlign: 'middle',
  },
  room_type: {},
  seats_view: {},
  rent: {},
});
