import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  FlatList,
  StatusBar,
  LogBox,
} from 'react-native';
import React, {useEffect} from 'react';
import {colors} from '../../Utils/Colors';
import {horizontalScale, verticalScale, width} from '../../Utils/Metrics';
import Main_Header from '../../Components/headers/Main_Header';
import TopSectionCard from '../../Components/cards/TopSectionCard';
import Icon from 'react-native-vector-icons/FontAwesome6';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  BarChart,
  CurveType,
  LineChart,
  PieChart,
} from 'react-native-gifted-charts';

const Dashboard_Screen = ({navigation}) => {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  const expenses_data = [
    {
      value: 2500,
      frontColor: colors.purple,
      gradientColor: colors.purple,
      spacing: 6,
      label: 'Jan',
    },
    {
      value: 2400,
      frontColor: colors.orange,
      gradientColor: colors.orange + 'aa',
    },

    {
      value: 3500,
      frontColor: colors.purple,
      gradientColor: colors.purple,
      spacing: 6,
      label: 'Feb',
    },
    {
      value: 3000,
      frontColor: colors.orange,
      gradientColor: colors.orange + 'aa',
    },

    {
      value: 4500,
      frontColor: colors.purple,
      gradientColor: colors.purple,
      spacing: 6,
      label: 'Mar',
    },
    {
      value: 4000,
      frontColor: colors.orange,
      gradientColor: colors.orange + 'aa',
    },

    {
      value: 5200,
      frontColor: colors.purple,
      gradientColor: colors.purple,
      spacing: 6,
      label: 'Apr',
    },
    {
      value: 4900,
      frontColor: colors.orange,
      gradientColor: colors.orange + 'aa',
    },

    {
      value: 3000,
      frontColor: colors.purple,
      gradientColor: colors.purple,
      spacing: 6,
      label: 'May',
    },
    {
      value: 2800,
      frontColor: colors.orange,
      gradientColor: colors.orange + 'aa',
    },
    {
      value: 4000,
      frontColor: colors.purple,
      gradientColor: colors.purple,
      spacing: 6,
      label: 'June',
    },
    {
      value: 5800,
      frontColor: colors.orange,
      gradientColor: colors.orange + 'aa',
    },
    {
      value: 6000,
      frontColor: colors.purple,
      gradientColor: colors.purple,
      spacing: 6,
      label: 'July',
    },
    {
      value: 3600,
      frontColor: colors.orange,
      gradientColor: colors.orange + 'aa',
    },
    {
      value: 8000,
      frontColor: colors.purple,
      gradientColor: colors.purple,
      spacing: 6,
      label: 'Aug',
    },
    {
      value: 4800,
      frontColor: colors.orange,
      gradientColor: colors.orange + 'aa',
    },
  ];
  const Chip = () => {
    return (
      <View style={styles.chip}>
        <Text style={styles.chip_text}>Attendance</Text>
      </View>
    );
  };
  const barData = [
    {
      value: 40,
      label: 'Jan',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: {color: 'gray'},
      frontColor: '#177AD5',
    },
    {value: 20, frontColor: colors.orange},
    {
      value: 50,
      label: 'Feb',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: {color: 'gray'},
      frontColor: '#177AD5',
    },
    {value: 40, frontColor: colors.orange},
    {
      value: 75,
      label: 'Mar',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: {color: 'gray'},
      frontColor: '#177AD5',
    },
    {value: 25, frontColor: colors.orange},
    {
      value: 30,
      label: 'Apr',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: {color: 'gray'},
      frontColor: '#177AD5',
    },
    {value: 20, frontColor: colors.orange},
    {
      value: 60,
      label: 'May',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: {color: 'gray'},
      frontColor: '#177AD5',
    },
    {value: 40, frontColor: colors.orange},
    {
      value: 65,
      label: 'Jun',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: {color: 'gray'},
      frontColor: '#177AD5',
    },
    {value: 30, frontColor: colors.orange},
    {
      value: 65,
      label: 'Jun',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: {color: 'gray'},
      frontColor: '#177AD5',
    },
    {value: 30, frontColor: colors.orange},
  ];

  const Sell_Data = [
    {value: 78950, label: 'Jan', frontColor: colors.orange},
    {value: 55000, label: 'Feb', frontColor: colors.orange},
    {value: 98500, label: 'Mar', frontColor: colors.orange},
    {value: 98000, label: 'Apr', frontColor: colors.orange},
    {value: 400000, label: 'May', frontColor: colors.orange},
  ];
  const expenses = [
    {value: 7800, label: 'Jan', frontColor: colors.purple},
    {value: 10080, label: 'Feb', frontColor: colors.purple},
    {value: 11800, label: 'Mar', frontColor: colors.purple},
    {value: 98000, label: 'Apr', frontColor: colors.purple},
    {value: 50000, label: 'May', frontColor: colors.purple},
  ];

  const pieData = [
    {value: 54, color: '#66ff66', text: '54%', label: 'Electricity bill'},
    {value: 40, color: '#6666ff', text: '40%', label: 'Dairy'},
    {value: 20, color: '#99ccff', text: '20%', label: 'Grosary'},
  ];

  const lineData = [
    {value: 0, label: 'Jan'},
    {value: 20000, label: 'Feb'},
    {value: 60050, label: 'Mar'},
    {value: 10500, label: 'Apr'},
    {value: 30500, label: 'May'},
    {value: 60500, label: 'Jun'},
    {value: 9500, label: 'Jul'},
    {value: 87005, label: 'Aug'},
  ];

  const render_Top_Section = () => {
    return (
      <ScrollView
        nestedScrollEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scroll_section}>
        <TopSectionCard />
        <TopSectionCard />
        <TopSectionCard />
        <TopSectionCard />
      </ScrollView>
    );
  };

  const render_Chip_Section = () => {
    return (
      <ScrollView
        horizontal
        nestedScrollEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scroll_section}>
        <Chip />
        <Chip />
        <Chip />
        <Chip />
        <Chip />
        <Chip />
        <Chip />
      </ScrollView>
    );
  };

  const render_SalesContent = () => {
    return (
      <View style={styles.card}>
        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
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
        <View style={{height: '75%'}}>
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
                    <MaterialCommunityIcons name={'eye'} size={15} color={colors.black} />
                  </View>
                </View>
              );
            }}
            keyExtractor={(item, i) => i}
          />
        </View>
      </View>
    );
  };

  const render_Complaint_Section = () => {
    const renderDot = color => {
      return (
        <View
          style={{
            height: 10,
            width: 10,
            backgroundColor: color,
            marginRight: 10,
          }}
        />
      );
    };
    return (
      <View style={{alignItems: 'center'}}>
        <Card title={'Complaint Board'}>
          <View
            style={{
              flex: 1,
              justifyContent: 'space-evenly',
              paddingVertical: verticalScale(20),
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              {renderDot('#0dcaf0')}
              <Text
                style={{
                  height: 16,
                  color: 'lightgray',
                }}>
                Month on Month Complaint
              </Text>
            </View>
          </View>
          <BarChart
            showFractionalValue
            showYAxisIndices
            noOfSections={5}
            maxValue={100000}
            data={expenses}
            isAnimated
            frontColor={'#0dcaf0'}
          />

          <PieChart
            data={pieData}
            donut
            showGradient
            sectionAutoFocus
            radius={130}
            showText
            textColor="#fff"
            text
            innerRadius={60}
            innerCircleColor={'#fff'}
          />
        </Card>
      </View>
    );
  };

  const render_Bussiness_Performance = () => {
    return (
      <View style={{alignItems: 'center'}}>
        <Card title={'Bussness Performance'}>
          <LineChart
            initialSpacing={20}
            data={lineData}
            spacing={30}
            hideDataPoints
            thickness={3}
            noOfSections={5}
            hideRules
            maxValue={100000}
            yAxisColor="#0dcaf0"
            xAxisColor="#0dcaf0"
            color="#0dcaf0"
            curved
            curvature={0.2}
            curveType={CurveType.CUBIC}
            width={horizontalScale(265)}
          />
        </Card>
      </View>
    );
  };

  const Card = ({children, title}) => {
    return (
      <View style={[styles.card, {height: 'auto'}]}>
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            paddingHorizontal: verticalScale(10),
          }}>
          <Text style={[styles.bussiness_title, {fontSize: 16}]}>{title}</Text>
        </View>
        {children}
      </View>
    );
  };

  const Bussiness_Card = ({title, icon, amount}) => {
    return (
      <View
        style={[
          styles.card,
          {
            width: '24%',
            padding: 5,
            height: verticalScale(80),
            justifyContent: 'center',
            gap: 10,
            alignItems: 'center',
          },
        ]}>
        <View
          style={{
            flexDirection: 'row',
            gap: horizontalScale(2),
            justifyContent: 'center',
          }}>
          <MaterialCommunityIcons name={icon} color={colors.orange} size={18} />
          <Text style={[styles.list_title, {fontSize: 12}]}>{title}</Text>
        </View>
        <Text numberOfLines={1} style={[styles.list_title, {flexWrap: 'wrap'}]}>
          ₹ {amount}
        </Text>
      </View>
    );
  };

  const Bussiness_Section = () => {
    return (
      <>
        <View style={styles.bussiness_section}>
          <Text style={styles.bussiness_title}>Bussiness Dashboard</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Bussiness_Card title="Sale" icon={'receipt'} amount={228546} />
          <Bussiness_Card
            title="Expenses"
            icon={'currency-usd'}
            amount={784252}
          />
          <Bussiness_Card
            title="Gross Loss"
            icon={'chevron-double-down'}
            amount={55955}
          />
          <Bussiness_Card
            title="Net Loss"
            icon={'trending-down'}
            amount={658152}
          />
        </View>
      </>
    );
  };

  return (
    <SafeAreaView style={styles.conatainer}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#555555'} />
      <Main_Header title={'Home'} openDrawer={() => navigation.openDrawer()} />
      <ScrollView
        nestedScrollEnabled
        contentContainerStyle={styles.wrapper}>
        {render_Top_Section()}
        {render_Chip_Section()}
        {render_SalesContent()}
        {/* <View style={[styles.card]}>
          <BarChart
            barWidth={8}
            spacing={24}
            roundedTop
            hideRules
            xAxisThickness={1}
            yAxisThickness={1}
            yAxisTextStyle={{color: 'gray'}}
            maxValue={100}
            data={barData}
            isAnimated
            height={verticalScale(200)}
            width={horizontalScale(265)}
          />
        </View> */}

        {Bussiness_Section()}

        <Card title={'Profit & Loss'}>
          <View
            style={{
              flex: 1,
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              gap: 5,
              paddingVertical: verticalScale(20),
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View
                style={{
                  height: 12,
                  width: 12,
                  backgroundColor: colors.purple,
                  marginRight: 8,
                }}
              />
              <Text
                style={{
                  width: 60,
                  height: 16,
                  color: 'lightgray',
                }}>
                Expenses
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View
                style={{
                  height: 12,
                  width: 12,
                  backgroundColor: colors.orange,
                  marginRight: 8,
                }}
              />
              <Text
                style={{
                  width: 60,
                  height: 16,
                  color: 'lightgray',
                }}>
                Sales
              </Text>
            </View>
          </View>
          <BarChart
            data={expenses_data}
            barWidth={16}
            initialSpacing={10}
            spacing={14}
            barBorderRadius={4}
            showGradient
            yAxisThickness={0}
            xAxisType={'dashed'}
            xAxisColor={'lightgray'}
            yAxisTextStyle={{color: 'lightgray'}}
            stepValue={1000}
            maxValue={10000}
            noOfSections={6}
            yAxisLabelTexts={['0', '1k', '2k', '3k', '4k', '5k', '6k']}
            labelWidth={40}
            xAxisLabelTextStyle={{color: 'lightgray', textAlign: 'center'}}
            isAnimated
            height={verticalScale(200)}
            width={horizontalScale(265)}
            onPress={(item, index) => console.log('item', item)}
            renderTooltip={(item, index) => {
              return (
                <View
                  style={{
                    marginBottom: 5,
                    marginLeft: 0,
                    backgroundColor: colors.black,
                    paddingHorizontal: 6,
                    paddingVertical: 4,
                    borderRadius: 4,
                  }}>
                  <Text style={{color: colors.white}}>{item.value}</Text>
                </View>
              );
            }}
          />
          <View
            style={{
              width: '100%',
              borderTopWidth: 1,
              borderTopColor: colors.lightygrey,
              alignItems: 'center',
              paddingVertical: verticalScale(10),
            }}>
            <Text style={[styles.bussiness_title, {fontSize: 16}]}>
              {'Sell'}
            </Text>
          </View>
          <BarChart
            showFractionalValue
            showYAxisIndices
            noOfSections={5}
            maxValue={400000}
            data={Sell_Data}
            isAnimated
          />
          <View
            style={{
              width: '100%',
              borderTopWidth: 1,
              borderTopColor: colors.lightygrey,
              alignItems: 'center',
              paddingVertical: verticalScale(20),
            }}>
            <Text style={[styles.bussiness_title, {fontSize: 16}]}>
              {'Month on Expenses'}
            </Text>
          </View>
          <BarChart
            showFractionalValue
            showYAxisIndices
            noOfSections={5}
            maxValue={100000}
            data={expenses}
            isAnimated
          />
        </Card>
        {/* Expenses section end */}

        <Card title={'Expenses Category'}>
          <View style={{alignItems: 'center'}}>
            <PieChart
              data={pieData}
              showText
              textColor="white"
              radius={horizontalScale(130)}
              textSize={15}
              focusOnPress
              textBackgroundRadius={26}
            />
          </View>
        </Card>
        {render_Complaint_Section()}
        {render_Bussiness_Performance()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard_Screen;

const styles = StyleSheet.create({
  conatainer: {
    // flex: 1,
    display: 'flex',
  },
  wrapper: {
    width: width,
    paddingHorizontal: horizontalScale(12),
    paddingBottom: verticalScale(100),
    gap: verticalScale(20),
  },
  scroll_section: {
    paddingVertical: verticalScale(10),
    gap: 10,
  },
  chip: {
    paddingHorizontal: 20,
    height: 35,
    backgroundColor: colors.white,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chip_text: {
    fontSize: 14,
    color: colors.orange,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  card: {
    width: '100%',
    height: verticalScale(280),
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    backgroundColor: colors.white,
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
  },
  bussiness_section: {
    width: '100%',
    height: verticalScale(50),
    borderRadius: 10,
    // padding: 20,
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
});
