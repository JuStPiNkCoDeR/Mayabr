import weather from '../js/weather';

describe('Weather', () => {
    it('get weather', () => {
        for (let i = 0; i < 10; i++) {
            console.log(weather());
        }
    })
});