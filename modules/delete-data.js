import { getLocalStorageData } from './load-data.js';

export default deleteBooks = (key, awesomeBook) => {
  const data = JSON.parse(localStorage.getItem('bookdata'));
  if (data != null && data.length > 0) {
    const item = data[key];
    const newData = data.filter((ele) => ele !== item);
    localStorage.setItem('bookdata', JSON.stringify(newData));
    getLocalStorageData(awesomeBook);
  }
  window.location.reload(true);
};