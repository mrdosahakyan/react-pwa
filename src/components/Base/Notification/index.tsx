import React from 'react';
import notification from 'antd/es/notification';
import { Colors } from 'core/CssVariables';
import { EIconNames, Icon } from '../Icon';

type TNotificationType = 'success' | 'info' | 'warning' | 'error';

const NotificationColorMapper: { [key in TNotificationType]: Colors } = {
  error: Colors.ErrorColor,
  info: Colors.InfoColor,
  success: Colors.SuccessColor,
  warning: Colors.WarningColor,
};

type TToastProps = {
  type: TNotificationType;
  title: string;
  description: string;
};
const toast = ({ type, title, description }: TToastProps) => {
  notification.open({
    message: title,
    description,
    style: {
      backgroundColor: NotificationColorMapper[type],
    },
    closeIcon: <Icon icon={EIconNames.HIGHLIGHT_OFF} />,
  });
};

export { toast };
