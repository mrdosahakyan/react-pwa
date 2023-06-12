import React, { FC } from 'react';
import { Colors } from 'core/CssVariables';
import Select from '../Select';
import { TSelectProps } from '../Select.type';
import { Icon, EIconNames } from '../../Icon';

const MultiSelect: FC<TSelectProps> = props => {
  return (
    <Select
      mode="multiple"
      maxTagTextLength={12}
      removeIcon={
        <Icon icon={EIconNames.HIGHLIGHT_OFF} size={16} color={Colors.White} />
      }
      {...props}
    />
  );
};

export default MultiSelect;
