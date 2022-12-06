import React, { useContext } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { ThemeContext } from 'react-native-theme-component';
import { colors } from '../assets';
import AlertMessage from '../components/common/alert-message';
import Button from '../components/core/button';
import TextWithIcon from '../components/core/text-with-icon';
import { string } from './constants';
export interface INewCustomer {
  onPressContinue: () => void;
}

const NewCustomerComponent: React.FC<INewCustomer> = (props: INewCustomer) => {
  const { onPressContinue } = props;
  const { i18n } = useContext(ThemeContext);
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>
            {i18n?.t('loan-origination-component.lbl_new_customer') ??
              'It seems you are a new financing customer'}
          </Text>
          <Text style={styles.subTitle}>Before we proceed...</Text>
          <View style={styles.pointsContainer}>
            <TextWithIcon
              title={
                i18n?.t('loan-origination-component.msg_fnc_cust_point1') ??
                "We'll run credit & background checks to determine your eligibility."
              }
            />
            <TextWithIcon
              title={
                i18n?.t('loan-origination-component.msg_fnc_cust_point2') ??
                "If approved, we'll grant you a credit limit that you can use across all financing products."
              }
            />
            <TextWithIcon
              title={
                i18n?.t('loan-origination-component.msg_fnc_cust_point3') ??
                "If you don't have a Savings Account with us, open one for you and make payments."
              }
            />
          </View>
          <TextWithIcon title={i18n?.t('loan-origination-component.lbl_tnc') ?? 'T&Cs'} />
          <TextWithIcon title="PDPA" />
        </View>
      </ScrollView>
      <View style={styles.lowerContainer}>
        <AlertMessage
          text={i18n?.t('loan-origination-component.msg_tc') ?? string.termsAndCondition}
        />
        <Button
          label={i18n?.t('loan-origination-component.btn_continue') ?? string.continue}
          onPress={onPressContinue}
        />
      </View>
    </SafeAreaView>
  );
};

export default NewCustomerComponent;

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
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.secondary,
    marginBottom: 8,
    marginRight: 20,
  },
  subTitle: {
    fontSize: 14,
    color: colors.secondary,
  },
  pointsContainer: {
    marginTop: 30,
    marginBottom: 16,
    paddingRight: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderColor: colors.primary,
  },
  lowerContainer: {
    paddingHorizontal: 24,
    marginBottom: 8,
  },
});
