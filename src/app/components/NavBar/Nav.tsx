import * as React from 'react';
import styled from 'styled-components/macro';
import SearchBox from './SearchBox';
import Profile from './Profile';
import LanguageSwitch from './LanguageSwitch';
import ThemeSwicth from './ThemeSwicth';
import { Grid, Row, Col } from 'react-flexbox-grid';

export default function Nav() {
  return (
    <Row>
      <Col md={4}>
        <WarpperSearchBox>
          <SearchBox />
        </WarpperSearchBox>
      </Col>
      <Col md={8}>
        <BoxProfile>
          <WrapperPadding>
            <Profile />
          </WrapperPadding>
          <WrapperPadding>
            <LanguageSwitch />
          </WrapperPadding>
          <WrapperPadding>
            <ThemeSwicth />
          </WrapperPadding>
        </BoxProfile>
      </Col>
    </Row>
  );
}

const BoxProfile = styled.div`
  text-align: right;
  div {
    display: inline-block;
  }
`;

const WrapperPadding = styled.div`
  padding: 0px 10px;
  .ant-avatar {
    margin: 0px 4px;
  }
`;

const WarpperSearchBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
`;
