import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, palette } from '../../assets';
import ShieldIcon from '../../components/icons/ShieldIcon';
import InfoIcon from '../icons/InfoIcon';

interface IAlertMessage {
  text: string;
  isInfo?: boolean;
}
const AlertMessage: React.FC<IAlertMessage> = (props: IAlertMessage) => {
  const { text, isInfo } = props;
  return (
    <View style={styles.container}>
      {isInfo ? <InfoIcon /> : <ShieldIcon />}
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default AlertMessage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    paddingHorizontal: 18,
    flexDirection: 'row',
    borderRadius: 5,
    marginBottom: 16,
  },
  text: {
    ...palette.label,
    marginLeft: 11,
    width: '70%',
  },
});
