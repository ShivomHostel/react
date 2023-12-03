<<<<<<< HEAD
import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import InputCard from '../Components/cards/InputCard';
import PickerCard from '../Components/cards/PickerCard';
import {horizontalScale, moderateScale, verticalScale} from '../Utils/Metrics';
import {colors} from '../Utils/Colors';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import Choose_Image from '../Components/cards/Choose_Image';
import Header from '../Components/headers/Header';
import {err} from 'react-native-svg';

const Add_Registration_Screen = ({navigation}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isBirthDatePickerVisible, setBirthDatePickerVisibility] =
    useState(false);
  const [room, setRoom] = useState(null);
  const [seat, setSeat] = useState(null);
  const [date, setDate] = useState(moment.now());
  const [birth_Date, setBirth_Date] = useState(moment.now());
  const [blood_Group, setBlood_Group] = useState(null);
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const INITIAL_DATA = {
    formNumber: null,
    roomNumber: room,
    seatNumber: seat,
    registrationDate: moment.now(),
    candidateName: '',
    birthDate: moment.now(),
    idProof: null,
    candidatePhone: null,
    email: null,
    blood_Group: blood_Group,
    courseName: null,
    jobType: null,
    instituteName: null,
    companyName: null,
    stayDuration: null,
    healthIssue: null,
    vehicleNumber: null,
    fatherName: null,
    fatherOccupation: null,
    motherName: null,
    motherOccupation: null,
    parentsPhone1: null,
    parentsPhone2: null,
    parentsEmail: null,
    parentsAddress: null,
    state: null,
    pincode: null,
    guardianName: null,
    guardianNumber: null,
    guardianAddress: null,
  };

  const validateForm = () => {
    let errors = {};

    // Validate name field
    if (!userData.formNumber) {
      errors.formNumber = 'Form number is required.';
    }

    if (!userData.roomNumber) {
      errors.roomNumber = 'Room Number is required.';
    }

    if (!userData.seatNumber) {
      errors.seatNumber = 'Seat number is required.';
    }

    if (!userData.registrationDate) {
      errors.registrationDate = 'Registration Date is required.';
    }
    if (!userData.candidateName) {
      errors.candidateName = 'Candidate name is required.';
    }
    if (!userData.birthDate) {
      errors.birthDate = 'Birth Date is required.';
    }
    if (!userData.idProof) {
      errors.idProof = 'Identity Proof is required.';
    }
    if (!userData.candidatePhone) {
      errors.candidatePhone = 'Candidate Phone is required.';
    }
    if (!userData.email) {
      errors.email = 'Email Proof is required.';
    }
    if (!userData.blood_Group) {
      errors.blood_Group = 'Blood group is required.';
    }
    if (!userData.courseName) {
      errors.courseName = 'Course name is required.';
    }
    if (!userData.instituteName) {
      errors.instituteName = 'Institute name is required.';
    }
    if (!userData.stayDuration) {
      errors.stayDuration = 'Stay duration is required.';
    }
    if (!userData.healthIssue) {
      errors.healthIssue = 'Selection is required.';
    }
    if (!userData.vehicleNumber) {
      errors.vehicleNumber = 'Selection is required.';
    }
    if (!userData.fatherName) {
      errors.fatherName = 'Father`s name is required.';
    }
    if (!userData.fatherOccupation) {
      errors.fatherOccupation = 'Father`s occupation is required.';
    }
    if (!userData.motherName) {
      errors.motherName = 'Mother`s name is required.';
    }
    if (!userData.motherOccupation) {
      errors.motherOccupation = 'Mother`s occupation is required.';
    }
    if (!userData.parentsPhone1) {
      errors.parentsPhone1 = 'Phone number is required.';
    }
    if (!userData.parentsPhone2) {
      errors.parentsPhone2 = 'Phone number is required.';
    }
    if (!userData.parentsEmail) {
      errors.parentsEmail = 'Email is required.';
    }
    if (!userData.parentsAddress) {
      errors.parentsAddress = 'Address is required.';
    }
    if (!userData.state) {
      errors.state = 'State is required.';
    }
    if (!userData.pincode) {
      errors.pincode = 'Pincode number is required.';
    }
    if (!userData.guardianName) {
      errors.guardianName = 'Guardian name is required.';
    }
    if (!userData.guardianNumber) {
      errors.guardianNumber = 'Guardian`s number is required.';
    }
    if (!userData.guardianAddress) {
      errors.guardianAddress = 'Guardian`s Address is required.';
    }

    // Set the errors and update form validity
    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
    return errors;
  };

  const [userData, setUserData] = useState(INITIAL_DATA);

  const updateFields = fields => {
    setUserData(prev => {
      return {...prev, ...fields};
    });
  };

  const handlePress = () => {
    validateForm();
    console.log('errors: ', errors);
    console.log('UserData: ', userData);
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

  const SubmitButton = ({title, handlePress, backgroundColor}) => {
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
      <Header title={'Registration'} path={() => navigation.goBack()} />
      <ScrollView>
        <Section_Header title={'Registration Form'} />
        <View style={styles.section}>
          <InputCard
            title={'Form no'}
            value={userData.formNumber}
            updateFields={updateFields}
            name={'formNumber'}
            placeholder={'Form no'}
            keyboardType={'numeric'}
            error={errors.formNumber}
          />
          <PickerCard
            title={'Room no'}
            placeholder={'Select Room'}
            value={room}
            setValue={setRoom}
            items={[
              {value: 100, label: '100'},
              {value: 101, label: '101'},
              {value: 103, label: '103'},
            ]}
            error={errors.roomNumber}
          />
          <PickerCard
            title={'Seat no'}
            placeholder={'Select Seat'}
            value={seat}
            setValue={setSeat}
            items={[
              {value: 100, label: '100'},
              {value: 101, label: '101'},
              {value: 103, label: '103'},
            ]}
            error={errors.seatNumber}
          />
          <View style={{gap: verticalScale(10)}}>
            <Text style={{color: colors.black, fontSize: moderateScale(14)}}>
              Date
            </Text>
            <TouchableOpacity
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
            title={'Candidate Name'}
            placeholder={'Full Name'}
            value={userData.candidateName}
            name={'candidateName'}
            updateFields={updateFields}
            error={errors.candidateName}
          />
          <View style={{gap: verticalScale(10)}}>
            <Text style={{color: colors.black, fontSize: moderateScale(14)}}>
              Birth Date
            </Text>
            <TouchableOpacity
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
            title={'Aadhar/VT/Dl/Id Proof'}
            placeholder={'Aadhar/VT/Dl/Id Proof'}
            value={userData.idProof}
            name={'idProof'}
            updateFields={updateFields}
            keyboardType={'numeric'}
            error={errors.idProof}
          />
          <InputCard
            title={'Candidate Mobile Number'}
            placeholder={'Phone'}
            value={userData.candidatePhone}
            name={'candidatePhone'}
            updateFields={updateFields}
            keyboardType={'numeric'}
            error={errors.candidatePhone}
          />
          <InputCard
            title={'Email'}
            placeholder={'Email'}
            value={userData.email}
            name={'email'}
            updateFields={updateFields}
            keyboardType={'numeric'}
            error={errors.email}
          />
          <PickerCard
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
            error={errors.blood_Group}
          />
          <InputCard
            title={'Course/Job Type'}
            placeholder={'Course Details'}
            value={userData.courseName}
            name={'courseName'}
            updateFields={updateFields}
            error={errors.courseName}
          />
          <InputCard
            title={'Institute/Company Name'}
            placeholder={'Institute Name'}
            value={userData.instituteName}
            name={'instituteName'}
            updateFields={updateFields}
            error={errors.instituteName}
          />
          <InputCard
            title={'Stay Duration'}
            placeholder={'Stay Duration'}
            value={userData.stayDuration}
            name={'stayDuration'}
            updateFields={updateFields}
            error={errors.stayDuration}
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
        <Section_Header title={"PARENT'S/GUARDIAN DETAIL"} />
        <View style={styles.section}>
          <InputCard
            title={'Father Name'}
            placeholder={'Father Name'}
            value={userData.fatherName}
            name={'fatherName'}
            updateFields={updateFields}
            error={errors.fatherName}
          />
          <InputCard
            title={'Occupation'}
            placeholder={'Father Occupation'}
            value={userData.fatherOccupation}
            name={'fatherOccupation'}
            updateFields={updateFields}
            error={errors.fatherOccupation}
          />
          <InputCard
            title={'Mother Name'}
            placeholder={'Mother Name'}
            value={userData.motherName}
            name={'motherName'}
            updateFields={updateFields}
            error={errors.motherName}
          />
          <InputCard
            title={'Mother`s Occupation'}
            placeholder={'Mother Occupation'}
            value={userData.motherOccupation}
            name={'motherOccupation'}
            updateFields={updateFields}
            error={errors.motherOccupation}
          />
          <InputCard
            title={'Mobile Number'}
            placeholder={'Mobile Number'}
            value={userData.parentsPhone1}
            name={'parentsPhone1'}
            updateFields={updateFields}
            error={errors.parentsPhone1}
          />
          <InputCard
            title={'Mobile Number 2'}
            placeholder={'Mobile Number 2'}
            value={userData.parentsPhone2}
            name={'parentsPhone2'}
            updateFields={updateFields}
            error={errors.parentsPhone2}
          />
          <InputCard
            title={'Email'}
            placeholder={'Email'}
            value={userData.parentsEmail}
            name={'parentsEmail'}
            updateFields={updateFields}
            error={errors.parentsEmail}
          />
          <InputCard
            title={'Full Address'}
            placeholder={'House No, Street, Landmark,City'}
            value={userData.parentsAddress}
            name={'parentsAddress'}
            updateFields={updateFields}
            error={errors.parentsAddress}
          />
          <InputCard
            title={'State'}
            placeholder={'State'}
            value={userData.state}
            name={'state'}
            updateFields={updateFields}
            error={errors.state}
          />
          <InputCard
            title={'Pincode No'}
            placeholder={'Pincode No'}
            value={userData.pincode}
            name={'pincode'}
            updateFields={updateFields}
            error={errors.pincode}
          />
        </View>
        <Section_Header title={'GUARDIAN DETAILS'} />
        <View style={styles.section}>
          <InputCard
            title={'Guardian Name'}
            placeholder={'Guardian Name'}
            value={userData.guardianName}
            name={'guardianName'}
            updateFields={updateFields}
            error={errors.guardianName}
          />
          <InputCard
            title={'Guardian Mobile Number '}
            placeholder={'Guardian Mobile Number'}
            value={userData.guardianNumber}
            name={'guardianNumber'}
            updateFields={updateFields}
            error={errors.guardianNumber}
          />
          <InputCard
            title={'Full Address'}
            placeholder={'House No,Street,Landmark,City,State,Pincode'}
            value={userData.guardianAddress}
            name={'guardianAddress'}
            updateFields={updateFields}
            error={errors.guardianAddress}
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
          <SubmitButton title={'Review'} />
          <SubmitButton
            title={'Submit'}
            handlePress={handlePress}
            backgroundColor={'#999966'}
          />
          <SubmitButton title={'Share'} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Add_Registration_Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    padding: horizontalScale(12),
    gap: verticalScale(15),
  },
  sectionHeader: {
    height: verticalScale(50),
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#999966',
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
});
=======
import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import WebView from 'react-native-webview';
import {fontSize} from '../Utils/Size';
import {colors} from '../Utils/Colors';
import {
  height,
  horizontalScale,
  moderateScale,
  verticalScale,
  width,
} from '../Utils/Metrics';
import InputCard from '../Components/cards/InputCard';
import DropDownPicker from 'react-native-dropdown-picker';
import PickerCard from '../Components/cards/PickerCard';
import IP_Card from '../Components/cards/IP_Card';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Choose_Image from '../Components/cards/Choose_Image';
import ImageCropPicker from 'react-native-image-crop-picker';
import Main_Header from '../Components/headers/Main_Header';

