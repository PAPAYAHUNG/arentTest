import { REACT_APP_PUBLIC_ARENT_DOMAIN } from './env';

export const API_URL = () => {
//   const baseUrl = `${REACT_APP_PUBLIC_ARENT_DOMAIN}`;
  const baseUrl = process.env.REACT_APP_PUBLIC_ARENT_DOMAIN

  return {
    banner: `${baseUrl}/mockData.json`,
    listings: `${baseUrl}/listings`,
  };
};
