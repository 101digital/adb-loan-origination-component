import React, { useContext, useState } from 'react';
import { Keyboard, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ThemeContext } from 'react-native-theme-component';
import { colors } from '../assets';
import { fonts } from '../assets/fonts';
import RangeSlider from '../components/common/range-slider';
import Button from '../components/core/button';
import { withHeightPercent } from '../helpers/screen-utils';
import { string } from './constants';
import { useNavigation } from '@react-navigation/native';
import RightArrowIcon from './icons/RightArrowIcon';

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
  const { i18n } = useContext(ThemeContext);
  const [rangeAmount, setRangeAmount] = useState(600);
  const [duration, setDuration] = useState(3);
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.arrowContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <RightArrowIcon style={{ transform: [{ rotate: '180deg' }] }} />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Financing amount and duration</Text>
        <Text style={styles.subTitle}>
          How much and how long would you like the tenure of your financing?
        </Text>
        <View
          style={[
            styles.dataContainer,
            { justifyContent: showAmount && showDuration ? 'center' : 'flex-start' },
          ]}
        >
          {showAmount && (
            <View style={[styles.centeredContainer, { marginTop: !showDuration ? 30 : 0 }]}>
              <Text style={styles.amountApplyText}>
                {i18n?.t('loan-origination-component.lbl_amt_apply') ?? 'Amount apply'}
              </Text>
              <Text style={styles.amountText}>RM {rangeAmount.toFixed(2)}</Text>
            </View>
          )}
        </View>

        <View style={{ marginTop: -15 }}>
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
            title={''}
            minLabel={!showAmount ? `${MIN} month` : `RM ${MIN.toFixed(2)}`}
            maxLabel={!showAmount ? `${creditLimit} month` : `RM ${creditLimit.toFixed(2)}`}
          />
        </View>
        <View style={styles.seperator}></View>
        <View style={[styles.dataContainer, { justifyContent: 'center' }]}>
          <View style={[styles.centeredContainer, { marginTop: !showDuration ? 30 : 0 }]}>
            <Text style={styles.amountApplyText}>
              {i18n?.t('loan-origination-component.lbl_amt_apply') ?? 'Duration'}
            </Text>
            <Text style={styles.amountText}>{duration} Months</Text>
          </View>
        </View>
        <View style={styles.selectDurationContainer}>
          {['3', '6', '12'].map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => setDuration(parseInt(item))}
                style={styles.durationButton}
                key={index}
              >
                <View
                  style={[
                    styles.button,
                    { backgroundColor: duration === parseInt(item) ? 'black' : '#F5F5F5' },
                  ]}
                >
                  <Text style={{ color: duration === parseInt(item) ? 'white' : 'black' }}>
                    {item} months
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <View style={styles.lowerContainer}>
        <Button
          label={i18n?.t('loan-origination-component.btn_continue') ?? string.continue}
          onPress={() => onPressContinue(rangeAmount, duration)}
        />
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
    marginRight: 30,
  },
  subTitle: {
    color: colors.secondary,
    fontSize: 14,
    marginTop: 8,
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
    backgroundColor: colors.white,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  seperator: {
    height: 0.5,
    backgroundColor: colors.primary,
    marginVertical: 10,
  },
  arrowContainer: {
    paddingHorizontal: 24,
    paddingTop: 10,
  },
  selectDurationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  durationButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 44,
  },
});
