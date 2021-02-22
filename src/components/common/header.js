import React, {useState} from 'react';
import { Anchor, Drawer, Button, Menu } from 'antd';

const { Link } = Anchor;

function AppHeader() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => setVisible(true);

  const onClose = () => setVisible(false); 

  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
            <i className="fas fa-bolt"></i>
            <a href="https://google.com">React Antd</a>
        </div>
        <Menu mode="horizontal" defaultSelectedKeys={['home']}>
          <Menu.Item key="home">Home</Menu.Item>
          <Menu.Item key="about">About</Menu.Item>
          <Menu.Item key="features">Features</Menu.Item>
          <Menu.Item key="howitworks">How It Works</Menu.Item>
          <Menu.Item key="faq">FAQ</Menu.Item>
          <Menu.Item key="pricing">Pricing</Menu.Item>
          <Menu.Item key="contact">Contact</Menu.Item>
        </Menu>
      </div>
    </div>
  );
}

export default AppHeader;
