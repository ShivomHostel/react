import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import InputCard from './cards/InputCard';

const Account_Form = ({
  email,
  mobileNumber,
  password,
  conformPassword,
  updateFields,
  errors,
}) => {
  return (
    <View style={styles.container}>
      <InputCard
        title={'YOUR USER NAME'}
        value={email + ' ' + mobileNumber}
        name={'userName'}
        placeholder={'YOUR USER NAME'}
        editable={false}
      />
      <InputCard
        title={'PASSWORD'}
        value={password}
        updateFields={updateFields}
        onBlur={() => validateField('password', password)}
        name={'password'}
        placeholder={'PASSWORD'}
        error={errors?.password}
      />
      <InputCard
        title={'CONFIRM PASSWORD'}
        value={conformPassword}
        updateFields={updateFields}
        onBlur={() => validateField('conformPassword', conformPassword)}
        name={'conformPassword'}
        placeholder={'CONFIRM PASSWORD'}
        error={errors?.conformPassword}
      />
    </View>
  );
};

export default Account_Form;

const styles = StyleSheet.create({
  container: {
    gap: 15,
  },
});
