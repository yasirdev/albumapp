import { combineReducers } from 'redux';
import home from './HomeReducer';

const AppReducer = combineReducers({
  home,
});

export type RootState = ReturnType<typeof AppReducer>

export default AppReducer;
