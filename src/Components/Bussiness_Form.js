import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import InputCard from './cards/InputCard';

const Bussiness_Form = ({
  businesType,
  gstNumber,
  businessName,
  city,
  state,
  country,
  pincode,
  address,
  updateFields,
  validateField,
  errors,
}) => {
  return (
    <View style={styles.container}>
      <InputCard
        title={'BUSINESS TYPE'}
        value={businesType}
        updateFields={updateFields}
        onBlur={() => validateField('businesType', businesType)}
        name={'businesType'}
        placeholder={'BUSINESS TYPE'}
        error={errors?.businesType}
      />
      <InputCard
        title={'BUSINESS NAME'}
        value={businessName}
        updateFields={updateFields}
        onBlur={() => validateField('businessName', businessName)}
        name={'businessName'}
        placeholder={'BUSINESS NAME'}
        error={errors?.businessName}
      />
      <InputCard
        title={'GST NO'}
        value={gstNumber}
        updateFields={updateFields}
        name={'gstNumber'}
        placeholder={'GST NO'}
      />
      <InputCard
        title={'CITY'}
        value={city}
        updateFields={updateFields}
        onBlur={() => validateField('city', city)}
        name={'city'}
        placeholder={'CITY'}
        error={errors?.city}
      />
      <InputCard
        title={'STATE'}
        value={state}
        updateFields={updateFields}
        onBlur={() => validateField('state', state)}
        name={'state'}
        placeholder={'STATE'}
        error={errors?.state}
      />
      <InputCard
        title={'COUNTRY'}
        value={country}
        updateFields={updateFields}
        onBlur={() => validateField('country', country)}
        name={'country'}
        placeholder={'COUNTRY'}
        error={errors?.country}
      />
      <InputCard
        title={'PIN CODE'}
        value={pincode}
        updateFields={updateFields}
        onBlur={() => validateField('pincode', pincode)}
        name={'pincode'}
        placeholder={'PIN CODE'}
        error={errors?.pincode}
      />
      <InputCard
        title={'ADDRESS'}
        value={address}
        updateFields={updateFields}
        onBlur={() => validateField('address', address)}
        name={'address'}
        placeholder={'ADDRESS'}
        error={errors?.address}
      />
    </View>
  );
};

export default Bussiness_Form;

const styles = StyleSheet.create({
  container: {
    gap: 15,
  },
});
