import React, { useEffect, useMemo, useState } from 'react';
import loanComponentStore from '../services/local-store';

export interface ILoanContext {
  isNewFinanceCustomer: boolean;
  changeUserStatus: () => void;
}

export const loanContextDefaultValue: ILoanContext = {
  isNewFinanceCustomer: false,
  changeUserStatus: () => undefined,
};

export const LoanOriginationContext = React.createContext<ILoanContext>(loanContextDefaultValue);
export const useLoanOriginationContextValue = (): ILoanContext => {
  const [_isNewCustomer, setNewCustomer] = useState(false);

  useEffect(() => {
    checkUserStatus();
  }, []);
  const checkUserStatus = async () => {
    const status = await loanComponentStore.getCustomerStatus();
    setNewCustomer(status === 'false' ? false : true);
  };

  const changeUserStatus = async () => {
    await loanComponentStore.storeCustomerStatus('false');
    setNewCustomer(false);
  };

  return useMemo(
    () => ({
      isNewFinanceCustomer: _isNewCustomer,
      changeUserStatus,
    }),
    [_isNewCustomer]
  );
};
