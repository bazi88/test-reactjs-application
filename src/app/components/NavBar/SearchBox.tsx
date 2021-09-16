import * as React from 'react';
import styled from 'styled-components/macro';
import { Input, Space } from 'antd';

const { Search } = Input;

export default function SearchBox() {
  const onSearch = value => console.log(value);

  return (
    <Search
      placeholder="input search text"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
    />
  );
}
