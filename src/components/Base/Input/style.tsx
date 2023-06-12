import Input from 'antd/es/input';
import styled, { css, ThemeProps } from 'styled-components';
import { Colors } from 'core/CssVariables';
import {
  TGroupProps,
  TInputProps,
  TInputStyles,
  TInputTypes,
  TPasswordProps,
  TTextAreaProps,
} from 'components/Base/Input/types';
import { TThemeProps } from 'theme/theme';

const { Password, TextArea, Group } = Input;
const inputStyles: TInputStyles = {
  info: {
    color: Colors.InfoColor,
    hoverColor: Colors.InfoColorHover,
  },
  warning: {
    color: Colors.WarningColor,
    hoverColor: Colors.WarningColorHover,
  },
  success: {
    color: Colors.SuccessColor,
    hoverColor: Colors.SuccessColorHover,
  },
  danger: {
    color: Colors.ErrorColor,
    hoverColor: Colors.ErrorColorHover,
  },
};

export const createInputStyles = (
  theme: TThemeProps,
  color?: TInputTypes,
) => css` 
  
  &.ant-input-affix-wrapper, &.ant-input {
    padding: 8px 12px;
}

&.ant-input-affix-wrapper, &.ant-input, &.ant-input-search .ant-input {
  
  background-color:  ${theme.input.backgroundColor};
  color: ${theme.input.TextColorPrimary};
  border-color:  ${color ? inputStyles[color].color : theme.input.borderColor};
  &::placeholder { 
       color: ${theme.input.placeholder};
  }
  input {
  color: ${theme.input.TextColorPrimary};
  background-color:  ${theme.input.backgroundColor};
    &.ant-input  {
    padding: 0 1px 0 3px;
    }
  }
  &:hover {
     box-shadow: ${
       color
         ? `0px 0px 7px 0px ${inputStyles[color].color}21`
         : `0px 0px 7px 0px ${Colors.PrimaryColor}21`
     };
     border-color:  ${
       color ? inputStyles[color].color : theme.input.borderColor
     };
  };
  &:active, &:focus, &.ant-input-affix-wrapper-focused {
     border-color:  ${color ? inputStyles[color].color : Colors.SecondaryColor};
     box-shadow: none;
  };
  &:disabled, &:disabled:hover, &:disabled:focus, &:disabled:active  {
     cursor: not-allowed;
     border-color:  ${
       color ? inputStyles[color].color : theme.input.borderColor
     };
     &::placeholder { 
       color: ${theme.input.disabledPlaceholder};
  };
  &:-webkit-autofill,  &:-internal-autofill-selected  {
        background-color:  ${theme.input.backgroundColor};
  }
}
&.ant-input-password {
  padding: 8px 12px 8px 4px;
  input {
    padding-left: 8px;
  }
}
  
`;
export const SInput = styled(Input)`
  ${(props: TInputProps & ThemeProps<TThemeProps>) => {
    return createInputStyles(props.theme, props.color);
  }}
`;

export const SPassword = styled(Password)`
  ${(props: TPasswordProps & ThemeProps<TThemeProps>) => {
    return createInputStyles(props.theme, props.color);
  }}
`;

export const STextArea = styled(TextArea)`
  ${(props: TTextAreaProps & ThemeProps<TThemeProps>) => {
    return createInputStyles(props.theme, props.color);
  }}
`;

export const SGroup = styled(Group)`
  ${(props: TGroupProps & ThemeProps<TThemeProps>) => {
    return createInputStyles(props.theme, props.color);
  }}
`;
