import { DateTime } from './luxon.js';

export const currentDate = () => {
  document.querySelector('.date').innerHTML = DateTime.local().toLocaleString(DateTime.DATETIME_FULL);
  setTimeout(currentDate, 1000);
};