import React from 'react';
import { Col, Row } from 'components/Base/Grid/Grid';
import { Icon, EIconNames } from 'components/Base/Icon';
import { Text } from 'components/Base/Typography';

export const UploadButton = () => {
  return (
    <Row align="middle">
      <Col span={24}>
        <Icon icon={EIconNames.PLUS} size={24} />
      </Col>
      <Col span={24}>
        <Text fontlevel={6}>Upload</Text>
      </Col>
    </Row>
  );
};

export default UploadButton;
