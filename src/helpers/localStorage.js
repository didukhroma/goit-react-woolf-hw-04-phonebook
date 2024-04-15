const getData = key => {
  const data = localStorage.getItem(key);
  if (!data || !JSON.parse(data).length) return null;
  return JSON.parse(data);
};

const setData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const WEB_API = { getData, setData };
export default WEB_API;
