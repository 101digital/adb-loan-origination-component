import React, { useCallback, useEffect, useMemo, useState } from 'react';
import loanComponentStore from '../services/local-store';
import { ILoanContext, loanDataType, loanType } from './types';

export const loanContextDefaultValue: ILoanContext = {
  isNewFinanceCustomer: false,
  changeUserStatus: () => undefined,
  isAdvanceCashApplied: false,
  isPersonalLoanApplied: false,
  setLoanData: () => undefined,
  advanceCashLoanData: null,
  personalFinanceLoanData: null,
  clearLoanData: () => undefined,
};

export const LoanOriginationContext = React.createContext<ILoanContext>(loanContextDefaultValue);
export const useLoanOriginationContextValue = (): ILoanContext => {
  const [_isNewCustomer, setNewCustomer] = useState<boolean>(false);
  const [_isAdvanceCashApplied, setAdvanceCashApplied] = useState<boolean>(false);
  const [_isPersonalLoanApplied, setPersonalLoanApplied] = useState<boolean>(false);
  const [_advanceCashLoanData, setAdvanceCashLoanData] = useState<loanDataType | null>(null);
  const [_personalFinanceLoanData, setPersonalFinanceLoanData] = useState<loanDataType | null>(
    null
  );

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

  const clearLoanData = useCallback((type: loanType) => {
    if (type === loanType.ADVANCE_CASH) {
      setAdvanceCashLoanData(null);
      setAdvanceCashApplied(false);
    } else {
      setPersonalFinanceLoanData(null);
      setPersonalLoanApplied(false);
    }
  }, []);

  const setLoanData = useCallback((type: loanType, amount: number, duration: number) => {
    if (type === loanType.ADVANCE_CASH) {
      setAdvanceCashLoanData({
        amount,
        duration,
        date: new Date(),
      });
      setAdvanceCashApplied(true);
    } else {
      setPersonalFinanceLoanData({
        amount,
        duration,
        date: new Date(),
      });
      setPersonalLoanApplied(true);
    }
  }, []);

  return useMemo(
    () => ({
      isNewFinanceCustomer: _isNewCustomer,
      changeUserStatus,
      setLoanData,
      isAdvanceCashApplied: _isAdvanceCashApplied,
      isPersonalLoanApplied: _isPersonalLoanApplied,
      advanceCashLoanData: _advanceCashLoanData,
      personalFinanceLoanData: _personalFinanceLoanData,
      clearLoanData,
    }),
    [
      _isNewCustomer,
      _isAdvanceCashApplied,
      _isPersonalLoanApplied,
      _personalFinanceLoanData,
      _advanceCashLoanData,
    ]
  );
};
