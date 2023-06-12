import React, { FC } from 'react';
import { TAvatarProps } from './Avatar.types';
import SAvatar from './Avatar.style';

const Avatar: FC<TAvatarProps> = props => {
  const { size = 32 } = props;
  return <SAvatar shape="circle" size={size} gap={4} {...props} />;
};

export default Avatar;
