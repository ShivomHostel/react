import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {memo, useCallback} from 'react';
import {colors} from '../Utils/Colors';
import {horizontalScale, verticalScale} from '../Utils/Metrics';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Render_Stats = memo(({value, setValue, data}) => {
  const handlePress = useCallback(
    item => {
      setValue(item);
    },
    [setValue],
  );

  const StatsCard = ({title, count}) => {
    return (
      <View
        style={[
          styles.statsCard,
          {
            borderColor:
              value === title ? colors.AppDefaultColor : colors.white,
          },
        ]}>
        <View>
          <Text style={styles.stats_count}>{count}</Text>
        </View>
        <View
          style={{flexDirection: 'row', width: '100%', alignItems: 'center'}}>
          <Text style={styles.stats_title}>{title}</Text>
          <Icon name={'bed'} color={colors.orange} size={40} />
        </View>
      </View>
    );
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.stats_setion}>
      {data ? (
        data.map((item, i) => (
          <Pressable key={i} onPress={() => handlePress(item.title)}>
            <StatsCard title={item.title} count={item.value} />
          </Pressable>
        ))
      ) : (
        <>
          <StatsCard title={'Total Rooms'} count={15} />
          <StatsCard title={'Total Seats'} count={42} />
          <StatsCard title={'Engaged Seats'} count={18} />
          <StatsCard title={'Vacant'} count={42 - 18} />
        </>
      )}
    </ScrollView>
  );
});
export default Render_Stats;

const styles = StyleSheet.create({
  stats_setion: {
    flexDirection: 'row',
    height: verticalScale(170),
    backgroundColor: 'transperent',
    gap: horizontalScale(12),
    alignItems: 'center',
    paddingVertical: horizontalScale(20),
  },
  statsCard: {
    width: horizontalScale(130),
    height: verticalScale(110),
    backgroundColor: colors.white,
    borderWidth: 2,
    // borderColor: colors.orange,
    borderRadius: horizontalScale(10),
    padding: horizontalScale(10),
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  stats_count: {
    fontSize: 22,
    fontWeight: '600',
    color: colors.orange,
  },
  stats_title: {
    fontSize: 12,
    color: colors.grey,
    width: '60%',
  },
});
