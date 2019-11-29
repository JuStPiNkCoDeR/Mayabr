import sunny from './sunny.svg';
import rainy from './rainy.svg';
import cloudy from './cloudy.svg';
import semiSunny from './semiSunny.svg';
import thunder from './thunder.svg';
import rainySunny from './rainySunny.svg';

let types = [
    {
        svg: sunny,
        temperatureRange: [10, 30],
        pressureRange: [710, 790],
        windRange: [1, 15]
    },
    {
        svg: rainy,
        temperatureRange: [3, 17],
        pressureRange: [680, 750],
        windRange: [4, 20]
    },
    {
        svg: cloudy,
        temperatureRange: [7, 20],
        pressureRange: [730, 790],
        windRange: [2, 10]
    },
    {
        svg: semiSunny,
        temperatureRange: [5, 15],
        pressureRange: [720, 770],
        windRange: [4, 10]
    },
    {
        svg: thunder,
        temperatureRange: [3, 17],
        pressureRange: [690, 770],
        windRange: [4, 20]
    },
    {
        svg: rainySunny,
        temperatureRange: [3, 15],
        pressureRange: [680, 750],
        windRange: [3, 15]
    }
];

function random(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

export default function () {
    let index = Math.floor(Math.random() * types.length);
    let type = types[index];

    let temperature = random(type.temperatureRange[0], type.temperatureRange[1]);
    let pressure = random(type.pressureRange[0], type.pressureRange[1]);
    let wind = random(type.windRange[0], type.windRange[1]);

    return {
        icon: type.svg,
        temperature: temperature,
        pressure: pressure,
        wind: wind
    };
}