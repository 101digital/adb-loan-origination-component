import { StyleSheet } from 'react-native';
import { colors, palette } from './assets';
import { withHeight, withHeightPercent, withWidth } from './helpers/screen-utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  navContainer: {
    height: withHeightPercent(16),
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuContainer: {
    height: withHeight(204),
    backgroundColor: colors.white,
    borderColor: colors.black,
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    marginHorizontal: withWidth(20),
  },
  menuRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    ...palette.subtitle,
    color: colors.secondary,
    fontSize: 14,
  },
  subTitle: {
    ...palette.subtitle,
    color: colors.secondary,
    fontSize: 10,
    marginTop: 5,
  },
  totalAmount: {
    ...palette.label,
    color: colors.textSecondary,
    fontSize: 12,
  },
  totalPrice: {
    ...palette.label,
    color: colors.secondary,
    fontSize: 16,
    marginTop: 5,
  },
  seperator: {
    height: 0.5,
    backgroundColor: colors.primary,
    marginVertical: 10,
  },
  navHeaderText: {
    ...palette.bigTitle,
    fontSize: 16,
  },
  sliderContainer: {
    backgroundColor: colors.white,
    borderColor: colors.black,
    borderWidth: 1,
    borderRadius: 10,
    padding: 32,
    marginRight: 10,
  },
  slider: {
    paddingVertical: 10,
    paddingHorizontal: withWidth(24),
  },
  sliderLabel: {
    width: 150,
    ...palette.label,
    marginTop: 5,
    fontSize: 10,
  },
});
