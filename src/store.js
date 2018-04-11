import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './js/redux/reducer/reducer';
import thunk from 'redux-thunk';

const applyStore = applyMiddleware(thunk)(createStore);

const store = createStore(
    rootReducer,
     applyMiddleware(thunk)
   );

   export default store;
// export default function configureStore(state) {
//   const store = applyStore(rootReducer, state);

//   if (module.hot) {
//     // Enable Webpack hot module replacement for reducers
//     module.hot.accept('./js/redux/reducer/reducer', () => {
//       const nextReducer = require('./js/redux/reducer/reducer');
//       store.replaceReducer(nextReducer);
//     });
//   }

//   return store;
// }