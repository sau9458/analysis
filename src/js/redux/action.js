import { createAction } from 'redux-actions';
import * as constants from "./constants";
export const requestWeather = createAction(constants.REQUEST_WEATHER);
export const successWeather = createAction(constants.SUCCESS_WEATHER);
export const errorWeather = createAction(constants.ERROR_WEATHER);