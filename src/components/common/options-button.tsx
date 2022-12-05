import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, palette } from '../../assets';
import RightArrowIcon from '../../components/icons/RightArrowIcon';
import { loanDataType } from '../../contexts/types';
export interface IOptionsButton {
  title: string;
  onClick: () => void;
  isDataAvailable?: boolean;
  data: loanDataType | null;
}

const OptionsButton: React.FC<IOptionsButton> = (props: IOptionsButton) => {
  const { title, onClick, isDataAvailable, data } = props;
  return (
    <TouchableOpacity style={styles.container} onPress={onClick}>
      <View style={styles.subContainer}>
        <Text style={styles.title}>{title}</Text>
        <RightArrowIcon />
      </View>
      {isDataAvailable && data && (
        <>
          <View style={styles.progressContainer}>
            <View style={styles.progress} />
          </View>
          <View style={styles.subContainer}>
            <Text>0/{data.duration} month</Text>
            <Text>RM {data.amount.toFixed(2)}</Text>
          </View>
        </>
      )}
    </TouchableOpacity>
  );
};

export default OptionsButton;

export const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    backgroundColor: colors.primary,
    padding: 24,
    width: '100%',
    borderRadius: 24,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 12,
  },
  subContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    ...palette.subtitle,
    color: colors.secondary,
  },
  progressContainer: {
    height: 6,
    borderRadius: 30,
    width: '100%',
    backgroundColor: '#EFF0F6',
    marginTop: 30,
    marginBottom: 10,
  },
  progress: {},
});
