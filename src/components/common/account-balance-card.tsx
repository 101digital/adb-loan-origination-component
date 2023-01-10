import React from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, palette } from '../../assets';

export interface IAccountBalanceProps {
  balance: number;
  currencyCode: string;
  isLoading: boolean;
  onSelectAccountBalance: () => void;
}

const AccountBalanceCard: React.FC<IAccountBalanceProps> = (props: IAccountBalanceProps) => {
  const { balance = 0, isLoading, onSelectAccountBalance, currencyCode } = props;
  return (
    <TouchableOpacity onPress={onSelectAccountBalance} style={styles.container}>
      <Text style={styles.accountBalanceText}>Account Balance</Text>
      {isLoading ? <ActivityIndicator style={styles.loadingSpinner} /> : <Text style={styles.accountBalance}>{currencyCode} {balance.toFixed(2)}</Text>}
    </TouchableOpacity>
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
    ...palette.highlight,
  },
  accountBalance: {
    ...palette.bigTitle,
    padding: 8,
  },
  loadingSpinner: {
    marginTop: 10,
  }
});
