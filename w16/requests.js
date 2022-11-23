'use strict';

const getAlbum1 = async () => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/albums?_start=0&_limit=20'
  );

  if (response.status === 200) {
    const albums = await response.json();
    return albums;
  } else {
    throw new Error('Unable to fetch album data');
  }
};

const getAlbum2 = async () => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/albums?_start=20&_limit=20'
  );

  if (response.status === 200) {
    const albums = await response.json();
    return albums;
  } else {
    throw new Error('Unable to fetch album data');
  }
};

const getAlbum3 = async () => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/albums?_start=40&_limit=20'
  );

  if (response.status === 200) {
    const albums = await response.json();
    return albums;
  } else {
    throw new Error('Unable to fetch album data');
  }
};

const getAlbum4 = async () => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/albums?_start=60&_limit=20'
  );

  if (response.status === 200) {
    const albums = await response.json();
    return albums;
  } else {
    throw new Error('Unable to fetch album data');
  }
};

const getAlbum5 = async () => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/albums?_start=80&_limit=20'
  );

  if (response.status === 200) {
    const albums = await response.json();
    return albums;
  } else {
    throw new Error('Unable to fetch album data');
  }
};