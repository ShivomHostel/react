<<<<<<< HEAD
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {horizontalScale} from '../../Utils/Metrics';
import {colors} from '../../Utils/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Main_Header = ({title,openDrawer}) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', gap: 5}}>
        <TouchableOpacity onPress={openDrawer}>
          <MaterialCommunityIcons
            name={'menu'}
            color={colors.white}
            size={25}
          />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={styles.right}>
        {/* <Text style={styles.title}>Admin</Text> */}
        <MaterialCommunityIcons
          name={'account'}
          color={colors.white}
          size={25}
        />
      </View>
    </View>
  );
};

export default Main_Header;

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.orange,
    paddingHorizontal: horizontalScale(12),
  },
  title: {
    fontSize: 16,
    color: colors.white,
    fontWeight: '600',
  },
  right: {
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
=======
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {horizontalScale} from '../../Utils/Metrics';
import {colors} from '../../Utils/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Main_Header = ({openDrawer,title}) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', gap: 5}}>
        <TouchableOpacity onPress={openDrawer}>
          <MaterialCommunityIcons
            name={'menu'}
            color={colors.white}
            size={25}
          />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={styles.right}>
        {/* <Text style={styles.title}>Admin</Text> */}
        <MaterialCommunityIcons
          name={'account'}
          color={colors.white}
          size={25}
        />
      </View>
    </View>
  );
};

export default Main_Header;

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.orange,
    paddingHorizontal: horizontalScale(12),
  },
  title: {
    fontSize: 16,
    color: colors.white,
    fontWeight: '600',
  },
  right: {
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
>>>>>>> main
