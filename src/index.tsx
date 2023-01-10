import React, { useContext, useMemo } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { ThemeContext } from 'react-native-theme-component';
import RightArrowIcon from './components/icons/RightArrowIcon';
import { LoanOriginationContext } from './contexts';
import CircularImageView from './components/core/circular-image-view';

import { styles } from './styles';
export interface ILoanComponent {
  onCashAdvancePress: () => void;
  onFinancePress: () => void;
  onGroceryPayPress: () => void;
  onRevCreditPress: () => void;
}
const LoanComponent: React.FC<ILoanComponent> = (props: ILoanComponent) => {
  const {} = props;

  const { i18n } = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <View style={styles.navContainer}>
        <Text style={styles.navHeaderText}>Financing Center</Text>
      </View>
      <View style={styles.menuContainer}>
        <TouchableOpacity>
          <View style={styles.menuRow}>
            <View>
              <Text style={styles.title}>Cash Advance-i</Text>
              <Text style={styles.subTitle}>Account No: 1234 5678 7000 8000</Text>
            </View>
            <RightArrowIcon />
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
          <Text style={styles.totalAmount}>Department Amount</Text>
          <Text style={styles.totalPrice}>RM 85.00</Text>
        </View>
      </View>

      <View style={{ marginTop: 20 }}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.slider}
        >
          {[0, 1, 2].map((item, index) => {
            return (
              <TouchableOpacity style={styles.sliderContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <CircularImageView />
                  <View style={{ marginLeft: 10 }}>
                    <Text>Personal Financing</Text>
                    <Text numberOfLines={2} style={styles.sliderLabel}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default LoanComponent;
