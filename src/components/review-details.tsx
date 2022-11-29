import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';
import Button from '../components/core/button';
import { fonts } from '../assets/fonts';
import { colors } from '../assets';

export interface IReviewDetails {
  onPressContinue: () => void;
}
const ReviewDetailsComponent: React.FC<IReviewDetails> = (props: IReviewDetails) => {
  const { onPressContinue } = props;
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Review your details</Text>
        <Text style={styles.subTitle}>Please confirm your details are up to date.</Text>
        <View style={styles.contactInfoContainer}>
          <Text style={styles.subContainerTitle}>Contact Info</Text>
          <View style={{ marginBottom: 24 }}>
            <Text style={styles.type}>Address</Text>
            <Text style={styles.value}>
              Olive P5-20 Empire Residence 40170 Damansara Perdana Selangor
            </Text>
          </View>
        </View>
        <View style={styles.contactInfoContainer}>
          <Text style={styles.subContainerTitle}>Employment info</Text>
          <View style={{ marginBottom: 24 }}>
            <Text style={styles.type}>Employment type</Text>
            <Text style={styles.value}>Private</Text>
          </View>
          <View style={{ marginBottom: 24 }}>
            <Text style={styles.type}>Employment sector</Text>
            <Text style={styles.value}>Hospitality Industry</Text>
          </View>
          <View style={{ marginBottom: 24 }}>
            <Text style={styles.type}>Name of employer</Text>
            <Text style={styles.value}>Four Season Hotel</Text>
          </View>
        </View>
      </View>
      <View style={styles.lowerContainer}>
        <View style={{ marginBottom: 8 }}>
          <Button
            label="Continue"
            background="#ffffff"
            labelColor={colors.secondary}
            onPress={() => {}}
          />
        </View>
        <Button label="Continue" onPress={onPressContinue} />
      </View>
    </SafeAreaView>
  );
};

export default ReviewDetailsComponent;

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
    marginRight: 20,
  },
  subTitle: {
    fontSize: 14,
    color: '#1b1b1b',
    marginBottom: 20,
  },
  lowerContainer: {
    paddingHorizontal: 24,
  },
  contactInfoContainer: {
    marginVertical: 12,
  },
  subContainerTitle: {
    fontFamily: fonts.semiBold,
    fontSize: 16,
    marginBottom: 16,
  },
  type: {
    fontFamily: fonts.medium,
    fontSize: 12,
    color: '#858585',
  },
  value: {
    fontFamily: fonts.regular,
    fontSize: 16,
    color: '#333333',
    lineHeight: 24,
    paddingTop: 8,
  },
});
