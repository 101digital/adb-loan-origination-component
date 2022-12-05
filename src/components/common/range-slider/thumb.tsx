import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../../../assets';
const THUMB_RADIUS = 12;

const Thumb = () => {
  return <View style={styles.root} />;
};

const styles = StyleSheet.create({
  root: {
    width: THUMB_RADIUS * 2,
    height: THUMB_RADIUS * 2,
    borderRadius: THUMB_RADIUS,
    borderWidth: 2,
    borderColor: colors.secondary,
    backgroundColor: colors.secondary,
  },
});

export default memo(Thumb);
