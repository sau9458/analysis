const API_KEY = "fded98ee180e8b7bd421adbdd446a3e6";

export const weatherApi = dataLogin => {
  return fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${dataLogin.city},${
      dataLogin.country
    }&appid=${API_KEY}`
  ).then(response => {
    if (response.status === 500) {
      return new Promise((resolve, reject) => {
        response.json().then(data => {
          reject(data);
        });
      });
    } else {
      return response.json();
    }
  });
};
