'use strict';

const page1 = document.querySelector('#btn');
const page2 = document.querySelector('#btn2');
const page3 = document.querySelector('#btn3');
const page4 = document.querySelector('#btn4');
const page5 = document.querySelector('#btn5');
const albumOutput = document.getElementById('output');

page1.addEventListener('click', () => {
  getAlbum1()
    .then((albums) => {
      console.log(albums);
      renderAlbums(albums);
    })
    .catch((error) => {
      console.log('Error', error);
    });
});

page2.addEventListener('click', () => {
  getAlbum2()
    .then((albums) => {
      console.log(albums);
      renderAlbums(albums);
    })
    .catch((error) => {
      console.log('Error', error);
    });
});

page3.addEventListener('click', () => {
  getAlbum3()
    .then((albums) => {
      console.log(albums);
      renderAlbums(albums);
    })
    .catch((error) => {
      console.log('Error', error);
    });
});

page4.addEventListener('click', () => {
  getAlbum4()
    .then((albums) => {
      console.log(albums);
      renderAlbums(albums);
    })
    .catch((error) => {
      console.log('Error', error);
    });
});

page5.addEventListener('click', () => {
  getAlbum5()
    .then((albums) => {
      console.log(albums);
      renderAlbums(albums);
    })
    .catch((error) => {
      console.log('Error', error);
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