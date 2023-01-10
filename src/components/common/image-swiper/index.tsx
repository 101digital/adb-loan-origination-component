import React, { useRef } from 'react';
import { Animated, Dimensions, StyleSheet, View, Text } from 'react-native';
import { colors } from '../../../assets';
import ImageIcon from '../../../components/icons/ImageIcon';
import Indicator from './indicator';

export interface IImageSwiper {
  images: Array<string>;
}

const { width, height } = Dimensions.get('screen');

const ImageSwiper = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    <>
      <View style={styles.container}>
        <Animated.FlatList
          data={[1, 1]}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={32}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
            useNativeDriver: false,
          })}
          renderItem={({}) => {
            return (
              <View style={{ width: width }}>
                <View style={styles.swiperContainer}>
                  <View style={styles.imageIconContainer}>
                    <ImageIcon />
                  </View>
                  <View style={styles.infoRow}>
                    <View style={styles.row}>
                      <View style={styles.dot}></View>
                      <Text style={styles.text}>ERP</Text>
                    </View>
                    <View style={styles.row}>
                      <View style={styles.dot}></View>
                      <Text style={styles.text}>3, 6, or 12 months tenure.</Text>
                    </View>
                    <View style={styles.row}>
                      <View style={styles.dot}></View>
                      <Text style={styles.text}>Expected approval times.</Text>
                    </View>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
      <Indicator data={[1, 1]} scrollX={scrollX} />
    </>
  );
};

export default ImageSwiper;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    width: width,
    height: height * 0.31,
    overflow: 'hidden',
  },
  imageIconContainer: {
    backgroundColor: '#A5A5A5',
    borderRadius: 100,
    height: 56,
    width: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  swiperContainer: {
    backgroundColor: colors.primary,
    paddingHorizontal: 24,
    width: width,
    height: height * 0.31,
    alignItems: 'center',
    flexDirection: 'row',
  },
  infoRow: {
    marginLeft: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    height: 4,
    width: 4,
    borderRadius: 2,
    backgroundColor: colors.black,
    marginRight: 5,
  },
  text: {
    color: colors.black,
    fontSize: 10,
  },
});
