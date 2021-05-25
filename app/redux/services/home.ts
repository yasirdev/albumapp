export function getAlbums() {
  fetch(
    `user/device-token`,
    {
      method: 'GET',
      headers: {
      },
    },
  )
    .then(res => {
      console.log(res);
    })
    .catch(err => console.log(err))
}
