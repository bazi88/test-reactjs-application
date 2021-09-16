import { createGlobalStyle } from 'styled-components';
import { Theme } from './theme/themes';

export const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  html,
  body {
    height: 100%;
    width: 100%;
    background-color: ${props => props.theme.background};
  }

  a {
    color : ${props => props.theme.text};
    &:hover {
      color : ${props => props.theme.textHover};
    }
  }
  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #root {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
    background-color: ${p => p.theme.grayDark} !important;
  }

  button {
    background: ${p => p.theme.grayDark} !important;
    border: 1px solid ${p => p.theme.border} !important; 
    color: ${p => p.theme.border} !important;
  }

  .ant-input-affix-wrapper {
    background-color: ${p => p.theme.grayDark}
  }
  
  .ant-layout-header {
    background: ${p => p.theme.background}
  }

  .ant-layout-sider-children {
    background: ${p => p.theme.background}
  }
  .ant-menu.ant-menu-dark, .ant-menu-dark .ant-menu-sub, .ant-menu.ant-menu-dark .ant-menu-sub {
    background: ${p => p.theme.background}
  }
  .ant-layout-sider {
    background: ${p => p.theme.background}
  }
  .ant-dropdown-menu {
    background: ${p => p.theme.background}
  }
  .ant-layout-sider-trigger {
    background: ${p => p.theme.backgroundBold}
  }
  span {
    color: ${p => p.theme.text}
  }
  .ant-menu-dark.ant-menu-dark:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background: ${p => p.theme.linkActive}
  }
  span svg {
    color: ${p => p.theme.text}
  }
  .ant-menu-item-selected span svg {
    color: ${p => p.theme.lightActive}
  }
  .ant-layout-sider-trigger span svg path {
    color: ${p => p.theme.lightActive}
  }
  .ant-menu-title-content a {
    color: ${p => p.theme.text}
  }
`;
