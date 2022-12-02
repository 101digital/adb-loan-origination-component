import { StyleSheet } from 'react-native';
import { fonts } from './fonts';
import { colors } from './colors';

export const palette = StyleSheet.create({
  bigTitle: {
    fontFamily: fonts.semiBold,
    fontSize: 32,
    color: colors.secondary,
  },
  midTitle: {
    fontFamily: fonts.semiBold,
    fontSize: 24,
    color: colors.secondary,
  },
  subtitle: {
    fontFamily: fonts.semiBold,
    fontSize: 16,
    color: colors.secondary,
  },
  highlight: {
    fontFamily: fonts.regular,
    fontSize: 14,
    color: '#000000',
  },
  label: {
    fontFamily: fonts.regular,
    fontSize: 12,
    color: colors.textSecondary,
    lineHeight: 17,
  },
});
