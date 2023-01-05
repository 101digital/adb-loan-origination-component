import { LoanService } from '../services/loan-service';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import loanComponentStore from '../services/local-store';
import { ILoanContext, loanDataType, loanType, Wallets } from './types';

export const loanContextDefaultValue: ILoanContext = {
  isNewFinanceCustomer: false,
  changeUserStatus: () => undefined,
  isAdvanceCashApplied: false,
  isPersonalLoanApplied: false,
  setLoanData: () => undefined,
  advanceCashLoanData: null,
  personalFinanceLoanData: null,
  clearLoanData: () => undefined,
  getWallets: () => undefined,
  isLoadingGetWallets: false,
  wallets: []
};

export const LoanOriginationContext = React.createContext<ILoanContext>(loanContextDefaultValue);

const loanService = LoanService.instance();

export const useLoanOriginationContextValue = (): ILoanContext => {
  const [_isNewCustomer, setNewCustomer] = useState<boolean>(false);
  const [_isAdvanceCashApplied, setAdvanceCashApplied] = useState<boolean>(false);
  const [_isPersonalLoanApplied, setPersonalLoanApplied] = useState<boolean>(false);
  const [_advanceCashLoanData, setAdvanceCashLoanData] = useState<loanDataType | null>(null);
  const [_personalFinanceLoanData, setPersonalFinanceLoanData] = useState<loanDataType | null>(
    null
  );
  const [_isLoadingGetWallets, setIsLoadingGetWallets] = useState<boolean>(false);
  const [_errorGetWallets, setErrorGetWallets] = useState<Error>();
  const [_wallets, setWallets] = useState<Wallets[]>([]);

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

  
  const getWallets = useCallback(async () => {
    setIsLoadingGetWallets(true);
    try {
      const response = await loanService.getWallets();
      setWallets(response.data);
      console.log('response', response);
    } catch (e: any) {
      setErrorGetWallets(e?.response?.data?.errors[0] as Error);
    } finally {
      setIsLoadingGetWallets(false);
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
      getWallets,
      isLoadingGetWallets: _isLoadingGetWallets,
      errorGetWallets: _errorGetWallets,
      wallets: _wallets
    }),
    [
      _isNewCustomer,
      _isAdvanceCashApplied,
      _isPersonalLoanApplied,
      _personalFinanceLoanData,
      _advanceCashLoanData,
      _isLoadingGetWallets,
      _errorGetWallets,
      _wallets
    ]
  );
};
