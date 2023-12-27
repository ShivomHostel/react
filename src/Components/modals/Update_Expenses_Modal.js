import {
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  TextInput,
  ToastAndroid,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {
  height,
  horizontalScale,
  moderateScale,
  verticalScale,
  width,
} from '../../Utils/Metrics';
import {colors} from '../../Utils/Colors';
import InputCard from '../cards/InputCard';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {
  createExpensesCategoryThunkAPI,
  handleExpensesDetailseThunkAPI,
  updateExpenseCategoryThunkAPI,
} from '../../Service/api/thunks';
import {useDispatch} from 'react-redux';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {Formik} from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  category_name: Yup.string().required('Category is required'),
});

const Update_Expenses_Modal = ({
  bottomSheetRef,
  snapPoints,
  handleSheetChanges,
  Data,
}) => {
  const INITIAL_DATA = {
    category_id: Data?.category_id,
    category_name: Data?.category_name,
  };
  const [categoryData, setCategoryData] = useState(INITIAL_DATA);
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const dispatch = useDispatch();
  const updateFields = useCallback(fields => {
    setCategoryData(prev => {
      return {...prev, ...fields};
    });
  }, []);

  const validateForm = () => {
    let errors = {};

    // Validate name field
    if (!categoryData.category_name) {
      errors.category_name = 'Category Name is required.';
    }
    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
    return errors;
  };

  const handleSubmit = values => {
    dispatch(updateExpenseCategoryThunkAPI(values))
      .then(res => {
        if (res?.payload?.status === true) {
            ToastAndroid.show(res?.payload?.message, 5000, 50);
          setCategoryData(INITIAL_DATA);
          bottomSheetRef?.current?.dismiss();
          dispatch(handleExpensesDetailseThunkAPI());
        } else {
            ToastAndroid.showWithGravityAndOffset(
              res?.payload?.error,
              ToastAndroid.LONG,
              ToastAndroid.TOP,
              25, // X offset
              50, // Y offset
            );
        }
      })
      .catch(err => {
        ToastAndroid.show('Something went wrong!' + err, 5000);
      });
  };
  return (
    <BottomSheetModal
      ref={bottomSheetRef}
      index={1}
      snapPoints={snapPoints}
      // onChange={handleSheetChanges}
    >
      <View style={styles.modalContainer}>
        <Text style={styles.title}>Add Category</Text>
        <View style={styles.content}>
          <Formik
            initialValues={INITIAL_DATA}
            validationSchema={validationSchema}
            onSubmit={values => handleSubmit(values)}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              setValues,
              errors,
            }) => (
              <>
                <View
                  style={{
                    width: '100%',
                    height: verticalScale(50),
                    borderWidth: 1,
                    borderColor: colors.grey,
                    borderRadius: horizontalScale(10),
                    paddingHorizontal: horizontalScale(12),
                  }}>
                  <TextInput
                    placeholder="Category name"
                    placeholderTextColor={colors.grey}
                    value={values.category_name}
                    onChangeText={handleChange('category_name')}
                  />
                </View>
                {errors?.category_name && (
                  <Text style={styles.error}>{errors?.category_name} </Text>
                )}
                <TouchableOpacity
                  style={[styles.button]}
                  onPress={() => handleSubmit()}>
                  <Text
                    style={{color: colors.white, fontSize: moderateScale(14)}}>
                    Update
                  </Text>
                </TouchableOpacity>
              </>
            )}
          </Formik>
        </View>
      </View>
    </BottomSheetModal>
  );
};

export default Update_Expenses_Modal;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: horizontalScale(20),
    backgroundColor: '#000000aa',
    position: 'absolute',
  },
  modalContainer: {
    // height: height / 2,
    width: '95%',
    borderRadius: horizontalScale(10),
    backgroundColor: colors.white,
    alignSelf: 'center',
    top: verticalScale(200),
    padding: horizontalScale(50),
  },
  title: {
    fontSize: moderateScale(20),
    color: colors.black,
    alignSelf: 'center',
    fontFamily: 'Roboto-Medium',
  },
  content: {
    paddingTop: verticalScale(40),
    gap: verticalScale(5),
  },
  button: {
    height: verticalScale(45),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(20),
    backgroundColor: colors.AppDefaultColor,
    borderRadius: horizontalScale(5),
    marginTop: verticalScale(20),
  },
  buttonClose: {
    position: 'absolute',
    top: verticalScale(12),
    right: horizontalScale(12),
    height: verticalScale(30),
    width: verticalScale(30),
    borderRadius: horizontalScale(20),
    backgroundColor: colors.red,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    color: colors.red,
    fontSize: 12,
    fontFamily: 'Roboto-Medium',
  },
});
