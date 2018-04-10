import React from 'react';
import {Switch,BrowserRouter,Route} from 'react-router-dom';
import App from './App';
import DataAnalysis from './js/dataAnalysisController.js';
import WeatherAnalysisData from './js/todayWeatherController.js';
import {Provider} from 'react-redux';
import store from './store';
const routes=(
  <Provider store={store}>
      <BrowserRouter>
      <div>
        <Route path="/" component={App}s/>
         <Route path="/dataAnalysis" component={DataAnalysis} />
         <Route path="/weatherAnalysis" component={WeatherAnalysisData} />
      </div>
    </BrowserRouter>
    </Provider>
);
export default routes;
