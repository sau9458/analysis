import { combineReducers } from 'redux';
import getDetails from './reducer/reducer'
const rootReducer=()=>{
combineReducers({
    getDetails,
  });
}

  export default rootReducer;