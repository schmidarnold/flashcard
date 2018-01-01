import {createStore, applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from "../reducers";
import {loadState,saveState} from "./api";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middleWare = applyMiddleware(

  thunk,
);
export const initStore = () => loadState().then(data=>{

  console.log("init Store, load data")
  if(data && data.length){
    console.log("init Store, load existing data")
   const store = createStore(
    reducer,
    persistedState,
    composeEnhancers(middleWare)
  )}else{
    const store = createStore(
      reducer,
      composeEnhancers(middleWare)

    )
    //if i pass back the store here, everything is ok, why
    //the commands outside the if will not be executed
    console.log("redux Store else")
  }
  console.log("redux Store: " + JSON.stringify(store.getState()))
  return {store}
  const saveStorageHandler = () => {
    console.log("handling save store")
    saveState(store.getState())
  }
  store.subscribe(saveStorageHandler)
console.log("returning data")
return {store}
}


);



// export default function configureStore(){
//   return createStore(
//     reducer,
//     persistedState,
//     composeEnhancers(middleWare)
//   )
// }
