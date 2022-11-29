import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { colors } from '../../assets';
import RightArrowIcon from '../../components/icons/RightArrowIcon';
export interface IOptionsButton {
  title: string;
  onClick: () => void;
}

const OptionsButton: React.FC<IOptionsButton> = (props: IOptionsButton) => {
  const { title, onClick } = props;
  return (
    <TouchableOpacity style={styles.container} onPress={onClick}>
      <Text style={styles.title}>{title}</Text>
      <RightArrowIcon />
    </TouchableOpacity>
  );
};

export default OptionsButton;

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.primary,
    padding: 24,
    width: '100%',
    borderRadius: 24,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1b1b1b',
  },
});
