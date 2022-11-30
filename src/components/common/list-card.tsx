import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { colors } from '../../assets';
import { fonts } from '../../assets/fonts';
import CircularImageView from '../../components/core/circular-image-view';

const data = [
  {
    id: '1',
    label: 'Transfer',
  },
  {
    id: '2',
    label: 'Goals',
  },
  {
    id: '3',
    label: 'Rewards',
  },
  {
    id: '4',
    label: 'More',
  },
];

const ListCard = () => {
  return (
    <View style={styles.container}>
      {data.map((res) => (
        <CircularImageView key={res.id} label={res.label} />
      ))}
    </View>
  );
};

export default ListCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    width: '100%',
    padding: 16,
    borderRadius: 24,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
    flexDirection: 'row',
  },
  accountBalanceText: {
    fontFamily: fonts.regular,
    fontSize: 14,
    lineHeight: 20,
    color: colors.secondary,
  },
  accountBalance: {
    fontFamily: fonts.semiBold,
    fontSize: 32,
    lineHeight: 48,
    padding: 8,
    color: colors.secondary,
  },
});
