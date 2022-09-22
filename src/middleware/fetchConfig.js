import axios from 'axios';

const rest_url = 'https://jsonplaceholder.typicode.com/kk';

const fetchConfig = (method, url, data, prep) => {
  const config = {
    method,
    url: `${rest_url}/${url}${data ? data : ''}`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: prep && JSON.stringify(prep),
  };
  return axios(config);
};

export default fetchConfig;
