import React, { FC } from 'react';
import Avatar from 'components/Base/Avatar/Avatar';
import { Icon, EIconNames } from 'components/Base/Icon';
import { Link, Title } from 'components/Base/Typography';
import { Colors, FontWeights } from 'core/CssVariables';
import { Row, Col } from 'components/Base/Grid/Grid';
import { TSettingsGetUi } from 'data/types/ClinetPortal.type';
import { addHttpPrefixToUrl } from 'redux/helpers/utils';

type TOrganizationInfoProps = {
  logoUrl?: TSettingsGetUi['orgLogoUrl'];
  name?: TSettingsGetUi['orgName'];
  website?: TSettingsGetUi['orgWebsite'];
};

const OrganizationInfo: FC<TOrganizationInfoProps> = ({
  logoUrl,
  name,
  website,
}) => {
  return (
    <Row align="middle" gutter={[32, 24]} className="pt-6">
      <Col>
        <Avatar src={logoUrl} size={150} color={Colors.LightBackground}>
          {logoUrl || (
            <Icon size={46} icon={EIconNames.PERSON} color={Colors.LightGrey} />
          )}
        </Avatar>
      </Col>
      <Col>
        <Title
          fontlevel={3}
          fontWeight={FontWeights.SemiBold}
          className="mb-3"
          color={Colors.DarkBorderColor}
        >
          {name}
        </Title>
        {website && (
          <Link
            href={addHttpPrefixToUrl(website)}
            fontlevel={5}
            fontWeight={FontWeights.Regular}
            color={Colors.DarkBorderColor}
            target="_blank"
          >
            <Icon
              size={16}
              icon={EIconNames.EARTH}
              color={Colors.Grey}
              className="mr-2"
            />
            {website}
          </Link>
        )}
      </Col>
    </Row>
  );
};

export default OrganizationInfo;
