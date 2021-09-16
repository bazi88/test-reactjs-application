/**
 *
 * Content
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { Layout, Breadcrumb } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from 'react-router-dom';
import { SearchPage } from 'app/pages/SearchPage/Loadable';
import { AccountPage } from 'app/pages/AccountPage/Loadable';
interface Props {}


export const Content = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const { Content } = Layout;
  const { path, url } = useRouteMatch();

  return (
    <Div>
      <Content style={{ margin: '0 16px' }}>
        {/* <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Search Page</Breadcrumb.Item>
          <Breadcrumb.Item>Bill</Breadcrumb.Item>
        </Breadcrumb> */}
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360 }}
        >
          <Switch>
            <Route path={`${path}`} exact component={SearchPage} />
            <Route
              path={`${path}/:id/accounts`}
              exact
              component={AccountPage}
            />
          </Switch>
        </div>
      </Content>
    </Div>
  );
});

const Div = styled.div``;
