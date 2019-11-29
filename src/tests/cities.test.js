import Searcher from '../js/searcher';
import towns from '../js/towns';

describe('Cities', () => {
   it('find correctly', () => {
       let search = ['москва', "омск", "воронеж", "томск"];
       let ans = new Set();

       search.forEach((city) => {
           ans = Searcher.search(city);

           let mostGoodCity = {};

           ans.forEach((city) => {
               if (city.population) {
                   if (mostGoodCity.population < city.population) mostGoodCity = city;
               } else mostGoodCity = city;
           });

           console.log(mostGoodCity);
       });
   });
   it('fetch data from Wiki', () => {
       towns.test()
           .then(result => console.log(result));
   });
   it('search raw correctly', () => {
       let search = ['мос', "омск", "воронеж", "томск"];

       search.forEach(city => {
           console.log(Searcher.searchRaw(city));
       })
   });
});