import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ImageIcon from '../../components/icons/ImageIcon';

export interface ICircularImageView {
  label?: string;
  onSelect?: () => void;
}
const CircularImageView: React.FC<ICircularImageView> = (props: ICircularImageView) => {
  return (
    <TouchableOpacity onPress={props.onSelect} style={{ justifyContent: 'center', alignItems: 'center' }}>
      <View style={styles.container}>
        <ImageIcon />
      </View>
      {props.label && <Text style={{ marginTop: 5 }}>{props.label ?? ''}</Text>}
    </TouchableOpacity>
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
