import {createStore, applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from "../reducers";
import {persistStore, persistCombineReducers} from 'redux-persist'
import storage from 'redux-persist/es/storage'

const config = {
  key: 'FLASH_CARD_STORAGE',
  storage,
}

const combiReducer = persistCombineReducers(config,reducer)
export default function configureStore(){
  let store = createStore(combiReducer)
  let persistor = persistStore(store)
  return {persistor, store}
}

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// const middleWare = applyMiddleware(
//
//   thunk,
// );
// const middlewares = [];
// export default function configureStore(){
//   return createStore(
//     reducer,
//     undefined,
//     compose(
//       applyMiddleware(
//         ...middlewares
//       ),
//       autoRehydrate()
//     )
//   );
// }

 // export default function configureStore(){
 //   return createStore(
 //     reducer,
 //     persistedState,
 //     composeEnhancers(middleWare)
 //   )
 // }
