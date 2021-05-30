import { getAlbums, getPhotos, getUsers } from "../home";
import getAlbumResponse from '../__test__/getAlbum.json'
import getPhotoResponse from '../__test__/getPhoto.json'
import getUserResponse from '../__test__/getUser.json'
beforeEach(() => {
  fetch.resetMocks();
});
it("Get Albumbs successfully", async () => {
  fetch.mockResponseOnce(JSON.stringify(getAlbumResponse));

  const albumsResult = await getAlbums(1);
  expect(albumsResult).toEqual(getAlbumResponse);
  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith(
    "https://jsonplaceholder.typicode.com/users/1/albums/", { "headers": {}, "method": "GET" }
  );
});


it("catches errors and returns failed response in get albumbs", async () => {
  fetch.mockReject(() =>
    Promise.reject({
      data: 'API Fail',
    }),
  );
  try {
    const albumsResult = await getAlbums(1);
  } catch (error) {
    expect(error).toEqual({ data: 'API Fail' });
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/users/1/albums/", { "headers": {}, "method": "GET" }
    );
  }


});



it("Get Photo successfully", async () => {
  fetch.mockResponseOnce(JSON.stringify(getPhotoResponse));

  const photoResult = await getPhotos(1);
  expect(photoResult).toEqual(getPhotoResponse);
  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith(
    "https://jsonplaceholder.typicode.com/albums/1/photos/", { "headers": {}, "method": "GET" }
  );
});



it("catches errors and returns failed response in get photo", async () => {
  fetch.mockReject(() =>
    Promise.reject({
      data: 'API Fail',
    }),
  );
   try {
    const photoResult = await getPhotos(1);
  } catch (error) {
    expect(error).toEqual({ data: 'API Fail' });
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/albums/1/photos/", { "headers": {}, "method": "GET" }
    );
   
  }


});


it("Get User successfully", async () => {
  fetch.mockResponseOnce(JSON.stringify(getUserResponse));

  const usersResult = await getUsers();
  expect(usersResult).toEqual(getUserResponse);
  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith(
    "https://jsonplaceholder.typicode.com/users", { "headers": {}, "method": "GET" }
  );
});


it("catches errors and returns failed response in get user", async () => {
  fetch.mockReject(() =>
    Promise.reject({
      data: 'API Fail',
    }),
  );
  try {
    const usersResult = await getUsers();

  } catch (error) {
    expect(error).toEqual({ data: 'API Fail' });
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/users", { "headers": {}, "method": "GET" }
    );
  }


});



