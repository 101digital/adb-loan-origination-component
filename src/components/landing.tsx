import ImageIcon from '../components/icons/ImageIcon';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../assets';
import { fonts } from '../assets/fonts';
import Button from '../components/core/button';

export interface ILanding {
  onLogin: () => void;
  onRegister: () => void;
}

const LandingComponent: React.FC<ILanding> = (props: ILanding) => {
  const { onLogin, onRegister } = props;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.contentWrapper}>
          <View style={styles.imageWrapper}>
            <ImageIcon width={50} height={50} color={'white'} />
          </View>
          <Text style={styles.title}>Aeon Digital Bank</Text>
        </View>
      </View>
      <View style={styles.lowerContainer}>
        <View style={{ flex: 1 }}>
          <Button
            label="Register"
            onPress={onRegister}
            background={'transparent'}
            labelColor={'#1B1B1B'}
          />
        </View>
        <View style={{ flex: 1, marginLeft: 10 }}>
          <Button label="Login" onPress={onLogin} />
        </View>
      </View>
    </View>
  );
};

export default LandingComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  contentWrapper: {
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  imageWrapper: {
    backgroundColor: '#A5A5A5',
    borderRadius: 90,
    padding: 35,
    width: 180,
    height: 180,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  lowerContainer: {
    flexDirection: 'row',
  },
  title: {
    color: '#1B1B1B',
    fontSize: 31,
    marginTop: 29,
    fontFamily: fonts.semiBold,
  },
});
