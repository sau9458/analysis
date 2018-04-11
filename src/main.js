import React from 'react';
import {Switch,HashRouter,Route} from 'react-router-dom';
import App from './App';
import DataAnalysis from './js/dataAnalysisController.js';
import WeatherAnalysisData from './js/todayWeatherController.js';
import {Provider} from 'react-redux';
import store from './store';
const routes=(
  <Provider store={store}>
      <HashRouter>
      <div>
        <Route path="/" component={App}s/>
         <Route path="/dataAnalysis" component={DataAnalysis} />
         <Route path="/weatherAnalysis" component={WeatherAnalysisData} />
      </div>
    </HashRouter>
    </Provider>
);
export default routes;
