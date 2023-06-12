import React, { FC } from 'react';
import IcomoonReact from 'icomoon-react';
import { EIconNames, TIconProps } from './types';
import iconSet from './selection.json';

const Icon: FC<TIconProps> = ({
  color,
  size = 24,
  icon,
  className = '',
  onClick,
  dataTestId = '',
}) => {
  return (
    <IcomoonReact
      data-testid={dataTestId}
      className={`icon ${className}`}
      iconSet={iconSet}
      color={color}
      size={size}
      icon={icon}
      onClick={onClick}
    />
  );
};

export { Icon, EIconNames };
