import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';

import './App.css';
import AppHeader from './components/common/header';

const { Header } = Layout;

function App() {
  return (
    <Layout className="layout">
      <Header>
        <AppHeader />
      </Header>
    </Layout>
  );
}

export default App;
