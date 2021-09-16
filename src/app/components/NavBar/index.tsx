/**
 *
 * Navbar
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import Nav from './Nav';
import Logo from './Logo';
import { Grid, Row, Col } from 'react-flexbox-grid';

interface Props {}

export const Navbar = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <WrapNavBar>
      <Grid fluid>
        <Row>
          <Col xs={12} md={2}>
            <Logo />
          </Col>
          <Col xs={12} md={10}>
            <Nav />
          </Col>
          {t('')}
          {/*  {t(...messages.someThing())}  */}
        </Row>
      </Grid>
    </WrapNavBar>
  );
});

const WrapNavBar = styled.div`
  width: 100%;
  background-color: ${props => props.theme.lightTheme};
  height: 75px;
  .container-fluid {
    line-height: 75px;
    height: 100%;
  }
`;
