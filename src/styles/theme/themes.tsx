const lightTheme = {
  primary: 'rgba(215,113,88,1)',
  text: 'rgba(58,52,51,1)',
  textSecondary: 'rgba(58,52,51,0.7)',
  background: 'rgba(255,255,255,1)',
  backgroundVariant: 'rgba(251,249,249,1)',
  border: 'rgba(58,52,51,0.12)',
  borderLight: 'rgba(58,52,51,0.05)',
  leadColor: 'rgba(15,82,186,1)',
  textHover: 'rgba(0,0,0, 1)',
  grayDark: 'rgba(242,242,242, 1)',
  backgroundBold: 'rgba(15,82,186,1)',
  linkActive: 'rgba(15,82,186,1)',
  lightActive: 'rgba(255, 255, 255, 1)',
};

const darkTheme: Theme = {
  primary: 'rgba(220,120,95,1)',
  text: 'rgba(241,233,231,1)',
  textSecondary: 'rgba(241,233,231,0.6)',
  background: 'rgba(31,29,43,1)',
  backgroundVariant: 'rgba(28,26,26,1)',
  border: 'rgba(241,233,231,0.15)',
  borderLight: 'rgba(241,233,231,0.05)',
  leadColor: 'rgba(225,225,255,1)',
  textHover: 'rgba(68,69,80, 1)',
  grayDark: 'rgba(53,52,64, 1)',
  backgroundBold: 'rgba(0,0,0,1)',
  linkActive: 'rgba(53,52,64, 1)',
  lightActive: 'rgba(255, 255, 255, 1)',
};

export type Theme = typeof lightTheme;

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};
