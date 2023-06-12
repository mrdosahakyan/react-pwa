import { Colors, FontSizes, FontWeights, Screens } from 'core/CssVariables';
import { createGlobalStyle, ThemeProps } from 'styled-components';
import { generateSpaceClassNames } from '../helpers/utils';
import { TThemeProps } from '../theme/theme';

const spaces = [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40];

const GlobalStyles = createGlobalStyle`
  /*spacing*/
  input {
    &[type="number"]::-webkit-outer-spin-button,
    &[type="number"]::-webkit-inner-spin-button {
      display: none;
      background: yellow;
      margin: 0;
    }
    &[type=number] {
      -moz-appearance: textfield;
    }
  }
  ${() => generateSpaceClassNames(spaces)}
  .text-left {
    text-align: left;
  }
  .text-underline{
    text-decoration: underline;
  }

  .no-border {
    border:none !important;
  }
  .text-right {
    text-align: right;
  }

  .text-center {
    text-align: center;
  }
  .h-100 {
    height: 100%;
  }
  .non-selectable {
      cursor: default;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
  }
  .mobile-w-100 {
    @media (max-width: ${Screens.ScreensMD}) {
        width: 100%;
      }
  }

  /*select*/
  .ant-select-item-option-selected {
    &:not(.ant-select-item-option-disabled) {
      font-weight: 400;
    }
  }

  /*timepicker*/
  .ant-picker-ranges {
    .ant-picker-ok {
      .ant-btn {
        height: 24px;
        padding: 0px 7px;
      }
    }
  }

  .ant-picker-time-panel-column {
    &:after {
      height: auto;
    }
  }

  .pointer {
    cursor: pointer;
  }
  .move {
    cursor: move;
  }
  .customScroll {
  }
  ::-webkit-scrollbar {
    width: 4px;
    height: 6px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 8px;
    background: ${(props: ThemeProps<TThemeProps>) =>
      props.theme.scrollbar.track};
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props: ThemeProps<TThemeProps>) =>
      props.theme.scrollbar.thumb};
    border-radius: 8px;
  }
  label {
    color: ${({ theme }) => theme.secondaryColor};
    font-size: ${FontSizes.FontXS}px;
    font-weight: ${FontWeights.Light};
  }
  
  .secondary-text {
    color: ${({ theme }) => theme.secondaryColor} !important;
    .ant-typography {
      color: ${({ theme }) => theme.secondaryColor} !important;
  }
}
.secondary-icon {
  path {
    fill: ${({ theme }) => theme.secondaryColor} !important;
  }  
}
  .editable-title-color {
    color: ${({ theme }) => theme.color} !important;  
}

.ant-notification-notice{
    border-radius: 16px;
    .ant-notification-notice-content{
      .ant-notification-notice-message{
        color: ${Colors.White};   
      }
      .ant-notification-notice-description{
        color: ${Colors.White}; 
        font-weight: ${FontWeights.Light};
      }      
    }
    .ant-notification-notice-close{
      .ant-notification-notice-close-x{
        fill: ${Colors.White};   
      }
    }
  }
`;

export default GlobalStyles;
