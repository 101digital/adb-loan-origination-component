import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { withHeightPercent } from '../../helpers/screen-utils';
import CircularImageView from '../../components/core/circular-image-view';
import { fonts } from '../../assets/fonts';

export interface IListCardVariant {
  title: string;
  subTitle: string;
}

const ListCardVariant: React.FC<IListCardVariant> = (props: IListCardVariant) => {
  const { title = '', subTitle = '' } = props;
  return (
    <View style={styles.container}>
      <CircularImageView />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
};

export default ListCardVariant;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 24,
    height: withHeightPercent(20),
    paddingHorizontal: 20,
    marginRight: 16,
  },
  textContainer: {
    marginLeft: 16,
  },
  title: {
    fontFamily: fonts.semiBold,
    fontSize: 14,
    lineHeight: 16,
    marginBottom: 5,
  },
  subTitle: {
    fontFamily: fonts.regular,
    fontSize: 12,
    lineHeight: 16,
    width: '70%',
  },
});
