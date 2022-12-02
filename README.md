# @adb/adb-loan-origination-component

**adb-loan-origination-component** is a reusable component for loan originatio flow that can be used across all the apps developed by 101 Digital.

## Features

- Provide and manage loan origination flow

## Installation

To add this component to React Native app, run this command:

```sh
yarn add https://github.com/101digital/adb-loan-origination-component.git
```

Make sure you have permission to access this repository

Because **adb-loan-origination-component** depends on some libraries, so make sure you installed all dependencies into your project.

- [react-native-svg](https://github.com/react-native-community/react-native-svg)
- [rn-range-slider](https://github.com/githuboftigran/rn-range-slider)
- [async-storage](https://react-native-async-storage.github.io/async-storage/docs/usage/)

## Quick Start

```javascript
import { LoanComponent } from '@adb/adb-loan-origination-component';

const App = () => {
  return (
    <LoanComponent
      onCashAdvancePress={() => {}}
      onFinancePress={() => {}}
      onGroceryPayPress={() => {}}
      onRevCreditPress={() => {}}
    />
  );
};

export default App;
```

## API reference

### `LoanOriginationContext`

Maintain loan origination state using Context API. To retrieve Context data and function, you can use `useContext` inside a React Component.

```javascript
import React, { useContext } from 'react';
import { LoanOriginationContext } from '@adb/adb-loan-origination-component';

const ReactComponentExample = () => {
  const { isNewCustomer } = useContext(LoanOriginationContext);

  /* YOUR COMPONENT */
};
```

- Functions and state

```javascript
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
```

### `loanComponentStore`

Provide functions to store and retrieve stored data in local storage

- Functions

| Name                | Type                     | Description                                 |
| :------------------ | :----------------------- | :------------------------------------------ |
| storeCustomerStatus | Function (isNewCustomer) | Store the customer status to local storage  |
| getCustomerStatus   | Function                 | Retrieve customer status from local storage |
| clearStore          | Function                 | Clears the customer status                  |

### `LoanComponent`

LoanComponent is the Home screen of the loan origination flow. It provide simple UI for Finance screen dashboard.

- Props

```javascript
export interface ILoanComponent {
  onCashAdvancePress: () => void;
  onFinancePress: () => void;
  onGroceryPayPress: () => void;
  onRevCreditPress: () => void;
}
```

### `CashAdvanceComponent`

Cash Advance Component is the screen that comes after user select Cash Advance-i.

- Props

```javascript
export interface ICashAdvance {
  onApplyNowPress: () => void;
}
```

### `NewCustomerComponent`

New Customer Component is the screen that comes if the user is new finance customer.

- Props

```javascript
export interface INewCustomer {
  onPressContinue: () => void;
}
```

### `ReviewDetailsComponent`

As the name suggest this screen provide UI for reviewing user details.

- Props

```javascript
export interface IReviewDetails {
  onPressContinue: () => void;
}
```

### `SelectAmountComponent`

Select Amount Component provide UI for selecing credit for loan.

- Props

```javascript
export interface ISelectAmountComp {
  onPressContinue: (amount?: number, duration?: number) => void;
  creditLimit: number; // Limit the range of amount selection
  showAmount?: boolean; // State wheter you want to show amount range slection
  showDuration?: boolean; // State wheter you want to show duration range slection
  rangeLabel: string; // To set labels
  showInfo?: boolean; // State wheter you want to show info alert box
  title: string; // To set the title of range selection
}
```

### `ApplicationSubmittedComponent`

This component is used after the user has submitted the application for credit limit.

```javascript
export interface IApplicationSubmitted {
  onPressContinue: () => void;
  loanPaidType?: string;
}
```

### `ConfirmRequestComponent`

This component is used to confirm the user selected amount and duration.

```javascript
export interface requestDataTypes {
  id: string;
  title: string;
  value: string;
}

export interface IConfirmRequest {
  onPressEdit: () => void;
  requestData: Array<requestDataTypes>;
  onSubmitApplication: () => void;
}
```

### `PersonalFinancingComponent`

Personal Finance Component is the screen that comes after user select Personal Financing-i.

```javascript
export interface ICashAdvance {
  onApplyNowPress: () => void;
}
```
