import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { ConfigProvider, Layout, Menu, theme } from 'antd';
import React, { useState } from 'react';
import BaseLayout from './component/BaseLayout';
const { Header, Sider, Content } = Layout;

const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#00b96b',
          borderRadius: 15
        },
      }}
    >
      <BaseLayout></BaseLayout>
    </ConfigProvider>

  );
};
export default App;