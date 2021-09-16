/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { Menu, Dropdown, message } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import i18next from 'i18next';

const LanguageSwitch = memo(() => {
  const { t, i18n } = useTranslation();

  const onClick = ({ key }) => {
    i18n.changeLanguage(key);
  };
  const menu = (
    <Menu onClick={onClick}>
      <Menu.Item key="en"> {t(messages.english())}</Menu.Item>
      <Menu.Item key="vi">{t(messages.vietnam())}</Menu.Item>
    </Menu>
  );
  return (
    <BoxLanguageSwitch>
      <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          {t(messages.changeLanguage())} <DownOutlined />
        </a>
      </Dropdown>
    </BoxLanguageSwitch>
  );
});

export default LanguageSwitch;

const BoxLanguageSwitch = styled.div`
  margin-left: 20px;
  width: auto;
  text-align: right;
`;
