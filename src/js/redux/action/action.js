import * as fireAction from "../../../services";
import * as constants from "../constants";
import * as actions from "../action";

function getDetails(dataLogin) {
  return fireAction.weatherApi(dataLogin);
}

export function requestWeather(dataLogin) {
  return function(dispatch) {
    getDetails(dataLogin).then(res => {
      dispatch(actions.successWeather(res));
    });
  };
}
