import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      links={[
        {
          key: 'Admin',
          title: 'Admin',
          href: 'http://60.205.143.164:8000',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/zheergens/ant-design-admin-demo',
          blankTarget: true,
        },
        {
          key: 'Admin',
          title: 'Admin',
          href: 'http://60.205.143.164:8000',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
