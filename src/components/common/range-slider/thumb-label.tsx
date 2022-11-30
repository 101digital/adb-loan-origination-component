import { colors } from '../../../assets';
import {fonts} from '../../../assets/fonts';
import React, { memo } from 'react';
import { View, StyleSheet, Text, StyleProp, TextStyle } from 'react-native';

const THUMB_RADIUS = 12;

export type ThumbLabelProps = {
  value: number;
  labelFormat?: string;
  labelStyle?: StyleProp<TextStyle>;
};

const ThumbLabel = ({ value, labelFormat, labelStyle }: ThumbLabelProps) => {
  const label = labelFormat !== undefined ? labelFormat.replace('%d', value.toString()) : value;
  return (
    <View>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
      <View style={styles.root} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: THUMB_RADIUS * 2,
    height: THUMB_RADIUS * 2,
    borderRadius: THUMB_RADIUS,
    borderWidth: 2,
    borderColor: colors.primary,
    backgroundColor: '#ffffff',
  },
  label: {
    position: 'absolute',
    top: -THUMB_RADIUS - 5,
    left: -50,
    right: -50,
    textAlign: 'center',
    fontFamily: fonts.medium,
    fontSize: 14,
    color: colors.primary,
  },
});

export default memo(ThumbLabel);
