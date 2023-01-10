import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ThemeContext } from 'react-native-theme-component';
import { colors } from '../assets';
import AlertMessage from '../components/common/alert-message';
import Button from '../components/core/button';
import ImageSwiper from './common/image-swiper';
import { string } from './constants';
import RightArrowIcon from './icons/RightArrowIcon';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ImageIcon from './icons/ImageIcon';

export interface ICashAdvance {
  onApplyNowPress: () => void;
}

const PersonalFinancingComponent: React.FC<ICashAdvance> = (props: ICashAdvance) => {
  const { onApplyNowPress } = props;
  const { i18n } = useContext(ThemeContext);

  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <View style={styles.container}>
        <View style={{ flex: 1, backgroundColor: '#DDDDDD', paddingHorizontal: 24 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <RightArrowIcon style={{ transform: [{ rotate: '180deg' }] }} />
          </TouchableOpacity>
          <View style={styles.imageContainer}>
            <ImageSwiper />
          </View>
        </View>

        <View style={{ flex: 1, backgroundColor: 'white', paddingHorizontal: 24, paddingTop: 15 }}>
          <Text style={styles.title}>Personal Financing-i</Text>
          <Text style={styles.subTitle}>
            Describe this product maximum to 1-3 lines. Describe this product maximum to 1-3 lines.
            Describe this product maximum to 1-3 lines.
          </Text>

          <TouchableOpacity>
            <View
              style={{
                backgroundColor: 'red',
                borderColor: colors.black,
                borderWidth: 1,
                borderRadius: 10,
                padding: 15,
                marginTop: 15,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <ImageIcon color={colors.black} />
                <Text>Benifit</Text>
              </View>

              <RightArrowIcon />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.lowerContainer}>
        <AlertMessage
          text={i18n?.t('loan-origination-component.msg_tc') ?? string.termsAndCondition}
        />
        <Button
          label={i18n?.t('loan-origination-component.btn_apply_now') ?? string.applyNow}
          onPress={onApplyNowPress}
        />
      </View>
    </SafeAreaView>
  );
};

export default PersonalFinancingComponent;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#DDDDDD',
  },
  container: {
    flex: 1,
    backgroundColor: '#DDDDDD',
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
    backgroundColor: 'white',
  },
});
