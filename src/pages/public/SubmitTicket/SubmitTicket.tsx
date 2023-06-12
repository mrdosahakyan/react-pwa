import React, { useEffect } from 'react';
import { Col } from 'components/Base/Grid/Grid';
import { useGetSettingsQuery } from 'redux/apiSlice/clientPortal.slices';
import { PageSpinner } from 'components/Base/Spinner/Spinner';
import CreateTicketForm from './components/CreateTicketForm';
import OrganizationInfo from './components/OrganizationInfo';
import { SubmitTicketWrapper } from './SubmitTicket.styles';

const SubmitTicket = () => {
  const domain = window.location.hostname;
  const { data, isLoading } = useGetSettingsQuery({ domain });

  useEffect(() => {
    const favicon = document.getElementById('favicon') as HTMLLinkElement;
    if (data?.orgLogoUrl && favicon) {
      favicon.href = data?.orgLogoUrl;
    }
    if (data?.orgName) {
      document.title = data.orgName;
    }
  }, [data]);

  return (
    <SubmitTicketWrapper align="middle" justify="center" gutter={[0, 24]}>
      {isLoading ? (
        <PageSpinner />
      ) : (
        <>
          <Col xxl={14} xl={16} lg={18} md={20} xs={20}>
            <OrganizationInfo
              logoUrl={data?.orgLogoUrl}
              name={data?.orgName}
              website={data?.orgWebsite}
            />
          </Col>
          <Col xxl={14} xl={16} lg={18} md={20} xs={20}>
            <CreateTicketForm domain={domain} />
          </Col>
        </>
      )}
    </SubmitTicketWrapper>
  );
};

export default SubmitTicket;
