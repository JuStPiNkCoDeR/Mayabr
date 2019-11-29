//import { Russia } from "./cities";
import Transliter from './transliter';
import { cities } from '../towns';

export default {
    /*search(string) {
        let ans = new Set();
        let translit = Transliter(string);
        let firstLetter = translit.charAt(0).toUpperCase();
        let completeString = firstLetter.concat(translit.slice(1));

        for (let i = translit.length; i > 0 && ans.size < 10; i--) {
            let currentPart = completeString.slice(0, i);

            let cities = Russia.filter(city => {
                return city.name.match(currentPart);
            });

            if (cities.length > 0) {
                cities.forEach((city) => {
                   if (ans.size < 10) ans.add(city);
                })
            }
        }

        return ans;
    },*/
    searchRaw(string) {
        let cityLowerCase = string.toLowerCase();
        let firstLetter = cityLowerCase.charAt(0).toUpperCase();
        let completeString = firstLetter.concat(cityLowerCase.slice(1));

        return cities.filter(city => {
            return city.match(completeString);
        })
    },
    isExist(city) {
        let cityLowerCase = city.toLowerCase();
        let cityNameParts = cityLowerCase.split('-');
        let capitalizedParts = [];

        cityNameParts.forEach((part) => {
            let firstLetter = part.charAt(0).toUpperCase();
            capitalizedParts.push(firstLetter.concat(part.slice(1)));
        });

        let completeString = capitalizedParts.join('-');

        return cities.indexOf(completeString) !== -1;
    },
    searchAtWeathers(city, weathers) {
        let weatherData = weathers.filter(weather => {
            return weather.city.match(city);
        });

        return weatherData[0].weather;
    }
}