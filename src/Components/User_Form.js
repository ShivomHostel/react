import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import InputCard from './cards/InputCard'

const User_Form = () => {
    return (
        <View style={styles.container}>
            <InputCard title={'FIRST NAME'} name={'first_Name'} placeholder={'FIRST NAME'} />
            <InputCard title={'LAST NAME'} name={'last_Name'} placeholder={'LAST NAME'} />
            <InputCard title={'EMAIL'} name={'email'} placeholder={'EMAIL'} />
            <InputCard title={'MOBILE'} name={'mobile'} placeholder={'MOBILE'} />
            <InputCard title={'ALTERNATE MOBILE'} name={'alternate_mobile'} placeholder={'ALTERNATE MOBILE'} />
            
        </View>
    )
}

export default User_Form

const styles = StyleSheet.create({
    container:{
        gap:15,
    }
})