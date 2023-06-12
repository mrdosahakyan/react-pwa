import React, { FC } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Colors } from 'core/CssVariables';
import { SPageSpinnerWrapper, SSpinner } from './Spinner.style';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export type TSpinner = {
  className?: string;
  size?: 'default' | 'small' | 'large';
  color?: Colors;
  width?: number;
};
export const PageSpinner: FC<TSpinner> = ({
  size,
  color,
  width,
  className = '',
}) => {
  return (
    <SPageSpinnerWrapper align="middle" justify="center">
      <SSpinner
        width={width}
        className={className}
        size={size || 'large'}
        indicator={antIcon}
        style={{ color: color || Colors.PrimaryColor }}
      />
    </SPageSpinnerWrapper>
  );
};

export const Spinner: FC<TSpinner> = ({
  size,
  color,
  width,
  className = '',
}) => {
  return (
    <SSpinner
      width={width}
      className={className}
      size={size || 'small'}
      indicator={antIcon}
      style={{ color: color || Colors.PrimaryColor }}
    />
  );
};
