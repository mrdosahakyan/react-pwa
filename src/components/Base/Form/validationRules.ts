import { RuleObject } from 'antd/lib/form';
import moment from 'moment';
import { TRegexPatters, TValidationRules } from './types';

export const regexPatterns: TRegexPatters = {
  oneUpperCase: /[A-Z]+/,
  oneLowerCase: /[a-z]+/,
  oneNumber: /\d/,
  oneSymbol: /[*@!#%&$_+=?.<>;:'"/()^~{}]+/,
  letters8: /.{8,}/,
  phoneNumber: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
  domainName: /^((?!-)[A-Za-z0-9-]{1,63}(?!-)\.)+[A-Za-z]{2,6}$/,
  url: /[(http(s)?):(www)?a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)/,
  onlyWhiteSpace: /.*[^ ].*/,
};

export const passwordValidationRegex: RuleObject[] = [
  { type: 'regexp', pattern: regexPatterns.oneUpperCase },
  { type: 'regexp', pattern: regexPatterns.oneLowerCase },
  { type: 'regexp', pattern: regexPatterns.oneNumber },
  { type: 'regexp', pattern: regexPatterns.oneSymbol },
  { type: 'regexp', pattern: regexPatterns.letters8 },
];

export const passwordValidator = (
  value: string,
  rulesCount: number,
): boolean => {
  let count = 0;
  passwordValidationRegex.forEach((rule: RuleObject) => {
    if (rule.pattern?.test(value)) {
      count += 1;
    }
  });
  if (count >= rulesCount) {
    return true;
  }
  return false;
};

export const validationRules: TValidationRules = {
  required: fieldName => ({
    validator(_: RuleObject, value: any) {
      if (
        (typeof value === 'string' && value.trim()) ||
        (typeof value !== 'string' && !!value)
      ) {
        return Promise.resolve();
      }
      return Promise.reject(
        new Error(
          fieldName
            ? `The ${fieldName} is required!`
            : 'This field is required!',
        ),
      );
    },
  }),
  email: () => ({
    type: 'email',
    message: 'Incorrect Email Address!',
  }),
  phoneNumber: () => ({
    pattern: regexPatterns.phoneNumber,
    message: 'Invalid phone number format',
  }),
  password: [
    {
      validator(_: RuleObject, value: any) {
        if (passwordValidator(value, 4)) {
          return Promise.resolve();
        }
        return Promise.reject(new Error(''));
      },
    },
  ],
  acceptTerms: [
    {
      validator(_: RuleObject, value: any) {
        if (value) {
          return Promise.resolve();
        }
        return Promise.reject(new Error('Please accept Terms and Conditions!'));
      },
    },
  ],
  passwordConfirm: [
    ({ getFieldValue }) => ({
      validator(_: RuleObject, value: any) {
        if (getFieldValue('password') === value) {
          return Promise.resolve();
        }
        return Promise.reject(new Error('The passwords do not match!'));
      },
    }),
  ],
  startTime: [
    ({ getFieldValue, setFields }) => ({
      validator(_: RuleObject, value: string) {
        if (!value) {
          return Promise.reject(new Error('The field is required!'));
        }
        if (
          !getFieldValue('endTime') ||
          moment(getFieldValue('endTime')) > moment(value)
        ) {
          setFields([
            {
              name: 'endTime',
              errors: [],
            },
          ]);
          return Promise.resolve();
        }
        return Promise.reject(
          new Error('The start time must be earlier than end'),
        );
      },
    }),
  ],
  endTime: [
    ({ getFieldValue, setFields }) => ({
      validator(_: RuleObject, value: string) {
        if (!value) {
          return Promise.reject(new Error('The field is required!'));
        }
        if (
          !getFieldValue('startTime') ||
          moment(getFieldValue('startTime')) < moment(value)
        ) {
          setFields([
            {
              name: 'startTime',
              errors: [],
            },
          ]);
          return Promise.resolve();
        }
        return Promise.reject(
          new Error('The end time must be later than start'),
        );
      },
    }),
  ],
  startDate: [
    ({ getFieldValue, setFields }) => ({
      validator(_: RuleObject, value: string) {
        if (!value) {
          return Promise.reject(new Error('The field is required!'));
        }
        if (
          !getFieldValue('endDate') ||
          moment(getFieldValue('endDate')) > moment(value)
        ) {
          setFields([
            {
              name: 'endDate',
              errors: [],
            },
          ]);
          return Promise.resolve();
        }
        return Promise.reject(
          new Error('The start date must be earlier than end'),
        );
      },
    }),
  ],
  endDate: [
    ({ getFieldValue, setFields }) => ({
      validator(_: RuleObject, value: string) {
        if (!value) {
          return Promise.reject(new Error('The field is required!'));
        }
        if (
          !getFieldValue('startDate') ||
          moment(getFieldValue('startDate')) < moment(value)
        ) {
          setFields([
            {
              name: 'startDate',
              errors: [],
            },
          ]);
          return Promise.resolve();
        }
        return Promise.reject(
          new Error('The end date must be later than start'),
        );
      },
    }),
  ],
  startTimeOptional: [
    ({ getFieldValue, setFields }) => ({
      validator(_: RuleObject, value: string) {
        if (
          !getFieldValue('endTime') ||
          moment(getFieldValue('endTime')) > moment(value)
        ) {
          setFields([
            {
              name: 'endTime',
              errors: [],
            },
          ]);
          return Promise.resolve();
        }
        return Promise.reject(
          new Error('The start time must be earlier than end'),
        );
      },
    }),
  ],
  endTimeOptional: [
    ({ getFieldValue, setFields }) => ({
      validator(_: RuleObject, value: string) {
        if (
          !getFieldValue('startTime') ||
          moment(getFieldValue('startTime')) < moment(value)
        ) {
          setFields([
            {
              name: 'startTime',
              errors: [],
            },
          ]);
          return Promise.resolve();
        }
        return Promise.reject(
          new Error('The end time must be later than start'),
        );
      },
    }),
  ],
  integerMoreThanZeroOptional: () => ({
    validator(_: RuleObject, value: any) {
      if (value > 0 || !value) {
        return Promise.resolve();
      }
      return Promise.reject(new Error('The value should not be negative'));
    },
  }),
  integerOptional: () => ({
    validator(_: RuleObject, value: any) {
      if (!value.match(/[^\d]/g)) {
        return Promise.resolve();
      }
      return Promise.reject(new Error('The value should be positive number'));
    },
  }),
  onePointDecimal: () => ({
    validator(_: RuleObject, value: any) {
      if (!!value && !!value.split('.')[1]) {
        if (value.split('.')[1].length > 1) {
          return Promise.reject(
            new Error('The value should contain one decimal'),
          );
        }
      }
      return Promise.resolve();
    },
  }),
};
