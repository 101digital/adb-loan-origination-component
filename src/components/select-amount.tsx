import { View, Text, SafeAreaView, StyleSheet, Keyboard } from 'react-native';
import React from 'react';
import { withHeightPercent } from '../helpers/screen-utils';
import { colors } from '../assets';
import AlertMessage from '../components/common/alert-message';
import Button from '../components/core/button';
import { fonts } from '../assets/fonts';
import RangeSlider from '../components/common/range-slider';
import { useState } from 'react';

const MIN = 1;
const MAX = 1000;

export interface ISelectAmountComp {
  onPressContinue: (amount: number, duration: number) => void;
}

const SelectAmountComponent: React.FC<ISelectAmountComp> = (props: ISelectAmountComp) => {
  const { onPressContinue } = props;
  const [rangeAmount, setRangeAmount] = useState(600);
  const [duration, setDuration] = useState(1);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Select amount you want</Text>
        <AlertMessage isInfo text="You’re eligible to apply for RM 5,000.00" />
        <View style={styles.dataContainer}>
          <View style={styles.centeredContainer}>
            <Text style={styles.amountApplyText}>Amount apply</Text>
            <Text style={styles.amountText}>RM {rangeAmount.toFixed(2)}</Text>
          </View>
          <View style={styles.centeredContainer}>
            <Text style={styles.amountApplyText}>Tenure duration</Text>
            <Text style={styles.amountText}>{duration} month</Text>
          </View>
        </View>
        <Text style={styles.selectAmountText}>Swipe to select amount (RM)</Text>
        <RangeSlider
          style={styles.amountSlider}
          min={MIN}
          max={MAX}
          initLow={600}
          step={51}
          disableRange
          onValueChanged={(low: number, _: number, fromUser: boolean) => {
            if (fromUser) {
              Keyboard.dismiss();
              setRangeAmount(low);
            }
          }}
          onTouch={() => {}}
        />
        <View style={styles.rangeTextContainer}>
          <Text style={styles.amountApplyText}>RM {MIN.toFixed(2)}</Text>
          <Text style={styles.amountApplyText}>RM {MAX.toFixed(2)}</Text>
        </View>
      </View>
      <View style={styles.lowerContainer}>
        <Button label="Continue" onPress={() => onPressContinue(rangeAmount, duration)} />
      </View>
    </SafeAreaView>
  );
};

export default SelectAmountComponent;

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
    marginBottom: 14,
    marginRight: 30,
  },
  subTitle: {
    fontSize: 14,
    color: colors.secondary,
    marginBottom: 20,
    width: '80%',
  },
  lowerContainer: {
    paddingHorizontal: 24,
    marginBottom: 8,
  },
  imageView: {
    width: '100%',
    backgroundColor: colors.primary,
    height: withHeightPercent(30),
    borderRadius: 32,
    marginBottom: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  amountApplyText: {
    fontFamily: fonts.regular,
    fontSize: 14,
    lineHeight: 20,
  },
  centeredContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16,
  },
  amountText: {
    fontFamily: fonts.semiBold,
    fontSize: 32,
    lineHeight: 48,
  },
  amountSlider: {
    width: '100%',
    height: 25,
  },
  rangeTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  selectAmountText: {
    fontSize: 12,
    fontFamily: fonts.regular,
    textAlign: 'center',
    marginBottom: 16,
  },
  dataContainer: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
});
