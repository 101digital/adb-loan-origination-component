import React, { useContext } from 'react';
import { Keyboard, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../assets';
import { fonts } from '../assets/fonts';
import Button from '../components/core/button';
import ImageIcon from '../components/icons/ImageIcon';
import { AuthContext } from 'react-native-auth-component';
import { Formik } from 'formik';
import { InputField, ThemeContext } from 'react-native-theme-component';

export class SignInData {
  constructor(readonly username: string, readonly password: string) {}

  static empty(): SignInData {
    return new SignInData('', '');
  }
}

export interface ILogin {
  onLoginSuccess: () => void;
  onLoginFailed: () => void;
}

const LoginComponent: React.FC<ILogin> = (props: ILogin) => {
  const { onLoginSuccess, onLoginFailed } = props;
  const { deviceCountryCode, countries } = useContext(ThemeContext);
  const { login } = useContext(AuthContext);

  const handleOnSignIn = async (values: SignInData) => {
    Keyboard.dismiss();
    const { username, password } = values;
    const _username = username.replace(/\D+/g, '');
    const _country = countries.find((country) => country.attributes.idd === deviceCountryCode);
    const profile = await login(_username, password, _country);
    if (profile) {
      onLoginSuccess();
    } else {
      onLoginFailed();
    }
  };

  return (
    <View style={styles.container}>
      <Formik initialValues={SignInData.empty()} onSubmit={handleOnSignIn}>
        {({ isValid, submitForm }) => (
          <>
            <View style={styles.content}>
              <View style={styles.contentWrapper}>
                <View style={styles.imageWrapper}>
                  <ImageIcon width={50} height={50} color={'white'} />
                </View>
                <Text style={styles.title}>Good morning</Text>
                <View style={{ width: '100%' }}>
                  <View style={styles.rowInput}>
                    <InputField
                      name="username"
                      returnKeyType="done"
                      placeholder={'Mobile number'}
                      autoCapitalize="none"
                    />
                  </View>
                  <View style={styles.rowInput}>
                    <InputField
                      name="password"
                      returnKeyType="done"
                      secureTextEntry={true}
                      placeholder={'Password'}
                      autoCapitalize="none"
                    />
                  </View>
                </View>
                <View style={styles.rowBetween}>
                  <TouchableOpacity style={{ flex: 1 }}>
                    <Text style={styles.forgotPasswordTitle}>Forgot password?</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text style={styles.helpTitle}>Help?</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <Button label="Login" onPress={submitForm} />
          </>
        )}
      </Formik>
    </View>
  );
};

export default LoginComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  rowInput: {
    marginTop: 15,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#C2C2C2',
    width: 300,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginTop: 15,
    fontSize: 18,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  contentWrapper: {
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
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
    fontSize: 24,
    marginTop: 29,
    fontFamily: fonts.semiBold,
  },
  forgotPasswordTitle: {
    fontSize: 14,
  },
  helpTitle: {
    fontSize: 14,
  },
});
