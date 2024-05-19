import React, { useState } from "react";
import {
  FileOutlined,
  LogoutOutlined,
  SmileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme, Dropdown } from "antd";
import logo from "../assets/logo.png";
import { Link, Outlet, useNavigate } from "react-router-dom";

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

const items = [
  {
    key: "1",
    label: <Link to>个人中心</Link>,
    icon: <SmileOutlined />,
  },
  {
    key: "2",
    label: (
      <a target="_blank" rel="noopener noreferrer">
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

  const navigate = useNavigate();
  function onSideItemClick(e: any) {
    console.log(e);
    navigate(e.key);
  }

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
          onClick={(e) => {
            onSideItemClick(e);
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

          <Outlet />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MyLayout;
