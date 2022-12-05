import React, { useContext, useMemo } from 'react';
import { FlatList, Text, View } from 'react-native';
import OptionsButton from './components/common/options-button';
import { LoanOriginationContext } from './contexts';
import { sortnull } from './helpers/sort-null';
import { styles } from './styles';
export interface ILoanComponent {
  onCashAdvancePress: () => void;
  onFinancePress: () => void;
  onGroceryPayPress: () => void;
  onRevCreditPress: () => void;
}
const LoanComponent: React.FC<ILoanComponent> = (props: ILoanComponent) => {
  const { onRevCreditPress, onGroceryPayPress, onFinancePress, onCashAdvancePress } = props;
  const {
    isAdvanceCashApplied,
    isPersonalLoanApplied,
    advanceCashLoanData,
    personalFinanceLoanData,
  } = useContext(LoanOriginationContext);
  const options = useMemo(
    () => [
      {
        id: '1',
        title: 'Cash Advance-i',
        onPress: onCashAdvancePress,
        isDataAvailable: isAdvanceCashApplied,
        data: advanceCashLoanData,
      },
      {
        id: '2',
        title: 'Personal Financing-i',
        onPress: onFinancePress,
        isDataAvailable: isPersonalLoanApplied,
        data: personalFinanceLoanData,
      },
      { id: '3', title: 'Grocery Pay Less-i', onPress: onGroceryPayPress, data: null },
      { id: '4', title: 'Revolving Credit', onPress: onRevCreditPress, data: null },
    ],
    [onRevCreditPress, onGroceryPayPress, onFinancePress, onCashAdvancePress]
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={sortnull(options)}
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
                data={item.data}
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
