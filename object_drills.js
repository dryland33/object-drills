'use strict';

/*
let whatever = {
  foo: 1,
  bar: 2,
  fum: 3,
  quux: 4,
  spam: 5
};

function loopOver(object){
  for (const key in object) {
    const element = object[key];
  }
  return element;
}

console.log(loopOver(whatever));

Create 3-5 objects, each with a name and a jobTitle. Use people you know, or characters from fiction, or your own inventions.
Store these objects in an array.
Iterate over the array and use console.log to show each person's job title and name.


let people = [
  {
    name: 'n1',
    jobtitle: 'j1'
  },
  {
    name: 'n2',
    jobtitle: 'j2'
  },
  {
    name: 'n3',
    jobtitle: 'j3'
  },
];

function iter(arg){
  for(let i=0; i<arg.length; i++)
    console.log(arg[i]);
  return;
}

iter(people);

A code has been invented which replaces each character in a sentence with a five letter word.
The first letter of each encoded word determines which of the remaining four characters contains the decoded character according to this table:

First letter	Character number
a	2
b	3
c	4
d	5

So for example, the encoded word 'cycle' would be decoded to the character 'l'.
This is because the first letter is a 'c', so you look for the fourth character, which is 'l'.

If the first letter of the encoded word isn't 'a', 'b', 'c', or 'd' (for example 'mouse') this should be decoded to a space.

Write a function called decode which takes an encoded word as an argument, and returns the correct decoded character.
Use an object as your cipher.
This means, instead of doing some kind of condition check like if (char === 'a'), you should use
an object's key-value pair structure as the code translator.

Additionally, create a decodeWords function that utilizes your decode function to accept a single string of words,
and then return the fully decoded message as a string.


let ciper = {
  a: 2,
  b: 3,
  c: 4,
  d: 5
};

function decode(word){
    if(ciper[word[0]].value) {
    let character = ciper[word[0]].value;
    return character;
    } else {
        return ' ';
    }
}

function decodeWords(words){
    for(let i=0; i<words.length; i++)
    {
        decode(words[i]);
    }
}

const HEROES = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' },
];

*/

const Database = {
  store: {
    heroes: [
      { id: 1, name: 'Captain America', squad: 'Avengers' },
      { id: 2, name: 'Iron Man', squad: 'Avengers' },
      { id: 3, name: 'Spiderman', squad: 'Avengers' },
      { id: 4, name: 'Superman', squad: 'Justice League' },
      { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
      { id: 6, name: 'Aquaman', squad: 'Justice League' },
      { id: 7, name: 'Hulk', squad: 'Avengers' },
    ]
  },

  findOne: function (query) {
    let str1 = '', str2 = '';
    let matchFound = false;
    let queryLength = Object.keys(query).length;
    let numFound = 0;
    for (let i = 0; i < this.store.heroes.length; i++) {
      numFound = 0;
      for (const property in this.store.heroes[i]) {
        str1 = `${property}: ${this.store.heroes[i][property]}`;
        for (const prop in query) {
          str2 = `${prop}: ${query[prop]}`;
          matchFound = false;
          if (str1 === str2) {
            matchFound = true;
            numFound++;
            break;
          }
        }
        if (matchFound && numFound === queryLength) break;
      }
      if (matchFound && numFound === queryLength) return this.store.heroes[i];
    }
    return null;
  }
};

console.log(Database.findOne({ id: 1 }));
//=> { id: 1, name: 'Captain America', squad: 'Avengers' }

console.log(Database.findOne({ id: 10 }));
//=> null

console.log(Database.findOne({ id: 2, name: 'Aquaman' }));
//=> null

console.log(Database.findOne({ id: 5, squad: 'Justice League' }));
//=> { id: 5, name: 'Wonder Woman', squad: 'Justice League' }

console.log(Database.findOne({ squad: 'Justice League' }));
//=> { id: 4, name: 'Superman', squad: 'Justice League' }