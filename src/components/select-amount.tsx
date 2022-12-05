import React, { useState } from 'react';
import { Keyboard, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { colors } from '../assets';
import { fonts } from '../assets/fonts';
import AlertMessage from '../components/common/alert-message';
import RangeSlider from '../components/common/range-slider';
import Button from '../components/core/button';
import { withHeightPercent } from '../helpers/screen-utils';
import { string } from './constants';

const MIN = 1;

export interface ISelectAmountComp {
  onPressContinue: (amount?: number, duration?: number) => void;
  creditLimit: number;
  showAmount?: boolean;
  showDuration?: boolean;
  rangeLabel: string;
  showInfo?: boolean;
  title: string;
}

const SelectAmountComponent: React.FC<ISelectAmountComp> = (props: ISelectAmountComp) => {
  const {
    title,
    onPressContinue,
    creditLimit = 0,
    showAmount,
    showDuration = true,
    rangeLabel,
    showInfo = true,
  } = props;
  const [rangeAmount, setRangeAmount] = useState(600);
  const [duration, setDuration] = useState(1);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        {showInfo && (
          <AlertMessage isInfo text={`You're eligible to apply for RM ${creditLimit.toFixed(2)}`} />
        )}
        <View
          style={[
            styles.dataContainer,
            { justifyContent: showAmount && showDuration ? 'center' : 'flex-start' },
          ]}
        >
          {showAmount && (
            <View style={[styles.centeredContainer, { marginTop: !showDuration ? 30 : 0 }]}>
              <Text style={styles.amountApplyText}>Amount apply</Text>
              <Text style={styles.amountText}>RM {rangeAmount.toFixed(2)}</Text>
            </View>
          )}
          {showDuration && (
            <View style={[styles.centeredContainer, { marginTop: !showAmount ? 30 : 0 }]}>
              <Text style={styles.amountApplyText}>Tenure duration</Text>
              <Text style={styles.amountText}>{duration} month</Text>
            </View>
          )}
        </View>

        <RangeSlider
          style={styles.amountSlider}
          min={MIN}
          max={creditLimit}
          initLow={1}
          step={showAmount ? 50 : 1}
          disableRange
          onValueChanged={(low: number, _: number, fromUser: boolean) => {
            if (fromUser) {
              Keyboard.dismiss();
              if (showAmount) {
                setRangeAmount(low);
              } else {
                setDuration(low);
              }
            }
          }}
          onTouch={() => {}}
          title={rangeLabel}
          minLabel={!showAmount ? `${MIN} month` : `RM ${MIN.toFixed(2)}`}
          maxLabel={!showAmount ? `${creditLimit} month` : `RM ${creditLimit.toFixed(2)}`}
        />
      </View>
      <View style={styles.lowerContainer}>
        <Button label={string.continue} onPress={() => onPressContinue(rangeAmount, duration)} />
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 15,
  },
});
