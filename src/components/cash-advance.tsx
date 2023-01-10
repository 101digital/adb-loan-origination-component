import React, { useContext, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ThemeContext, BottomSheet } from 'react-native-theme-component';
import { colors, palette } from '../assets';
import Button from '../components/core/button';
import { string } from './constants';
import RightArrowIcon from './icons/RightArrowIcon';
import AlertIcon from './icons/AlertIcon';
import { withHeight, withHeightPercent, withWidth } from '../helpers/screen-utils';
import { useNavigation } from '@react-navigation/native';

export interface ICashAdvance {
  onApplyNowPress: () => void;
}

const CashAdvanceComponent: React.FC<ICashAdvance> = (props: ICashAdvance) => {
  const { onApplyNowPress } = props;
  const { i18n } = useContext(ThemeContext);

  const navigation = useNavigation<any>();
  const [isShowBottomSheet, setShowBottomSheet] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={{ paddingHorizontal: 24, paddingTop: 10 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <RightArrowIcon style={{ transform: [{ rotate: '180deg' }] }} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Cash Advance-i</Text>
          <Text style={styles.subTitle}>Further Details</Text>
        </View>
        <View style={{ paddingHorizontal: 24, paddingVertical: 20 }}>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>
              An auto-debit attempt will be made on the due date listed below, please ensure there
              is sufficient funds in your account to avoid incurring a late fee.
            </Text>
          </View>
        </View>
        <View style={styles.menuContainer}>
          <TouchableOpacity>
            <View style={styles.menuRow}>
              <View>
                <Text style={styles.title}>Cash Advance-i</Text>
                <Text style={styles.subTitle}>Account No: 1234 5678 7000 8000</Text>
              </View>
            </View>
          </TouchableOpacity>

          <View style={{ marginTop: 15 }}>
            <Text style={styles.totalAmount}>Total Amount</Text>
            <Text style={styles.totalPrice}>RM 990.00</Text>
          </View>

          <View style={styles.seperator}></View>
          <View
            style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
          >
            <Text style={styles.totalAmount}>Due Date</Text>
            <Text style={styles.totalPrice}>09 Jan 2023</Text>
          </View>

          <View
            style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
          >
            <Text style={styles.totalAmount}>Repayment Amount</Text>
            <Text style={styles.totalPrice}>RM 85.00</Text>
          </View>

          <View
            style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
          >
            <Text style={styles.totalAmount}>Late fee</Text>
            <Text style={styles.totalPrice}>RM 85.00</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.lowerContainer}>
        <Button
          label={i18n?.t('loan-origination-component.btn_apply_now') ?? string.applyNow}
          onPress={onApplyNowPress}
        />
      </View>

      <BottomSheet
        isVisible={isShowBottomSheet}
        style={{
          containerStyle: { backgroundColor: 'transparent' },
        }}
      >
        <View
          style={{
            height: 350,
            padding: 20,
            borderRadius: 20,
            margin: 10,
            backgroundColor: 'white',
          }}
        >
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <AlertIcon />
          </View>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ textAlign: 'center', fontSize: 24, color: 'black' }}>
              Payment is not due yet!!
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 14,
                color: 'grey',
                marginTop: 15,
                lineHeight: 20,
              }}
            >
              An auto-debit will be made from your deposit account on the due date, please ensure
              there is sufficient funds.
            </Text>
          </View>
          <View style={{ justifyContent: 'flex-end' }}>
            <Button label="Hide modal" onPress={() => setShowBottomSheet(false)} />
          </View>
        </View>
      </BottomSheet>
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
  // title: {
  //   fontSize: 24,
  //   fontWeight: '600',
  //   color: colors.secondary,
  //   marginBottom: 8,
  // },
  // subTitle: {
  //   fontSize: 14,
  //   color: colors.secondary,
  // },
  imageContainer: {
    marginVertical: 32,
  },
  lowerContainer: {
    paddingHorizontal: 24,
    marginBottom: 8,
  },
  infoContainer: {
    backgroundColor: colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    borderRadius: 5,
    // marginBottom: 16,
  },
  infoText: {
    ...palette.label,
    marginLeft: 11,
    fontSize: 12,
    // width: '70%',
  },

  navContainer: {
    height: withHeightPercent(16),
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuContainer: {
    height: withHeight(220),
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
});
