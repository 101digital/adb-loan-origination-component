import React, { ReactNode } from 'react';
import { LoanOriginationContext, useLoanOriginationContextValue } from './loan-component-context';

export type BankingProviderProps = {
  children: ReactNode;
};

const LoanOriginationProvider = (props: BankingProviderProps) => {
  const { children } = props;
  const loanContextData = useLoanOriginationContextValue();

  return (
    <LoanOriginationContext.Provider value={loanContextData}>
      {children}
    </LoanOriginationContext.Provider>
  );
};

export default LoanOriginationProvider;
