import AsyncStorage from '@react-native-async-storage/async-storage';
const IS_NEW_CUSTOMER = 'loancomponent.isNewCustomer';

class LoanComponentStore {
  storeCustomerStatus = (isNewCustomer: string) =>
    AsyncStorage.setItem(IS_NEW_CUSTOMER, isNewCustomer);

  getCustomerStatus = () => AsyncStorage.getItem(IS_NEW_CUSTOMER);

  clearStore = async () => {
    await AsyncStorage.removeItem(IS_NEW_CUSTOMER);
  };
}

const instance = new LoanComponentStore();
export default instance;
