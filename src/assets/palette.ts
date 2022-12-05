import { StyleSheet } from 'react-native';
import { colors } from './colors';
import { fonts } from './fonts';

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
    lineHeight: 20,
    color: colors.black,
  },
  label: {
    fontFamily: fonts.regular,
    fontSize: 12,
    color: colors.textSecondary,
    lineHeight: 17,
  },
});
