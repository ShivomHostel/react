import {Alert} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

export const PickImage = setImage => {
  ImagePicker.openPicker({
    width: 300,
    height: 400,
    cropping: true,
  })
    .then(image => {
      setImage(image.path);
      console.log(image);
    })
    .catch(e => {
      Alert.alert('Something went wrong'), console.log(e);
    });
};
export const RemoveImage = (imagepath, setPath) => {
  ImagePicker.cleanSingle(imagepath)
    .then(() => {
      console.log('removed tmp image from tmp directory');
      setPath('');
    })
    .catch(e => {
      Alert.alert(e);
    });
};
