/**
 *
 * Layout
 *
 */
import React, { memo, useState } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { Layout } from 'antd';
import { SiderComponent } from '../Sider';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Content } from '../Content';
import { Affix, Button, Tooltip, Menu, Dropdown } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import { themeActions } from 'styles/theme/slice';
import { useSelector, useDispatch } from 'react-redux';
import { ThemeKeyType } from 'styles/theme/slice/types';

interface Props {}

export const LayoutComponent = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const [defaultLanguage, setDefaultLanguage] = useState([
    { id: 1, name: 'light' },
    { id: 2, name: 'dark' },
  ]);
  const onClick = ({ key }) => {
    const themeSelect = defaultLanguage.find(items => +items.id === +key);
    dispatch(themeActions.changeTheme(themeSelect?.name as ThemeKeyType));
  };

  const menu = (
    <Menu onClick={onClick}>
      <Menu.Item key="1"> {t(messages.lightTheme())}</Menu.Item>
      <Menu.Item key="2">{t(messages.darkTheme())}</Menu.Item>
    </Menu>
  );

  return (
    <Div>
      <Layout style={{ minHeight: '100vh' }}>
        <SiderComponent />
        <Layout className="site-layout">
          <Header />
          <Content />
          <Footer />
          <WrapAffix>
            <Affix offsetBottom={10}>
              <Dropdown overlay={menu} placement="topRight">
                <Button shape="circle" size="large" icon={<GlobalOutlined />} />
              </Dropdown>
            </Affix>
          </WrapAffix>
        </Layout>
      </Layout>
    </Div>
  );
});

const Div = styled.div``;
const WrapAffix = styled.div`
  position: absolute;
  bottom: 0px;
  right: 20px;
`;
