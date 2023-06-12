import { Colors } from 'core/CssVariables';
import type { InputProps } from 'antd/es/input';
import type { TextAreaProps } from 'antd/es/input/TextArea';
import type { GroupProps } from 'antd/es/input/Group';
import type { PasswordProps } from 'antd/es/input/Password';

export type TInputTypes = 'info' | 'warning' | 'success' | 'danger';

export type TInputColors = {
  color: Colors;
  hoverColor: Colors;
};

export type TInputColorProp = {
  color?: TInputTypes;
};

export type TInputStyles = { [key in TInputTypes]: TInputColors };
export type TInputProps = InputProps & TInputColorProp;
export type TPasswordProps = TInputProps & PasswordProps;
export type TGroupProps = TInputProps & GroupProps;
export type TTextAreaProps = TInputProps & TextAreaProps;
