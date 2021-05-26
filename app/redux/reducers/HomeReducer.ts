import {
  ON_SUCCESS_ALBUMS
} from '../types';

const initialState = {
  selectedPhotoUrl: '',
};

const HomeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ON_SUCCESS_ALBUMS:
      return {
        ...state,
        albums: action.payload,
      };
    default:
      return state;
  }
};

export default HomeReducer;
