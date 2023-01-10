import React from 'react';
import { FlatList } from 'react-native';
import ListCardVariant from '../../components/common/list-card-variant';

type Item = {
  id: string;
  title: string;
  subTitle: string;
  onSelect: () => void;
}

type FunctionalityList = {
  listAccount: Item[]
}

const FunctionalityList = ({listAccount}: FunctionalityList) => {
  return (
    <FlatList
      style={{ marginVertical: 20 }}
      data={listAccount}
      renderItem={({ item }) => (
        <ListCardVariant key={item.id} title={item.title} subTitle={item.subTitle} onSelect={item.onSelect} />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default FunctionalityList;
