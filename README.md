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
  onPressContinue: (amount: number, duration: number) => void;
}
```

### `ApplicationSubmittedComponent`

This component is used after the user has submitted the application for credit limit.
