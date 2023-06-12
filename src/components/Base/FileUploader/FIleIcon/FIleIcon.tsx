import React, { FC } from 'react';
import { TUploadFile } from '../FileUploader.type';
import { Icon, EIconNames } from '../../Icon';

type TFIleIconProps = {
  file: TUploadFile | undefined;
};
export const FileIcon: FC<TFIleIconProps> = props => {
  const { file } = props;
  if (!file) return null;
  const image =
    /\.(gif|jpe?g|tiff?|png|webp|bmp|svg|jfif|pjpeg|pjp|webp|bmp|ico|cur)$/i.test(
      file.name,
    );
  const icon = image ? EIconNames.PHOTO : EIconNames.FILE_DESCRIPTION;
  return <Icon icon={icon} size={18} />;
};
export default FileIcon;
