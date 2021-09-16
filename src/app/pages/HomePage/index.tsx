import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { Navbar } from 'app/components/Navbar';
import { LayoutComponent } from '../../components/Layout';

export function HomePage() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      {/* <span>{t(messages.routingDescription())}</span> */}
      {/* <Navbar></Navbar> */}
      <LayoutComponent />
    </>
  );
}
