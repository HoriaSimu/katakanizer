import ROMAJI from '../data/ROMAJI';

const convertToRomaji = (string) => {
  let processedString = string.toLowerCase();
  let pattern = '';
  let splitString = [];
  let output = [];
  let i = 0;

  function vowelTest(s) {
    return (/^[aeiou]$/i).test(s);
  }

  ROMAJI.forEach( sound => {
    pattern = new RegExp(sound.original, 'g');
    processedString = processedString.replace(pattern, sound.replacement);
  });

  splitString = processedString.split('');

  while (i < splitString.length) {
    if (vowelTest(splitString[i]) || splitString[i]=== ' ') {
      output.push(splitString[i]);
      i++;
    }
    else {
      if (vowelTest(splitString[i+1])) {
        output.push(splitString[i]+splitString[i+1]);
        i+=2;
      }
      else if (splitString[i]==='n') {
        output.push(splitString[i]);
        i++;
      }
      else {
        output.push(splitString[i]+'u');
        i++;
      }
    }
  }

  return output;
}

export default convertToRomaji;
