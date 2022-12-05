import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors } from '../assets';
import AlertMessage from '../components/common/alert-message';
import Button from '../components/core/button';
import ImageSwiper from './common/image-swiper';
import { string } from './constants';
import TextWithIcon from './core/text-with-icon';

export interface ICashAdvance {
  onApplyNowPress: () => void;
}

const PersonalFinancingComponent: React.FC<ICashAdvance> = (props: ICashAdvance) => {
  const { onApplyNowPress } = props;
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Personal Financing-i</Text>
          <Text style={styles.subTitle}>Your amazing banking experience.</Text>
          <View style={styles.imageContainer}>
            <ImageSwiper />
          </View>
          <TextWithIcon title="Benefits" />
          <TextWithIcon title="T&Cs" />
          <TextWithIcon title="Product Disclosure Sheets" />
        </View>
      </ScrollView>
      <View style={styles.lowerContainer}>
        <AlertMessage text={string.termsAndCondition} />
        <Button label={string.applyNow} onPress={onApplyNowPress} />
      </View>
    </SafeAreaView>
  );
};

export default PersonalFinancingComponent;

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
  },
  subTitle: {
    fontSize: 14,
    color: colors.secondary,
  },
  imageContainer: {
    marginVertical: 32,
  },
  lowerContainer: {
    paddingHorizontal: 24,
    marginBottom: 8,
  },
});
