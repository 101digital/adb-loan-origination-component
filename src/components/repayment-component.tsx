import React, { useContext, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ThemeContext, BottomSheet } from 'react-native-theme-component';
import { colors, palette } from '../assets';
import { fonts } from '../assets/fonts';
//import AlertMessage from '../components/common/alert-message';
import Button from '../components/core/button';
import { withWidthPercent, withHeight, withWidth } from '../helpers/screen-utils';
import RightArrowIcon from './icons/RightArrowIcon';
import AlertIcon from './icons/AlertIcon';
import { useNavigation } from '@react-navigation/native';

export interface IRepaymentComponent {
  onProceedToPay: () => void;
}

const RepaymentComponent: React.FC<IRepaymentComponent> = (props: IRepaymentComponent) => {
  const { onProceedToPay } = props;
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
      <View style={styles.container}>
        <Text style={styles.title}>Repayment</Text>
        <View
          style={{ marginTop: 10, backgroundColor: colors.black, borderRadius: 5, padding: 15 }}
        >
          <Text style={[styles.title, { color: colors.white }]}>Cash Advance-i</Text>
          <Text style={[styles.subTitle, { color: colors.white }]}>
            Account No: 1234 5678 7000 8000
          </Text>
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

        <View style={[styles.seperator, { marginVertical: 15 }]}></View>
        <View style={styles.transform}>
          <Text style={styles.totalAmount}>Transfer from</Text>
          <Text style={[styles.totalPrice, { marginTop: 8 }]}>....9494</Text>
        </View>
      </View>

      <View style={styles.lowerContainer}>
        <View>
          <Text style={styles.totalAmount}>Total payment</Text>
          <Text style={styles.totalPrice}>RM 85.00</Text>
        </View>
        <View style={styles.bottomButtonContainer}>
          <Button
            label={'Pay'}
            onPress={() => {
              setShowBottomSheet(true);
            }}
          />
        </View>
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
              Payment successfull!
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
              Thank you for your payments.
            </Text>
          </View>
          <View style={{ justifyContent: 'flex-end' }}>
            <Button label="Done" onPress={() => setShowBottomSheet(false)} />
          </View>
        </View>
      </BottomSheet>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  bottomButtonContainer: {
    width: withWidthPercent(44),
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

  menuContainer: {
    height: withHeight(220),
    backgroundColor: colors.white,
    borderColor: colors.black,
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    marginTop: 15,
  },
  transform: {
    backgroundColor: colors.white,
    borderColor: colors.black,
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    // marginTop: 15,
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
