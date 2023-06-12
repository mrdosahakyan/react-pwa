import { TUploadFile } from '../../components/Base/FileUploader/FileUploader.type';

export type TSettingsGetUi = {
  primaryColorLight: number;
  secondaryColorLight: number;
  primaryColorDark: number;
  secondaryColorDark: number;
  orgLogoUrl: string;
  orgName: string;
  orgWebsite: string;
};
export type TSettingsGet = {
  primaryColorLight: number;
  secondaryColorLight: number;
  primaryColorDark: number;
  secondaryColorDark: number;
  orgLogoUrl: string;
  orgName: string;
  orgWebsite: string;
};

export type TSubmitTicketUi = {
  title: string;
  email: string;
  description: string;
  priority: EPriority;
  attachmentFiles: TUploadFile[];
};
export type TSubmitTicket = {
  title: string;
  email: string;
  description: string;
  priority: EPriority;
};

export enum EPriority {
  Low = 'Low',
  Medium = 'Medium',
  High = 'High',
  Urgent = 'Urgent',
}
