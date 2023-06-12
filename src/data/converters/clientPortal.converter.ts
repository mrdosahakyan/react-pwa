import {
  TSubmitTicket,
  TSubmitTicketUi,
  TSettingsGet,
  TSettingsGetUi,
} from 'data/types/ClinetPortal.type';
import { TCreateConverter, TFetchConverter } from 'data/types/converter.types';

export const settingsConverter: TFetchConverter<TSettingsGetUi, TSettingsGet> =
  {
    fromDb: data => {
      return {
        primaryColorLight: data.primaryColorLight,
        secondaryColorLight: data.primaryColorLight,
        primaryColorDark: data.primaryColorDark,
        secondaryColorDark: data.secondaryColorDark,
        orgLogoUrl: data.orgLogoUrl,
        orgName: data.orgName,
        orgWebsite: data.orgWebsite,
      };
    },
  };

export const submitTicketConverter: TCreateConverter<
  TSubmitTicketUi,
  TSubmitTicket
> = {
  toDb: data => {
    return {
      email: data.email,
      title: data.title,
      description: data.description,
      priority: data.priority,
    };
  },
};
