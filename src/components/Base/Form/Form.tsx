import React, { FC } from 'react';
import AntdForm from 'antd/es/form/Form';
import { TFormProps } from './From.type';

const Form: FC<TFormProps> = props => {
  const { layout } = props;
  return <AntdForm layout={layout || 'vertical'} {...props} />;
};

export default Form;
