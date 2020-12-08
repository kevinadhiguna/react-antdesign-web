import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";

import "./App.css";

const { Header } = Layout;

function App() {
    return (
        <Layout className="layout">
            <Header>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={["2"]}
                >
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
            </Header>
        </Layout>
    );
}

export default App;
