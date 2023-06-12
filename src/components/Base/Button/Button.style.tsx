import Button from 'antd/es/button';
import styled, { css } from 'styled-components';
import { Colors, FontSizes, FontWeights } from 'core/CssVariables';
import { TButtonProps, TButtonStyles, TButtonTypes } from './Button.types';

const btnStyles: TButtonStyles = {
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
  primary: {
    color: Colors.PrimaryColor,
    hoverColor: Colors.SecondaryColor,
  },
  link: {
    color: Colors.SecondaryColor,
    hoverColor: Colors.SecondaryColor,
  },
  default: {
    color: Colors.Grey,
    hoverColor: Colors.GreyOpacity,
  },
  grey: {
    color: Colors.Grey,
    hoverColor: Colors.GreyOpacity,
  },
  orange: {
    color: Colors.Orange,
    hoverColor: Colors.Orange,
  },
  lightGrey: {
    color: Colors.LightGrey,
    hoverColor: Colors.LightGrey,
  },
};

const createButtonStyles = (
  color: TButtonTypes,
  { width, height, outline, shape, size, type }: TButtonProps,
) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  ${size === 'small' &&
  `
    padding: 4px 12px;
    font-size: 14px;
    .icon {
      width: 16px;
      height: 16px;
    }
  `}
  .icon {
    margin-right: 8px;
    margin-bottom: 1px;
    path {
      transition: fill 0.3s ease;
      fill: ${outline ? btnStyles[color].color : Colors.White};
    }
  }
  background-color: ${outline || type === 'link'
    ? 'transparent'
    : btnStyles[color].color};
  color: ${outline || type === 'link' ? btnStyles[color].color : Colors.White};
  border-color: ${outline ? btnStyles[color].color : 'transparent'};

  &:disabled,
  &:hover:disabled {
    .icon {
      path {
        fill: ${outline || type === 'link'
          ? `${btnStyles[color].color}4D`
          : Colors.White};
      }
    }
    background-color: ${outline || type === 'link'
      ? Colors.Transparent
      : `${btnStyles[color].color}4D`}; // 30% opacity

    color: ${outline || type === 'link'
      ? `${btnStyles[color].color}4D`
      : `${Colors.White}B2`};
    border-color: ${outline ? `${btnStyles[color].color}4D}` : 'transparent'};
  }

  &:hover,
  &:active,
  &:focus {
    .icon {
      path {
        fill: ${outline || type === 'link'
          ? btnStyles[color].hoverColor
          : Colors.White};
      }
    }
    background-color: ${outline || type === 'link'
      ? 'transparent'
      : btnStyles[color].hoverColor};
    color: ${outline || type === 'link'
      ? btnStyles[color].hoverColor
      : Colors.White};
    border-color: ${outline ? btnStyles[color].hoverColor : 'transparent'};
  }

  ${() =>
    shape === 'circle' &&
    css`
      display: flex;
      justify-content: space-around;
      width: ${width ? `${width}px` : 'auto'};
      min-width: ${width ? `${width}px` : 'auto'};
      height: ${height || width ? `${height || width}px` : 'auto'};
      .icon {
        margin-right: 0;
      }
    `}
  ${() =>
    type === 'link' &&
    css`
      padding: 0;
      height: auto;
      ${size === 'small' &&
      css`
        font-size: ${FontSizes.FontXS}px;
        font-weight: ${FontWeights.Regular};
      `}

      .icon {
        margin-right: 8px;
        height: 16px;
        width: 16px;

        path {
          fill: ${btnStyles[color].color};
        }
      }

      &:not([disabled]) {
        &:hover {
          > span {
            text-decoration: underline;
          }
        }
      }
    `}
`;

const SButton = styled<typeof Button>(Button)`
  ${(props: TButtonProps) => {
    switch (props.type) {
      case 'default':
        return createButtonStyles('default', props);
      case 'primary':
        if (props.color) {
          return createButtonStyles(props.color, props);
        }
        return createButtonStyles('primary', props);
      case 'link':
        if (props.color) {
          return createButtonStyles(props.color, props);
        }
        return createButtonStyles('link', props);
      default:
        return createButtonStyles('primary', props);
    }
  }}
`;

export default SButton;
