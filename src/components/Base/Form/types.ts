import { Rule, RuleObject, RuleRender } from 'antd/es/form';
import { ChangeEvent } from 'react';

export type { default as Rule } from 'antd/es/form';

export type TRegexPatters = {
  [key: string]: RegExp;
};

export type TValidationRules = {
  password: Rule[];
  passwordConfirm: RuleRender[];
  acceptTerms: Rule[];
  startTime: Rule[];
  endTime: Rule[];
  startDate: Rule[];
  endDate: Rule[];
  startTimeOptional: Rule[];
  endTimeOptional: Rule[];
  required: (fieldName?: string) => Rule;
  email: () => Rule;
  phoneNumber: () => Rule;
  integerMoreThanZeroOptional: () => Rule;
  integerOptional: () => Rule;
  onePointDecimal: () => Rule;
};

export type TFormFieldObject = {
  title?: string;
  rules?: (Rule | RuleObject | RuleRender)[];
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: any;
  selectOptions?: any;
  label?: string | JSX.Element;
  formItemLabel?: string | JSX.Element;
  placeholder?: string;
  valuePropName?: 'checked';
};

export type TFormFields = {
  [key: string]: TFormFieldObject;
};
