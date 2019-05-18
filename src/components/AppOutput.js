import React from 'react';
import KATAKANA from '../data/KATAKANA';
import HIRAGANA from '../data/HIRAGANA';
import convertToRomaji from '../functions/convertToRomaji';
import convertToKana from '../functions/convertToKana';

class AppOutput extends React.Component {
  render() {
    let outputRomaji = convertToRomaji(this.props.currentText);
    let outputKatakana = convertToKana(outputRomaji, KATAKANA);
    let outputHiragana = convertToKana(outputRomaji, HIRAGANA);

    return (
      <div>
        <div>Katakana: <span>{outputKatakana.join('')}</span></div>
        <div>Hiragana: <span>{outputHiragana.join('')}</span></div>
        <div>Romaji: <span>{outputRomaji.join('')}</span></div>
      </div>
    );
  }
};

export default AppOutput;
