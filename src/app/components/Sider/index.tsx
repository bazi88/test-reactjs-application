/**
 *
 * Sider
 *
 */
import React, { memo, useState } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

interface Props {}

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export const SiderComponent = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = collapsed => {
    console.log(collapsed);
    setCollapsed(() => (collapsed = false));
  };

  return (
    <Div>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <WarpperLogo className="logo">
          <h3>Accounts Management</h3>
        </WarpperLogo>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            <WarpperLink>
              <Link to="/home">Accounts Search</Link>
            </WarpperLink>
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Option 2
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="User">
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9" icon={<FileOutlined />}>
            Files
          </Menu.Item>
        </Menu>
      </Sider>
    </Div>
  );
});

const Div = styled.div`
  background-color: ${p => p.theme.background};
  .wrap-slider {
    background-color: ${p => p.theme.background};
  }
`;
const WarpperLogo = styled.div`
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h3 {
    color: ${p => p.theme.leadColor} !important;
    margin: 0px;
  }
`;
const WarpperLink = styled.div`
 
`