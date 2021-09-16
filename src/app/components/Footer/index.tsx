/**
 *
 * Footer
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { Layout } from 'antd';

interface Props {}

export const Footer = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const { Footer } = Layout;

  return (
    <Div>
      <Footer style={{ textAlign: 'center' }}>
        Money forward ©2021 Created by Qu Nguyen
      </Footer>
    </Div>
  );
});

const Div = styled.div``;
