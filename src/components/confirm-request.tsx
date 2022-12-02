import { View, Text, SafeAreaView, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import { colors } from '../assets';
import Button from '../components/core/button';
import { fonts } from '../assets/fonts';

export interface requestDataTypes {
  id: string;
  title: string;
  value: string;
}

export interface IConfirmRequest {
  onPressEdit: () => void;
  onSubmitApplication: () => void;
  requestData: Array<requestDataTypes>;
}

const ConfirmRequestComponent: React.FC<IConfirmRequest> = (props: IConfirmRequest) => {
  const { onPressEdit, onSubmitApplication, requestData = [] } = props;
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Please confirm your request</Text>
        <View style={[styles.row, { justifyContent: 'space-between', marginVertical: 24 }]}>
          <Text style={styles.subTitle}>Financing request</Text>
          <Text style={styles.editText} onPress={onPressEdit}>
            Edit
          </Text>
        </View>
        <FlatList
          data={requestData}
          keyExtractor={(item) => item.id}
          numColumns={2}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 24, width: 180 }}>
              <Text style={styles.type}>{item.title}</Text>
              <Text style={styles.value}>{item.value}</Text>
            </View>
          )}
        />
      </View>
      <View style={styles.lowerContainer}>
        <Button label="Submit Application" onPress={onSubmitApplication} />
      </View>
    </SafeAreaView>
  );
};

export default ConfirmRequestComponent;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.secondary,
    marginBottom: 8,
    width: '70%',
  },
  subTitle: {
    fontSize: 16,
    fontFamily: fonts.semiBold,
    color: colors.secondary,
  },
  pointsContainer: {
    marginTop: 30,
    marginBottom: 16,
    paddingRight: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderColor: '#DDDDDD',
  },
  lowerContainer: {
    paddingHorizontal: 24,
    marginBottom: 8,
  },
  type: {
    fontFamily: fonts.medium,
    fontSize: 12,
    color: '#858585',
  },
  value: {
    fontFamily: fonts.regular,
    fontSize: 16,
    color: '#333333',
    lineHeight: 24,
    paddingTop: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  editText: {
    fontFamily: fonts.semiBold,
    fontSize: 14,
  },
});
