/**
 *
 * Header
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { Layout } from 'antd';
import LanguageSwitch from 'app/components/Navbar/LanguageSwitch';
import Profile from 'app/components/Navbar/Profile';
interface Props {}

export const Header = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const { Header } = Layout;

  return (
    <Div>
      <Header className="site-layout-background" style={{ padding: 0 }}>
        <BoxProfile>
          <Profile />
          <LanguageSwitch />
        </BoxProfile>
      </Header>
      {t('')}
      {/*  {t(...messages.someThing())}  */}
    </Div>
  );
});

const Div = styled.div``;
const BoxProfile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;
