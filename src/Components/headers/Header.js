import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import { colors } from '../../Utils/Colors';
import { horizontalScale } from '../../Utils/Metrics';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Header = ({title, path}) => {
   
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <TouchableOpacity onPress={path}>
        <Icon name={'arrow-left'} color={colors.white} size={24} />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default Header;


const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.darkgrey,
    paddingHorizontal: horizontalScale(12),
  },
  title: {
    fontSize: 18,
    color: colors.white,
    fontWeight: '600',
  },
  left: {
    flexDirection: 'row',
    gap: 5,
    justifyContent:'center',
    alignItems:'center'
  },
});
