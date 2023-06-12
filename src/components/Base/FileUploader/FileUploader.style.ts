import styled, { css } from 'styled-components';
import Uploader from 'antd/es/upload';
import { Colors, FontSizes } from 'core/CssVariables';

const uploaderItemStyles = css`
  background-color: ${({ theme }) => theme.fileUploader.backgroundColor};
  border: 1px solid ${({ theme }) => theme.fileUploader.border};
  border-radius: 4px;
  font-size: ${FontSizes.FontXS}px;
  width: 126px;
  span {
    color: ${({ theme }) => theme.fileUploader.color};
    a {
      color: ${({ theme }) => theme.fileUploader.color};
    }
  }
  .icon {
    path {
      fill: ${({ theme }) => theme.fileUploader.color};
    }
  }
  .ant-upload-list-item-actions {
    display: flex;
    align-items: center;
    margin-left: -8px;
    button {
      width: auto;
      height: auto;
    }
    .icon {
      margin-left: 8px;
      path {
        fill: ${({ theme }) => theme.fileUploader.actionIcons};
      }
    }
  }
`;

const SFileUploader = styled(Uploader)`
  margin-right: -8px;
  & {
    //.ant-upload-list {
    //  display: flex;
    //  flex-direction: row-reverse;
    //  justify-content: start;
    //  flex-wrap: wrap-reverse;
    //}
    .ant-upload-list-picture-card-container,
    .ant-upload {
      width: 126px;
      height: 80px;
    }
    .ant-upload {
      &-list-item,
      &.ant-upload-select-picture-card {
        ${uploaderItemStyles};
        width: 126px;
        padding: 0;
        .ant-upload-list-item-name {
          padding: 8px;
        }
      }
      &.ant-upload-select-picture-card {
        border: 1px dashed ${({ theme }) => theme.fileUploader.borderDashed};
      }
    }
    .ant-upload {
      &-list-item-error,
      &.ant-upload-select-picture-card {
        border: 1px solid ${Colors.ErrorColorHover};
        .ant-upload-list-item-file {
          .icon {
            path {
              fill: ${Colors.ErrorColorHover};
            }
          }
        }
        .ant-upload-span {
          a {
            color: ${Colors.ErrorColorHover};
          }
        }
      }
      &.ant-upload-select-picture-card {
        border: 1px dashed ${({ theme }) => theme.fileUploader.borderDashed};
      }
    }
    .ant-upload-list-picture-card {
      & .ant-upload-list-item:hover {
        background-color: ${({ theme }) => theme.fileUploader.backgroundColor};
      }
      & .ant-upload-list-item-uploading {
        &.ant-upload-list-item {
          &,
          &:hover {
            background-color: ${({ theme }) =>
              theme.fileUploader.backgroundColor};
          }
        }
        & .ant-upload-list-item-info {
          height: 100%;
        }
      }
      & .ant-upload-list-item-progress {
        bottom: 14px;
      }
      & .ant-upload-list-item-thumbnail {
        .icon {
          line-height: 0;
          position: absolute;
          left: 50%;
          transform: translate(-50%);
          top: 18px;
        }
      }
    }
  }
`;

export { SFileUploader };
