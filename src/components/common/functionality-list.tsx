import React from 'react';
import { FlatList } from 'react-native';
import ListCardVariant from '../../components/common/list-card-variant';

const dummyData = [
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

type Item = {
  id: string;
  title: string;
  subTitle: string;
}

type FunctionalityList = {
  listAccount: Item[]
}

const FunctionalityList = ({listAccount = dummyData}: FunctionalityList) => {
  return (
    <FlatList
      style={{ marginVertical: 20 }}
      data={listAccount}
      renderItem={({ item }) => (
        <ListCardVariant key={item.id} title={item.title} subTitle={item.subTitle} />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default FunctionalityList;
