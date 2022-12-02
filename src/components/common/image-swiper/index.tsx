import { View, StyleSheet, Animated, Image, Dimensions } from 'react-native'
import React, { useRef } from 'react'
import Indicator from './indicator';
import { colors } from '../../../assets';
import ImageIcon from '../../../components/icons/ImageIcon';

export interface IImageSwiper {
    images: Array<string>
}

const {width, height} = Dimensions.get('screen');   
const ImageSwiper = () => {
    const scrollX = useRef(new Animated.Value(0)).current
  return (
    <>
    <View style={styles.container}>
        <Animated.FlatList
            data={[1,1]}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={32}
            onScroll={Animated.event(
                [{nativeEvent: {contentOffset: {x: scrollX}}}],
                {useNativeDriver:false}
                )}
                renderItem={({item, index}) => {
                    return (
                    <View style={{width:width/1.5, alignItems:'center'}}>
                       <View style={{backgroundColor:colors.primary, width:(width/1.5), paddingVertical: 50,borderRadius:16,justifyContent:'center', alignItems:'center'}}>
                       <View style={styles.imageIconContainer}>
        <ImageIcon />
      </View>
                        </View>
                    </View>
                )
            }}
            />
    </View>
        <Indicator data={[1,1]} scrollX={scrollX} />
             </>
  )
}

export default ImageSwiper

const styles = StyleSheet.create({
    container: {
        marginVertical: 32,
        backgroundColor:colors.primary,
        borderRadius:16,
        width:width/1.5,
        overflow:'hidden',
        alignSelf:'center'
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