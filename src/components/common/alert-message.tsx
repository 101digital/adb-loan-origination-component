import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { colors } from '../../assets';
import ShieldIcon from '../../components/icons/ShieldIcon';
import { fonts } from '../../assets/fonts';
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
    marginLeft: 11,
    fontSize: 12,
    lineHeight: 16,
    width: '70%',
    color: '#3F3F3F',
    fontFamily: fonts.regular,
  },
});
