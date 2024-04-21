import { LOCAL_STORAGE_KEY } from 'settings/settings';

const getData = () => {
  const data = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (!data || !JSON.parse(data).length) return [];
  return JSON.parse(data);
};

const setData = data => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
};

const WEB_API = { getData, setData };
export default WEB_API;
