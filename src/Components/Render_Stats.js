import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors} from '../Utils/Colors';
import {horizontalScale, verticalScale} from '../Utils/Metrics';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Render_Stats = ({selected, setSelected, data}) => {
  // console.log('ren stats data',data);
  const StatsCard = ({selected, setSelected, title, count, name}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setSelected(name);
        }}
        style={[
          styles.statsCard,
          {
            borderColor:
              name === selected ? colors.AppDefaultColor : colors.white,
          },
        ]}>
        <View>
          <Text style={styles.stats_count}>{count}</Text>
        </View>
        <Icon name={'bed'} color={colors.black} size={30} />
        <View
          style={{
            width: '100%',
          }}>
          <Text numberOfLines={1} style={styles.stats_title}>
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.stats_setion}>
      {data ? (
        data?.map((item, i) => {
          return (
            <StatsCard
              selected={selected}
              setSelected={setSelected}
              key={i}
              title={item.title}
              count={item.value}
              name={item.name}
            />
          );
        })
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
};

export default Render_Stats;

const styles = StyleSheet.create({
  stats_setion: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    gap: horizontalScale(12),
    alignItems: 'center',
    padding: horizontalScale(20),
  },
  statsCard: {
    width: horizontalScale(130),
    height: verticalScale(100),
    backgroundColor: colors.white,
    borderWidth: 2,
    borderColor: colors.white,
    borderRadius: horizontalScale(10),
    padding: horizontalScale(10),
    justifyContent: 'center',
    alignItems: 'center',
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
    fontSize: 20,
    color: colors.orange,
  },
  stats_title: {
    fontSize: 16,
    color: colors.black,
    flexWrap: 'wrap',
    textAlign: 'center',
  },
});
