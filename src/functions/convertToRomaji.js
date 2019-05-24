import ROMAJI from '../data/ROMAJI';

const convertToRomaji = (string) => {
  let processedString = string.toLowerCase();
  let pattern = '';
  let splitString = [];
  let output = [];
  let i = 0;
  let specialVowels = ['ia','iu','io','ua','uo'];
  let triplets = ['chi','tsu','kya','kyu','kyo','sha','shu','sho','cha','chu',
                  'cho','nya','nyu','nyo','hya','hyu','hyo','mya','myu','myo',
                  'rya','ryu','ryo','gya','gyo','bya','byu','byo','pya','pyu',
                  'pyo','shi', 'che', 'she', 'tsa', 'tsi','tse','tso'];


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
      if (specialVowels.includes(splitString[i]+splitString[i+1])) {
        if (vowelTest(splitString[i-1])) {
          if (splitString[i]==='i') {
            output.push('y'+splitString[i+1]);
            i+=2;
          } else {
            output.push('w'+splitString[i+1]);
            i+=2;
          }
        } else {
          output.push(splitString[i]);
          i++;
        }
      } else {
        output.push(splitString[i]);
        i++;
      }
    }
    else {
      if (triplets.includes(splitString[i]+splitString[i+1]+splitString[i+2])) {
        output.push(splitString[i]+splitString[i+1]+splitString[i+2]);
        i+=3;
      } else if (vowelTest(splitString[i+1])) {
        output.push(splitString[i]+splitString[i+1]);
        i+=2;
      } else if (splitString[i]==='n') {
          output.push(splitString[i]);
          i++;
        }
        else {
          if (splitString[i]==='c') {
            splitString[i]='k';
          }
          output.push(splitString[i]+'u');
          i++;
        }
    }
  }

  return output;
}

export default convertToRomaji;
