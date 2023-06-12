import styled from 'styled-components';
import Form from 'antd/es/form';
import { Colors, FontSizes, FontWeights, Screens } from 'core/CssVariables';
import { TFormItemProps } from './types';

const { Item } = Form;
const SFormItem = styled(Item)`
  margin-bottom: ${(props: TFormItemProps) => props.marginBottom || 24}px;

  flex-direction: column;
  &.ant-form-item-with-help {
    margin-bottom: 0;
  }
  &.ant-form-item-has-error
    :not(.ant-input-disabled):not(.ant-input-borderless).ant-input {
    background-color: ${({ theme }) => theme.input.backgroundColor};
  }
  &.ant-form-item-has-error
    :not(.ant-input-affix-wrapper-disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper {
    background-color: ${({ theme }) => theme.input.backgroundColor};
  }
  .ant-form-item-control-input {
    textarea {
      border-radius: 4px;
      resize: none;
    }
    min-height: 30px;
  }
  .ant-form-item-label {
    text-align: left;
    label {
      font-size: ${FontSizes.FontXS}px;
      font-weight: ${FontWeights.Light};
      color: ${Colors.LightGrey};
      height: auto;
      &::after {
        content: '';
      }
    }
    .ant-form-item-required:not(.ant-form-item-required-mark-optional) {
      &:before {
        display: none;
      }
    }
  }
  .ant-form-item-explain-error {
    font-size: ${FontSizes.FontXS}px;
    color: ${Colors.ErrorColor};
    @media (max-width: ${Screens.ScreensSM}) {
      display: flex;
    }
  }
`;

export default SFormItem;
