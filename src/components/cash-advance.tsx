import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import ImagePicker from '../components/common/image-picker';
import ImageIcon from '../components/icons/ImageIcon';
import AlertMessage from '../components/common/alert-message';
import Button from '../components/core/button';
import TextWithIcon from './core/text-with-icon';
import { colors } from '../assets';

export interface ICashAdvance {
  onApplyNowPress: () => void;
}

const CashAdvanceComponent: React.FC<ICashAdvance> = (props: ICashAdvance) => {
  const { onApplyNowPress } = props;
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Cash Advance-i</Text>
        <Text style={styles.subTitle}>Your amazing banking experience.</Text>
        <View style={styles.imageContainer}>
          <ImagePicker />
        </View>
        <TextWithIcon title="Benefits" />
        <TextWithIcon title="T&Cs" />
        <TextWithIcon title="Product Disclosure Sheets" />
      </View>
      <View style={styles.lowerContainer}>
        <AlertMessage text="By continuing, I agree and comply with ADB's privacy policy and terms and conditions." />
        <Button label="Apply Now" onPress={onApplyNowPress} />
      </View>
    </SafeAreaView>
  );
};

export default CashAdvanceComponent;

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
    color: '#1b1b1b',
    marginBottom: 8,
  },
  subTitle: {
    fontSize: 14,
    color: '#1b1b1b',
  },
  imageContainer: {
    marginVertical: 32,
  },
  lowerContainer: {
    paddingHorizontal: 24,
  },
});
