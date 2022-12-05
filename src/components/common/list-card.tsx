import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors, palette } from '../../assets';
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
    ...palette.highlight,
    color: colors.secondary,
  },
  accountBalance: {
    ...palette.bigTitle,
    lineHeight: 48,
    padding: 8,
    color: colors.secondary,
  },
});
