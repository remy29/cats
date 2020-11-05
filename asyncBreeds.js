const fs = require('fs');

const breedDetailsFromFile = function(breed, callback) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    if (!error) {
      callback(data);
    } else {
      callback();
    }
  });
};

const printOutCatBreed = breed => {
  if (breed === undefined) {
    return undefined;
  }
  console.log('Return Value: ', breed) //
};


const bombay = breedDetailsFromFile('Bombay', printOutCatBreed);
console.log('Return Value: ', bombay); 
module.exports = breedDetailsFromFile;