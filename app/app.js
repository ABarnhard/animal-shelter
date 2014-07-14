/* global prompt:true */
'use strict';

var prompt = require('sync-prompt').prompt;

var dogs = [], cats = [], birds = [];
var animal;
var name, age, isGoodDog, isEvil, canTalk;

var option = prompt('(d)og, (c)at, (b)ird, or (q)uit? ');
while(option !== 'q'){
  switch(option){
    case 'd':
      name = prompt('What\'s its name? ');
      age = parseInt(prompt('How old? '));
      isGoodDog = prompt('Good dog (y/n)? ') === 'y';
      animal = {name:name, age:age, goodDog:isGoodDog};
      dogs.push(animal);
      break;
    case 'c':
      name = prompt('What\'s its name? ');
      age = parseInt(prompt('How old? '));
      isEvil = prompt('Evil cat (y/n)? ') === 'y';
      animal = {name:name, age:age, evilCat:isEvil};
      cats.push(animal);
      break;
    case 'b':
      name = prompt('What\'s its name? ');
      age = parseInt(prompt('How old? '));
      canTalk = prompt('Can talk (y/n)? ') === 'y';
      animal = {name:name, age:age, canTalk:canTalk};
      birds.push(animal);
      break;
  }

  option = prompt('(d)og, (c)at, (b)ird, or (q)uit? ');
}

console.log(dogs);
console.log(cats);
console.log(birds);

