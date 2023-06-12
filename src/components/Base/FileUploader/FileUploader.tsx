import React, { FC, useEffect, useState } from 'react';
import { UploadProps } from 'antd/es/upload';
import { UploadFile } from 'antd/es/upload/interface';
import { SFileUploader } from './FileUploader.style';
import FileIcon from './FIleIcon/FIleIcon';
import UploadButton from './UploadButton/UploadButton';
import { TUploadFile } from './FileUploader.type';
import { Icon, EIconNames } from '../Icon';

type TFileUploaderProps = {
  defaultFileList?: TUploadFile[];
  onChange?: (fileList: TUploadFile[]) => void;
};
const fileSize = 5242880;
export const FileUploader: FC<TFileUploaderProps> = ({
  onChange = () => {
    /* do nothing */
  },
  defaultFileList,
}) => {
  const [fileList, setFileList] = useState<UploadFile[]>(defaultFileList || []);
  const onUpload = async (filObj: UploadFile) => {
    if (filObj?.size && filObj.size > fileSize) {
      setFileList(p => [
        ...p,
        {
          ...filObj,
          status: 'error',
          url: undefined,
          response: 'File size must be less than 5MB',
        },
      ]);
    } else {
      const newFileObj: TUploadFile = {
        ...filObj,
        status: 'success',
        url: undefined,
        percent: 10,
      };

      setFileList(p => {
        const arr: TUploadFile[] = [...p, newFileObj];
        onChange(arr);
        return arr;
      });
    }
  };
  const handleChange: UploadProps['onChange'] = async ({
    fileList: newList,
    file,
  }) => {
    if (fileList.length < newList.length) {
      await onUpload(file);
      return;
    }
    setFileList(newList);
    onChange(newList);
  };

  useEffect(() => {
    if (defaultFileList?.length) {
      setFileList(defaultFileList);
    }
  }, [defaultFileList]);

  return (
    <SFileUploader
      defaultFileList={fileList}
      multiple
      showUploadList={{
        showPreviewIcon: false,
        showDownloadIcon: true,
        showRemoveIcon: true,
        removeIcon: <Icon icon={EIconNames.DELETE} size={24} />,
        downloadIcon: <Icon icon={EIconNames.DOWNLOAD} size={24} />,
        previewIcon: <Icon icon={EIconNames.EYE_SHOW} size={24} />,
      }}
      iconRender={file => <FileIcon file={file} />}
      listType="picture-card"
      fileList={[...fileList]}
      onChange={handleChange}
      customRequest={() => {
        /* do nothing */
      }}
    >
      <UploadButton />
    </SFileUploader>
  );
};
