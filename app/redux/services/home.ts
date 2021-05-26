
export function getAlbums(userId: number) {
  return new Promise((resolve, reject) => {
    fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}/albums/`,
      {
        method: 'GET',
        headers: {
        },
      },
    )
      .then(res => res.json())
      .then(res => {
        if (res) resolve(res)
        else reject(res)
      })
      .catch(err => reject(err))
  })
}
export function getPhotos(albumId: number) {
  return new Promise((resolve, reject) => {
    fetch(
      `https://jsonplaceholder.typicode.com/albums/${albumId}/photos/`,
      {
        method: 'GET',
        headers: {
        },
      },
    )
      .then(res => res.json())
      .then(res => {
        if (res) resolve(res)
        else reject(res)
      })
      .catch(err => reject(err))
  })
}

export function getUsers() {
  return new Promise((resolve, reject) => {
    fetch(
      `https://jsonplaceholder.typicode.com/users`,
      {
        method: 'GET',
        headers: {
        },
      },
    )
      .then(res => res.json())
      .then(res => {
        if (res) resolve(res)
        else reject(res)
      })
      .catch(err => reject(err))
  })
}
