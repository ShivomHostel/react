import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Icon from 'react-native-vector-icons//FontAwesome6';
import {colors} from '../../Utils/Colors';
import Header from '../../Components/headers/Header';
import {horizontalScale, verticalScale, width} from '../../Utils/Metrics';
import {ThemeContext} from '../../Utils/Theme';
import Card from '../../Components/cards/Card';
import {fontSize} from '../../Utils/Size';
import {Old_registration_list, registration, registrationStats} from '../../Utils/constants';
import Render_Stats from '../../Components/Render_Stats';
import Old_registration from '../../Components/Old_registration';
import Regular_Registration from '../../Components/Regular_Registration';

const Register_Candidate_Screen = ({navigation}) => {
  const [selected, setSelected] = useState(null);
  console.log('selected',selected);
  const Render_Add_btn = ({handleNavigation}) => {
    return (
      <View style={[styles.addbtn, styles.shadow]}>
        <TouchableOpacity onPress={handleNavigation}>
          <Icon name={'plus'} size={30} color={colors.white} />
        </TouchableOpacity>
      </View>
    );
  };
  const RenderItem = () => {
    return <View></View>;
  };

  return (
    <View style={styles.container}>
      <Header title={'Registration'} path={() => navigation.goBack()} />
      <View style={{height: 'auto'}}>
        <Render_Stats
          selected={selected}
          setSelected={setSelected}
          data={registrationStats}
        />
        {
          selected==='old_reg'?
          <Old_registration data={Old_registration_list} />:
          <Regular_Registration data={registration}/>
        }
        
      </View>
      <Render_Add_btn
        handleNavigation={() => navigation.navigate('Add_Registration')}
      />
    </View>
  );
};

export default Register_Candidate_Screen;

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
    alignItems: 'flex-start',
    gap: 10,
    marginVertical: 2,
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
    padding: horizontalScale(20),
    gap: horizontalScale(12),
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
    fontSize: 24,
    color: colors.black,
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    height: verticalScale(40),
    paddingHorizontal: horizontalScale(20),
    backgroundColor: colors.red,
    borderRadius: horizontalScale(5),
  },
  label: {
    fontSize: fontSize.lable,
    // fontWeight:'600',
    color: colors.grey,
  },
  room_type: {},
  seats_view: {},
  rent: {},
});
