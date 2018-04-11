import * as constants from "../constants";
export default function getDetails(state = {}, action) {
  return action.type === constants.SUCCESS_WEATHER
    ? { getDetails: action.payload }
    : state;
}
