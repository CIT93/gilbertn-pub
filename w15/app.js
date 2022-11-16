'use strict';

const button = document.querySelector('#render');
const albumOutput = document.getElementById('output');

button.addEventListener('click', () => {
  getAlbum((error, albums) => {
    if (error) {
      console.log(error);
    } else {
      console.log(albums);
      renderAlbums(albums);
    }
  });
});

const renderAlbums = (data) => {
  albumOutput.innerHTML = '';
  data.forEach((album) => {
    const albumList = document.createElement('p');
    albumList.innerHTML = `<u>User ID</u>: <b>${album.userId}</b>. <u>ID</u>: <b>${album.id}</b>. <u>Album Title</u>: <b>${album.title}</b>`;
    albumOutput.appendChild(albumList);

    const line = document.createElement('hr');
    albumOutput.appendChild(line);
  });
};