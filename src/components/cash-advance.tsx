import React, { useContext } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { ThemeContext } from 'react-native-theme-component';
import { colors } from '../assets';
import AlertMessage from '../components/common/alert-message';
import Button from '../components/core/button';
import ImageSwiper from './common/image-swiper';
import { string } from './constants';
import TextWithIcon from './core/text-with-icon';

export interface ICashAdvance {
  onApplyNowPress: () => void;
}

const CashAdvanceComponent: React.FC<ICashAdvance> = (props: ICashAdvance) => {
  const { onApplyNowPress } = props;
  const { i18n } = useContext(ThemeContext);
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Cash Advance-i</Text>
          <Text style={styles.subTitle}>
            {i18n?.t('loan-origination-component.lbl_amz_exp') ??
              'Your amazing banking experience.'}
          </Text>
          <View style={styles.imageContainer}>
            <ImageSwiper />
          </View>
          <TextWithIcon title={i18n?.t('loan-origination-component.lbl_benefits') ?? 'Benefits'} />
          <TextWithIcon title={i18n?.t('loan-origination-component.lbl_tnc') ?? 'T&Cs'} />
          <TextWithIcon
            title={
              i18n?.t('loan-origination-component.lbl_prodcut_sheets') ??
              'Product Disclosure Sheets'
            }
          />
        </View>
      </ScrollView>
      <View style={styles.lowerContainer}>
        <AlertMessage
          text={i18n?.t('loan-origination-component.msg_tc') ?? string.termsAndCondition}
        />
        <Button
          label={i18n?.t('loan-origination-component.btn_apply_now') ?? string.applyNow}
          onPress={onApplyNowPress}
        />
      </View>
    </SafeAreaView>
  );
};

export default CashAdvanceComponent;

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
  },
  subTitle: {
    fontSize: 14,
    color: colors.secondary,
  },
  imageContainer: {
    marginVertical: 32,
  },
  lowerContainer: {
    paddingHorizontal: 24,
    marginBottom: 8,
  },
});
