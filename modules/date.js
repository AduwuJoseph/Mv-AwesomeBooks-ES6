import { DateTime } from './luxon.js';

const currentDate = () => {
  document.querySelector('.date').innerHTML = DateTime.local().toLocaleString(DateTime.DATETIME_FULL);
  setTimeout(currentDate, 1000);
};

export default currentDate;