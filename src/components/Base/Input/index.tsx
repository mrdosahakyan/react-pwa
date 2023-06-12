import React, { forwardRef } from 'react';
import {
  SGroup,
  SInput,
  SPassword,
  STextArea,
} from 'components/Base/Input/style';
import {
  TGroupProps,
  TInputProps,
  TPasswordProps,
  TTextAreaProps,
} from 'components/Base/Input/types';
import { Colors } from 'core/CssVariables';
import { Icon, EIconNames } from '../Icon';

export const Input = forwardRef<any, TInputProps>((props: TInputProps, ref) => {
  return <SInput ref={ref} {...props} />;
});

export const Password = (props: TPasswordProps) => {
  return (
    <SPassword
      iconRender={(visible: boolean) => (
        <Icon
          size={16}
          color={Colors.Grey}
          icon={visible ? EIconNames.EYE_SHOW : EIconNames.EYE_HIDE}
        />
      )}
      {...props}
    />
  );
};

export const TextArea = forwardRef<any, TTextAreaProps>(
  (props: TTextAreaProps) => {
    return <STextArea {...props} />;
  },
);

export const Group = (props: TGroupProps) => {
  return <SGroup {...props} />;
};
