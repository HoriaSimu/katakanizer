const convertToKana = (string, kanaSet) => {
  let output = [];

  string.forEach( syllable => {
    if (kanaSet.hasOwnProperty(syllable)) {
      output.push(kanaSet[syllable]);
    } else {
      output.push("?");
    }
  });

  return output;
};

export default convertToKana;
