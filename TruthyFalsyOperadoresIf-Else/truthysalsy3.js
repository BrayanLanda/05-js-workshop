'use strict'
const functionMain = function(weather, space, weight){
    
    const articles = [];

    if (weather === 'lluvia') {
        if (space > 0 && weight >= 0.5) {
          articles.push('sombrilla');
          space -= 1;
          weight -= 0.5;
        }
      }
      
    if (space > 0 && weight >= 1) {
        articles.push('camara');
        space -= 1;
        weight -= 1;
    }

    if (space > 0 && weight >= 1) {
        if (weather === 'soleado') {
          articles.push('sombrero');
        } else if (weather === 'frío') {
          articles.push('bufanda');
        }
    }
    return articles;
}

const weather = prompt('Enter the weather (lluvia, soleado, frio)');
const space = prompt('Enter the spece: ');
const weight = prompt('Enter the weigth: ');

const articles = functionMain(weather, space, weight);
alert(`Articles: ${articles}`);
