import React, { useContext } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { ThemeContext } from 'react-native-theme-component';
import { colors } from '../assets';
import { fonts } from '../assets/fonts';
import Button from '../components/core/button';
import { LoanOriginationContext } from '../contexts';
import { string } from './constants';

export interface IReviewDetails {
  onPressContinue: () => void;
}
const ReviewDetailsComponent: React.FC<IReviewDetails> = (props: IReviewDetails) => {
  const { onPressContinue } = props;
  const { changeUserStatus } = useContext(LoanOriginationContext);
  const { i18n } = useContext(ThemeContext);
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>
            {i18n?.t('loan-origination-component.lbl_review_detail') ?? 'Review your details'}
          </Text>
          <Text style={styles.subTitle}>
            {i18n?.t('loan-origination-component.lbl_confirm_detial') ??
              'Please confirm your details are up to date.'}
          </Text>
          <View style={styles.contactInfoContainer}>
            <Text style={styles.subContainerTitle}>Contact Info</Text>
            <View style={{ marginBottom: 24 }}>
              <Text style={styles.type}>
                {i18n?.t('loan-origination-component.lbl_address') ?? 'Address'}
              </Text>
              <Text style={styles.value}>
                Olive P5-20 Empire Residence 40170 Damansara Perdana Selangor
              </Text>
            </View>
          </View>
          <View style={styles.contactInfoContainer}>
            <Text style={styles.subContainerTitle}>Employment info</Text>
            <View style={{ marginBottom: 24 }}>
              <Text style={styles.type}>
                {i18n?.t('loan-origination-component.lbl_emp_type') ?? 'Employment type'}
              </Text>
              <Text style={styles.value}>Private</Text>
            </View>
            <View style={{ marginBottom: 24 }}>
              <Text style={styles.type}>
                {i18n?.t('loan-origination-component.lbl_emp_sector') ?? 'Employment sector'}
              </Text>
              <Text style={styles.value}>Hospitality Industry</Text>
            </View>
            <View style={{ marginBottom: 24 }}>
              <Text style={styles.type}>
                {i18n?.t('loan-origination-component.lbl_emp_name') ?? 'Name of employer'}
              </Text>
              <Text style={styles.value}>Four Season Hotel</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.lowerContainer}>
        <View style={{ marginBottom: 8 }}>
          <Button
            label={
              i18n?.t('loan-origination-component.btn_dtls_outdated') ?? 'My details are outdated'
            }
            background={colors.white}
            labelColor={colors.secondary}
            onPress={() => {}}
          />
        </View>
        <Button
          label={i18n?.t('loan-origination-component.btn_continue') ?? string.continue}
          onPress={() => {
            changeUserStatus();
            onPressContinue();
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default ReviewDetailsComponent;

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
    marginBottom: 20,
  },
  lowerContainer: {
    paddingHorizontal: 24,
    marginBottom: 8,
  },
  contactInfoContainer: {
    marginVertical: 12,
  },
  subContainerTitle: {
    fontFamily: fonts.semiBold,
    fontSize: 16,
    marginBottom: 16,
  },
  type: {
    fontFamily: fonts.medium,
    fontSize: 12,
    color: '#858585',
  },
  value: {
    fontFamily: fonts.regular,
    fontSize: 16,
    color: '#333333',
    lineHeight: 24,
    paddingTop: 8,
  },
});
