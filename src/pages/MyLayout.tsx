import React, { useState } from "react";
import {
  DesktopOutlined,
  DownOutlined,
  FileOutlined,
  LogoutOutlined,
  PieChartOutlined,
  SmileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme, Dropdown } from "antd";
import logo from "../assets/logo.png";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

function onSideItemClick(info: MenuInfo) {
  console.log(info);
}

const sideItems: MenuItem[] = [
  getItem("User", "user", <UserOutlined />, [
    getItem("Tom", "/user/tom"),
    getItem("Bill", "user/bill"),
  ]),
  getItem("Team", "team", <TeamOutlined />, [
    getItem("Team 1", "/team/team1"),
    getItem("Team 2", "/team/team2"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        个人中心
      </a>
    ),
    icon: <SmileOutlined />,
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        退出登录
      </a>
    ),
    icon: <LogoutOutlined />,
    disabled: false,
  },
];

const MyLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh", width: "100vw" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="logoImage">
          <img src={logo} />
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={["user"]}
          mode="inline"
          items={sideItems}
          onClick={(item, key, keyPath, domEvent) => {
            onSideItemClick(key);
          }}
        />
      </Sider>
      <Layout>
        <Header className="header">
          <div>This is header</div>
          <Dropdown className="usercenter" menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
              <img src={logo} className="dropimg" />
              {/* <DownOutlined /> */}
            </a>
          </Dropdown>
        </Header>
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 460,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            Bill is a cat.
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MyLayout;
