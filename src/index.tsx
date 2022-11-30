import { View, Text, FlatList } from 'react-native';
import React, { useMemo } from 'react';
import { styles } from './styles';
import OptionsButton from './components/common/options-button';
export interface ILoanComponent {
  onCashAdvancePress: () => void;
  onFinancePress: () => void;
  onGroceryPayPress: () => void;
  onRevCreditPress: () => void;
}
const LoanComponent: React.FC<ILoanComponent> = (props: ILoanComponent) => {
  const { onRevCreditPress, onGroceryPayPress, onFinancePress, onCashAdvancePress } = props;
  const options = useMemo(
    () => [
      { id: '1', title: 'Cash Advance-i', onPress: onCashAdvancePress, isDataAvailable: true },
      { id: '2', title: 'Personal Financing-i', onPress: onFinancePress },
      { id: '3', title: 'Grocery Pay Less-i', onPress: onGroceryPayPress },
      { id: '4', title: 'Revolving Credit', onPress: onRevCreditPress },
    ],
    [onRevCreditPress, onGroceryPayPress, onFinancePress, onCashAdvancePress]
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={options}
        keyExtractor={(item) => item.id}
        bounces={false}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View style={{ paddingHorizontal: 24 }}>
              <OptionsButton
                title={item.title}
                onClick={item.onPress}
                isDataAvailable={item.isDataAvailable}
              />
            </View>
          );
        }}
        ListHeaderComponent={
          <View style={styles.navContainer}>
            <Text style={styles.navHeaderText}>Finance</Text>
            <View style={styles.totalLimitContainer}>
              <Text style={styles.totalLimitTitleText}>Total limit</Text>
              <Text style={styles.totalLimitText}>RM 0.00</Text>
            </View>
          </View>
        }
      />
    </View>
  );
};

export default LoanComponent;
