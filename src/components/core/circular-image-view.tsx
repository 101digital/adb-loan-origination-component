import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { colors } from '../../assets';
import ImageIcon from '../../components/icons/ImageIcon';

export interface ICircularImageView {
  label?: string;
}
const CircularImageView: React.FC<ICircularImageView> = (props: ICircularImageView) => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <View style={styles.container}>
        <ImageIcon />
      </View>
      {props.label && <Text style={{ marginTop: 5 }}>{props.label ?? ''}</Text>}
    </View>
  );
};

export default CircularImageView;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#a5a5a5',
    height: 56,
    width: 56,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
