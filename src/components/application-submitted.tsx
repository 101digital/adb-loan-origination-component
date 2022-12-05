import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { colors } from '../assets';
import Button from '../components/core/button';
import { withHeightPercent } from '../helpers/screen-utils';
import RawImageIcon from './icons/RawImageIcon';

export interface IApplicationSubmitted {
  onPressContinue: () => void;
  loanPaidType?: string;
}

const ApplicationSubmittedComponent: React.FC<IApplicationSubmitted> = (props) => {
  const { onPressContinue, loanPaidType } = props;
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.imageView}>
          <RawImageIcon />
        </View>
        <Text style={styles.title}>
          {loanPaidType ? 'Succesfully paid!' : 'Application has been submitted'}
        </Text>
        <Text style={styles.subTitle}>
          {loanPaidType
            ? `Graet! Your ${loanPaidType} has been paid in full.`
            : 'Thank you and we’ll notify you once your credit limit is ready.'}
        </Text>
      </View>
      <View style={styles.lowerContainer}>
        <Button label={loanPaidType ? 'Go to Finance' : 'Go to Home'} onPress={onPressContinue} />
      </View>
    </SafeAreaView>
  );
};

export default ApplicationSubmittedComponent;

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
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.secondary,
    marginBottom: 8,
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
});
