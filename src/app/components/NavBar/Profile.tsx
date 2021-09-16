/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { Avatar, Image } from 'antd';
import { UserOutlined, DownOutlined } from '@ant-design/icons';
import { Menu, Dropdown } from 'antd';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { useLoginPageSlice } from 'app/pages/Authentication/LoginPage/slice';
import { useSelector, useDispatch } from 'react-redux';

const Profile = memo(() => {
  const dispatch = useDispatch();
  const { actions } = useLoginPageSlice();

  const { t, i18n } = useTranslation();

  const onClick = ({ key }) => {
    if (key === 'signOut') {
      dispatch(actions.logOut({ payload: '' }));
    }
  };

  const menu = (
    <Menu onClick={onClick}>
      {/* <Menu.Item key="0">{t(messages.setting())}</Menu.Item>
      <Menu.Divider /> */}
      <Menu.Item key="signOut">{t(messages.signOut())}</Menu.Item>
    </Menu>
  );
  return (
    <Warp>
      <Avatar icon={<UserOutlined />} />
      <Dropdown overlay={menu} trigger={['click']}>
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          Amee Nguyen
          <DownOutlined />
        </a>
      </Dropdown>
    </Warp>
  );
});

export default Profile;

const Warp = styled.div`
  width: 150px;
  text-align: right;
`;
