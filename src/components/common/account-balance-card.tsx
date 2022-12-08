import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { colors, palette } from '../../assets';

export interface IAccountBalanceProps {
  balance: number;
  isLoading: boolean;
}

const AccountBalanceCard: React.FC<IAccountBalanceProps> = (props: IAccountBalanceProps) => {
  const { balance = 0, isLoading } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.accountBalanceText}>Account Balance</Text>
      {isLoading ? <ActivityIndicator style={styles.loadingSpinner} /> : <Text style={styles.accountBalance}>RM {balance.toFixed(2)}</Text>}
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
