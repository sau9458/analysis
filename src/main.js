import React from 'react';
import {Switch,BrowserRouter,Route} from 'react-router-dom';
import App from './App';
import DataAnalysis from './js/dataAnalysisController.js';
import WeatherAnalysis from './js/todayWeatherController.js';

const routes=(
    <BrowserRouter>
      <div>
        <Route path="/" component={App}s/>
         <Route path="/dataAnalysis" component={DataAnalysis} />
         <Route path="/weatherAnalysis" component={WeatherAnalysis} />
      </div>
    </BrowserRouter>
);
export default routes;
