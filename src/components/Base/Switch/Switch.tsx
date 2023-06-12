import React, { FC } from 'react';
import { TSwitchProps } from './Switch.types';
import SSwitch from './Switch.style';

const Switch: FC<TSwitchProps> = props => {
  return <SSwitch {...props} />;
};

export default Switch;
