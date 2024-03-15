// https://ant.design/components/result

import React from 'react';
import { Button, Result } from 'antd';
const Error404 = () => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button aria-label="Tagasi esilehele" type="primary" href='/' rel="noopener">Tagasi esilehele</Button>}
  />
);
export default Error404;