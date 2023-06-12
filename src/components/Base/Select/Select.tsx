import React, { FC } from 'react';
import { Colors } from 'core/CssVariables';
import AntSelect from 'antd/es/select';
import SSelect from './Select.style';
import { TSelectProps } from './Select.type';
import { Icon, EIconNames } from '../Icon';
import { SecondaryText } from '../Typography';

const { Option } = AntSelect;
const Select: FC<TSelectProps> = props => {
  const { options, title } = props;
  return (
    <>
      {title && (
        <SecondaryText className="mb-1" fontlevel={6}>
          {title}
        </SecondaryText>
      )}
      <SSelect
        menuItemSelectedIcon={
          <Icon
            size={16}
            color={Colors.SuccessColor}
            icon={EIconNames.CHECK_ROUNDED}
          />
        }
        removeIcon={
          <Icon
            size={16}
            color={Colors.White}
            icon={EIconNames.HIGHLIGHT_OFF}
          />
        }
        suffixIcon={
          <Icon
            icon={EIconNames.ARROW_DROPDOWN}
            size={16}
            color={Colors.LightGrey}
          />
        }
        getPopupContainer={trigger => trigger.parentNode}
        filterOption={(input, option) => {
          if (typeof option?.label === 'string') {
            return (
              option?.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
            );
          }
          if (typeof (option?.label as any)?.key === 'string') {
            return (
              (option?.label as any).key
                .toLowerCase()
                .indexOf(input.toLowerCase()) >= 0
            );
          }
          return false;
        }}
        {...props}
      >
        {options?.map(({ value, label }) => (
          <Option key={value} value={value}>
            {label}
          </Option>
        ))}
      </SSelect>
    </>
  );
};

export default Select;
