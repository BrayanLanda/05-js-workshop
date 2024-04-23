'use strict'

const falsey = [false, 0, -0, 0n, "", null, undefined, NaN];
const truthy = [true, 1, -1, 1n, "Hello", [], {}, Symbol(), function() {}, new Date()];

alert('0 is Not and 1 is Yes');
alert('In weather is ')
const energy = Number(prompt('How are you feeling today? (0-1): '));
const weather = prompt('What is the weather ? ');
const work = Number(prompt('Do you have a lot of work ? (0-1): '));

if(!energy && !weather && !work){
    alert('You have no energy and the weather is bad, take a break');
}else if(!weather && work && energy){
    alert('Work on your projects');
}else if (energy && !work && weather){
    alert('day free');
}