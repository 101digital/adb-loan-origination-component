import React from 'react';
import { FlatList } from 'react-native';
import ListCardVariant from '../../components/common/list-card-variant';

const data = [
  {
    id: '1',
    title: 'Personal Financing',
    subTitle: 'Grown your cah. Easy approve.',
  },
  {
    id: '2',
    title: 'Personal Financing',
    subTitle: 'Grown your cah. Easy approve.',
  },
  {
    id: '3',
    title: 'Personal Financing',
    subTitle: 'Grown your cah. Easy approve.',
  },
];

const FunctionalityList = () => {
  return (
    <FlatList
      style={{ marginVertical: 20 }}
      data={data}
      renderItem={({ item }) => (
        <ListCardVariant key={item.id} title={item.title} subTitle={item.subTitle} />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default FunctionalityList;
