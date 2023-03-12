import { css } from 'styled-components';

export const HIRAGINO_KAKU_GOTHIC = "'Noto Sans JP', sans-serif;";
export const INTER = "'Inter', sans-serif;";

export const THEME = {
  color: {
    light: '#FFFFFF',
    primary300: '#FFCC21',
    primary400: '#FF963C',
    primary500: '#EA6C00',
    secondary300: '#8FE9D0',
    primary300to400: 'linear-gradient(180deg, #FFCC21 0%, #FF963C 100%)',
    dark600: '#2E2E2E',
    dark500: '#414141',
    gray400: '#777777',
    borderGray: '#707070',
  },
  typo: {
    family: {
      hiraginoKakuGothic: HIRAGINO_KAKU_GOTHIC,
      inter: INTER,
    },
    style: {
      xlHeader: css`
        font-weight: 300;
        font-size: 32px;
        line-height: 46px;
      `,
      l3Header: css`
        font-weight: 400;
        font-size: 25px;
        line-height: 30px;
      `,
      l4Header: css`
        font-weight: 400;
        font-size: 22px;
        line-height: 27px;
      `,
      l2Header: css`
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
      `,
      l1Header: css`
        font-weight: 300;
        font-size: 18px;
        line-height: 26px;
      `,
      lHeader: css`
        font-weight: 300;
        font-size: 16px;
        line-height: 23px;
      `,
      small3ButtonOrLink: css`
        font-weight: 300;
        font-size: 15px;
        line-height: 22px;
      `,
      small2ButtonOrLink: css`
        font-weight: 400;
        font-size: 15px;
        line-height: 18px;
      `,
      small1ButtonOrLink: css`
        font-weight: 300;
        font-size: 14px;
        line-height: 20px;
      `,
      smallButtonOrLink: css`
        font-weight: 600;
        font-size: 12px;
        line-height: 20px;
      `,
      label1: css`
        font-weight: 300;
        font-size: 12px;
        line-height: 17px;
      `,
      label: css`
        font-weight: 300;
        font-size: 12px;
        line-height: 20px;
      `,
    },
  },
  metrics: {
    breakpoints: {
      xs: '375px',
      sm: '576px',
      md: '768px',
      lg: '960px',
      xl: '1280px',
      xxl: '1920px',
    },
    mediaQueries: {
      xs: `(max-width: 375px)`,
      sm: `(min-width: 376px) and (max-width: 576px)`,
      md: `(min-width: 577px) and (max-width: 768px)`,
      lg: `(min-width: 769px) and (max-width: 992px)`,
      xl: `(min-width: 993px) and (max-width: 1280px)`,
      xxl: `(min-width: 1281px)`,
    },
    containers: {
      padding: {
        xs: '16px',
        sm: '16px',
        md: '16px',
        lg: '48px',
        xl: '0',
      },
    },
  },
};

export default THEME;
