/* global prompt:true */
'use strict';

var prompt = require('sync-prompt').prompt;

var dogs = [], cats = [], birds = [], people = [];
var name, age, isGoodDog, isEvil, canTalk, animal;

var person1 = {name:'bob', age:10, pets: []};
var person2 = {name:'sam', age:5, pets: []};
var person3 = {name:'jill', age:7, pets: []};

people.push(person1, person2, person3);

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

option = prompt('\n(b)ob, (s)am, (j)ill, or (q)uit? ');
while(option !== 'q'){
  for(var j = 0; j < people.length; j++){
    if(option === people[j].name[0]){
      var client = people[j];
      break;
    }
  }

  console.log('Client:', client);
  var adoptArray;
  var choice = prompt('What type of pet? (d)og, (c)at, or (b)ird ');
  switch(choice){
    case 'd':
      console.log('Dogs:', dogs);
      adoptArray = dogs;
      break;
    case 'c':
      console.log('Cats:', cats);
      adoptArray = cats;
      break;
    case 'b':
      console.log('Birds:', birds);
      adoptArray = birds;
  }

  var pick = prompt('What is the name of the animal you want? ');
  for(var i = 0; i < adoptArray.length; i++){
    if(pick === adoptArray[i].name){
      var newPet = adoptArray[i];
      var index = i;
      break;
    }
  }

  console.log('Animal:', newPet);

  adoptArray.splice(index, 1);
  client.pets.push(newPet);

  console.log('After adoption', client);
  console.log('Animals', adoptArray);

  option = prompt('(b)ob, (s)am, (j)ill, or (q)uit? ');
}

console.log('Dogs:', dogs);
console.log('Cats:', cats);
console.log('Birds:', birds);


