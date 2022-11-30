import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { colors } from '../../assets';
import { fonts } from '../../assets/fonts';

export interface IAccountBalanceProps {
  balance: number;
}

const AccountBalanceCard: React.FC<IAccountBalanceProps> = (props: IAccountBalanceProps) => {
  const { balance = 0 } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.accountBalanceText}>Account Balance</Text>
      <Text style={styles.accountBalance}>RM {balance.toFixed(2)}</Text>
    </View>
  );
};

export default AccountBalanceCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    width: '100%',
    paddingVertical: 12,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
  },
  accountBalanceText: {
    fontFamily: fonts.regular,
    fontSize: 14,
    lineHeight: 20,
    color: colors.secondary,
  },
  accountBalance: {
    fontFamily: fonts.semiBold,
    fontSize: 32,
    lineHeight: 48,
    padding: 8,
    color: colors.secondary,
  },
});
