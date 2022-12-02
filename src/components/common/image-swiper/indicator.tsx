import { View, Text, Animated, Dimensions } from 'react-native'
import React from 'react'
import { colors } from '../../../assets';

export interface IIndicator {
    scrollX: Animated.Value;
    data: any[]
}

const Indicator:React.FC<IIndicator> = (props:IIndicator) => {
    const {scrollX,data} = props
    const {width, height} = Dimensions.get('screen')
  return (
    <View style={{position:'absolute', bottom: 0, flexDirection:'row',alignSelf:'center'}}>
      {data.map((_,i) => {
        const inputRange = [(i-1) * width, i * width, (i+1) * width]
        const scaleX = scrollX.interpolate({
            inputRange,
            outputRange: [1, 1.8, 1],
            extrapolate:'clamp'
        })
        const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.4, 1, 0.4],
            extrapolate:'clamp'
        })
        return <Animated.View key={`indicator-${i}`} style={{margin:10,height:10,width:20, backgroundColor:colors.secondary, borderRadius: 20, transform: [{scaleX}], opacity}} />
      })}
    </View>
  )
}

export default Indicator