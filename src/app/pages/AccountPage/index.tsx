/**
 *
 * AccountPage
 *
 */
import React, { memo, useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { Table } from 'antd';
import {useAccountSliceSlice } from './slice';
import { useSelector, useDispatch } from 'react-redux';
import { selectAccountSlice } from './slice/selectors';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import {Accounts} from 'models/response/Account';
interface Props {}

const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
  },
  {
    title: 'Balance',
    dataIndex: 'balance',
    key: 'balance:',
  },
];

export const AccountPage = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const { actions } = useAccountSliceSlice();
  const dispatch = useDispatch();
  const { listAccount } = useSelector(selectAccountSlice);
  const [dataSource, setDataSource] = useState([]);
  let { id } = useParams() as any;

  useEffect(() => {
    dispatch(actions.getAccount({id}));
  }, [id]);

  useEffect(() => {
    const dataSource = listAccount.map(items => items.attributes) as any;
    setDataSource(dataSource);
  }, [listAccount.length])
  return (
    <Div>
      {t('')}
      <Table dataSource={dataSource} columns={columns} />;

      {/*  {t(...messages.someThing())}  */}
    </Div>
  );
});

const Div = styled.div``;
