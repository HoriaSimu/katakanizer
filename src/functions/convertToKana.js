const convertToKana = (string, kanaSet) => {
  let output = [];

  string.forEach( syllable => {
    try {
      output.push(kanaSet[syllable]);
    }

    catch(e) {
      output.push("?");
    }
  });

  return output;
};

export default convertToKana;
