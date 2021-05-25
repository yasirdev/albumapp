import { compose, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";


const middlewares = [thunk];
export default function configureStore() {
  const enhancer = compose(applyMiddleware(...middlewares));

  const store = createStore(reducer, enhancer);
  type AppDispatch = typeof store.dispatch // <-- get the type from store
  return { store };
}
