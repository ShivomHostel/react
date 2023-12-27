import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import InputCard from './cards/InputCard';

const User_Form = ({
  firstName,
  lastName,
  email,
  mobileNumber,
  alternateMobileNumber,
  updateFields,
  validateField,
  errors
}) => {
  return (
    <View style={styles.container}>
      <InputCard
        title={'FIRST NAME'}
        value={firstName}
        updateFields={updateFields}
        onBlur={()=>validateField('firstName',firstName)}
        name={'firstName'}
        placeholder={'FIRST NAME'}
        error={errors?.firstName}
      />
      <InputCard
        title={'LAST NAME'}
        value={lastName}
        updateFields={updateFields}
        onBlur={()=>validateField('lastName',lastName)}
        name={'lastName'}
        placeholder={'LAST NAME'}
        error={errors?.lastName}
      />
      <InputCard
        title={'EMAIL'}
        value={email}
        updateFields={updateFields}
        onBlur={()=>validateField('email',email)}
        name={'email'}
        placeholder={'EMAIL'}
        error={errors?.email}
        />
      <InputCard
        title={'MOBILE'}
        value={mobileNumber}
        updateFields={updateFields}
        onBlur={()=>validateField('mobileNumber',mobileNumber)}
        name={'mobileNumber'}
        placeholder={'MOBILE'}
        error={errors?.mobileNumber}
        keyboardType={'numeric'}
        maxLength={10}
        />
      <InputCard
        title={'ALTERNATE MOBILE'}
        value={alternateMobileNumber}
        updateFields={updateFields}
        onBlur={()=>validateField('alternateMobileNumber',alternateMobileNumber)}
        name={'alternateMobileNumber'}
        placeholder={'ALTERNATE MOBILE'}
        error={errors?.alternateMobileNumber}
        keyboardType={'numeric'}
        maxLength={10}
        />
    </View>
  );
};

export default User_Form;

const styles = StyleSheet.create({
  container: {
    gap: 15,
  },
});
