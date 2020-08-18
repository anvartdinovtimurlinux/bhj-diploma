'use strict';
/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
  const xhr = new XMLHttpRequest;
  xhr.withCredentials = true;
  xhr.responseType = options.responseType;

  const formData = new FormData();
  const queryStringArr = [];
  for (let param in options.data) {
    queryStringArr.push(`${param}=${options.data[param]}`);
    formData.append(param, options.data[param]);
  }

  const url = options.method === 'GET' 
    ? options.url + '?' + queryStringArr.join('&') 
    : options.url;

  if (options.headers) {
    for (let header in options.headers) {
      xhr.setRequestHeader(header, options.headers[item]);
    }
  }

  xhr.open(options.method, url);

  xhr.addEventListener('error', () => {
    options.callback(new Error(xhr.status), null);
  });
  xhr.addEventListener('load', () => {
    options.callback(null, xhr.response);
  });

  if (options.method === 'GET') {
    xhr.send();
  } else {
    xhr.send(formData);
  };
};
