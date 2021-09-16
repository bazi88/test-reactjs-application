/**
 *
 * SearchPage
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { Input, Space } from 'antd';
import { useSearchSliceSlice } from './slice';
import { selectSearchSlice } from './slice/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { Table } from 'antd';

const { Search } = Input;

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
    render: (text, record, index)=> {
      return <AHref href={'/home/' + record.id + '/accounts'}>{text}</AHref>;
    },
  },
  {
    title: 'Accounts Id',
    dataIndex: 'account_ids',
    key: 'account_ids',
  },
];

export const SearchPage = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const { actions } = useSearchSliceSlice();
  const { detailsUser } = useSelector(selectSearchSlice);
  const dispatch = useDispatch();

  const onSearch = (value: string) => {
    dispatch(actions.getDetailsAccounts({ idSearch: value }));
  };

  return (
    <Div>
      {t('')}
      <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      />
      <DivMt>
        <Table dataSource={detailsUser} columns={columns} />
      </DivMt>
      {/*  {t(...messages.someThing())}  */}
    </Div>
  );
});

const Div = styled.div``;
const DivMt = styled.div`
  margin-top: 16px;
`;
const AHref = styled.a`
  color: blue;
`