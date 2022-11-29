import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../../assets';
import ImageIcon from '../../components/icons/ImageIcon';

const ImagePicker = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.imageIconContainer}>
        <ImageIcon />
      </View>
    </TouchableOpacity>
  )
}

export default ImagePicker;

const styles = StyleSheet.create({
    container: {
        backgroundColor:colors.primary,
        justifyContent:'center',
        alignItems:'center',
        paddingVertical: 50,
        width: '75%',
        alignSelf:'center',
        borderRadius: 16,
    },
    imageIconContainer: {
        backgroundColor: '#A5A5A5',
        borderRadius: 100,
        height: 56,
        width: 56,
        justifyContent:'center',
        alignItems:'center'
    }
})