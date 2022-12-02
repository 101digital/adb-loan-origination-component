export interface ILoanContext {
  isNewFinanceCustomer: boolean; // Returns `true` if he/she is the new finance customer
  changeUserStatus: () => void; // Update the user status from new customer to old
  isAdvanceCashApplied: boolean; // Returns `true` if user has applied for advance cash
  advanceCashLoanData: loanDataType | null; // Returns advance cash data of the user
  setLoanData: (type: loanType, amount: number, duration: number) => void; // Stores the user's loan data
  isPersonalLoanApplied: boolean; // Returns `true` if user has applied for Personal Finance
  personalFinanceLoanData: loanDataType | null; // Returns personal finacne loan data of the user
  clearLoanData: (type: loanType) => void; // Clears the user loan data, if payed
}

export interface loanDataType {
  amount: number;
  duration: number;
  date: Date;
}

export enum loanType {
  ADVANCE_CASH = 'cash-advance',
  PERSONAL_FINANCE = 'personal-finance',
}
