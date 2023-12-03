import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import PickerCard from '../../Components/cards/PickerCard';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../Utils/Metrics';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import Choose_Image from '../../Components/cards/Choose_Image';
import InputCard from '../../Components/cards/InputCard';
import {colors} from '../../Utils/Colors';
import Header from '../../Components/headers/Header';

const Registarion_View = ({navigation}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isBirthDatePickerVisible, setBirthDatePickerVisibility] =
    useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const [room, setRoom] = useState(106);
  const [seat, setSeat] = useState(3);
  const [date, setDate] = useState(moment.now());
  const [birth_Date, setBirth_Date] = useState(moment.now());
  const [blood_Group, setBlood_Group] = useState('O+');

  const INITIAL_DATA = {
    formNumber: '56',
    roomNumber: room,
    seatNumber: seat,
    registrationDate: moment.now(),
    candidateName: 'Raj mansoori',
    birthDate: moment.now(),
    idProof: '685482844458',
    candidatePhone: '6266185413',
    email: 'raj@gmail.com',
    blood_Group: blood_Group,
    courseName: 'Bsc',
    jobType: null,
    instituteName: 'BU',
    companyName: null,
    stayDuration: '6',
    healthIssue: 'no',
    vehicleNumber: 'no',
    fatherName: 'father',
    fatherOccupation: 'Engineer',
    motherName: 'Mother',
    motherOccupation: 'House wife',
    parentsPhone1: '8768785547',
    parentsPhone2: '9987547585',
    parentsEmail: 'papa@gmail.com',
    parentsAddress: 'Hosangabad Road,bhopal',
    state: 'MP',
    pincode: '464000',
    guardianName: 'Guardian',
    guardianNumber: '8846584524',
    guardianAddress: 'Hosangabad Road,bhopal,MP,4643000',
  };

  const [userData, setUserData] = useState(INITIAL_DATA);
  console.log('field', userData);
  const updateFields = fields => {
    setUserData(prev => {
      return {...prev, ...fields};
    });
  };

  const handlePress = () => {
    setIsEditable(!isEditable);
  };

  const Section_Header = ({title}) => {
    return (
      <View style={styles.sectionHeader}>
        <Text style={{fontSize: moderateScale(16), color: colors.white}}>
          {title}
        </Text>
      </View>
    );
  };

  const SubmitButton = ({title, backgroundColor, handlePress}) => {
    return (
      <TouchableOpacity
        style={[
          styles.submitButton,
          {
            backgroundColor: backgroundColor
              ? backgroundColor
              : colors.AppDefaultColor,
          },
        ]}
        onPress={handlePress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Details'} path={() => navigation.goBack()} />
      <ScrollView style={styles.container}>
        <View style={styles.section}>
          <View style={[styles.chip, styles.shadow]}>
            <View style={{gap: verticalScale(5)}}>
              <Text style={styles.title}>Makwana Group</Text>
              <View style={styles.flexRowWithGap}>
                <View
                  style={[
                    styles.flexRowWithGap,
                    {alignItems: 'center', gap: horizontalScale(5)},
                  ]}>
                  <Icon name={'envelope'} size={12} color={colors.black} />
                  <Text style={styles.label}>raj@gmail.com</Text>
                </View>
                <View
                  style={[
                    styles.flexRowWithGap,
                    {alignItems: 'center', gap: horizontalScale(5)},
                  ]}>
                  <Icon name={'phone-volume'} size={12} color={colors.black} />
                  <Text style={styles.label}>8894548225</Text>
                </View>
              </View>
              <View
                style={[
                  styles.flexRowWithGap,
                  {alignItems: 'center', gap: horizontalScale(5)},
                ]}>
                <Icon name={'house'} size={12} color={colors.black} />
                <Text numberOfLines={1} style={styles.label}>
                  Puspa Nager Bhopal,Bhopal,Madhya Pradesh,India,462010
                </Text>
              </View>
            </View>
            <View style={styles.right}>
              <Image
                source={require('../../Assets/Photos/logo.png')}
                style={{
                  height: verticalScale(60),
                  width: horizontalScale(90),
                  resizeMode: 'contain',
                }}
              />
            </View>
          </View>
        </View>
        <View style={styles.section}>
          <InputCard
            editable={isEditable}
            title={'Form no'}
            value={userData.formNumber}
            updateFields={updateFields}
            name={'formNumber'}
            placeholder={'Form no'}
            keyboardType={'numeric'}
          />
          <PickerCard
            editable={isEditable}
            title={'Room no'}
            placeholder={'Select Room'}
            value={room}
            setValue={setRoom}
            items={[
              {value: 100, label: '100'},
              {value: 101, label: '101'},
              {value: 103, label: '103'},
            ]}
          />
          <PickerCard
            editable={isEditable}
            title={'Seat no'}
            placeholder={'Select Seat'}
            value={seat}
            setValue={setSeat}
            items={[
              {value: 100, label: '100'},
              {value: 101, label: '101'},
              {value: 103, label: '103'},
            ]}
          />
          <View style={{gap: verticalScale(10)}}>
            <Text style={{color: colors.black, fontSize: moderateScale(14)}}>
              Date
            </Text>
            <TouchableOpacity
              disabled={!isEditable}
              onPress={() => setDatePickerVisibility(true)}
              style={{
                height: verticalScale(50),
                width: '100%',
                borderRadius: horizontalScale(4),
                backgroundColor: colors.white,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: horizontalScale(12),
              }}>
              <Text style={{fontSize: moderateScale(12), color: colors.grey}}>
                {moment(userData.registrationDate).format('DD-MM-YYYY')}
              </Text>
              <Icon name={'calendar'} color={colors.black} size={20} />
            </TouchableOpacity>
          </View>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={date => {
              updateFields({registrationDate: date});
              setDatePickerVisibility(false);
            }}
            onCancel={() => setDatePickerVisibility(false)}
          />
        </View>
        <Section_Header title={'Personal Details'} />
        <View style={styles.section}>
          <InputCard
            editable={isEditable}
            title={'Candidate Name'}
            placeholder={'Full Name'}
            value={userData.candidateName}
            name={'candidateName'}
            updateFields={updateFields}
          />
          <View style={{gap: verticalScale(10)}}>
            <Text style={{color: colors.black, fontSize: moderateScale(14)}}>
              Birth Date
            </Text>
            <TouchableOpacity
              disabled={!isEditable}
              onPress={() => setBirthDatePickerVisibility(true)}
              style={{
                height: verticalScale(50),
                width: '100%',
                borderRadius: horizontalScale(4),
                backgroundColor: colors.white,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: horizontalScale(12),
              }}>
              <Text style={{fontSize: moderateScale(12), color: colors.grey}}>
                {moment(userData.birthDate).format('DD-MM-YYYY')}
              </Text>
              <Icon name={'calendar'} color={colors.black} size={20} />
            </TouchableOpacity>
            <DateTimePickerModal
              isVisible={isBirthDatePickerVisible}
              mode="date"
              onConfirm={date => {
                updateFields({birthDate: date});
                setBirthDatePickerVisibility(false);
              }}
              onCancel={() => setBirthDatePickerVisibility(false)}
            />
          </View>
          <InputCard
            editable={isEditable}
            title={'Aadhar/VT/Dl/Id Proof'}
            placeholder={'Aadhar/VT/Dl/Id Proof'}
            value={userData.idProof}
            name={'idProof'}
            updateFields={updateFields}
            keyboardType={'numeric'}
          />
          <InputCard
            editable={isEditable}
            title={'Candidate Mobile Number'}
            placeholder={'Phone'}
            value={userData.candidatePhone}
            name={'candidatePhone'}
            updateFields={updateFields}
            keyboardType={'numeric'}
          />
          <InputCard
            editable={isEditable}
            title={'Email'}
            placeholder={'Email'}
            value={userData.email}
            name={'email'}
            updateFields={updateFields}
            keyboardType={'numeric'}
          />
          <PickerCard
            editable={isEditable}
            value={blood_Group}
            setValue={setBlood_Group}
            placeholder={'Select'}
            title={'Blood Group'}
            items={[
              {value: 'A+', label: 'A+'},
              {value: 'B+', label: 'B+'},
              {value: 'AB+', label: 'AB+'},
              {value: 'O+', label: 'O+'},
            ]}
          />
          <InputCard
            editable={isEditable}
            title={'Course/Job Type'}
            placeholder={'Course Details'}
            value={userData.courseName}
            name={'courseName'}
            updateFields={updateFields}
          />
          <InputCard
            editable={isEditable}
            title={'Institute/Company Name'}
            placeholder={'Institute Name'}
            value={userData.instituteName}
            name={'instituteName'}
            updateFields={updateFields}
          />
          <InputCard
            editable={isEditable}
            title={'Stay Duration'}
            placeholder={'Stay Duration'}
            value={userData.stayDuration}
            name={'stayDuration'}
            updateFields={updateFields}
          />
          <View style={{gap: verticalScale(10)}}>
            <Text style={{color: colors.black, fontSize: moderateScale(16)}}>
              Any Health Issue (If you have not then No)
            </Text>
            <View
              style={{
                flexDirection: 'row',
                width: '50%',
                justifyContent: 'space-between',
              }}>
              <View style={{flexDirection: 'row', gap: horizontalScale(10)}}>
                <TouchableOpacity
                  style={{
                    height: verticalScale(20),
                    width: verticalScale(20),
                    backgroundColor: colors.white,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={() => updateFields({healthIssue: 'yes'})}>
                  {userData.healthIssue === 'yes' ? (
                    <Icon name={'check'} size={15} color={colors.black} />
                  ) : null}
                </TouchableOpacity>
                <Text style={{fontSize: moderateScale(14), color: colors.grey}}>
                  Yes
                </Text>
              </View>
              <View style={{flexDirection: 'row', gap: horizontalScale(10)}}>
                <TouchableOpacity
                  style={{
                    height: verticalScale(20),
                    width: verticalScale(20),
                    backgroundColor: colors.white,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={() => updateFields({healthIssue: 'no'})}>
                  {userData.healthIssue === 'no' ? (
                    <Icon name={'check'} size={15} color={colors.black} />
                  ) : null}
                </TouchableOpacity>
                <Text style={{fontSize: moderateScale(14), color: colors.grey}}>
                  No
                </Text>
              </View>
            </View>
          </View>
          <View style={{gap: verticalScale(10)}}>
            <Text style={{color: colors.black, fontSize: moderateScale(16)}}>
              Vehicle Number(If you have not then No)
            </Text>
            <View
              style={{
                flexDirection: 'row',
                width: '50%',
                justifyContent: 'space-between',
              }}>
              <View style={{flexDirection: 'row', gap: horizontalScale(10)}}>
                <TouchableOpacity
                  style={{
                    height: verticalScale(20),
                    width: verticalScale(20),
                    backgroundColor: colors.white,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={() => updateFields({vehicleNumber: 'yes'})}>
                  {userData.vehicleNumber === 'yes' ? (
                    <Icon name={'check'} size={15} color={colors.black} />
                  ) : null}
                </TouchableOpacity>
                <Text style={{fontSize: moderateScale(14), color: colors.grey}}>
                  Yes
                </Text>
              </View>
              <View style={{flexDirection: 'row', gap: horizontalScale(10)}}>
                <TouchableOpacity
                  style={{
                    height: verticalScale(20),
                    width: verticalScale(20),
                    backgroundColor: colors.white,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={() => updateFields({vehicleNumber: 'no'})}>
                  {userData.vehicleNumber === 'no' ? (
                    <Icon name={'check'} size={15} color={colors.black} />
                  ) : null}
                </TouchableOpacity>
                <Text style={{fontSize: moderateScale(14), color: colors.grey}}>
                  No
                </Text>
              </View>
            </View>
          </View>
        </View>
        <Section_Header title={"Parent's/Guardian Details"} />
        <View style={styles.section}>
          <InputCard
            editable={isEditable}
            title={'Father Name'}
            placeholder={'Father Name'}
            value={userData.fatherName}
            name={'fatherName'}
            updateFields={updateFields}
          />
          <InputCard
            editable={isEditable}
            title={'Occupation'}
            placeholder={'Father Occupation'}
            value={userData.fatherOccupation}
            name={'fatherOccupation'}
            updateFields={updateFields}
          />
          <InputCard
            editable={isEditable}
            title={'Mother Name'}
            placeholder={'Mother Name'}
            value={userData.motherName}
            name={'motherName'}
            updateFields={updateFields}
          />
          <InputCard
            editable={isEditable}
            title={'Mother`s Occupation'}
            placeholder={'Mother Occupation'}
            value={userData.motherOccupation}
            name={'motherOccupation'}
            updateFields={updateFields}
          />
          <InputCard
            editable={isEditable}
            title={'Mobile Number'}
            placeholder={'Mobile Number'}
            value={userData.parentsPhone1}
            name={'parentsPhone1'}
            updateFields={updateFields}
          />
          <InputCard
            editable={isEditable}
            title={'Mobile Number 2'}
            placeholder={'Mobile Number 2'}
            value={userData.parentsPhone2}
            name={'parentsPhone2'}
            updateFields={updateFields}
          />
          <InputCard
            editable={isEditable}
            title={'Email'}
            placeholder={'Email'}
            value={userData.parentsEmail}
            name={'parentsEmail'}
            updateFields={updateFields}
          />
          <InputCard
            editable={isEditable}
            title={'Full Address'}
            placeholder={'House No, Street, Landmark,City'}
            value={userData.parentsAddress}
            name={'parentsAddress'}
            updateFields={updateFields}
          />
          <InputCard
            editable={isEditable}
            title={'State'}
            placeholder={'State'}
            value={userData.state}
            name={'state'}
            updateFields={updateFields}
          />
          <InputCard
            editable={isEditable}
            title={'Pincode No'}
            placeholder={'Pincode No'}
            value={userData.pincode}
            name={'pincode'}
            updateFields={updateFields}
          />
        </View>
        <Section_Header title={'GUARDIAN DETAILS'} />
        <View style={styles.section}>
          <InputCard
            editable={isEditable}
            title={'Guardian Name'}
            placeholder={'Guardian Name'}
            value={userData.guardianName}
            name={'guardianName'}
            updateFields={updateFields}
          />
          <InputCard
            editable={isEditable}
            title={'Guardian Mobile Number '}
            placeholder={'Guardian Mobile Number'}
            value={userData.guardianNumber}
            name={'guardianNumber'}
            updateFields={updateFields}
          />
          <InputCard
            editable={isEditable}
            title={'Full Address'}
            placeholder={'House No,Street,Landmark,City,State,Pincode'}
            value={userData.guardianAddress}
            name={'guardianAddress'}
            updateFields={updateFields}
          />
        </View>
        <Section_Header title={'DISCLAIMER'} />

        <View style={styles.section}>
          <View style={{flexDirection: 'row', gap: horizontalScale(10)}}>
            <TouchableOpacity
              style={{
                marginTop: verticalScale(4),
                height: verticalScale(20),
                width: verticalScale(20),
                backgroundColor: colors.white,
              }}>
              {}
            </TouchableOpacity>
            <Text>
              I DECLARE THAT THE INFORMATION GIVEN ABOVE IS TRUE TO THE BEST OF
              MY KNOWLEDGE. I AGREE THAT IF ANY INFORMATION FURNISHED ABOVE
              FOUND INCORRECT MY ADMISSION IS LIABLE TO BE CANCELLED.
            </Text>
          </View>

          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: horizontalScale(20),
            }}>
            <Choose_Image title={'Upload Candidate Aadhar Front'} />
            <Choose_Image title={'Upload Candidate Aadhar Back'} />
          </View>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: horizontalScale(20),
            }}>
            <Choose_Image title={'Candidate Sign'} />
            <Choose_Image title={'Parent/Signature Sign'} />
          </View>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: horizontalScale(20),
            }}>
            <Choose_Image title={'Candidate Photo'} />
          </View>
        </View>
        <View
          style={[
            styles.section,
            {flexDirection: 'row', justifyContent: 'center'},
          ]}>
          <SubmitButton title={'Download'} />
          <SubmitButton
            title={'Edit'}
            handlePress={handlePress}
            backgroundColor={'#999966'}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Registarion_View;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    padding: horizontalScale(12),
    gap: verticalScale(12),
  },
  sectionHeader: {
    height: verticalScale(50),
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#4c4747',
  },
  submitButton: {
    height: verticalScale(40),
    paddingHorizontal: horizontalScale(12),
    backgroundColor: colors.AppDefaultColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: horizontalScale(4),
  },
  buttonText: {
    color: colors.white,
    fontSize: moderateScale(14),
  },
  chip: {
    height: verticalScale(120),
    width: '100%',
    borderRadius: horizontalScale(10),
    backgroundColor: colors.white,
    padding: horizontalScale(12),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  flexRowWithGap: {
    flexDirection: 'row',
    gap: horizontalScale(10),
  },
  title: {
    fontSize: moderateScale(22),
    color: colors.black,
  },
  label: {
    fontSize: moderateScale(14),
    color: colors.black,
  },
  right: {
    height: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});
