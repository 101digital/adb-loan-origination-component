import React, { useContext } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { ThemeContext } from 'react-native-theme-component';
import { colors } from '../assets';
import { fonts } from '../assets/fonts';
import AlertMessage from '../components/common/alert-message';
import Button from '../components/core/button';
import { withWidthPercent } from '../helpers/screen-utils';

export interface IRepaymentComponent {
  onProceedToPay: () => void;
}

const RepaymentComponent: React.FC<IRepaymentComponent> = (props: IRepaymentComponent) => {
  const { onProceedToPay } = props;
  const { i18n } = useContext(ThemeContext);
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.topButtonContainer}>
            <Button
              label={i18n?.t('loan-origination-component.btn_current') ?? 'Current'}
              onPress={() => {}}
            />
          </View>
          <View style={styles.topButtonContainer}>
            <Button
              background={colors.white}
              labelColor={colors.secondary}
              label={i18n?.t('loan-origination-component.btn_upcoming') ?? 'Upcoming'}
              onPress={() => {}}
            />
          </View>
        </View>
        <View style={styles.totalLimitContainer}>
          <Text style={styles.totalLimitTitleText}>
            {i18n?.t('loan-origination-component.lbl_amount_toPay') ?? 'Amount to pay this month'}
          </Text>
          <Text style={styles.totalLimitText}>RM 600.00</Text>
          <Text style={styles.totalLimitTitleText}>Due date 01 Dec 2022</Text>
        </View>
        <View style={styles.progressContainer}>
          <View style={styles.progress} />
        </View>
        <View style={styles.subContainer}>
          <Text>0/1 month</Text>
        </View>
        <AlertMessage
          isInfo
          text={i18n?.t('loan-origination-component.msg_payment_due') ?? `Your payment is due!`}
        />
      </View>
      <View style={styles.lowerContainer}>
        <View style={{ marginBottom: 8 }}>
          <Button
            label={i18n?.t('loan-origination-component.btn_defer') ?? 'Defer'}
            background={colors.white}
            labelColor={colors.secondary}
            onPress={() => {}}
          />
        </View>
        <Button
          label={i18n?.t('loan-origination-component.btn_pay') ?? 'Proceed to Pay'}
          onPress={onProceedToPay}
        />
      </View>
    </SafeAreaView>
  );
};

export default RepaymentComponent;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  lowerContainer: {
    paddingHorizontal: 24,
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 14,
  },
  topButtonContainer: {
    paddingHorizontal: 10,
    width: withWidthPercent(48),
  },
  totalLimitContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 36,
  },
  navHeaderText: {
    fontSize: 16,
    fontFamily: fonts.semiBold,
  },
  totalLimitTitleText: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  totalLimitText: {
    fontSize: 32,
    fontFamily: fonts.semiBold,
    marginTop: 2,
    paddingVertical: 8,
  },
  progressContainer: {
    height: 6,
    borderRadius: 30,
    width: '100%',
    backgroundColor: '#EFF0F6',
    marginTop: 30,
    marginBottom: 10,
  },
  progress: {},
  subContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 24,
  },
});