const Add_Registration_Screen = ({navigation}) => {
  const [open, setOpen] = useState(false);
  const [candidate_Photo, set_Candidate_Photo] = useState(null);
  const [aadhar_front, setAadhar_front] = useState(null);
  const [aadhar_Back, setAadhar_Back] = useState(null);
  const [candidate_Sign, setCandidate_Sign] = useState(null);
  const [parent_Signature, setParent_Signature] = useState(null);

  const [blood_Group, setBlood_Group] = useState(null);
  const [blood_Group_list, setBlood_Group_list] = useState([
    {label: 'A+', name: 'A+'},
    {label: 'B+', name: 'B+'},
    {label: 'O+', name: 'O+'},
    {label: 'O-', name: 'O-'},
    {label: 'AB+', name: 'AB+'},
  ]);

  const [occupation, setOccupation] = useState(null);
  const [occupation_list, setOccupation_list] = useState([
    {label: 'Course Type', name: 'course'},
    {label: 'Job Type', name: 'job'},
  ]);
  const [company_Name, setCompany_Name] = useState(null);
  const profession_list = [
    {label: 'Institute Name', name: 'institute'},
    {label: 'Company Name', name: 'company'},
  ];

  const handlePress = setImage => {
    ImageCropPicker.openPicker({
      path: 'my-file-path.jpg',
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        setImage(image.path);
        console.log(image);
      })
      .catch(err => {
        ToastAndroid.showWithGravity('Sometheing went wrong! ' + err, 50, 100);
      });
  };

  const ButtonCard = ({title, color}) => {
    return (
      <TouchableOpacity
        style={[
          styles.btnCard,
          {backgroundColor: color ? color : colors.AppDefaultColor},
        ]}>
        <Text style={styles.labelText}>{title}</Text>
      </TouchableOpacity>
    );
  };

  const AddPhotoBtn = () => {
    return (
      <TouchableOpacity style={styles.addphotoBtn}>
        <Icon name="plus" size={15} color={colors.white} />
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Main_Header
        title={'Add Registration'}
        openDrawer={() => navigation.openDrawer()}
      />
      <View style={[styles.centerRow, {paddingVertical: verticalScale(12)}]}>
        <Text style={styles.labelText}>Registration Form</Text>
      </View>
      <View style={styles.filterSection}>
        <InputCard title={'Form no'} placeholder={'39'} />
        <InputCard title={'Room no'} />
        <InputCard title={'Seat no'} />
        <InputCard title={'Date'} />
      </View>
      <View style={[styles.centerRow, {paddingVertical: verticalScale(12)}]}>
        <Text style={styles.labelText}>PERSONAL DETAILS</Text>
      </View>
      <View style={styles.detailSection}>
        <InputCard title={'Candidate Name'} placeholder={'Candidate Name'} />
        <InputCard title={'Birth Date'} placeholder={'01/01/2002'} />
        <InputCard
          title={'Aadhar/VT/Dl/Id Proof'}
          placeholder={'Aadhar/VT/Dl/Id Proof *'}
        />
        <InputCard
          title={'Candidate Mobile Number'}
          placeholder={'Mobile Number '}
        />
        <InputCard title={'Email'} placeholder={'Email'} />
        <PickerCard
          title={'Blood Group'}
          open={open}
          value={blood_Group}
          items={blood_Group_list}
          setOpen={setOpen}
          setValue={setBlood_Group}
          setItems={setBlood_Group_list}
        />
        <IP_Card
          title={'Job/Course'}
          value={occupation}
          setValue={setOccupation}
          items={occupation_list}
          placeholder={occupation === 'job' ? 'Job Details' : 'Course Details'}
        />
        <IP_Card
          title={'Institute/Company Name'}
          value={company_Name}
          setValue={setCompany_Name}
          items={profession_list}
          placeholder={
            company_Name === 'institute' ? 'Institute Name' : 'Company Name'
          }
        />
        <InputCard
          name={'Stay Duration'}
          title={'Stay Duration'}
          placeholder={'Stay Duration'}
        />
      </View>
      <View style={[styles.centerRow, {paddingVertical: verticalScale(12)}]}>
        <Text style={styles.labelText}>PARENT'S/GUARDIAN DETAIL</Text>
      </View>
      <View style={styles.parentDetails}>
        <InputCard
          name={'Father Name'}
          title={'Father Name *'}
          placeholder={'Father Name'}
        />
        <InputCard
          name={'Occupation '}
          title={'Occupation *'}
          placeholder={'Occupation'}
        />
        <InputCard
          name={'Mother Name'}
          title={'Mother Name *'}
          placeholder={'Mother Name'}
        />
        <InputCard
          name={"Mother's Occupation"}
          title={"Mother's Occupation *"}
          placeholder={"Mother's Occupation"}
        />
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
            // marginVertical: verticalScale(10),
            // height: verticalScale(50),
          }}>
          <InputCard
            width={'49%'}
            title={'Mobile Number 1'}
            name={'mobile_number1'}
            placeholder={'Mobile Number 1'}
          />
          <InputCard
            width={'49%'}
            title={'Mobile Number 2'}
            name={'mobile_number2'}
            placeholder={'Mobile Number 2'}
          />
        </View>
        <InputCard name={'email'} title={'Email'} placeholder={'Email'} />
        <InputCard
          name={'full_address'}
          title={'Full Address *'}
          placeholder={'House No,Street,Landmark,City'}
        />
        <InputCard name={'state'} title={'State*'} placeholder={'State'} />
        <InputCard
          name={'pin_code'}
          title={'Pin No *'}
          placeholder={'Pin No'}
        />
      </View>
      <View style={[styles.centerRow, {paddingVertical: verticalScale(12)}]}>
        <Text style={styles.labelText}>GUARDIAN DETAILS</Text>
      </View>
      <View style={styles.detailSection}>
        <InputCard
          name={'guardian_name'}
          title={'Guardian Name *'}
          placeholder={'Guardian Name'}
        />
        <InputCard
          name={'guardian_contact'}
          title={'Guardian Contact Number *'}
          placeholder={'Guardian Contact Number'}
        />
        <InputCard
          name={'full_address'}
          title={'Full Addess *'}
          placeholder={'House No,Street,Landmark,City,State,Pincode'}
        />
      </View>
      <View style={[styles.centerRow, {paddingVertical: verticalScale(12)}]}>
        <Text style={styles.labelText}>DISCLAIMER</Text>
      </View>
      <View style={styles.detailSection}>
        <View style={styles.flexRow}>
          <Choose_Image
            handlePress={handlePress}
            image={candidate_Photo}
            setImage={set_Candidate_Photo}
            title={'Candidate Photo'}
          />
          <Choose_Image
            handlePress={handlePress}
            image={candidate_Sign}
            setImage={setCandidate_Sign}
            title={'Candidate Sign'}
          />
        </View>
        <View style={styles.flexRow}>
          <Choose_Image
            handlePress={handlePress}
            image={aadhar_Back}
            setImage={setAadhar_Back}
            title={'Upload Candidate Aadhar Back'}
          />
          <Choose_Image
            handlePress={handlePress}
            image={aadhar_front}
            setImage={setAadhar_front}
            title={'Upload Candidate Aadhar Front'}
          />
        </View>
        <View style={styles.flexRow}>
          <Choose_Image
            handlePress={handlePress}
            image={parent_Signature}
            setImage={setParent_Signature}
            title={'Parent/Signature Sign'}
          />
        </View>
        <View style={styles.flexRow}>
          <Text
            style={[
              styles.labelText,
              {color: colors.txtgrey, fontSize: moderateScale(12)},
            ]}>
            <TouchableOpacity
              style={{
                height: verticalScale(15),
                width: horizontalScale(15),
                backgroundColor: colors.white,
              }}></TouchableOpacity>{' '}
            I DECLARE THAT THE INFORMATION GIVEN ABOVE IS TRUE TO THE BEST OF MY
            KNOWLEDGE. I AGREE THAT IF ANY INFORMATION FURNISHED ABOVE FOUND
            INCORRECT MY ADMISSION IS LIABLE TO BE CANCELLED.
          </Text>
        </View>
        <View style={styles.flexRow}>
          <ButtonCard title={'Review'} />
          <ButtonCard title={'Submit'} color={`${colors.AppDefaultColor}75`} />
          <ButtonCard title={'Share'} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Add_Registration_Screen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  centerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#999966',
  },
  labelText: {
    fontSize: fontSize.lable,
    color: colors.white,
    lineHeight: 20,
  },
  filterSection: {
    width: '100%',
    padding: horizontalScale(20),
    gap: 10,
  },
  detailSection: {
    width: '100%',
    padding: horizontalScale(20),
    gap: 10,
  },
  parentDetails: {
    width: '100%',
    padding: horizontalScale(20),
    gap: 10, 
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  chip: {
    backgroundColor: colors.white,
    height: verticalScale(250),
    width: '45%',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 5,
    borderColor: colors.grey,
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadedimage: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  addphotoBtn: {
    height: 35,
    width: 35,
    borderRadius: 35,
    backgroundColor: colors.AppDefaultColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnCard: {
    height: verticalScale(50),
    paddingHorizontal: horizontalScale(20),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: horizontalScale(5),
    backgroundColor: colors.AppDefaultColor,
  },
});
>>>>>>> main
