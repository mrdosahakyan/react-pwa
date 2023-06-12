import { settingsConverter } from 'data/converters/clientPortal.converter';
import {
  TSubmitTicketUi,
  TSettingsGet,
  TSettingsGetUi,
} from 'data/types/ClinetPortal.type';
import { emptySplitApi } from '../helpers/slice.helpers';

const SETTINGS_URL = 'api/organizations/client-portal-settings';
const TICKET_URL = 'api/tickets/client-portal';

export const ClientPortalApi = emptySplitApi('ClientPortalApi').injectEndpoints(
  {
    endpoints: build => ({
      getSettings: build.query<TSettingsGetUi, { domain: string }>({
        query({ domain }) {
          return {
            url: `${SETTINGS_URL}/for-client-portal`,
            method: 'GET',
            params: {
              domain,
            },
          };
        },
        transformResponse: (data: TSettingsGet) => {
          return settingsConverter.fromDb(data);
        },
      }),
      submitTicket: build.mutation<TSubmitTicketUi, FormData>({
        query(body) {
          return {
            url: `${TICKET_URL}/submit`,
            method: 'POST',
            body,
          };
        },
      }),
    }),
    overrideExisting: false,
  },
);

export const { useGetSettingsQuery, useSubmitTicketMutation } = ClientPortalApi;
