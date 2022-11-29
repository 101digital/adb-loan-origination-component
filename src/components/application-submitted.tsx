import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import { fonts } from '../assets/fonts';
import Button from '../components/core/button';
import { colors } from '../assets';
import { withHeightPercent } from '../helpers/screen-utils';
import RawImageIcon from './icons/RawImageIcon';

const ApplicationSubmittedComponent = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.imageView}>
          <RawImageIcon />
        </View>
        <Text style={styles.title}>Application has been submitted</Text>
        <Text style={styles.subTitle}>
          Thank you and we’ll notify you once your credit limit is ready.
        </Text>
      </View>
      <View style={styles.lowerContainer}>
        <Button label="Go to Home" onPress={() => {}} />
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
    color: '#1b1b1b',
    marginBottom: 8,
    marginRight: 30,
  },
  subTitle: {
    fontSize: 14,
    color: '#1b1b1b',
    marginBottom: 20,
    width: '80%',
  },
  lowerContainer: {
    paddingHorizontal: 24,
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
