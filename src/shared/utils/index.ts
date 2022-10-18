import qs from 'qs';

const api = process.env.REACT_APP_API_URL;
export interface Config extends RequestInit {
  token?: string;
  data?: object;
}

/**
 * @param endpoint - the url endpoint
 * @param data - if 'GET', data will be added to query parameter, if 'POST', data will be added to the body
 * @param token - if need to process jwt authorization token
 * @param headers - custom header config
 * @param customConfig - other custom config
 * @return data - response data from API call, failed return promise.reject
 * @description - encapsulate the fetch to be more extendable
 */
export const http = (endpoint: string, { data, token, headers, ...customConfig }: Config) => {
  const config = {
    method: 'GET',
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
      'Content-Type': data ? 'application/json' : '',
    },
    ...customConfig,
  };

  if (config.method === 'GET') {
    endpoint += `?${qs.stringify(data)}`;
  } else {
    config.body = JSON.stringify(data);
  }

  return window.fetch(`${api}/${endpoint}`).then(async (response) => {
    if (response.status === 200) {
      return await response.json();
    } else {
      return Promise.reject(data);
    }
  });
};
