import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../assets';
import { fonts } from '../assets/fonts';
import AccountBalanceCard from '../components/common/account-balance-card';
import FunctionalityList from '../components/common/functionality-list';
import ListCard from '../components/common/list-card';
import CircularImageView from '../components/core/circular-image-view';
import BarcodeIcon from '../components/icons/BarcodeIcon';

const AccountDetail = () => {
  const [username] = useState('Aeolanda!');
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.profileNameContainer}>
          <Text style={styles.usernameText}>Hi, {username}</Text>
          <CircularImageView />
        </View>
        <View style={styles.membershipContainer}>
          <View style={{ marginBottom: 24 }}>
            <Text style={styles.type}>Membership ID</Text>
            <View style={styles.row}>
              <Text style={styles.value}>2022 0302 1992 1120</Text>
              <TouchableOpacity style={styles.barcodeIconContainer}>
                <BarcodeIcon />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ marginBottom: 24, alignItems: 'flex-end' }}>
            <Text style={styles.type}>Member Plus Point</Text>
            <Text style={styles.value}>1,000 pts</Text>
          </View>
        </View>
        <AccountBalanceCard balance={630} />
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
