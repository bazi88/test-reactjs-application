/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { memo, useState } from 'react';
import styled from 'styled-components/macro';
import { Menu, Dropdown, message } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { themeActions } from 'styles/theme/slice';
import { useSelector, useDispatch } from 'react-redux';
import { ThemeKeyType } from 'styles/theme/slice/types';

const ThemeSwicth = memo(() => {
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
    <Dropdown overlay={menu}>
      <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
        {t(messages.changeTheme())} <DownOutlined />
      </a>
    </Dropdown>
  );
});

export default ThemeSwicth;
