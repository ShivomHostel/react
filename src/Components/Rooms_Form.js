import { StyleSheet, Text, View } from 'react-native'
import React,{useRef} from 'react'
import BottomSheet from 'react-native-simple-bottom-sheet'
import { width } from '../Utils/Metrics'

const Rooms_Form = ({panelRef}) => {
    // const panelRef = useRef(null);
  return (
    <View style={styles.container}>
      <BottomSheet sliderMaxHeight={width} ref={ref => panelRef.current = ref}>
        <Text style={{paddingVertical: 20}}>
          Some random content
        </Text>
      </BottomSheet>
    </View>
  )
}

export default Rooms_Form

const styles = StyleSheet.create({
    container: {
        
      },
})