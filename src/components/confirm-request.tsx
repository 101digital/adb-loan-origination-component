import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import { colors } from '../assets';
import Button from '../components/core/button';
import { fonts } from '../assets/fonts';

export interface IConfirmRequest {
  amount: number;
  duration: number;
  onPressEdit: () => void;
  onSubmitApplication: () => void;
}
const FEES = 15;
const ConfirmRequestComponent: React.FC<IConfirmRequest> = (props: IConfirmRequest) => {
  const { amount = 0, duration = 0, onPressEdit, onSubmitApplication } = props;
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Please confirm your request</Text>
        <View style={[styles.row, { justifyContent: 'space-between', marginVertical: 24 }]}>
          <Text style={styles.subTitle}>Financing request</Text>
          <Text style={styles.editText} onPress={onPressEdit}>
            Edit
          </Text>
        </View>
        <View style={styles.row}>
          <View style={{ marginBottom: 24 }}>
            <Text style={styles.type}>Financing amount</Text>
            <Text style={styles.value}>RM {amount.toFixed(2)}</Text>
          </View>
          <View style={{ marginBottom: 24, marginLeft: 24 }}>
            <Text style={styles.type}>Tenure duration</Text>
            <Text style={styles.value}>{duration.toFixed(2)} month</Text>
          </View>
        </View>
        <View style={{ marginBottom: 24 }}>
          <Text style={styles.type}>Fees</Text>
          <Text style={styles.value}>RM {FEES.toFixed(2)}</Text>
        </View>
      </View>
      <View style={styles.lowerContainer}>
        <Button label="Submit Application" onPress={onSubmitApplication} />
      </View>
    </SafeAreaView>
  );
};

export default ConfirmRequestComponent;

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
    width: '70%',
  },
  subTitle: {
    fontSize: 16,
    fontFamily: fonts.semiBold,
    color: colors.secondary,
  },
  pointsContainer: {
    marginTop: 30,
    marginBottom: 16,
    paddingRight: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderColor: '#DDDDDD',
  },
  lowerContainer: {
    paddingHorizontal: 24,
    marginBottom: 8,
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  editText: {
    fontFamily: fonts.semiBold,
    fontSize: 14,
  },
});
