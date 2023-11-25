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
