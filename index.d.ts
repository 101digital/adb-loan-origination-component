import 'react-native-svg';
export { default as LoanComponent } from './src';
export { default as AccountDetail } from './src/components/account-overview';
export { default as ApplicationSubmittedComponent } from './src/components/application-submitted';
export { default as CashAdvanceComponent } from './src/components/cash-advance';
export { default as ConfirmRequestComponent } from './src/components/confirm-request';
export { default as NewCustomerComponent } from './src/components/new-customer';
export { default as PersonalFinancingComponent } from './src/components/personal-financing';
export { default as RepaymentComponent } from './src/components/repayment-component';
export { default as ReviewDetailsComponent } from './src/components/review-details';
export { default as SelectAmountComponent } from './src/components/select-amount';
export { default as LoginComponent } from './src/components/login';
export { default as LandingComponent } from './src/components/landing';

export {
  loanDataType,
  LoanOriginationContext,
  LoanOriginationProvider,
  loanType,
} from './src/contexts';

declare module 'react-native-svg' {
  export interface SvgProps {
    xmlns?: string;
    xmlnsXlink?: string;
  }
}
