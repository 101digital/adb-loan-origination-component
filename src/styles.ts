import { colors } from './assets';
import { StyleSheet } from 'react-native';
import { withHeightPercent } from './helpers/screen-utils';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  navContainer: {
    backgroundColor: colors.primary,
    height: withHeightPercent(35),
    borderRadius: withHeightPercent(4),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  totalLimitContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 36,
  },
  navHeaderText: {
    fontSize: 16,
    fontWeight: '600',
  },
  totalLimitTitleText: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  totalLimitText: {
    fontSize: 32,
    fontWeight: '600',
    marginTop: 2,
    paddingVertical: 8,
  },
  optionsContainer: {
    paddingHorizontal: 24,
  },
});
