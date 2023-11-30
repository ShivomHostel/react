import {
    View,
    ActivityIndicator,
    Modal,
    StyleSheet
} from 'react-native';
import React from 'react';
import { colors } from './Colors';

const Loading = ({ isLoading }) => {
    return (
        <Modal
            transparent={true}
            visible={isLoading}>
            <View
                style={styles.loadingView}
            >
                <ActivityIndicator size={50} color={colors.primary} />
            </View>
        </Modal>
    )
};
export default Loading;
const styles = StyleSheet.create({
    loadingView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000aa'
    },
});
