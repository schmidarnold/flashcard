import {createStore, applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from "../reducers";
import {loadState,saveState} from "./api";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middleWare = applyMiddleware(

  thunk,
);
const persistedState = loadState();

export const store = createStore(
  reducer,
  persistedState,
  composeEnhancers(middleWare)
)
store.subscribe(()=> {
  saveState(store.getState())
})

// export default function configureStore(){
//   return createStore(
//     reducer,
//     persistedState,
//     composeEnhancers(middleWare)
//   )
// }
