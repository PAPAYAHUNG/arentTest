import { isProduction } from "../constants/common";
// Empty function to do nothing on prod
/* eslint-disable @typescript-eslint/no-empty-function */
const Logger = {
  log: !isProduction ? console.log : () => {},
  error: !isProduction ? console.error : () => {},
};

export default Logger;
