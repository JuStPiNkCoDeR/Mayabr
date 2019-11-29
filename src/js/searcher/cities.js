const worldCities = require('all-the-cities');

export const Russia = worldCities.filter((city) => {
    return city.country === 'RU';
});