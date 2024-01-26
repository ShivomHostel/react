import React, {
  memo,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from 'react';
import {
  Alert,
  Pressable,
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
import {useDispatch, useSelector} from 'react-redux';
import {
  GetFormNo,
  GetRoomsListApi,
  GetSeatsListApi,
  studentRegisterApi,
} from '../Service/slices/RegisterSlice';
import {studentRegisterThunk} from '../Service/api/thunks';
import ImagePicker from 'react-native-image-crop-picker';
// import {PickImage} from '../Hooks/useImagePicker';

const INITIAL_DATA = {
  formNumber: null,
  roomNumber: null,
  seatNumber: null,
  registrationDate: null,
  candidateName: '',
  birthDate: null,
  idProof: null,
  candidatePhone: null,
  email: null,
  blood_Group: null,
  courseName: null,
  courseDescription: 'Computer Science',
  jobDescription: '',
  instituteName: null,
  instituteDescription: 'B u Bhopal',
  companyName: null,
  companyDescription: '',
  stayDuration: null,
  healthIssue: null,
  healthDescription: '',
  vehicleNumber: null,
  vehicleDescription: '',
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
  candidateImg: null,
  aadhareFront: null,
  aadhareBack: null,
  candidateSing: null,
  parentSing: null,
};

const Add_Registration_Screen = memo(({navigation}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isBirthDatePickerVisible, setBirthDatePickerVisibility] =
    useState(false);
  const [room, setRoom] = useState('');
  const [seat, setSeat] = useState('');
  const [seatsList, setSeatsList] = useState(null);
  const [date, setDate] = useState(moment.now());
  const [birth_Date, setBirth_Date] = useState(moment.now());
  const [blood_Group, setBlood_Group] = useState(null);
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [userData, setUserData] = useState(INITIAL_DATA);
  const dispatch = useDispatch();
  const authData = useSelector(state => state.root.auth);
  const {formNumberResponse, seatsListResponse, roomsListResponse} =
    useSelector(state => state.root.registerData);
  const updateFields = useCallback(
    fields => {
      setUserData(prev => {
        return {...prev, ...fields};
      });
    },
    [userData],
  );

  // console.log('authData', authData);

  useEffect(() => {
    dispatch(GetFormNo(authData?.userData?.token));
    dispatch(GetRoomsListApi(authData?.userData?.token));
    // dispatch(GetSeatsListApi(authData.userData.token));
  }, []);

  useLayoutEffect(() => {
    updateFields({formNumber: formNumberResponse?.response?.formno});
  }, [formNumberResponse?.response?.formno]);

  // console.log('roomsListResponse', roomsListResponse);
  // console.log('roomList', roomsList);

  const getObjList = useCallback(list => {
    return list?.map(key => ({
      value: key,
      label: key,
    }));
  }, []);

  const roomsList = getObjList(roomsListResponse?.response?.rooms);
  const handleSelectRoom = useCallback(item => {
    updateFields({roomNumber: item});
    dispatch(GetSeatsListApi({roomNo: item}));
    console.log('seatsListResponse', seatsListResponse);
    const sList = getObjList(seatsListResponse?.response?.seats);
    setSeatsList(sList);
  }, []);
  const handleSelectSeat = useCallback(item => {
    updateFields({seatNumber: item});
  }, []);

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

  const handlePress = () => {

    var formdata = new FormData();
    formdata.append('formNumber', String(userData.formNumber));
    formdata.append('roomNumber', userData.roomNumber);
    formdata.append('seatNumber', String(userData.seatNumber));
    formdata.append('registrationDate',userData.registrationDate)
    formdata.append('candidateName', userData.candidateName);
    formdata.append('birthDate', userData.birthDate);
    formdata.append('idProof', userData.idProof);
    formdata.append('candidatePhone', userData.candidatePhone);
    formdata.append('email', userData.email);
    formdata.append('blood_Group', userData.blood_Group);
    formdata.append('courseName', userData.courseName);
    formdata.append('courseDescription', userData.courseDescription);
    formdata.append('jobDescription',userData.jobDescription);
    formdata.append('instituteName', userData.instituteName);
    formdata.append('instituteDescription', userData.instituteDescription);
    formdata.append('companyDescription', userData.companyDescription);
    formdata.append('stayDuration', userData.stayDuration);
    formdata.append('healthIssue', userData.healthIssue);
    formdata.append('healthDescription', userData.healthDescription);
    formdata.append('vehicleNumber', userData.vehicleNumber);
    formdata.append('vehicleDescription', userData.vehicleDescription);
    formdata.append('fatherName', userData.fatherName);
    formdata.append('fatherOccupation', userData.fatherOccupation);
    formdata.append('motherName', userData.motherName);
    formdata.append('motherOccupation',userData.motherOccupation);
    formdata.append('parentsPhone1', userData.parentsPhone1);
    formdata.append('parentsPhone2',userData.parentsPhone2);
    formdata.append('parentsEmail', userData.parentsEmail);
    formdata.append('parentsAddress', userData.parentsAddress);
    formdata.append('state', userData.state);
    formdata.append('pincode', userData.pincode);
    formdata.append('guardianName',userData.guardianName);
    formdata.append('guardianNumber', userData.guardianNumber);
    formdata.append('guardianAddress', userData.guardianAddress);
    console.log(' userData.candidateImg', userData.aadhareFront);
    formdata.append('candidateImg', {
      uri: userData.candidateImg,
      type: 'image/jpeg',
      name: 'candidateImg.jpg',
    });
    formdata.append('candidateSing', {
      uri: userData.candidateImg,
      type: 'image/jpeg',
      name: 'candidateSing.jpg',
    });
    formdata.append('aadhareFront', {
      uri: userData.candidateImg,
      type: 'image/jpeg',
      name: 'aadhareFront.jpg',
    });
    formdata.append('aadhareBack', {
      uri: userData.candidateImg,
      type: 'image/jpeg',
      name: 'aadhareBack.jpg',
    });
    formdata.append('parentSing', {
      uri: userData.candidateImg,
      type: 'image/jpeg',
      name: 'parentSing.jpg',
    });
    console.log('payload :', formdata);
    const formErrors = validateForm();
    // var myHeaders = new Headers();
    //   myHeaders.append(
    //     'Authorization',
    //     '$2y$10$LOii0fKt08PFgsOZHtuenOpSot.yaOmKAY96c2.SEZFbG3/qCo3wa',
    //   );
    //   myHeaders.append('Content-Type', 'multipart/form-data');
    //   var requestOptions = {
    //         method: 'POST',
    //         headers: myHeaders,
    //         body: formdata,
    //         redirect: 'follow',
    //       };
      
    //       fetch(
    //         'https://mystrax.com/devops/devopstest/public/api/studentRegister',
    //         requestOptions,
    //       )
    //         .then(response => response.text())
    //         .then(result => console.log('result', result))
    //         .catch(error => console.log('error', error));
        

    // if (Object.keys(formErrors).length === 0) {
    dispatch(studentRegisterApi(formdata));
    // }
    // if (validateForm()) {
    //   console.log('UserData: ', userData);
    // }
    // console.log('errors: ', errors);
  };

  // const handlePress = () => {
  //   var myHeaders = new Headers();
  //   myHeaders.append(
  //     'Authorization',
  //     '$2y$10$LOii0fKt08PFgsOZHtuenOpSot.yaOmKAY96c2.SEZFbG3/qCo3wa',
  //   );
  //   myHeaders.append('Content-Type', 'multipart/form-data');
  //   console.log(
  //     'type',
  //     typeof userData.registrationDate,
  //     userData.registrationDate,
  //   );
  //   var formdata = new FormData();
  //   formdata.append('formNumber', userData.formNumber);
  //   formdata.append('roomNumber', userData.roomNumber);
  //   formdata.append('seatNumber', userData.seatNumber);
  //   formdata.append('registrationDate', userData.registrationDate);
  //   formdata.append('candidateName', userData.candidateName);
  //   formdata.append('birthDate', userData.birthDate);
  //   formdata.append('idProof', ' 123456789012');
  //   formdata.append('candidatePhone', ' 9876543210');
  //   formdata.append('email', ' john.doe@example.com');
  //   formdata.append('blood_Group', ' A+');
  //   formdata.append('courseName', ' coursetype');
  //   formdata.append('courseDescription', ' Computer Science');
  //   formdata.append('jobDescription', '');
  //   formdata.append('instituteName', 'institute Name');
  //   formdata.append('instituteDescription', 'B u Bhopal');
  //   formdata.append('companyDescription', '');
  //   formdata.append('stayDuration', '3 month');
  //   formdata.append('healthIssue', ' no');
  //   formdata.append('healthDescription', '');
  //   formdata.append('vehicleNumber', 'no');
  //   formdata.append('vehicleDescription', '');
  //   formdata.append('fatherName', ' "John Doe Sr.",');
  //   formdata.append('fatherOccupation', ' "Engineer",');
  //   formdata.append('motherName', ' "Jane Doe",');
  //   formdata.append('motherOccupation', ' "Doctor",');
  //   formdata.append('parentsPhone1', ' 9876543210');
  //   formdata.append('parentsPhone2', ' 9876543211');
  //   formdata.append('parentsEmail', ' parents@example.com');
  //   formdata.append('parentsAddress', ' "123 Parent St, City",');
  //   formdata.append('state', ' "SomeState",');
  //   formdata.append('pincode', ' 123456');
  //   formdata.append('guardianName', ' "Guardian Doe",');
  //   formdata.append('guardianNumber', ' 9876543222');
  //   formdata.append('guardianAddress', ' "456 Guardian St, City",');
  //   console.log(' userData.candidateImg', userData.aadhareFront);
  //   formdata.append('candidateImg', {
  //     uri: userData.candidateImg,
  //     type: 'image/jpeg',
  //     name: 'candidateImg.jpg',
  //   });
  //   formdata.append('candidateSing', {
  //     uri: userData.candidateSing,
  //     type: 'image/jpeg',
  //     name: 'candidateSing.jpg',
  //   });
  //   formdata.append('aadhareFront', {
  //     uri: userData.aadhareFront,
  //     type: 'image/jpeg',
  //     name: 'aadhareFront.jpg',
  //   });
  //   formdata.append('aadhareBack', {
  //     uri: userData.aadhareBack,
  //     type: 'image/jpeg',
  //     name: 'aadhareBack.jpg',
  //   });
  //   formdata.append('parentSing', {
  //     uri: userData.parentSing,
  //     type: 'image/jpeg',
  //     name: 'parentSing.jpg',
  //   });

  //   var requestOptions = {
  //     method: 'POST',
  //     headers: myHeaders,
  //     body: formdata,
  //     redirect: 'follow',
  //   };

  //   fetch(
  //     'https://mystrax.com/devops/devopstest/public/api/studentRegister',
  //     requestOptions,
  //   )
  //     .then(response => response.text())
  //     .then(result => console.log('result', result))
  //     .catch(error => console.log('error', error));
  // };

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
            value={String(userData.formNumber)}
            updateFields={updateFields}
            name={'formNumber'}
            placeholder={'Form no'}
            keyboardType={'numeric'}
            error={errors.formNumber}
            editable={false}
          />
          <PickerCard
            title={'Room no'}
            placeholder={'Select Room'}
            value={userData.roomNumber}
            setValue={handleSelectRoom}
            items={roomsList}
            error={errors.roomNumber}
          />
          <PickerCard
            title={'Seat no'}
            placeholder={'Select Seat'}
            value={userData.seatNumber}
            setValue={handleSelectSeat}
            items={getObjList(seatsListResponse?.response?.seats)}
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
                {userData.registrationDate
                  ? moment(userData.registrationDate).format('YYYY-MM-DD')
                  : 'Select Date'}
              </Text>
              <Icon name={'calendar'} color={colors.black} size={20} />
            </TouchableOpacity>
          </View>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={date => {
              const formatDate = moment(date).format('YYYY-MM-DD');
              updateFields({registrationDate: formatDate});
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
                {userData.birthDate
                  ? moment(userData.birthDate).format('YYYY-MM-DD')
                  : 'Select Date'}
              </Text>
              <Icon name={'calendar'} color={colors.black} size={20} />
            </TouchableOpacity>
            <DateTimePickerModal
              isVisible={isBirthDatePickerVisible}
              mode="date"
              onConfirm={date => {
                const formatDate = moment(date).format('YYYY-MM-DD');
                updateFields({birthDate: formatDate});
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
            error={errors.email}
          />
          <PickerCard
            value={userData.blood_Group}
            setValue={item => {
              updateFields({blood_Group: item});
            }}
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
          <View style={{gap: verticalScale(10)}}>
            <Text style={{color: colors.black, fontSize: moderateScale(16)}}>
              Course/Job Type
            </Text>
            <View
              style={{
                flexDirection: 'row',
                gap:horizontalScale(12)
              }}>
              <View style={{flexDirection: 'row', gap: horizontalScale(10)}}>
                <TouchableOpacity
                  style={styles.checkBox}
                  onPress={() => updateFields({courseName: 'coursetype'})}>
                  {userData.courseName === 'coursetype' ? (
                    <Icon name={'check'} size={15} color={colors.black} />
                  ) : null}
                </TouchableOpacity>
                <Text style={{fontSize: moderateScale(14), color: colors.grey}}>
                  Course type
                </Text>
              </View>
              <View style={{flexDirection: 'row', gap: horizontalScale(10)}}>
                <TouchableOpacity
                  style={styles.checkBox}
                  onPress={() => updateFields({courseName: 'jobtype'})}>
                  {userData.courseName === 'jobtype' ? (
                    <Icon name={'check'} size={15} color={colors.black} />
                  ) : null}
                </TouchableOpacity>
                <Text style={{fontSize: moderateScale(14), color: colors.grey}}>
                  Job type
                </Text>
              </View>
            </View>
          </View>
          {userData.courseName === 'coursetype' ? (
            <InputCard
              title={'Course Details'}
              placeholder={'Course Details'}
              value={userData.courseDescription}
              name={'courseDescription'}
              updateFields={updateFields}
              error={errors.courseDescription}
            />
          ) : (
            <InputCard
              title={'job Details'}
              placeholder={'job Details'}
              value={userData.jobDescription}
              name={'jobDescription'}
              updateFields={updateFields}
              error={errors.jobDescription}
            />
          )}

          <View style={{gap: verticalScale(10)}}>
            <Text style={{color: colors.black, fontSize: moderateScale(16)}}>
              Institute/Company Name
            </Text>
            <View
              style={{
                flexDirection: 'row',
                gap:horizontalScale(12)
                // width: '50%',
                // justifyContent: 'space-between',
              }}>
              <View style={{flexDirection: 'row', gap: horizontalScale(10)}}>
                <TouchableOpacity
                  style={styles.checkBox}
                  onPress={() =>
                    updateFields({instituteName: 'institute Name'})
                  }>
                  {userData.instituteName === 'institute Name' ? (
                    <Icon name={'check'} size={15} color={colors.black} />
                  ) : null}
                </TouchableOpacity>
                <Text style={{fontSize: moderateScale(14), color: colors.grey}}>
                  Institute Name
                </Text>
              </View>
              <View style={{flexDirection: 'row', gap: horizontalScale(10)}}>
                <TouchableOpacity
                  style={styles.checkBox}
                  onPress={() => updateFields({instituteName: 'companyName'})}>
                  {userData.instituteName === 'companyName' ? (
                    <Icon name={'check'} size={15} color={colors.black} />
                  ) : null}
                </TouchableOpacity>
                <Text style={{fontSize: moderateScale(14), color: colors.grey}}>
                  Company Name
                </Text>
              </View>
            </View>
          </View>
          {userData.instituteName === 'companyName'?
          <InputCard
            title={'Company description'}
            placeholder={'Company description'}
            value={userData.companyDescription}
            name={'companyDescription'}
            updateFields={updateFields}
            error={errors.companyDescription}
          />:
          <InputCard
            title={'Institute description'}
            placeholder={'Institute description'}
            value={userData.instituteDescription}
            name={'instituteDescription'}
            updateFields={updateFields}
            error={errors.instituteDescription}
          />
          }
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
                  style={styles.checkBox}
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
                  style={styles.checkBox}
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
                  style={styles.checkBox}
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
                  style={styles.checkBox}
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
            <Choose_Image
              setImageUrl={image => updateFields({aadhareFront: image})}
              imageUrl={userData.aadhareFront}
              title={'Upload Candidate Aadhar Front'}
            />
            <Choose_Image
              setImageUrl={image => updateFields({aadhareBack: image})}
              imageUrl={userData.aadhareBack}
              title={'Upload Candidate Aadhar Back'}
            />
          </View>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: horizontalScale(20),
            }}>
            <Choose_Image
              imageUrl={userData.candidateSing}
              setImageUrl={image => updateFields({candidateSing: image})}
              title={'Candidate Sign'}
            />
            <Choose_Image
              imageUrl={userData.parentSing}
              setImageUrl={image => updateFields({parentSing: image})}
              title={'Parent/Signature Sign'}
            />
          </View>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: horizontalScale(20),
            }}>
            <Choose_Image
              setImageUrl={image => updateFields({candidateImg: image})}
              imageUrl={userData.candidateImg}
              title={'Candidate Photo'}
            />
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
});

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
  checkBox: {
    height: verticalScale(20),
    width: verticalScale(20),
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
