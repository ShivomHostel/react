import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';
import InputCard from '../../Components/cards/InputCard';


const Add_Registration = () => {
  return (
    <View style={styles.container}>
       <View style>
        <Text>Registration Form</Text>
       </View>
       <InputCard title={'Form no'} placeholder={'Form no'} />
    </View>
  )
}

export default Add_Registration

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})