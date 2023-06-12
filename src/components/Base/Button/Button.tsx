import React, { FC } from 'react';
import SButton from './Button.style';
import { TButtonProps } from './Button.types';

const Button: FC<TButtonProps> = props => {
  const { disabled, loading, outline } = props;
  return (
    <SButton
      type="primary"
      color="primary"
      {...props}
      {...(outline ? { outline: 'true' } : undefined)}
      disabled={!!loading || disabled}
    />
  );
};

export default Button;
