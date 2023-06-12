import styled from 'styled-components';
import Select, { SelectProps } from 'antd/es/select';
import { FC } from 'react';
import { Colors } from 'core/CssVariables';

/* TODO add types */
const SSelect = styled<FC<SelectProps>>(Select)`
  &.ant-select {
    width: 100%;
    &:not(.ant-select-customize-input) {
      .ant-select-selector {
        background-color: ${({ theme }) =>
          theme.input.backgroundColor} !important;
        color: ${({ theme }) => theme.input.TextColorPrimary};
        border-color: ${({ theme }) => theme.input.borderColor};
        .ant-select-selection-placeholder {
          color: ${({ theme }) => theme.input.placeholder};
        }
        &:hover {
          box-shadow: 0 0 7px 0 ${Colors.PrimaryColor}21;
        }
        .ant-select-selection-item {
          color: ${({ theme }) => theme.select.color};
        }
      }
    }
    &.ant-select-open {
      &:not(.ant-select-customize-input) {
        .ant-select-selector {
          box-shadow: none;
          border-color: ${Colors.SecondaryColor};
        }
      }

      .ant-select-arrow {
        transform: translateY(-50%) rotate(180deg);
      }
    }
    &.ant-select-focused {
      &:not(.ant-select-disabled) {
        &:not(.ant-select-customize-input) {
          &:not(.ant-select-open) {
            .ant-select-selector {
              box-shadow: none;
              border-color: ${Colors.SecondaryColor};
            }
          }
        }
      }
    }
  }
  .ant-select-arrow {
    width: auto;
    height: auto;
    transform: translateY(-50%);
    margin-top: 0;
    transition: 0.3s;
  }
  &.ant-select-multiple {
    width: 100%;
    .ant-select-selection-item {
      background-color: ${Colors.InfoColor};
      border-color: ${Colors.InfoColor};
      color: ${Colors.White} !important;
    }
  }
`;
export default SSelect;
