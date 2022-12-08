import React, { useContext, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ThemeContext } from 'react-native-theme-component';
import { AuthContext } from 'react-native-auth-component';
import { colors } from '../assets';
import { fonts } from '../assets/fonts';
import AccountBalanceCard from './common/account-balance-card';
import FunctionalityList from './common/functionality-list';
import ListCard from './common/list-card';
import CircularImageView from './core/circular-image-view';
import BarcodeIcon from './icons/BarcodeIcon';
import { LoanOriginationContext } from '../contexts';

const AccountDetail = () => {
  const { profile } = useContext(AuthContext);
  const { i18n } = useContext(ThemeContext);
  const fullName = `${profile?.firstName} ${profile?.lastName}`.trim();
  const { wallets, getWallets, isLoadingGetWallets } = useContext(LoanOriginationContext);
  const currentBalance = wallets.length > 0 ? wallets[0].currentBalance : 0;

  useEffect(() => {
    getWallets();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.profileNameContainer}>
          <Text style={styles.usernameText}>{`${i18n?.t('loan-origination-component.lbl_hi')}, ${fullName}`}</Text>
          <CircularImageView />
        </View>
        <View style={styles.membershipContainer}>
          <View style={{ marginBottom: 24 }}>
            <Text style={styles.type}>
              {i18n?.t('loan-origination-component.lbl_mem_id') ?? 'Membership ID'}
            </Text>
            <View style={styles.row}>
              <Text style={styles.value}>2022 0302 1992 1120</Text>
              <TouchableOpacity style={styles.barcodeIconContainer}>
                <BarcodeIcon />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ marginBottom: 24, alignItems: 'flex-end' }}>
            <Text style={styles.type}>
              {i18n?.t('loan-origination-component.lbl_mem_point') ?? 'Membership Plus Point'}
            </Text>
            <Text style={styles.value}>1,000 pts</Text>
          </View>
        </View>
        <AccountBalanceCard balance={currentBalance} isLoading={isLoadingGetWallets} />
        <ListCard />
        <FunctionalityList />
      </View>
    </SafeAreaView>
  );
};

export default AccountDetail;

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
  usernameText: {
    fontSize: 20,
    fontFamily: fonts.semiBold,
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
  profileNameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  membershipContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 12,
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  barcodeIconContainer: {
    marginLeft: 10,
    paddingTop: 8,
  },
});
