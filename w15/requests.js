'use strict';

const getAlbum = (callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText);
      callback(undefined, data);
    } else if (e.target.readyState === 4) {
      callback('An error occured', undefined);
    }
  });

  request.open('GET', 'https://jsonplaceholder.typicode.com/albums');
  request.send();
};