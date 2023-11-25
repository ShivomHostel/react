import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import InputCard from './cards/InputCard'

const Bussiness_Form = () => {
    return (
        <View style={styles.container}>
            <InputCard title={'BUSINESS TYPE'} name={'bussiness_type'} placeholder={'BUSINESS TYPE'} />
            <InputCard title={'BUSINESS NAME'} name={'bussiness_name'} placeholder={'BUSINESS NAME'} />
            <InputCard title={'GST NO'} name={'gst_no'} placeholder={'GST NO'} />
            <InputCard title={'CITY'} name={'city'} placeholder={'CITY'} />
            <InputCard title={'STATE'} name={'state'} placeholder={'STATE'} />
            <InputCard title={'COUNTRY'} name={'country'} placeholder={'COUNTRY'} />
            <InputCard title={'PIN CODE'} name={'pin_code'} placeholder={'PIN CODE'} />
            <InputCard title={'ADDRESS'} name={'address'} placeholder={'ADDRESS'} />
        </View>
    )
}

export default Bussiness_Form

const styles = StyleSheet.create({
    container:{
        gap:15,
    }
})