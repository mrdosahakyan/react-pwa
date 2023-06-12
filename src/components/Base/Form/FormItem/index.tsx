import * as React from 'react';
import { TFormItemProps } from 'components/Base/Form/FormItem/types';
import SFormItem from './style';

export const FormItem = (props: TFormItemProps) => {
  return <SFormItem {...props} />;
};
